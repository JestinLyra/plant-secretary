(()=>{
const $=s=>document.querySelector(s);
const TYPES=['Pruning','Pinching','Repotting','Feeding'];
let selectedType='';
function currentPlant(){try{const name=$('#modalTitle')?.textContent?.trim();return plants.find(p=>p.name===name)||null}catch(e){return null}}
function sortHistory(list){return (list||[]).sort((a,b)=>new Date(b.date)-new Date(a.date))}
function localToday(){const d=new Date(),y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`}
function ensureButton(){
  const panel=[...document.querySelectorAll('#plantProfile .panel')].find(p=>p.querySelector('h3')?.textContent.trim()==='Care History');
  if(!panel||panel.querySelector('#careHistoryEditBtn'))return;
  panel.style.position='relative';
  const btn=document.createElement('button');
  btn.id='careHistoryEditBtn';btn.type='button';btn.setAttribute('aria-label','Back-log plant care');
  btn.innerHTML='<img src="assets/care-history-edit.png" alt="">';
  btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openTypeStep();});
  panel.appendChild(btn);
}
function ensureModal(){
  let m=$('#careHistoryBacklogModal');if(m)return m;
  m=document.createElement('div');m.id='careHistoryBacklogModal';m.className='modal';
  m.innerHTML=`<div class="sheet"><div class="sheethead"><h3 id="careBacklogTitle">Back-log plant care</h3><button class="close" id="careBacklogClose">×</button></div><div id="careBacklogBody"></div></div>`;
  document.body.appendChild(m);
  $('#careBacklogClose').onclick=()=>m.classList.remove('open');
  m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open')});
  return m;
}
function openTypeStep(){
  if(!currentPlant())return;selectedType='';const m=ensureModal();
  $('#careBacklogTitle').textContent='Which plant care?';
  $('#careBacklogBody').innerHTML=`<p class="hint">Choose the care you want to back-log for this plant.</p><div class="care-backlog-types">${TYPES.map(t=>`<button type="button" class="secondary care-backlog-type" data-type="${t}">${t}</button>`).join('')}</div>`;
  $('#careBacklogBody').querySelectorAll('.care-backlog-type').forEach(b=>b.onclick=()=>{selectedType=b.dataset.type;openDateStep()});
  m.classList.add('open');
}
function openDateStep(){
  const p=currentPlant();if(!p||!selectedType)return;const m=ensureModal();
  $('#careBacklogTitle').textContent=selectedType;
  $('#careBacklogBody').innerHTML=`<form id="careBacklogForm" class="formgrid"><p class="hint" style="margin:0">Choose the date this care was completed for ${p.name}.</p><label>Date<input id="careBacklogDate" type="date" max="${localToday()}" required></label><div class="actions"><button class="secondary" type="button" id="careBacklogBack">Back</button><button class="primary" type="submit">Save care record</button></div></form>`;
  $('#careBacklogBack').onclick=openTypeStep;
  $('#careBacklogForm').onsubmit=e=>{
    e.preventDefault();const plant=currentPlant();const date=$('#careBacklogDate').value;if(!plant||!date)return;
    const label=selectedType==='Pruning'?'Pruned':selectedType==='Pinching'?'Pinched':selectedType==='Repotting'?'Repotted':'Fed';
    const iso=new Date(`${date}T12:00:00`).toISOString();plant.history=plant.history||[];plant.history.push({type:label,date:iso});plant.history=sortHistory(plant.history);
    save();m.classList.remove('open');openModal(plant.id);if(typeof renderInsights==='function')renderInsights();if(typeof toast==='function')toast(`${label} recorded for ${plant.name}`);
  };
}
const style=document.createElement('style');style.textContent=`
#careHistoryEditBtn{position:absolute;top:18px;right:18px;width:46px;height:46px;border:0;background:transparent;padding:0;display:grid;place-items:center;cursor:pointer;z-index:2}
#careHistoryEditBtn img{display:block;width:44px;height:44px;object-fit:contain}
#careHistoryEditBtn:active{transform:scale(.96)}
#plantProfile .panel:has(#careHistoryEditBtn) h3{padding-right:56px}
.care-backlog-types{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}.care-backlog-types button{min-height:52px}
`;
document.head.appendChild(style);
new MutationObserver(()=>requestAnimationFrame(ensureButton)).observe(document.body,{childList:true,subtree:true});document.addEventListener('click',()=>setTimeout(ensureButton,0),true);setTimeout(ensureButton,0);
})();