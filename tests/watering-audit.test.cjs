const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'..');
function setup(plants=[]){const ctx=vm.createContext({window:{},plants});for(const file of ['watering-audit.js','botanical-care.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);return {ctx,audit:ctx.window.PLANT_WATERING_AUDIT,care:ctx.window.PLANT_BOTANICAL_CARE,plants}}
test('all 34 botanical care identities have an inspection audit; no seven-day default',()=>{
 const {audit,care}=setup();assert.equal(Object.keys(care.records).length,34);
 for(const c of Object.values(care.records)){
  assert.ok(audit.entries[c.botanical],c.botanical);
  for(const location of ['Indoor','Outdoor']){
   const p={botanical:c.botanical,location,interval:7};assert.ok([1,3].includes(audit.interval(p)),c.botanical);
   assert.match(audit.describe(p),/app (choice|interpretation)/);assert.match(audit.describe(p),/no exact botanical check interval/i);
  }
  assert.equal(c.interval,null);assert.doesNotMatch(c.water,/7.day|weekly is/);
 }
});
test('saved legacy intervals migrate by botanical identity without changing history or photos',()=>{
 const history=[{type:'Watered',date:'2026-10-05'}];const plants=[{botanical:'Monstera deliciosa',location:'Indoor',interval:7,history,photoId:'photo'},{botanical:'Unknown',location:'Indoor',interval:7,name:'Monstera'}];
 const {care}=setup(plants);assert.equal(plants[0].interval,3);assert.equal(plants[0].history,history);assert.equal(plants[0].photoId,'photo');assert.equal(plants[1].interval,null);
 plants[0].interval=99;care.hydrateAll();assert.equal(plants[0].interval,3);
});
test('display names never establish identity; unresolved genus and location stay manual',()=>{
 const {audit}=setup();for(const botanical of ['Adiantum','Mentha','Phalaenopsis','Spathiphyllum','Bougainvillea','Mesembryanthemum / Delosperma','Greek oregano'])assert.equal(audit.interval({botanical,name:'Coriander',location:'Indoor'}),null);
 assert.equal(audit.interval({botanical:'Monstera deliciosa'}),null);
 assert.equal(audit.interval({botanical:'Peperomia argyreia',location:'Indoor'}),3);
});
test('moisture-sensitive and drought-tolerant species retain distinct watering conditions',()=>{
 const {audit}=setup();assert.equal(audit.interval({botanical:'Coriandrum sativum',location:'Indoor'}),1);
 const zz={botanical:'Zamioculcas zamiifolia',location:'Indoor'};assert.equal(audit.interval(zz),3);assert.match(audit.describe(zz),/Only water when the medium is dry/);
 const orchid={botanical:'Phalaenopsis amabilis',location:'Indoor'};assert.match(audit.describe(orchid),/orchid bark/);
});
test('Melbourne season uses local month; climate is not represented as live weather',()=>{
 const {audit}=setup();assert.equal(audit.season(new Date('2026-11-30T14:00:00Z')),'summer');assert.equal(audit.season(new Date('2026-06-01T00:00:00Z')),'winter');
 assert.match(audit.describe({botanical:'Origanum vulgare subsp. hirtum',location:'Outdoor'}),/No live BOM weather adjustment/);
});
test('scheduler ignores legacy defaults and does not give unidentified plants a countdown',()=>{
 const {ctx}=setup();const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 for(const name of ['latestWateredAt','daysUntil','dueLabel']){const line=html.split('\n').find(s=>s.startsWith('function '+name+'('));vm.runInContext(line,ctx);}
 const last=new Date().toISOString();ctx.p={botanical:'Monstera deliciosa',location:'Indoor',interval:7,lastWatered:last};assert.equal(vm.runInContext('daysUntil(p)',ctx),3);
 ctx.p.botanical='Adiantum';assert.equal(vm.runInContext('daysUntil(p)',ctx),null);assert.equal(vm.runInContext('dueLabel(p)',ctx),'Manual moisture check');
});
test('offline asset and seed contain the audit and no fixed seed intervals',()=>{
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');assert.ok(html.indexOf('watering-audit.js')<html.indexOf('home-art.js'));
 assert.doesNotMatch(html,/interval\|\|7|Number\(p.interval\)\|\|7/);
 const base=html.slice(html.indexOf('const BASE_PLANTS='),html.indexOf("const KEY="));assert.doesNotMatch(base,/'(?:Indoor|Outdoor)',\d+,/);
 assert.match(fs.readFileSync(path.join(root,'sw.js'),'utf8'),/watering-audit.js/);
});
