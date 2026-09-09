(()=>{
const form=document.getElementById('addForm');
if(!form)return;
function localToday(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function matchBase(name){try{return (BASE_PLANTS||[]).find(p=>String(p[0]).trim().toLowerCase()===String(name).trim().toLowerCase())||null}catch(_){return null}}
form.innerHTML=`<label>Photo<input id="newPhoto" type="file" accept="image/*"></label><label>Plant name<input id="newName" required placeholder="e.g. Gardenia"></label><label>Date acquired<input id="newAcquiredDate" type="date" max="${localToday()}" required></label><label>Location<select id="newLocation"><option>Indoor</option><option>Outdoor</option></select></label><button class="primary" type="submit">Save Plant</button>`;
form.onsubmit=async e=>{
  e.preventDefault();
  const name=document.getElementById('newName').value.trim();
  const location=document.getElementById('newLocation').value;
  const acquired=document.getElementById('newAcquiredDate').value;
  if(!name||!acquired)return;
  const base=matchBase(name);
  const id='p'+Date.now();
  const p={
    id,
    name,
    common:'',
    botanical:base?base[1]:'',
    location,
    interval:base?Number(base[3]):7,
    light:base?base[4]:'indirect',
    ph:base?base[5]:'',
    demand:base?base[6]:'regular',
    lastWatered:null,
    history:[],
    notes:'',
    photoId:null,
    originType:'',
    originDate:new Date(`${acquired}T12:00:00`).toISOString(),
    propagationMethod:'',
    rootingMedium:''
  };
  plants.push(p);
  const f=document.getElementById('newPhoto').files[0];
  if(f)await storePhoto(id,f);
  save();
  form.reset();
  closeModals();
  renderAll();
  nav('plants');
  toast(`${p.name} added`);
};
})();