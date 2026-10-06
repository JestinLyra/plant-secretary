// Run: node --test tests/photo-view.test.cjs
// DOM/geometry mocks verify saved-view application, not real iPhone rendering.
const {test}=require('node:test');const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const source=fs.readFileSync(process.env.PHOTO_VIEW_SOURCE||path.join(__dirname,'../photo-editor.js'),'utf8');
function setup({saved={},failSave=false}={}){
 const nodes=new Map(),frames=new Map(),observers=[],sizeObservers=[],messages=[],timers=[];let nextFrame=0;
 const storage=new Map([['plant-secretary-photo-view-v1',JSON.stringify(saved)]]);
 function element(id,W=120,H=120){const handlers={};const classes=new Set();return{id,style:{},dataset:{},value:'1',complete:true,naturalWidth:1086,naturalHeight:1448,
  classList:{contains:c=>classes.has(c),add:c=>classes.add(c),remove:c=>classes.delete(c)},
  getBoundingClientRect:()=>({width:W,height:H}),addEventListener:(type,fn)=>{(handlers[type]??=[]).push(fn)},
  fire:type=>handlers[type]?.forEach(fn=>fn()),querySelectorAll:()=>[],matches:()=>false};}
 const modal=element('photoAdjustModal'),stage=element('photoAdjustStage',240,240),img=element('photoAdjustImg');
 const rect=stage.getBoundingClientRect;stage.getBoundingClientRect=()=>modal.classList.contains('open')?rect():{width:0,height:0};
 for(const el of [modal,stage,img,element('photoZoom'),element('photoReset'),element('photoSave')])nodes.set('#'+el.id,el);
 const box=element('photo-p1',120,120),card=element('cardImg');card.parentElement=box;card.nodeType=1;card.matches=()=>true;
 const root={querySelectorAll:()=>[card]};
 const scope={window:{addEventListener(){}},document:{querySelector:s=>nodes.get(s)||null,querySelectorAll:root.querySelectorAll,createElement:()=>({style:{}}),head:{appendChild(){}},body:{},addEventListener(){}},
  localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>{if(failSave)throw new Error('full');storage.set(k,v)}},
  requestAnimationFrame:fn=>{const id=++nextFrame;frames.set(id,fn);return id},cancelAnimationFrame:id=>frames.delete(id),
  setTimeout:fn=>timers.push(fn),MutationObserver:class{constructor(callback){this.callback=callback;observers.push(this)}observe(){}},
  ResizeObserver:class{constructor(callback){this.callback=callback;sizeObservers.push(this)}observe(){}},
  getComputedStyle:()=>({borderRadius:'50%'}),URL:{createObjectURL:()=> 'blob:test',revokeObjectURL(){}},
  getPhoto:async()=>({}),toast:msg=>messages.push(msg),renderCollection(){},console:{warn(){}},Element:class{}};
 scope.window.storePhoto=async()=>true;
 vm.createContext(scope);vm.runInContext(source.replace(/\}\)\(\);\s*$/,'window.__test={metrics,place,state,openEditor};})();'),scope);
 scope.document.querySelectorAll=()=>[card];
 return {scope,nodes,modal,stage,img,box,card,storage,messages,observers,sizeObservers,frames,timers,element,flush(){const callbacks=[...frames.values()];frames.clear();callbacks.forEach(fn=>fn())}};
}
test('editor uses square profile geometry',()=>{assert.match(source,/aspect-ratio:1\/1;border-radius:16px/)});
test('saved zoom applies equally to square profile and circular thumbnail',()=>{
 const s=setup({saved:{p1:{x:0,y:0,scale:.5,fit:true}}});
 s.scope.window.PLANT_PHOTO_TOOLS.applyAll();assert.equal(s.card.style.width,'45px');assert.equal(s.card.style.height,'60px');
 const m=s.scope.window.__test.metrics(s.card,s.box,{scale:.5,fit:true});assert.equal(m.drawW/120,.375);
});
test('consecutive mutation batches do not lose photo updates',()=>{
 const s=setup({saved:{p1:{scale:.5,fit:true}}}),obs=s.observers[0];
 obs.callback([{addedNodes:[s.card]}]);obs.callback([{addedNodes:[{nodeType:1,querySelectorAll:()=>[]}]}]);s.flush();
 assert.equal(s.card.style.width,'45px');
});
test('slider save persists and reapplies after reload',async()=>{
 const s=setup();await s.scope.window.__test.openEditor('p1');
 const zoom=s.nodes.get('#photoZoom');zoom.value='.5';zoom.oninput();assert.equal(s.img.style.width,'90px');
 s.nodes.get('#photoSave').onclick();assert.equal(s.modal.classList.contains('open'),false);
 const saved=JSON.parse(s.storage.get('plant-secretary-photo-view-v1'));assert.equal(saved.p1.scale,.5);
 const reloaded=setup({saved});reloaded.scope.window.PLANT_PHOTO_TOOLS.applyAll();assert.equal(reloaded.card.style.width,'45px');
});
test('storage failure keeps editor open and never claims success',async()=>{
 const s=setup({failSave:true});await s.scope.window.__test.openEditor('p1');
 s.nodes.get('#photoSave').onclick();assert.equal(s.modal.classList.contains('open'),true);
 assert.match(s.messages.at(-1),/could not be saved/);assert(!s.messages.some(m=>m==='Photo position and size saved'));
});
test('hidden image is not sized to a 1px frame; applies when visible',()=>{
 const s=setup();let visible=false;s.box.getBoundingClientRect=()=>({width:visible?120:0,height:visible?120:0});
 s.scope.window.PLANT_PHOTO_TOOLS.applyAll();assert.equal(s.card.style.width,undefined);
 visible=true;s.scope.window.PLANT_PHOTO_TOOLS.applyAll();assert.equal(s.card.style.width,'90px');
});
test('saved position is applied along with scale',()=>{const s=setup({saved:{p1:{x:.5,y:-.25,scale:2,fit:true}}});s.scope.window.PLANT_PHOTO_TOOLS.applyAll();assert.match(s.card.style.transform,/translate3d\(15px,-15px,0\)/)});
test('existing fit=false settings are preserved',()=>{const s=setup({saved:{p1:{x:0,y:0,scale:1,fit:false}}});s.scope.window.PLANT_PHOTO_TOOLS.applyAll();assert.equal(s.card.style.width,'120px');assert.equal(s.card.style.height,'160px')});
test('card and profile loaders directly apply the saved view on insertion and load',async()=>{
 const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
 for(const name of ['loadCardPhoto','loadHeroPhoto']){
  const code=html.split('\n').find(l=>l.startsWith('async function '+name));let applied=0,image;
  const host={replaceChildren:img=>image=img};
  const scope={getPhoto:async()=>({}),$:()=>host,document:{createElement:()=>({})},URL:{createObjectURL:()=> 'blob:test',revokeObjectURL(){}},window:{PLANT_PHOTO_TOOLS:{applyWithin:root=>{assert.equal(root,host);applied++}}},console};
  vm.createContext(scope);vm.runInContext(code,scope);await scope[name]({id:'p1',name:'Plant'});
  assert.equal(applied,1);image.onload();assert.equal(applied,2,name);
 }
});
test('photo scales again when its frame grows, preserving saved zoom',()=>{
 const s=setup({saved:{p1:{x:0,y:0,scale:.5,fit:true}}});s.scope.window.PLANT_PHOTO_TOOLS.applyAll();
 assert.equal(s.card.style.width,'45px');s.box.getBoundingClientRect=()=>({width:180,height:180});
 s.sizeObservers[0].callback();s.flush();assert.equal(s.card.style.width,'67.5px');assert.equal(s.card.style.height,'90px');
});
test('profile frame fills a fluid column and keeps square rounded styling',()=>{
 const code=fs.readFileSync(path.join(__dirname,'../profile-identity.js'),'utf8');
 assert.match(code,/grid-template-columns:minmax\(0,1fr\) minmax\(0,1\.15fr\)/);
 assert.match(code,/profile-photo-wrap\{width:100%;min-width:0\}/);
 assert.match(code,/hero-photo\{width:100%!important;height:auto!important;aspect-ratio:1\/1!important;border-radius:16px!important/);
 assert.doesNotMatch(code,/(?:width|height|flex-basis):(?:120|104)px/);
});
