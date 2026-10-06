const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'..');
function setup(){
 const plants=[{id:'zz',name:'My current ZZ',botanical:'Zamioculcas zamiifolia',location:'Indoor',wateringCheckDays:14,lastWatered:'2026-09-24',photoScale:1.2,history:[{type:'Watered',date:'2026-09-24'}]}];
 const document={querySelector:()=>null,createElement:()=>({}),head:{appendChild(){}},addEventListener(){}};
 const ctx=vm.createContext({window:{},plants,document});
 for(const f of ['watering-audit.js','botanical-care.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
 const before=JSON.stringify(ctx.window.PLANT_BOTANICAL_CARE);
 vm.runInContext(fs.readFileSync(path.join(root,'practical-care.js'),'utf8'),ctx);
 let code=fs.readFileSync(path.join(root,'app-actions.js'),'utf8');
 code=code.replace(/\}\)\(\);\s*$/,'window.testCare={topicHtml,sourcePanel,identityReviewHtml,GUIDE_TOPICS};})();');
 vm.runInContext(code,ctx);
 return {ctx,plants,before,care:ctx.window.PLANT_BOTANICAL_CARE,detail:ctx.window.PLANT_PRACTICAL_CARE,hooks:ctx.window.testCare};
}
test('all resolved records have practical guidance and complete valid references',()=>{
 const {care,detail}=setup();assert.equal(Object.keys(detail.records).length,38);
 for(const d of Object.values(detail.records)){
  assert.equal(detail.getCare(d.botanical).botanical,d.botanical);
  assert.ok(Object.values(d.entries).flat().length>0,d.botanical);
  assert.ok(d.gap,d.botanical);
  for(const field of detail.fields){
   const actual=detail.fieldSources(d.botanical,field).map(s=>s.id);
   for(const step of detail.steps(d.botanical,field)){
    assert.ok(step.text.length>20);assert.ok(step.refs.length>0);
    for(const id of step.refs)assert.ok(actual.includes(id),`${d.botanical}/${field}/${id}`);
   }
  }
 }
});
test('presentation additions do not mutate care summaries, reminders, history or photo settings',()=>{
 const {care,detail,hooks,plants,before,ctx}=setup();
 assert.equal(JSON.stringify(care),before);
 const saved=JSON.stringify(plants),schedule=ctx.window.PLANT_WATERING_AUDIT.interval(plants[0]);
 for(const d of Object.values(detail.records))for(const topic of hooks.GUIDE_TOPICS)hooks.topicHtml(topic,{...plants[0],botanical:d.botanical});
 assert.equal(JSON.stringify(care),before);assert.equal(JSON.stringify(plants),saved);
 assert.equal(ctx.window.PLANT_WATERING_AUDIT.interval(plants[0]),schedule);
 assert.equal(schedule,14);
});
test('display names never select practical care; aliases use canonical botanical identity',()=>{
 const {detail,hooks}=setup();assert.equal(detail.get('ZZ Plant'),null);
 assert.equal(detail.get('Peperomia argyreia').botanical,'Peperomia argyraea');
 const html=hooks.topicHtml('Propagation',{name:'Monstera',botanical:'Zamioculcas zamiifolia'});
 assert.match(html,/Divide the plant or use leaf cuttings/);assert.doesNotMatch(html,/Provide sturdy support/);
 assert.match(hooks.topicHtml('Soil',{name:'ZZ Plant',botanical:''}),/Species-specific care unavailable/);
});
test('expanded ZZ guide adds practical details with collapsed sources and a single botanical heading',()=>{
 const {hooks,plants}=setup();const html=hooks.topicHtml('Feeding',plants[0]);
 assert.match(html,/Practical steps/);assert.match(html,/once or twice a year/);
 assert.match(html,/<details class="panel care-sources"><summary>Sources/);
 assert.doesNotMatch(html,/<details[^>]*\bopen\b|Source hierarchy:|Care basis|Botanical basis:|Botanical identity:/);
 assert.equal((html.match(/<i>Zamioculcas zamiifolia<\/i>/g)||[]).length,1);
 assert.match(html,/NC State Extension/);assert.match(html,/Product composition and label/);
});
test('all topic sheets render guidance or an explicit additional-evidence gap',()=>{
 const {detail,hooks}=setup();for(const d of Object.values(detail.records))for(const topic of hooks.GUIDE_TOPICS){
  const html=hooks.topicHtml(topic,{name:'User plant',botanical:d.botanical,location:'Indoor'});
  assert.doesNotMatch(html,/undefined|\[object Object\]/,`${d.botanical}/${topic}`);
  assert.match(html,/Sources/);
  if(topic!=='Recommended products')assert.match(html,/Practical steps/);
 }
 const missing=hooks.topicHtml('pH',{name:'ZZ',botanical:'Zamioculcas zamiifolia'});
 assert.match(missing,/No additional verified practical instructions/);
});
test('identity review distinguishes ambiguity, missing names, cultivated groups and coverage gaps using current saved names',()=>{
 const {detail,hooks}=setup();const ps=[
  {id:1,name:'Renamed fern',botanical:'Adiantum'},
  {id:2,name:'Resolved fern',botanical:'Adiantum capillus-veneris'},
  {id:3,name:'Unresearched species',botanical:'Aloe vera'},
  {id:4,name:'Purple orchid',botanical:'Phalaenopsis cultivar'},
  {id:5,name:'Unnamed identity',botanical:''}
 ];
 const entries=detail.identityReview(ps);assert.equal(entries.length,4);
 assert.equal(entries.find(e=>e.id===1).kind,'identity');assert.equal(entries.find(e=>e.id===3).kind,'coverage');
 assert.equal(entries.find(e=>e.id===4).kind,'group');assert.equal(entries.find(e=>e.id===5).kind,'identity');
 const html=hooks.identityReviewHtml(ps);assert.match(html,/Renamed fern/);assert.match(html,/Research coverage needed/);
 assert.doesNotMatch(html,/Resolved fern/);assert.match(html,/does not prove a botanical name is invalid/);
 ps[0].botanical='Adiantum capillus-veneris';assert.equal(detail.identityReview(ps).length,3);
});
test('product matches preserve exclusions, scoped manufacturer references and existing exact-cultivar products',()=>{
 const {detail,care,hooks}=setup();
 assert.equal(detail.products('Cheiridopsis pillansii').length,0);assert.match(detail.productGap('Cheiridopsis pillansii'),/potassium/);
 for(const botanical of ['Begonia maculata','Spathiphyllum wallisii','Hypoestes phyllostachya']){
  assert.equal(detail.products(botanical,'soil').length,0);assert.match(detail.productGap(botanical),/contains peat/);
 }
 for(const d of Object.values(detail.records))for(const p of detail.products(d.botanical)){
  assert.match(p.url,/^https:\/\/www.bunnings.com.au\//);
  for(const id of p.refs||[])assert.ok(detail.sources[id]);
 }
 const name="Citrus × limon 'Meyer'";assert.equal(detail.products(name).length,care.get(name).products.length);
 const html=hooks.topicHtml('Recommended products',{name:'Meyer',botanical:name});assert.match(html,/do not|Do not/);
});
test('new practical script loads before guide actions and is available offline without changing the audit asset',()=>{
 const index=fs.readFileSync(path.join(root,'index.html'),'utf8'),sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
 assert.ok(index.indexOf('botanical-care.js')<index.indexOf('practical-care.js'));
 assert.ok(index.indexOf('practical-care.js')<index.indexOf('app-actions.js'));
 assert.match(index,/practical-care.js\?v=1.0.125/);assert.match(sw,/'\.\/practical-care.js'/);
 assert.match(index,/watering-audit.js\?v=1.0.123/);
});
const requested=[
 ['Maidenhair Fern','Adiantum aethiopicum'],
 ['Peppermint','Mentha x piperita'],
 ['Orchids purple','Phalaenopsis cultivar'],
 ['Orchids lime mini','Phalaenopsis hybrid'],
 ['Peace Lily','Spathiphyllum wallisii'],
 ['Bougainvillea White Stripe','Bougainvillea spectabilis x glabra'],
 ['Ice Plant','Delosperma lehmannii']
];
test('all seven owner-supplied botanical identities open practical comprehensive guides',()=>{
 const {detail,hooks}=setup();
 for(const [name,botanical]of requested){
  assert.ok(detail.getCare(botanical),botanical);
  assert.ok(detail.get(botanical),botanical);
  for(const topic of hooks.GUIDE_TOPICS){
   const html=hooks.topicHtml(topic,{id:name,name,botanical,location:'Indoor',wateringCheckDays:14});
   assert.doesNotMatch(html,/Species-specific care unavailable|undefined|\[object Object\]/,`${name}/${topic}`);
   assert.match(html,/<details class="panel care-sources"><summary>Sources/);
   if(topic!=='Recommended products')assert.match(html,/Practical steps/);
   assert.doesNotMatch(html,/Source hierarchy:|Botanical basis:/);
  }
 }
});
test('four new identities remain comprehensive-only; all seven saved plant records and reminder results remain unchanged',()=>{
 const {ctx,detail,care,hooks,before}=setup();
 for(const b of ['Adiantum aethiopicum','Mentha × piperita','Bougainvillea spectabilis × glabra','Delosperma lehmannii']){
  assert.equal(care.get(b),null);assert.equal(detail.getCare(b).comprehensiveOnly,true);
 }
 const ps=requested.map(([name,botanical],i)=>({id:i,name,botanical,location:i>4?'Outdoor':'Indoor',wateringCheckDays:14,lastWatered:'2026-09-24',photoId:'photo-'+i,photoScale:1.7,notes:'Saved note',history:[{type:'Watered',date:'2026-09-24'}]}));
 const saved=JSON.stringify(ps),audit=ctx.window.PLANT_WATERING_AUDIT;
 const counts=ps.map(p=>audit.interval(p)),descriptions=ps.map(p=>audit.summary(p));
 for(const p of ps){hooks.topicHtml('Watering checks',p);hooks.topicHtml('Propagation',p)}
 assert.equal(JSON.stringify(ps),saved);assert.equal(JSON.stringify(care),before);
 assert.deepEqual(ps.map(p=>audit.interval(p)),counts);assert.deepEqual(ps.map(p=>audit.summary(p)),descriptions);
 for(const p of ps.slice(0,2).concat(ps.slice(5)))assert.match(hooks.topicHtml('Watering checks',p),/Inspect every 14 days/);
});
test('identity review treats orchids and bougainvillea as supported groups rather than invalid names',()=>{
 const {detail}=setup();const ps=requested.map(([name,botanical],i)=>({id:i,name,botanical}));
 const entries=detail.identityReview(ps);assert.equal(entries.length,3);
 for(const e of entries)assert.equal(e.kind,'group');
 assert.ok(entries.some(e=>e.name==='Orchids lime mini'));
 assert.ok(entries.some(e=>e.name==='Bougainvillea White Stripe'));
 assert.equal(detail.getCare('Mentha × piperita').botanical,detail.getCare('Mentha x piperita').botanical);
 assert.equal(detail.getCare('Corpuscularia lehmannii').botanical,'Delosperma lehmannii');
 for(const b of ['Adiantum','Mentha','Phalaenopsis','Bougainvillea','Mesembryanthemum / Delosperma'])assert.equal(detail.getCare(b),null);
});
test('targeted practical details retain primary Australian guidance, supplementary scope and honest limitations',()=>{
 const {detail,hooks}=setup();
 const fern=hooks.topicHtml('Pruning',{name:'Fern',botanical:'Adiantum aethiopicum'});
 assert.match(fern,/new shoots emerge/);assert.match(fern,/Fern Fabulousity/);
 const mint=hooks.topicHtml('Propagation',{name:'Peppermint',botanical:'Mentha x piperita'});
 assert.match(mint,/divide the root ball/i);assert.match(mint,/Controlling Mint/);assert.match(mint,/RHS/);
 const boug=hooks.topicHtml('Growth habit',{name:'White Stripe',botanical:'Bougainvillea spectabilis x glabra'});
 assert.match(boug,/spectoglabra/);assert.match(boug,/not verify a particular named cultivar/);
 const ice=hooks.topicHtml('Watering checks',{name:'Ice Plant',botanical:'Delosperma lehmannii'});
 assert.match(ice,/leaf firmness/);assert.match(ice,/SANBI/);assert.match(ice,/full cultivation text unavailable/);
 assert.match(detail.getCare('Delosperma lehmannii').evidenceGaps,/fixed inspection interval remain gaps/);
});
