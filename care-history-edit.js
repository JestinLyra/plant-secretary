(()=>{
const $=s=>document.querySelector(s);
const TYPES=['Pruning','Pinching','Repotting','Feeding'];
function currentPlant(){try{const name=$('#modalTitle')?.textContent?.trim();return plants.find(p=>p.name===name)||null}catch(e){return null}}
function sortHistory(list){return (list||[]).sort((a,b)=>new Date(b.date)-new Date(a.date))}
function ensureButton(){
  const panel=[...document.querySelectorAll('#plantProfile .panel')].find(p=>p.querySelector('h3')?.textContent.trim()==='Care History');
  if(!panel||panel.querySelector('#careHistoryEditBtn'))return;
  panel.style.position='relative';
  const btn=document.createElement('button');
  btn.id='careHistoryEditBtn';btn.type='button';btn.setAttribute('aria-label','Back-log plant care');
  btn.innerHTML='<img src="assets/care-history-edit.png" alt="">';
  btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openBacklog();});
  panel.appendChild(btn);
}
function ensureModal(){
  let m=$('#careHistoryBacklogModal');if(m)return m;
  m=document.createElement('div');m.id='careHistoryBacklogModal';m.className='modal';
  m.innerHTML=`<div class="sheet"><div class="sheethead"><h3>Back-log plant care</h3><button class="close" id="careBacklogClose">×</button></div><form id="careBacklogForm" class="formgrid"><label>Plant care<select id="careBacklogType" required>${TYPES.map(t=>`<option value="${t}">${t}</option>`).join('')}</select></label><label>Date<input id="careBacklogDate" type="date" required></label><button class="primary" type="submit">Save care record</button></form></div>`;
  document.body.appendChild(m);
  $('#careBacklogClose').onclick=()=>m.classList.remove('open');
  m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open')});
  $('#careBacklogForm').addEventListener('submit',e=>{
    e.preventDefault();const p=currentPlant();if(!p)return;
    const type=$('#careBacklogType').value;const date=$('#careBacklogDate').value;if(!date)return;
    const label=type==='Pruning'?'Pruned':type==='Pinching'?'Pinched':type==='Repotting'?'Repotted':'Fed';
    const iso=new Date(`${date}T12:00:00`).toISOString();p.history=p.history||[];p.history.push({type:label,date:iso});p.history=sortHistory(p.history);
    save();m.classList.remove('open');openModal(p.id);if(typeof renderInsights==='function')renderInsights();if(typeof toast==='function')toast(`${label} recorded for ${p.name}`);
  });
  return m;
}
function openBacklog(){const p=currentPlant();if(!p)return;const m=ensureModal();$('#careBacklogDate').max=new Date().toISOString().slice(0,10);$('#careBacklogDate').value='';m.classList.add('open');}
const style=document.createElement('style');style.textContent=`
#careHistoryEditBtn{position:absolute;top:18px;right:18px;width:46px;height:46px;border:0;background:transparent;padding:0;display:grid;place-items:center;cursor:pointer;z-index:2}
#careHistoryEditBtn img{display:block;width:44px;height:44px;object-fit:contain}
#careHistoryEditBtn:active{transform:scale(.96)}
#plantProfile .panel:has(#careHistoryEditBtn) h3{padding-right:56px}
`;
document.head.appendChild(style);
new MutationObserver(()=>requestAnimationFrame(ensureButton)).observe(document.body,{childList:true,subtree:true});document.addEventListener('click',()=>setTimeout(ensureButton,0),true);setTimeout(ensureButton,0);
})();