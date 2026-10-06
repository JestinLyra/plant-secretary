const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const vm=require('node:vm');const path=require('node:path');const root=path.join(__dirname,'..');
class Element{
 constructor(tag){this.tag=tag;this.children=[];this.listeners={};this.attributes={};this.disabled=false;this._value='';}
 set value(v){this._value=String(v)}get value(){return this._value}
 append(...nodes){this.children.push(...nodes);for(const node of nodes)node.parent=this;}appendChild(node){this.append(node);return node}
 remove(){if(this.parent)this.parent.children=this.parent.children.filter(x=>x!==this)}
 addEventListener(type,fn){this.listeners[type]=fn}setAttribute(k,v){this.attributes[k]=v}focus(){this.focused=true}
 async fire(type){return this.listeners[type]?.({preventDefault(){},target:this})}
}
function setup(plants,fail=false){
 const document={body:new Element('body'),head:new Element('head'),createElement:tag=>new Element(tag),getElementById:()=>null};let stored,saveCount=0,renderCount=0;const messages=[];
 const ctx=vm.createContext({window:{PLANT_STORAGE_READY:Promise.resolve(),openModal(){}},plants,document,toast:s=>messages.push(s),renderAll(){renderCount++},save:async()=>{saveCount++;if(fail)throw new Error('Quota exhausted');stored=JSON.parse(JSON.stringify(plants));}});
 for(const f of ['watering-audit.js','botanical-care.js','profile-identity.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
 const api=ctx.window.PLANT_PROFILE_IDENTITY,audit=ctx.window.PLANT_WATERING_AUDIT,care=ctx.window.PLANT_BOTANICAL_CARE;
 function editor(id){api.editWateringInterval(id);const overlay=document.body.children.at(-1),form=overlay.children[0];return {overlay,form,input:form.children.find(e=>e.tag==='input'),error:form.children.find(e=>e.attributes.role==='alert'),submit:form.children.find(e=>e.type==='submit'),cancel:form.children.find(e=>e.textContent==='Cancel')}}
 return {ctx,api,audit,care,document,editor,messages,get stored(){return stored},get saveCount(){return saveCount},get renderCount(){return renderCount}};
}
const birkin=(id)=>({id,name:'Same display name',botanical:"Philodendron 'Birkin'",location:'Indoor',history:[{type:'Pruned',date:'2026-10-01'}],photoId:'photo-'+id});
test('Edit plant exposes a separate working interval action; existing menu actions remain',async()=>{
 const s=setup([birkin('a')]);s.api.edit('a');const form=s.document.body.children.at(-1).children[0];assert.deepEqual(form.children.filter(e=>e.tag==='button').map(e=>e.textContent),['Edit common name, display name & location','Edit watering check interval','Delete plant','Cancel']);await form.children.find(e=>e.textContent==='Edit watering check interval').fire('click');assert.equal(s.document.body.children.at(-1).children[0].children[0].textContent,'Watering check interval');
});
test('separate pots save independent intervals by ID and survive reload, hydration and backup serialization',async()=>{
 const plants=[birkin('a'),birkin('b')],s=setup(plants);let e=s.editor('a');e.input.value='5';await e.form.fire('submit');e=s.editor('b');e.input.value='8';await e.form.fire('submit');assert.equal(s.audit.interval(plants[0]),5);assert.equal(s.audit.interval(plants[1]),8);assert.equal(s.saveCount,2);
 assert.equal(s.stored[0].photoId,'photo-a');assert.equal(s.stored[0].history[0].type,'Pruned');const reloaded=setup(JSON.parse(JSON.stringify(s.stored)));reloaded.care.hydrateAll();assert.equal(reloaded.audit.interval(reloaded.ctx.plants[0]),5);assert.equal(reloaded.audit.interval(reloaded.ctx.plants[1]),8);assert.match(reloaded.audit.summary(reloaded.ctx.plants[0]),/Inspect every 5 days · set by you/);
});
test('explicit interval overrides summer advice, species preferences and unresolved identities',()=>{
 const s=setup([]),date=new Date('2026-12-15T00:00:00Z');for(const botanical of ["Citrus × limon 'Meyer'",'Unknown','Coriandrum sativum']){const p={botanical,location:'Outdoor',wateringCheckDays:12};assert.equal(s.audit.interval(p,date),12);assert.match(s.audit.describe(p,date),/set by you for this individual plant/);assert.doesNotMatch(s.audit.summary(p,date),/ABC summer/);}
 assert.equal(s.audit.interval({botanical:'Unknown',wateringCheckDays:8}),8);
});
test('cancel and invalid values leave saved intervals, photos and history unchanged',async()=>{
 const p={...birkin('a'),wateringCheckDays:8},s=setup([p]),before=JSON.stringify(p);const e=s.editor('a');for(const value of ['0','-1','2.5','366','Infinity','abc']){e.input.value=value;await e.form.fire('submit');assert.match(e.error.textContent,/whole number/);assert.equal(JSON.stringify(p),before);assert.equal(s.saveCount,0);}e.input.value='5';await e.cancel.fire('click');assert.equal(JSON.stringify(p),before);assert.equal(s.document.body.children.length,0);
});
test('clearing the personal interval restores existing guidance without treating legacy interval as an override',async()=>{
 const p={...birkin('a'),wateringCheckDays:8},s=setup([p]),e=s.editor('a');e.input.value='';await e.form.fire('submit');assert.equal(Object.hasOwn(p,'wateringCheckDays'),false);assert.equal(s.audit.interval(p),null);p.interval=99;assert.equal(s.audit.interval(p),null);assert.equal(Object.hasOwn(s.stored[0],'wateringCheckDays'),false);
});
test('failed persistence rolls back interval and leaves editor open without a success message',async()=>{
 const p={...birkin('a'),wateringCheckDays:8},s=setup([p],true),e=s.editor('a');e.input.value='5';await e.form.fire('submit');assert.equal(p.wateringCheckDays,8);assert.equal(p.interval,8);assert.match(e.error.textContent,/Interval was not saved: Quota exhausted/);assert.equal(e.submit.disabled,false);assert.equal(s.document.body.children.length,1);assert.equal(s.messages.length,0);assert.equal(s.renderCount,0);
});
test('plant-storage readiness is awaited before interval mutation and persistence',async()=>{
 const p=birkin('a'),s=setup([p]);let ready;s.ctx.window.PLANT_STORAGE_READY=new Promise(r=>ready=r);const e=s.editor('a');e.input.value='8';const pending=e.form.fire('submit');assert.equal(p.wateringCheckDays,undefined);assert.equal(s.saveCount,0);ready();await pending;assert.equal(p.wateringCheckDays,8);assert.equal(s.saveCount,1);
});
test('watering calculates custom countdown and exact existing legend colour buckets',async()=>{
 const p=birkin('a'),s=setup([p]);const html=fs.readFileSync(path.join(root,'index.html'),'utf8');for(const name of ['latestWateredAt','daysUntil','dueLabel'])vm.runInContext(html.split('\n').find(l=>l.startsWith('function '+name+'(')),s.ctx);
 const water=html.slice(html.indexOf('async function water(id){'),html.indexOf('window.PLANT_RECORD_WATERING=water;'));vm.runInContext(water,s.ctx);s.ctx.renderWatering=()=>{};s.ctx.renderInsights=()=>{};
 const home=fs.readFileSync(path.join(root,'home-art.js'),'utf8');vm.runInContext(home.match(/function intervalClass\(p\)\{.*?return'interval-white'\}/)[0],s.ctx);
 for(const [days,colour] of [[1,'interval-pale-yellow'],[3,'interval-pale-yellow'],[4,'interval-sky-blue'],[5,'interval-sky-blue'],[6,'interval-light-blue'],[7,'interval-light-blue'],[8,'interval-white'],[30,'interval-white']]){p.wateringCheckDays=days;s.ctx.p=p;assert.equal(vm.runInContext('intervalClass(p)',s.ctx),colour);}
 p.wateringCheckDays=8;assert.equal(await vm.runInContext("water('a')",s.ctx),true);assert.equal(vm.runInContext('daysUntil(p)',s.ctx),8);assert.equal(vm.runInContext('dueLabel(p)',s.ctx),'In 8 days');assert.equal(s.stored[0].wateringCheckDays,8);assert.equal(s.stored[0].history[0].type,'Watered');assert.equal(s.stored[0].history[1].type,'Pruned');assert.equal(s.stored[0].photoId,'photo-a');assert.equal(await vm.runInContext("water('a')",s.ctx),false);
});
