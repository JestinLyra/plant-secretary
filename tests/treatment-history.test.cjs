const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.join(__dirname,'..');
class Element{
 constructor(tag){this.tag=tag;this.children=[];this.dataset={};this.classList={remove(){}};this.value='';this.textContent='';}
 appendChild(e){this.children.push(e);e.parentNode=this;return e;}append(...es){es.forEach(e=>this.appendChild(e));}
 remove(){if(this.parentNode)this.parentNode.children=this.parentNode.children.filter(e=>e!==this);}
 setAttribute(){}addEventListener(){}focus(){}
}
const plant=id=>({id,name:'Same display name',botanical:'Begonia maculata',wateringCheckDays:2,lastWatered:'2026-10-19T01:00:00.000Z',photoId:'saved-'+id,history:[{type:'Watered',date:'2026-10-19T01:00:00.000Z'},{type:'Fed',date:'2026-09-19T01:00:00.000Z'}]});
function setup(options={}){
 const plants=[plant('a'),plant('b')],messages=[],opened=[],clicks=[];let stored,saves=0;
 const document={body:new Element('body'),head:new Element('head'),createElement:t=>new Element(t),addEventListener:(event,fn)=>clicks.push(fn),querySelector:()=>null};
 const ctx=vm.createContext({window:{PLANT_STORAGE_READY:options.ready||Promise.resolve()},plants,document,confirm:()=>true,save:async()=>{saves++;if(options.fail)throw new Error('Quota exhausted');stored=JSON.parse(JSON.stringify(plants));},openModal:id=>opened.push(id),toast:s=>messages.push(s),renderInsights(){}});
 vm.runInContext(fs.readFileSync(path.join(root,'treatment-history.js'),'utf8'),ctx);
 function all(e){return [e,...e.children.flatMap(all)];}
 function form(){const elements=all(document.body);return {date:elements.find(e=>e.id==='treatmentDate'),details:elements.find(e=>e.id==='treatmentDetails'),form:elements.find(e=>e.tag==='form'),error:elements.find(e=>e.className==='hint care-warning'),button:text=>elements.find(e=>e.tag==='button'&&e.textContent===text)};}
 return {ctx,plants,document,form,opened,messages,clicks,get stored(){return stored},get saves(){return saves}};
}
test('record treatment button opens a dated form and persists only the selected stable plant ID',async()=>{
 const s=setup(),before=JSON.stringify(s.plants),existing=JSON.stringify(s.plants[1]);
 s.clicks[0]({target:{closest:()=>({dataset:{treatment:'b'}})},preventDefault(){}});
 const f=s.form();assert.ok(f.date.value);f.date.value='2026-10-19';f.details.value='  Removed pests; rinsed leaves  ';
 await f.form.onsubmit({preventDefault(){}});
 assert.equal(s.saves,1);assert.equal(s.stored[0].history.length,2);assert.equal(s.stored[1].history.length,3);
 const record=s.plants[1].history.find(h=>h.type==='Treatment');assert.equal(record.treatment,'Removed pests; rinsed leaves');assert.equal(new Date(record.date).getHours(),12);
 const after={...s.plants[1],history:JSON.parse(existing).history};assert.equal(JSON.stringify(after),existing);
 assert.equal(JSON.stringify(s.plants[0]),JSON.stringify(JSON.parse(before)[0]));assert.deepEqual(s.opened,['b']);
});
test('blank, invalid, future and duplicate treatments cannot alter records',async()=>{
 const s=setup(),saved=JSON.stringify(s.plants);s.ctx.window.PLANT_TREATMENT_HISTORY.open('a');let f=s.form();f.date.value='2026-10-19';f.details.value='  ';await f.form.onsubmit({preventDefault(){}});assert.match(f.error.textContent,/Enter treatment/);
 f.details.value='Rinsed';f.date.value='2026-02-31';await f.form.onsubmit({preventDefault(){}});assert.match(f.error.textContent,/valid date/);
 f.date.value='2099-01-01';await f.form.onsubmit({preventDefault(){}});assert.match(f.error.textContent,/valid date/);assert.equal(JSON.stringify(s.plants),saved);
 f.date.value='2026-10-19';await f.form.onsubmit({preventDefault(){}});
 const once=JSON.stringify(s.plants);s.ctx.window.PLANT_TREATMENT_HISTORY.open('a');f=s.form();f.date.value='2026-10-19';f.details.value='rinsed';await f.form.onsubmit({preventDefault(){}});assert.match(f.error.textContent,/already recorded/);assert.equal(JSON.stringify(s.plants),once);
});
test('cancelling and failed persistence preserve history, photos and reminders without success messages',async()=>{
 const s=setup({fail:true}),before=JSON.stringify(s.plants);s.ctx.window.PLANT_TREATMENT_HISTORY.open('a');s.form().button('Cancel').onclick();assert.equal(s.document.body.children.length,0);assert.equal(s.saves,0);
 s.ctx.window.PLANT_TREATMENT_HISTORY.open('a');const f=s.form();f.date.value='2026-10-19';f.details.value='Rinsed leaves';await f.form.onsubmit({preventDefault(){}});
 assert.equal(JSON.stringify(s.plants),before);assert.match(f.error.textContent,/Quota exhausted/);assert.equal(s.messages.length,0);assert.equal(f.button('Save treatment').disabled,false);
});
test('treatment records can be amended and deleted without deleting existing care',async()=>{
 const s=setup(),api=s.ctx.window.PLANT_TREATMENT_HISTORY;api.open('a');let f=s.form();f.date.value='2026-10-18';f.details.value='Original';await f.form.onsubmit({preventDefault(){}});
 let index=s.plants[0].history.findIndex(h=>h.type==='Treatment');api.open('a',index);f=s.form();assert.equal(f.details.value,'Original');f.date.value='2026-10-19';f.details.value='Corrected';await f.form.onsubmit({preventDefault(){}});
 assert.equal(s.plants[0].history.find(h=>h.type==='Treatment').treatment,'Corrected');
 index=s.plants[0].history.findIndex(h=>h.type==='Treatment');api.open('a',index);f=s.form();await f.button('Delete').onclick();assert.equal(s.plants[0].history.length,2);assert.ok(s.plants[0].history.some(h=>h.type==='Watered'));assert.equal(s.plants[0].wateringCheckDays,2);
});
test('storage readiness is awaited and unsafe treatment text is displayed as text',async()=>{
 let ready;const s=setup({ready:new Promise(r=>ready=r)}),api=s.ctx.window.PLANT_TREATMENT_HISTORY;api.open('a');const f=s.form();f.date.value='2026-10-19';f.details.value='<img src=x onerror=alert(1)>';const pending=f.form.onsubmit({preventDefault(){}});assert.equal(s.plants[0].history.length,2);ready();await pending;
 const html=api.label(s.plants[0].history.find(h=>h.type==='Treatment'));assert.match(html,/&lt;img/);assert.doesNotMatch(html,/<img/);
});
test('existing history editor includes treatments and targets IDs rather than duplicate display names',()=>{
 const s=setup();s.plants[1].history.push({type:'Treatment',treatment:'Rinsed',date:'2026-10-19T12:00:00.000Z'});
 s.document.querySelector=sel=>sel==='#plantModal'?{dataset:{plantId:'b'}}:sel==='#modalTitle'?{textContent:'Same display name'}:null;
 let opened;s.ctx.window.PLANT_TREATMENT_HISTORY.open=(...args)=>opened=args;
 const code=fs.readFileSync(path.join(root,'care-history-edit.js'),'utf8').replace(/\}\)\(\);\s*$/,'window.testHistory={currentPlant,editableHistory,openEditRecord};})();');
 vm.runInContext(code,s.ctx);const api=s.ctx.window.testHistory;assert.equal(api.currentPlant(),s.plants[1]);assert.equal(api.editableHistory(s.plants[1]).length,3);api.openEditRecord(2);assert.deepEqual(opened,['b',2]);
});
test('new action, display, script and offline asset are wired without removing existing actions',()=>{
 const index=fs.readFileSync(path.join(root,'index.html'),'utf8'),sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
 for(const label of ['Log pruning','Log pinching','Log repotting','Log feeding','Record treatment'])assert.ok(index.includes(label));
 assert.match(index,/data-treatment="\$\{p.id\}"/);assert.match(index,/PLANT_TREATMENT_HISTORY\?\.label\(h\)/);
 assert.ok(index.includes('treatment-history.js?v=1.0.136'));assert.ok(sw.includes("'./treatment-history.js'"));
 for(const match of index.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g))new vm.Script(match[1]);
});
