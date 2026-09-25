(()=>{
function plantsList(){try{return typeof plants!=='undefined'?plants:(window.plants||[])}catch(_){return window.plants||[]}}
function currentPlantById(id){return plantsList().find(p=>String(p.id)===String(id))||null}
function currentProfilePlant(){const name=document.querySelector('#modalTitle')?.textContent?.trim();return plantsList().find(p=>p.name===name)||null}
function localDate(v){const d=new Date(v);if(Number.isNaN(d.getTime()))return'';return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function today(){return localDate(new Date())}
function notify(msg){if(typeof toast==='function')toast(msg)}
function syncLastWatered(p){const latest=(p.history||[]).filter(h=>h.type==='Watered'&&h.date).sort((a,b)=>new Date(b.date)-new Date(a.date))[0];p.lastWatered=latest?.date||null}
function careRecordForOpenEditor(p){
  const date=document.getElementById('careEditDate')?.value||'';
  if(!p||!date)return null;
  const other=document.getElementById('careEditOtherDescription');
  const typeSelect=document.getElementById('careEditType');
  const disabledType=[...document.querySelectorAll('#careEditForm input[disabled]')].find(x=>x.value==='Watered');
  if(disabledType)return (p.history||[]).find(h=>h.type==='Watered'&&localDate(h.date)===date)||null;
  if(other)return (p.history||[]).find(h=>h.careKind==='Other'&&String(h.type||'').trim().toLowerCase()===other.value.trim().toLowerCase()&&localDate(h.date)===date)||null;
  const labels={Pruning:'Pruned',Pinching:'Pinched',Repotting:'Repotted',Feeding:'Fed'};
  const label=labels[typeSelect?.value];
  return (p.history||[]).find(h=>h.type===label&&localDate(h.date)===date)||null;
}
function refreshProfileAfterDelete(p){
  syncLastWatered(p);
  if(typeof save==='function')save();
  document.getElementById('careHistoryBacklogModal')?.classList.remove('open');
  if(typeof renderAll==='function')renderAll();
  requestAnimationFrame(()=>{
    if(typeof window.openModal==='function')window.openModal(p.id);
    else if(typeof openModal==='function')openModal(p.id);
  });
  notify('Care history record deleted');
}
async function deleteProfilePhoto(id){
  if(!id)return;
  const p=currentPlantById(id);
  if(!confirm(`Delete the uploaded photo${p?.name?` for ${p.name}`:''}?`))return;
  try{
    if(typeof db!=='function')throw new Error('Photo database unavailable');
    const d=await db();
    await new Promise((resolve,reject)=>{
      const tx=d.transaction('photos','readwrite');
      tx.objectStore('photos').delete(id);
      tx.oncomplete=resolve;
      tx.onerror=()=>reject(tx.error);
      tx.onabort=()=>reject(tx.error||new Error('Delete aborted'));
    });
    const remaining=await new Promise((resolve,reject)=>{
      const r=d.transaction('photos','readonly').objectStore('photos').get(id);
      r.onsuccess=()=>resolve(r.result);
      r.onerror=()=>reject(r.error);
    });
    d.close();
    if(remaining)throw new Error('Photo still exists after delete');
    try{
      const key='plant-secretary-photo-view-v1';
      const views=JSON.parse(localStorage.getItem(key)||'{}');
      if(Object.prototype.hasOwnProperty.call(views,id)){delete views[id];localStorage.setItem(key,JSON.stringify(views));}
    }catch(_){ }
    if(typeof renderCollection==='function')renderCollection();
    const hero=document.getElementById(`hero-${id}`);
    if(hero)hero.innerHTML='🌿';
    document.querySelectorAll(`[data-delete-photo="${CSS.escape(String(id))}"]`).forEach(b=>b.hidden=true);
    document.getElementById('photoManageModal')?.classList.remove('open');
    notify('Photo deleted');
  }catch(err){
    console.warn('Profile photo delete failed',err);
    notify('Photo could not be deleted');
  }
}

const style=document.createElement('style');
style.textContent=`
.modal{position:fixed!important;inset:0!important;width:100vw!important;height:100dvh!important;max-width:none!important;transform:none!important;overflow:hidden!important;pointer-events:none!important}
.modal.open{display:flex!important;pointer-events:auto!important}
.modal>.sheet{width:min(760px,100vw)!important;max-width:100vw!important;min-width:0!important;margin:0 auto!important;transform:none!important;overscroll-behavior:contain!important;touch-action:pan-y!important}
body.modal-open{overflow:hidden!important;overscroll-behavior:none!important;touch-action:none!important}
body.modal-open .modal.open>.sheet{touch-action:pan-y!important}
`;
document.head.appendChild(style);

let lastOpenId=null,lastOpenAt=0;
const rawOpen=window.openModal;
if(typeof rawOpen==='function'){
  window.openModal=function(id){
    const now=performance.now();
    if(String(id)===String(lastOpenId)&&now-lastOpenAt<350)return;
    lastOpenId=id;lastOpenAt=now;
    const result=rawOpen.apply(this,arguments);
    const modal=document.getElementById('plantModal');
    if(modal){modal.style.left='0';modal.style.right='0';modal.style.top='0';modal.style.bottom='0';modal.style.width='100vw';modal.style.height='100dvh';}
    document.body.classList.add('modal-open');
    return result;
  };
}

function syncModalState(){
  const anyOpen=document.querySelector('.modal.open');
  document.body.classList.toggle('modal-open',!!anyOpen);
}
const mo=new MutationObserver(syncModalState);
mo.observe(document.body,{subtree:true,attributes:true,attributeFilter:['class']});

window.addEventListener('click',e=>{
  const target=e.target instanceof Element?e.target:null;
  const water=target?.closest?.('[data-water]');
  if(water){
    const p=currentPlantById(water.dataset.water);
    if(p&&(p.history||[]).some(h=>h.type==='Watered'&&localDate(h.date)===today())){e.preventDefault();e.stopImmediatePropagation();notify(`Watering is already recorded today for ${p.name}`);return}
    if(typeof window.water==='function')window.water(water.dataset.water);else if(typeof waterPlant==='function')waterPlant(water.dataset.water);
    else if(typeof globalThis.water==='function')globalThis.water(water.dataset.water);
    return;
  }
  const del=target?.closest?.('[data-delete-photo]');
  if(!del)return;
  e.preventDefault();
  e.stopImmediatePropagation();
  deleteProfilePhoto(del.dataset.deletePhoto);
},true);

document.addEventListener('click',e=>{
  const target=e.target instanceof Element?e.target:null;
  if(!target)return;
  const deleteCare=target.closest('#careDeleteRecord');
  if(deleteCare){
    e.preventDefault();
    e.stopImmediatePropagation();
    const p=currentProfilePlant();
    const record=careRecordForOpenEditor(p);
    if(!p||!record){notify('Care history record could not be found');return}
    if(!confirm('Delete this care history record?'))return;
    const index=(p.history||[]).indexOf(record);
    if(index<0){notify('Care history record could not be found');return}
    p.history.splice(index,1);
    p.history.sort((a,b)=>new Date(b.date)-new Date(a.date));
    refreshProfileAfterDelete(p);
    return;
  }
  const log=target.closest('#plantProfile [data-log]');
  if(log){const p=currentPlantById(log.dataset.id);const type=log.dataset.log;if(p&&(p.history||[]).some(h=>h.type===type&&localDate(h.date)===today())){e.preventDefault();e.stopImmediatePropagation();notify(`${type} is already recorded today for ${p.name}`);return}}
},true);

document.addEventListener('keydown',e=>{
  const target=e.target instanceof Element?e.target:null;
  const card=target?.closest?.('.plant-card[data-profile]');if(!card)return;
  if(e.key!=='Enter'&&e.key!==' ')return;e.preventDefault();
  if(typeof window.openModal==='function')window.openModal(card.dataset.profile);else if(typeof openModal==='function')openModal(card.dataset.profile);
});
})();