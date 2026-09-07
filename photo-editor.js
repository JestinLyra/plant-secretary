(()=>{
const KEY='plant-secretary-photo-view-v1';
const $=s=>document.querySelector(s);
let activeObjectUrl=null;
function views(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return{}}}
function saveViews(v){localStorage.setItem(KEY,JSON.stringify(v))}
function clean(v){const s=Math.max(1,Math.min(2.5,Number(v?.scale)||1));let x=Number(v?.x)||0,y=Number(v?.y)||0;if(Math.abs(x)>1)x/=60;if(Math.abs(y)>1)y/=60;return{x:Math.max(-1,Math.min(1,x)),y:Math.max(-1,Math.min(1,y)),scale:s}}
function state(id){return clean(views()[id]||{x:0,y:0,scale:1})}
function revokeActive(){if(activeObjectUrl){URL.revokeObjectURL(activeObjectUrl);activeObjectUrl=null}}
function metrics(img,box,v){const r=box.getBoundingClientRect();const W=Math.max(1,r.width),H=Math.max(1,r.height);const iw=Math.max(1,img.naturalWidth||W),ih=Math.max(1,img.naturalHeight||H);const cover=Math.max(W/iw,H/ih);const baseW=iw*cover,baseH=ih*cover;const drawW=baseW*v.scale,drawH=baseH*v.scale;return{W,H,drawW,drawH,maxX:Math.max(0,(drawW-W)/2),maxY:Math.max(0,(drawH-H)/2)}}
function place(img,box,v){if(!img||!box||!img.naturalWidth)return;v=clean(v);const m=metrics(img,box,v);img.style.position='absolute';img.style.left='50%';img.style.top='50%';img.style.maxWidth='none';img.style.maxHeight='none';img.style.width=`${m.drawW}px`;img.style.height=`${m.drawH}px`;img.style.objectFit='fill';img.style.transformOrigin='center center';img.style.transform=`translate(-50%,-50%) translate3d(${v.x*m.maxX}px,${v.y*m.maxY}px,0)`;img.style.willChange='width,height,transform'}
function applyTo(img,id){const box=img?.parentElement;if(!img||!box)return;const run=()=>place(img,box,state(id));if(img.complete&&img.naturalWidth)run();else img.addEventListener('load',run,{once:true})}
function applyAll(){document.querySelectorAll('[id^="photo-"] img').forEach(img=>applyTo(img,img.parentElement.id.replace('photo-','')));document.querySelectorAll('[id^="hero-"] img').forEach(img=>applyTo(img,img.parentElement.id.replace('hero-','')))}
async function getPhotoFor(id){try{return await getPhoto(id)}catch(e){return null}}
function closeEditor(){const m=$('#photoAdjustModal');if(m)m.classList.remove('open');revokeActive()}
function ensureModal(){let m=$('#photoAdjustModal');if(m)return m;m=document.createElement('div');m.id='photoAdjustModal';m.className='modal';m.innerHTML=`<div class="sheet"><div class="sheethead"><h3>Adjust Photo</h3><button class="close" id="photoAdjustClose">×</button></div><p class="hint">Drag to reposition. Resize with the slider. The frame always stays completely filled, and the original uploaded photo is never changed.</p><div id="photoAdjustStage" style="position:relative;width:100%;aspect-ratio:4/3;border-radius:18px;overflow:hidden;background:linear-gradient(145deg,#e8f6ef,#eee8fb);touch-action:none"><img id="photoAdjustImg" alt="Plant photo" style="position:absolute;left:50%;top:50%;max-width:none;max-height:none;user-select:none;-webkit-user-drag:none"></div><label style="display:block;margin-top:14px;font-size:13px;color:#59677c">Resize<input id="photoZoom" type="range" min="1" max="2.5" step="0.01" value="1" style="width:100%;margin-top:8px"></label><div class="actions"><button class="secondary" id="photoReset">Reset</button><button class="primary" id="photoSave">Save view</button></div>`;document.body.appendChild(m);m.querySelector('#photoAdjustClose').onclick=closeEditor;m.addEventListener('click',e=>{if(e.target===m)closeEditor()});return m}
async function openEditor(id){const blob=await getPhotoFor(id);if(!blob){if(typeof toast==='function')toast('Upload a photo first');return}revokeActive();const m=ensureModal(),img=$('#photoAdjustImg'),zoom=$('#photoZoom'),stage=$('#photoAdjustStage');let v=state(id);activeObjectUrl=URL.createObjectURL(blob);img.src=activeObjectUrl;
function draw(){v=clean(v);place(img,stage,v);zoom.value=String(v.scale)}
img.onload=draw;
let dragging=false,lastX=0,lastY=0;
stage.onpointerdown=e=>{if(!img.naturalWidth)return;dragging=true;lastX=e.clientX;lastY=e.clientY;stage.setPointerCapture?.(e.pointerId)};
stage.onpointermove=e=>{if(!dragging)return;const mtr=metrics(img,stage,v),dx=e.clientX-lastX,dy=e.clientY-lastY;if(mtr.maxX>0)v.x+=dx/mtr.maxX;if(mtr.maxY>0)v.y+=dy/mtr.maxY;v.x=Math.max(-1,Math.min(1,v.x));v.y=Math.max(-1,Math.min(1,v.y));lastX=e.clientX;lastY=e.clientY;draw()};
stage.onpointerup=stage.onpointercancel=e=>{dragging=false;try{stage.releasePointerCapture?.(e.pointerId)}catch(_){}};
zoom.oninput=()=>{v.scale=Number(zoom.value);v=clean(v);draw()};
$('#photoReset').onclick=()=>{v={x:0,y:0,scale:1};draw()};
$('#photoSave').onclick=()=>{const all=views();all[id]=clean(v);saveViews(all);closeEditor();if(typeof renderCollection==='function')renderCollection();setTimeout(applyAll,80);if($('#plantModal')?.classList.contains('open')&&typeof openModal==='function'){openModal(id);setTimeout(applyAll,80)}if(typeof toast==='function')toast('Photo position and size saved')};
m.classList.add('open')}
document.addEventListener('click',e=>{const box=e.target.closest('.photo,.hero-photo');if(!box)return;const id=box.id?.replace(/^photo-|^hero-/,'');if(!id)return;e.preventDefault();e.stopPropagation();openEditor(id)},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#photoAdjustModal')?.classList.contains('open'))closeEditor()});
const obs=new MutationObserver(()=>requestAnimationFrame(applyAll));obs.observe(document.body,{childList:true,subtree:true});window.addEventListener('resize',()=>requestAnimationFrame(applyAll));setTimeout(applyAll,0);
})();