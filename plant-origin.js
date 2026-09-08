(()=>{
const $=s=>document.querySelector(s);
const ORIGINS=['Purchased','Gifted','Propagated','Other'];
const PROP_METHODS=['Cutting','Division','Other'];
const ROOTING=['Water','Potting mix','Perlite','Sphagnum','Other'];
function plantsList(){try{return typeof plants!=='undefined'?plants:(window.plants||[])}catch(_){return window.plants||[]}}
function currentPlant(){const name=$('#modalTitle')?.textContent?.trim();return plantsList().find(p=>p.name===name)||null}
function localToday(){const d=new Date(),y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`}
function dateValue(v){if(!v)return'';const d=new Date(v);if(Number.isNaN(d.getTime()))return'';const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`}
function formatDate(v){if(!v)return'';const d=new Date(v);return Number.isNaN(d.getTime())?'':d.toLocaleDateString('en-AU')}
function summary(p){
  if(!p.originType&&!p.originDate)return 'Not set';
  const parts=[];
  if(p.originType==='Propagated'){
    parts.push(`Propagated${p.propagationMethod?` · ${p.propagationMethod}`:''}`);
    if(p.propagationMethod==='Cutting'&&p.rootingMedium)parts.push(`Rooted in ${p.rootingMedium}`);
  }else if(p.originType)parts.push(p.originType);
  if(p.originDate)parts.push(formatDate(p.originDate));
  return parts.join(' · ')||'Not set';
}
function ensureOrigin(){
  const profile=$('#plantProfile'),p=currentPlant();if(!profile||!p)return;
  let row=profile.querySelector('#plantOriginRow');
  if(!row){
    const quick=profile.querySelector('.quick');if(!quick)return;
    row=document.createElement('div');row.id='plantOriginRow';row.className='plant-origin-row';
    row.innerHTML='<div class="plant-origin-copy"><span class="plant-origin-label">Origin</span><span class="plant-origin-value"></span></div><button type="button" class="plant-origin-edit" aria-label="Edit plant origin">Edit</button>';
    quick.parentNode.insertBefore(row,quick);
    row.querySelector('.plant-origin-edit').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openEditor();});
  }
  row.querySelector('.plant-origin-value').textContent=summary(p);
}
function ensureModal(){
  let m=$('#plantOriginModal');if(m)return m;
  m=document.createElement('div');m.id='plantOriginModal';m.className='modal';
  m.innerHTML='<div class="sheet"><div class="sheethead"><h3>Plant Origin</h3><button class="close" id="plantOriginClose">×</button></div><div id="plantOriginBody"></div></div>';
  document.body.appendChild(m);$('#plantOriginClose').onclick=()=>m.classList.remove('open');m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open')});return m;
}
function openEditor(){
  const p=currentPlant();if(!p)return;const m=ensureModal();
  $('#plantOriginBody').innerHTML=`<form id="plantOriginForm" class="formgrid">
    <label>How did this plant start in your collection?<select id="plantOriginType" required>${ORIGINS.map(x=>`<option value="${x}" ${p.originType===x?'selected':''}>${x}</option>`).join('')}</select></label>
    <div id="propagationFields"></div>
    <label id="originDateLabel">Date acquired / started<input id="plantOriginDate" type="date" max="${localToday()}" value="${dateValue(p.originDate)}" required></label>
    <div class="actions"><button type="button" class="secondary" id="plantOriginCancel">Cancel</button><button type="submit" class="primary">Save</button></div>
  </form>`;
  const type=$('#plantOriginType');
  function renderPropagation(){
    const host=$('#propagationFields');
    if(type.value!=='Propagated'){host.innerHTML='';return;}
    host.innerHTML=`<label>Propagation method<select id="plantPropagationMethod">${PROP_METHODS.map(x=>`<option value="${x}" ${p.propagationMethod===x?'selected':''}>${x}</option>`).join('')}</select></label><div id="rootingField"></div>`;
    const method=$('#plantPropagationMethod');
    function renderRooting(){const r=$('#rootingField');if(method.value!=='Cutting'){r.innerHTML='';return;}r.innerHTML=`<label>Rooting medium<select id="plantRootingMedium">${ROOTING.map(x=>`<option value="${x}" ${p.rootingMedium===x?'selected':''}>${x}</option>`).join('')}</select></label>`;}
    method.onchange=renderRooting;renderRooting();
  }
  type.onchange=renderPropagation;renderPropagation();
  $('#plantOriginCancel').onclick=()=>m.classList.remove('open');
  $('#plantOriginForm').onsubmit=e=>{
    e.preventDefault();const plant=currentPlant();if(!plant)return;
    plant.originType=type.value;
    plant.originDate=$('#plantOriginDate').value?new Date(`${$('#plantOriginDate').value}T12:00:00`).toISOString():'';
    if(type.value==='Propagated'){
      plant.propagationMethod=$('#plantPropagationMethod')?.value||'Other';
      plant.rootingMedium=plant.propagationMethod==='Cutting'?($('#plantRootingMedium')?.value||''):'';
    }else{plant.propagationMethod='';plant.rootingMedium='';}
    if(typeof save==='function')save();m.classList.remove('open');ensureOrigin();if(typeof toast==='function')toast(`Origin updated for ${plant.name}`);
  };
  m.classList.add('open');
}
const style=document.createElement('style');style.textContent=`
.plant-origin-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:10px 0 2px;padding:10px 12px;border:1px solid #e2ebe8;border-radius:14px;background:#fbfdfc}.plant-origin-copy{min-width:0}.plant-origin-label{display:block;font-size:11px;font-weight:750;letter-spacing:.04em;text-transform:uppercase;color:#728079}.plant-origin-value{display:block;margin-top:3px;font-size:13px;line-height:1.3;color:var(--ink)}.plant-origin-edit{flex:0 0 auto;border:1px solid #cdded8;background:#fff;color:var(--ink);border-radius:12px;min-width:52px;min-height:40px;padding:8px 12px;font:inherit;font-size:12px;font-weight:750}
#propagationFields{display:grid;gap:10px}
`;document.head.appendChild(style);
new MutationObserver(()=>requestAnimationFrame(ensureOrigin)).observe(document.body,{childList:true,subtree:true});document.addEventListener('click',()=>setTimeout(ensureOrigin,0),true);setTimeout(ensureOrigin,0);
})();