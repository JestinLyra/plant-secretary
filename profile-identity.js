(()=>{
function plantsList(){try{return typeof plants!=='undefined'?plants:(window.plants||[])}catch(_){return window.plants||[]}}
function text(value,fallback='—'){const s=String(value??'').trim();return s||fallback}
function addField(host,label,value,italic=false){const item=document.createElement('div');item.className='profile-id-field';const l=document.createElement('span');l.className='profile-id-label';l.textContent=label;const v=document.createElement(italic?'em':'span');v.className='profile-id-value';v.textContent=text(value);item.append(l,v);host.appendChild(item)}
function notify(msg){if(typeof toast==='function')toast(msg)}
function editFields(id){const p=plantsList().find(x=>String(x.id)===String(id));if(!p)return;closeEditMenu();const name=prompt('Plant / display name',p.name||'');if(name===null)return;const botanical=prompt('Botanical name',p.botanical||'');if(botanical===null)return;p.name=name.trim()||p.name;p.botanical=botanical.trim();delete p.common;delete p.habit;if(typeof save==='function')save();if(typeof renderAll==='function')renderAll();if(typeof window.openModal==='function')window.openModal(id)}
function getPhotoBlob(id){if(typeof db!=='function')return Promise.resolve(null);return db().then(d=>new Promise((resolve,reject)=>{const r=d.transaction('photos','readonly').objectStore('photos').get(id);r.onsuccess=()=>{const v=r.result||null;d.close();resolve(v)};r.onerror=()=>{d.close();reject(r.error)}})).catch(()=>null)}
function deletePhotoBlob(id){if(typeof db!=='function')return Promise.resolve();return db().then(d=>new Promise((resolve,reject)=>{const tx=d.transaction('photos','readwrite');tx.objectStore('photos').delete(id);tx.oncomplete=()=>{d.close();resolve()};tx.onerror=()=>{d.close();reject(tx.error)};tx.onabort=()=>{d.close();reject(tx.error||new Error('Delete aborted'))}})).catch(()=>{})}
function restorePhotoBlob(id,blob){if(!blob||typeof storePhoto!=='function')return Promise.resolve();return Promise.resolve(storePhoto(id,blob)).catch(()=>{})}

let editMenu=null,undoBar=null,pendingDelete=null,undoTimer=null;

function closeEditMenu(){if(editMenu){editMenu.remove();editMenu=null}}
function openEditMenu(id){
  closeEditMenu();
  const p=plantsList().find(x=>String(x.id)===String(id));if(!p)return;
  const overlay=document.createElement('div');overlay.className='plant-edit-menu-overlay';
  const sheet=document.createElement('div');sheet.className='plant-edit-menu-sheet';
  const title=document.createElement('h3');title.textContent='Edit plant';
  const hint=document.createElement('p');hint.textContent=p.name||'Plant';
  const editBtn=document.createElement('button');editBtn.type='button';editBtn.className='plant-edit-action';editBtn.textContent='Edit plant details';editBtn.addEventListener('click',()=>editFields(id));
  const deleteBtn=document.createElement('button');deleteBtn.type='button';deleteBtn.className='plant-edit-action plant-edit-delete';deleteBtn.textContent='Delete plant';deleteBtn.addEventListener('click',()=>requestDeletePlant(id));
  const cancel=document.createElement('button');cancel.type='button';cancel.className='plant-edit-cancel';cancel.textContent='Cancel';cancel.addEventListener('click',closeEditMenu);
  sheet.append(title,hint,editBtn,deleteBtn,cancel);overlay.appendChild(sheet);
  overlay.addEventListener('click',e=>{if(e.target===overlay)closeEditMenu()});
  document.body.appendChild(overlay);editMenu=overlay;
}
function clearPhotoView(id){try{const key='plant-secretary-photo-view-v1';const views=JSON.parse(localStorage.getItem(key)||'{}');if(Object.prototype.hasOwnProperty.call(views,id)){delete views[id];localStorage.setItem(key,JSON.stringify(views))}}catch(_){}}
function finalizePendingDelete(){
  if(!pendingDelete)return;
  clearPhotoView(pendingDelete.plant.id);
  pendingDelete=null;
  if(undoTimer){clearTimeout(undoTimer);undoTimer=null}
  hideUndoBar();
}
function hideUndoBar(){if(undoBar){undoBar.remove();undoBar=null}}
function showUndoBar(name){
  hideUndoBar();
  const bar=document.createElement('div');bar.className='plant-delete-undo-bar';bar.setAttribute('role','status');
  const msg=document.createElement('span');msg.className='plant-delete-undo-text';msg.textContent=`${name} deleted`;
  const btn=document.createElement('button');btn.type='button';btn.className='plant-delete-undo-btn';btn.setAttribute('aria-label',`Undo deletion of ${name}`);
  const img=document.createElement('img');img.src='assets/undo-plant.webp';img.alt='';btn.appendChild(img);btn.addEventListener('click',undoDeletePlant);
  bar.append(msg,btn);document.body.appendChild(bar);undoBar=bar;
}
async function requestDeletePlant(id){
  const list=plantsList();const index=list.findIndex(x=>String(x.id)===String(id));if(index<0)return;
  const p=list[index];
  if(!confirm(`Delete “${p.name}”? This will remove the plant and its saved photo from Plant Secretary.`))return;
  closeEditMenu();
  finalizePendingDelete();
  const photo=await getPhotoBlob(p.id);
  list.splice(index,1);
  if(typeof save==='function')save();
  await deletePhotoBlob(p.id);
  pendingDelete={plant:p,index,photo};
  if(typeof closeModals==='function')closeModals();else document.getElementById('plantModal')?.classList.remove('open');
  if(typeof renderAll==='function')renderAll();
  if(typeof nav==='function')nav('plants');
  showUndoBar(p.name);
  undoTimer=setTimeout(finalizePendingDelete,8000);
}
async function undoDeletePlant(){
  if(!pendingDelete)return;
  const {plant,index,photo}=pendingDelete;
  if(undoTimer){clearTimeout(undoTimer);undoTimer=null}
  const list=plantsList();
  if(!list.some(x=>String(x.id)===String(plant.id)))list.splice(Math.min(index,list.length),0,plant);
  await restorePhotoBlob(plant.id,photo);
  pendingDelete=null;hideUndoBar();
  if(typeof save==='function')save();
  if(typeof renderAll==='function')renderAll();
  if(typeof nav==='function')nav('plants');
  notify(`${plant.name} restored`);
}
function decorate(id){
  const p=plantsList().find(x=>String(x.id)===String(id));const profile=document.getElementById('plantProfile');const hero=document.getElementById(`hero-${id}`);if(!p||!profile||!hero)return;
  profile.querySelector('.profile-identity-row')?.remove();
  const detail=typeof window.PLANT_DISPLAY_DETAIL==='function'?window.PLANT_DISPLAY_DETAIL(p):{common:'Common name not available for this botanical name',habit:'Growing habit not available for this botanical name'};
  const row=document.createElement('section');row.className='profile-identity-row';row.setAttribute('aria-label','Plant identity');hero.parentNode.insertBefore(row,hero);
  const photoWrap=document.createElement('div');photoWrap.className='profile-photo-wrap';photoWrap.appendChild(hero);
  const del=document.createElement('button');del.type='button';del.className='profile-photo-delete';del.dataset.deletePhoto=id;del.textContent='Delete photo';del.hidden=true;photoWrap.appendChild(del);row.appendChild(photoWrap);
  const info=document.createElement('div');info.className='profile-identity-info';const top=document.createElement('div');top.className='profile-identity-top';
  const common=document.createElement('div');common.className='profile-common-name';common.textContent=text(detail.common,'Common name not available for this botanical name');
  const edit=document.createElement('button');edit.type='button';edit.className='profile-identity-edit';edit.innerHTML='<img src="assets/edit-control.svg" alt="">';edit.setAttribute('aria-label','Edit plant');edit.addEventListener('click',()=>openEditMenu(id));
  top.append(common,edit);info.appendChild(top);addField(info,'Botanical name',p.botanical||'',true);addField(info,'Growing habit',detail.habit);row.appendChild(info);
  const actions=row.nextElementSibling;const legacyName=actions?.nextElementSibling;const legacyMeta=legacyName?.nextElementSibling;if(legacyName?.tagName==='H2')legacyName.classList.add('profile-identity-legacy-hidden');if(legacyMeta?.classList?.contains('hint'))legacyMeta.classList.add('profile-identity-legacy-hidden');
  requestAnimationFrame(()=>window.PLANT_PHOTO_TOOLS?.syncDeleteButtons(row))
}
const style=document.createElement('style');style.textContent=`
#plantProfile .profile-identity-row{display:grid;grid-template-columns:120px minmax(0,1fr);gap:14px;align-items:start;margin:4px 0 12px;min-width:0}
#plantProfile .profile-photo-wrap{width:120px;min-width:120px}
#plantProfile .profile-identity-row .hero-photo{width:120px!important;height:120px!important;aspect-ratio:1/1!important;border-radius:16px!important;flex:0 0 120px!important;font-size:48px!important;position:relative!important;overflow:hidden!important}
#plantProfile .profile-photo-delete{display:block;width:100%;margin-top:6px;border:0;background:transparent;color:#8a5a5a;font:inherit;font-size:10px;font-weight:700;padding:4px 0}
#plantProfile .profile-photo-delete[hidden]{display:none!important}
#plantProfile .profile-identity-info{min-width:0;padding-top:1px}
#plantProfile .profile-identity-top{display:flex;align-items:flex-start;gap:8px;margin-bottom:4px}
#plantProfile .profile-common-name{flex:1 1 auto;min-width:0;font-size:18px;line-height:1.15;color:var(--ink);font-weight:500;overflow-wrap:anywhere}
#plantProfile .profile-identity-edit{border:0;background:transparent;padding:0;width:34px;height:34px;display:grid;place-items:center;flex:0 0 34px;cursor:pointer}
#plantProfile .profile-identity-edit img{display:block;width:32px;height:32px;object-fit:contain}
#plantProfile .profile-identity-edit:active{transform:scale(.96)}
#plantProfile .profile-id-field{margin-top:7px;min-width:0}
#plantProfile .profile-id-label{display:block;font-size:10.5px;font-weight:750;line-height:1.15;letter-spacing:.02em;color:#6d7c76}
#plantProfile .profile-id-value{display:block;margin-top:2px;font-size:13px;line-height:1.22;color:var(--ink);overflow-wrap:anywhere}
#plantProfile em.profile-id-value{font-family:Georgia,serif}
#plantProfile .profile-identity-legacy-hidden{display:none!important}
.plant-edit-menu-overlay{position:fixed;inset:0;z-index:120;background:rgba(17,42,35,.38);display:flex;align-items:flex-end;justify-content:center}
.plant-edit-menu-sheet{width:min(760px,100%);background:#fff;border-radius:26px 26px 0 0;padding:18px 18px calc(22px + env(safe-area-inset-bottom));box-shadow:0 -10px 30px rgba(0,0,0,.16)}
.plant-edit-menu-sheet h3{font-family:Georgia,serif;font-size:27px;margin:0}
.plant-edit-menu-sheet p{margin:4px 0 14px;color:#68758f}
.plant-edit-action,.plant-edit-cancel{width:100%;border:1px solid #d9e5e1;background:#fff;color:var(--ink);border-radius:15px;padding:13px 16px;font:inherit;font-weight:750;text-align:left;margin-top:8px}
.plant-edit-delete{color:#b43f4d;border-color:#efd2d6;background:#fff8f8}
.plant-edit-cancel{text-align:center;background:#f3f7f5;margin-top:12px}
.plant-delete-undo-bar{position:fixed;z-index:110;left:50%;bottom:calc(var(--navh) + env(safe-area-inset-bottom) + 12px);transform:translateX(-50%);width:min(430px,calc(100% - 24px));min-height:64px;background:rgba(255,255,255,.98);border:1px solid #dce8e4;border-radius:18px;box-shadow:0 10px 28px rgba(17,63,53,.16);display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 9px 7px 16px}
.plant-delete-undo-text{font-size:14px;font-weight:700;color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.plant-delete-undo-btn{border:0;background:transparent;padding:0;width:70px;height:50px;display:grid;place-items:center;flex:0 0 70px;cursor:pointer}
.plant-delete-undo-btn img{display:block;width:68px;height:48px;object-fit:contain}
.plant-delete-undo-btn:active{transform:scale(.96)}
@media(max-width:350px){
#plantProfile .profile-identity-row{grid-template-columns:104px minmax(0,1fr);gap:10px}
#plantProfile .profile-photo-wrap{width:104px;min-width:104px}
#plantProfile .profile-identity-row .hero-photo{width:104px!important;height:104px!important;flex-basis:104px!important;border-radius:14px!important}
#plantProfile .profile-common-name{font-size:16px}
#plantProfile .profile-id-field{margin-top:5px}
#plantProfile .profile-id-label{font-size:9.5px}
#plantProfile .profile-id-value{font-size:11.5px}
#plantProfile .profile-identity-edit{width:30px;height:30px;flex-basis:30px}
#plantProfile .profile-identity-edit img{width:28px;height:28px}
}`;document.head.appendChild(style);
const previousOpen=window.openModal;if(typeof previousOpen==='function')window.openModal=function(id){const result=previousOpen.apply(this,arguments);decorate(id);return result};
window.PLANT_PROFILE_IDENTITY={apply:decorate,edit:openEditMenu,deletePlant:requestDeletePlant,undoDelete:undoDeletePlant};
})();