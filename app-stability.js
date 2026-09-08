(()=>{
function plantsList(){try{return typeof plants!=='undefined'?plants:(window.plants||[])}catch(_){return window.plants||[]}}
function currentPlantById(id){return plantsList().find(p=>String(p.id)===String(id))||null}
function localDate(v){const d=new Date(v);if(Number.isNaN(d.getTime()))return'';return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function today(){return localDate(new Date())}
function notify(msg){if(typeof toast==='function')toast(msg)}

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

document.addEventListener('click',e=>{
  const log=e.target.closest('#plantProfile [data-log]');
  if(log){const p=currentPlantById(log.dataset.id);const type=log.dataset.log;if(p&&(p.history||[]).some(h=>h.type===type&&localDate(h.date)===today())){e.preventDefault();e.stopImmediatePropagation();notify(`${type} is already recorded today for ${p.name}`);return}}
  const water=e.target.closest('[data-water]');
  if(water){const p=currentPlantById(water.dataset.water);if(p&&(p.history||[]).some(h=>h.type==='Watered'&&localDate(h.date)===today())){e.preventDefault();e.stopImmediatePropagation();notify(`Watering is already recorded today for ${p.name}`);return}}
},true);

document.addEventListener('keydown',e=>{
  const card=e.target.closest('.plant-card[data-profile]');if(!card)return;
  if(e.key!=='Enter'&&e.key!==' ')return;e.preventDefault();
  if(typeof window.openModal==='function')window.openModal(card.dataset.profile);else if(typeof openModal==='function')openModal(card.dataset.profile);
});
})();