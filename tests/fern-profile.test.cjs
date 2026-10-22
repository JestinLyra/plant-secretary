const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.join(__dirname,'..');
class Element{
 constructor(){this.children=[];this.dataset={};this.style={};this.innerHTML='';this.textContent='';}
 appendChild(e){if(e.parentNode)e.parentNode.children=e.parentNode.children.filter(x=>x!==e);this.children.push(e);e.parentNode=this;return e;}
 append(...es){es.forEach(e=>this.appendChild(e));}
 insertBefore(e,b){this.children.splice(this.children.indexOf(b),0,e);e.parentNode=this;}
 querySelector(){return null;}
 setAttribute(){} removeAttribute(){} addEventListener(){}
}
function setup(){
 const quick=new Element(),cards=Array.from({length:6},()=>new Element());quick.append(...cards);
 const modal=new Element();modal.querySelector=s=>s==='.quick'?quick:null;
 const profile=new Element(),hero=new Element();profile.appendChild(hero);
 const document={head:new Element(),body:new Element(),createElement:()=>new Element(),addEventListener(){},querySelector:s=>s==='#plantModal'?modal:null,getElementById:id=>id==='plantProfile'?profile:id==='hero-fern'?hero:null};
 const p={id:'fern',name:'Maidenhair Fern',common:'Valley Mist Fern, Bush Maidenhair Fern',botanical:'Adiantum aethiopicum',location:'Indoor',wateringCheckDays:2,interval:2,lastWatered:'2026-10-19',photoId:'keep-photo',photoScale:1.3,history:[{type:'Watered',date:'2026-10-19'},{type:'Fed',date:'2026-09-19'}]};
 const ctx=vm.createContext({window:{},document,requestAnimationFrame:fn=>fn()});
 for(const f of ['watering-audit.js','botanical-care.js','practical-care.js','care-presentation.js','profile-care-summary-v2.js','profile-identity.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
 ctx.plants=[p];
 return {ctx,p,cards,profile,quick};
}
test('Australian maidenhair profile renders sourced care instead of identification placeholders',()=>{
 const {ctx,p,cards,profile}=setup(),saved=JSON.stringify(p);
 ctx.window.PLANT_PROFILE_CARE.apply(p);ctx.window.PLANT_PROFILE_IDENTITY.apply(p.id);
 const tiles=Object.fromEntries(cards.map(c=>[c.dataset.profileTile,c.innerHTML]));
 assert.match(tiles.water,/Check every 2 days\./);
 assert.match(tiles.light,/Good filtered light/);assert.match(tiles.prune,/browned, dead fronds/);
 assert.match(tiles.feed,/fern-labelled product/);assert.match(tiles.ph,/Not established in the selected sources/);
 assert.match(tiles.soil,/Organically rich/);assert.match(tiles.soil,/Scotts Osmocote/);
 for(const html of Object.values(tiles))assert.doesNotMatch(html,/Identification required|Species-specific care is not yet available/);
 function text(e){return e.textContent+' '+e.children.map(text).join(' ');}
 assert.match(text(profile),/Creeping, clump-forming fern/);assert.match(text(profile),/Indoor/);
 assert.equal(JSON.stringify(p),saved);
 assert.equal(ctx.window.PLANT_BOTANICAL_CARE.get(p.botanical),null,'must not register a hydrating care record');
});
test('fern bridge uses botanical identity, keeps blank intervals blank and leaves other profiles unchanged',()=>{
 const {ctx,p}=setup(),api=ctx.window.PLANT_PROFILE_CARE,base=ctx.window.PLANT_BOTANICAL_CARE;
 for(const c of Object.values(base.records))assert.equal(api.get(c.botanical),base.get(c.botanical),c.botanical);
 assert.equal(api.get('Maidenhair Fern'),null);assert.equal(api.get('Adiantum'),null);
 assert.equal(api.get('Unknown species'),null);
 const blank={...p,wateringCheckDays:null};api.apply(blank);assert.equal(ctx.window.PLANT_WATERING_AUDIT.summary(blank),'');
 assert.equal(api.get('Adiantum aethiopicum').botanical,'Adiantum aethiopicum');
});
test('fixed profile assets have fresh offline cache and load before identity rendering',()=>{
 const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
 for(const f of ['practical-care.js','profile-care-summary-v2.js','profile-identity.js'])assert.ok(index.includes(f+'?v=1.0.135'));
 assert.ok(index.indexOf('profile-care-summary-v2.js?')<index.indexOf('profile-identity.js?'));
 assert.match(fs.readFileSync(path.join(root,'sw.js'),'utf8'),/plant-secretary-v172/);
});
