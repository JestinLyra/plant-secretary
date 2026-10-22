(()=>{
const list=()=>{try{return typeof plants!=='undefined'?plants:(window.plants||[])}catch(_){return window.plants||[]}};
const find=id=>list().find(p=>String(p.id)===String(id));
function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function day(value){const d=new Date(value);return Number.isNaN(d.getTime())?'':`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function label(h){return h.type==='Treatment'?'Treatment — '+escape(h.treatment||'Not specified'):escape(h.type)}
function validDate(date){return /^\d{4}-\d{2}-\d{2}$/.test(date)&&date<=today()&&day(`${date}T12:00:00`)===date}
let busy=false,overlay=null;
async function commit(id,date,treatment,record=null,remove=false){
 if(busy)throw new Error('A treatment record is already being saved.');
 busy=true;
 try{
  await window.PLANT_STORAGE_READY;
  const p=find(id);if(!p)throw new Error('This plant is no longer available.');
  const history=p.history||[],index=record?history.indexOf(record):-1;
  if(record&&index<0)throw new Error('This record has changed. Reopen it before saving.');
  const description=String(treatment||'').trim();
  if(!remove){
   if(!validDate(date))throw new Error('Choose a valid date, no later than today.');
   if(!description||description.length>500)throw new Error('Enter treatment details (up to 500 characters).');
   if(history.some((h,i)=>i!==index&&h.type==='Treatment'&&day(h.date)===date&&String(h.treatment||'').trim().toLowerCase()===description.toLowerCase()))throw new Error('This treatment is already recorded on this date.');
  }
  const next=history.slice();
  if(remove)next.splice(index,1);
  else{const value={...(record||{}),type:'Treatment',careKind:'Treatment',treatment:description,date:new Date(`${date}T12:00:00`).toISOString()};if(record)next[index]=value;else next.push(value);}
  next.sort((a,b)=>new Date(b.date)-new Date(a.date));
  const hadHistory=Object.prototype.hasOwnProperty.call(p,'history'),previous=p.history;
  p.history=next;
  try{if(typeof save!=='function')throw new Error('Plant storage is unavailable.');await save();}
  catch(error){if(hadHistory)p.history=previous;else delete p.history;throw error;}
  return p;
 }finally{busy=false;}
}
function close(){if(overlay){overlay.remove();overlay=null;}}
function open(id,index=null){
 if(busy)return;const p=find(id);if(!p)return;
 const record=index==null?null:p.history?.[index];if(index!=null&&record?.type!=='Treatment')return;
 close();
 const el=(tag,text)=>{const e=document.createElement(tag);if(text)e.textContent=text;return e;};
 const m=el('div');m.className='modal open';m.id='treatmentHistoryModal';
 const sheet=el('div');sheet.className='sheet';const head=el('div');head.className='sheethead';
 const title=el('h3',record?'Edit treatment':'Record treatment'),dismiss=el('button','×');dismiss.type='button';dismiss.className='close';dismiss.setAttribute('aria-label','Close treatment form');head.append(title,dismiss);
 const hint=el('p',p.name);hint.className='hint';const form=el('form');form.className='formgrid';
 const dateLabel=el('label','Date'),date=el('input');date.type='date';date.id='treatmentDate';date.required=true;date.max=today();date.value=record?day(record.date):today();dateLabel.appendChild(date);
 const detailsLabel=el('label','Treatment'),details=el('textarea');details.id='treatmentDetails';details.required=true;details.maxLength=500;details.rows=3;details.placeholder='What treatment did you apply?';details.value=record?.treatment||'';detailsLabel.appendChild(details);
 const error=el('p');error.className='hint care-warning';error.setAttribute('role','alert');
 const actions=el('div');actions.className='actions';const cancel=el('button','Cancel');cancel.type='button';cancel.className='secondary';const submit=el('button',record?'Save changes':'Save treatment');submit.type='submit';submit.className='primary';
 const controls=[dismiss,cancel,submit,date,details];
 function leave(){if(!busy)close();}dismiss.onclick=leave;cancel.onclick=leave;
 async function finish(remove=false){
  if(busy)return;if(remove&&!confirm('Delete this treatment record?'))return;
  controls.forEach(e=>e.disabled=true);error.textContent='';
  try{const plant=await commit(id,date.value,details.value,record,remove);close();if(typeof openModal==='function')openModal(plant.id);if(typeof renderInsights==='function')renderInsights();if(typeof toast==='function')toast(remove?'Treatment record deleted':'Treatment recorded');}
  catch(failure){error.textContent=`Not saved: ${failure?.message||'Storage error'}`;controls.forEach(e=>e.disabled=false);}
 }
 actions.append(cancel,submit);
 if(record){const del=el('button','Delete');del.type='button';del.className='secondary care-delete';del.onclick=()=>finish(true);controls.push(del);actions.appendChild(del);}
 form.append(dateLabel,detailsLabel,error,actions);form.onsubmit=e=>{e.preventDefault();return finish();};
 sheet.append(head,hint,form);m.appendChild(sheet);m.addEventListener('click',e=>{if(e.target===m)leave();});document.body.appendChild(m);overlay=m;details.focus();
}
document.addEventListener('click',e=>{const button=e.target.closest?.('[data-treatment]');if(!button)return;e.preventDefault();open(button.dataset.treatment);});
window.PLANT_TREATMENT_HISTORY={open,label};
})();
