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
 const {care,detail}=setup();assert.equal(Object.keys(detail.records).length,41);
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
test('new practical script loads before guide actions and is available offline with the manual-only audit asset',()=>{
 const index=fs.readFileSync(path.join(root,'index.html'),'utf8'),sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
 assert.ok(index.indexOf('botanical-care.js')<index.indexOf('practical-care.js'));
 assert.ok(index.indexOf('practical-care.js')<index.indexOf('app-actions.js'));
 assert.match(index,/practical-care.js\?v=1.0.134/);assert.match(sw,/'\.\/practical-care.js'/);
 assert.match(index,/watering-audit.js\?v=1.0.129/);
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
test('Haworthia repotting labels root-based pot sizing as synthesis without changing saved settings',()=>{
 const {ctx,detail,hooks,care,before}=setup();
 const p={id:'p20',name:'Window Boat',botanical:'Haworthia cymbiformis',location:'Indoor',wateringCheckDays:15,lastWatered:'2026-10-03',photo:'saved',photoScale:1.2,history:[{type:'Watered',date:'2026-10-03'}]},saved=JSON.stringify(p);
 const html=hooks.topicHtml('Repotting',p);
 assert.match(html,/only slightly larger with drainage holes/);
 assert.match(html,/actual root system with a little growing room/);
 assert.match(html,/Size it from the roots, rather than the leaf rosette alone/);
 assert.match(html,/Practical synthesis — not a published exact-species formula/);
 assert.match(html,/no controlled comparison/);
 assert.match(html,/Happy Succas/);assert.match(html,/Overpotting/);assert.match(html,/Container \(Pot\)/);
 assert.match(html,/<details class="panel care-sources"><summary>Sources/);
 assert.doesNotMatch(html,/<details[^>]*\bopen\b|undefined|\[object Object\]/);
 const refs=detail.fieldSources(p.botanical,'repotting').map(s=>s.id);
 for(const ref of ['display','pot','haworthia-pot-au','haworthia-overpotting','haworthia-root-room'])assert.ok(refs.includes(ref),ref);
 assert.equal(detail.get('Window Boat'),null);assert.equal(ctx.window.PLANT_WATERING_AUDIT.summary(p),'Check every 15 days.');
 assert.equal(ctx.window.PLANT_WATERING_AUDIT.summary({...p,wateringCheckDays:null}),'');
 assert.equal(JSON.stringify(p),saved);assert.equal(JSON.stringify(care),before);
});
test('Haworthia common problems uses scoped sources and leaves owner data and reminders unchanged',()=>{
 const {ctx,detail,hooks,care,before}=setup();
 const p={id:'p20',name:'Window Boat',botanical:'Haworthia cymbiformis',location:'Indoor',wateringCheckDays:15,lastWatered:'2026-10-01',photo:'saved',photoScale:1.4,history:[{type:'Watered',date:'2026-10-01'}]};
 const saved=JSON.stringify(p),html=hooks.topicHtml('Common problems',p),a=ctx.window.PLANT_WATERING_AUDIT;
 for(const text of ['Overwatering / root rot','Dehydration','Light or water stress','Mealybugs','Cold / frost','not a measured ranking'])assert.ok(html.includes(text),text);
 for(const id of ['display','haworthia-small','haworthia-water-diagnosis','haworthia-problems','apvma'])assert.ok(detail.fieldSources(p.botanical,'problems').some(s=>s.id===id),id);
 assert.match(html,/<details class="panel care-sources"><summary>Sources/);
 assert.match(html,/<details class="care-limitations"><summary>Evidence gaps/);
 assert.doesNotMatch(html,/<details[^>]*\bopen\b|undefined|\[object Object\]/);
 assert.equal(detail.get('Window Boat'),null);
 assert.equal(a.interval(p),15);assert.equal(a.summary(p),'Check every 15 days.');
 assert.equal(a.summary({...p,wateringCheckDays:null}),'');
 assert.equal(JSON.stringify(p),saved);assert.equal(JSON.stringify(care),before);
});
test('bougainvillea Australian update retains identity scope, field sources and all saved data',()=>{
 const {ctx,detail,hooks,care,before}=setup(),botanical='Bougainvillea spectabilis x glabra';
 const p={id:'boug',name:'White Stripe',botanical,location:'Outdoor',wateringCheckDays:9,lastWatered:'2026-10-01',photo:'saved',photoScale:1.5,history:[{type:'Watered',date:'2026-10-01'}]};
 const saved=JSON.stringify(p),a=ctx.window.PLANT_WATERING_AUDIT;
 assert.equal(detail.getCare(botanical).botanical,'Bougainvillea spectabilis × glabra');
 assert.equal(detail.getCare('Bougainvillea × spectoglabra').botanical,detail.getCare(botanical).botanical);
 assert.equal(detail.get('White Stripe'),null);
 for(const field of ['sunlight','water','soil','feed','prune','repotting','propagation','seasonal'])assert.ok(detail.fieldSources(botanical,field).some(s=>s.id==='bunnings-bougainvillea'),field);
 assert.match(hooks.topicHtml('Sunlight',p),/full sun/);
 assert.match(hooks.topicHtml('Watering checks',p),/Inspect every 9 days/);
 assert.match(hooks.topicHtml('Watering checks',p),/neither source supplies a fixed checking interval/);
 assert.match(hooks.topicHtml('Pruning',p),/after the flowering flush/);
 assert.match(hooks.topicHtml('Repotting',p),/move up one pot size/);
 assert.match(hooks.topicHtml('Feeding',p),/low-nitrogen, higher-potassium/);
 assert.match(hooks.topicHtml('Feeding',p),/Yates 1kg Thrive Flower and Fruit/);
 assert.match(hooks.topicHtml('Feeding',p),/not a hybrid-tested requirement/);
 assert.match(hooks.topicHtml('Plant features',p),/not verify a particular named cultivar/);
 for(const topic of hooks.GUIDE_TOPICS){const html=hooks.topicHtml(topic,p);assert.doesNotMatch(html,/<details[^>]*\bopen\b|undefined|\[object Object\]/)}
 assert.equal(a.interval(p),9);assert.equal(a.summary(p),'Check every 9 days.');
 assert.equal(a.summary({...p,wateringCheckDays:null}),'');
 assert.equal(JSON.stringify(p),saved);assert.equal(JSON.stringify(care),before);
});
test('Goldilocks gets named evidence and scoped supplementary care without changing plant data or reminders',()=>{
 const {ctx,detail,hooks,care,before}=setup(),botanical="Epipremnum aureum ‘Goldilocks’";
 vm.runInContext(fs.readFileSync(path.join(root,'care-presentation.js'),'utf8'),ctx);
 const p={id:'gold',name:'ZZ Plant',botanical,location:'Indoor',wateringCheckDays:8,lastWatered:'2026-10-03',photo:'saved',photoScale:1.4,history:[{type:'Watered',date:'2026-10-03'}]};
 const saved=JSON.stringify(p),a=ctx.window.PLANT_WATERING_AUDIT;
 assert.equal(detail.getCare(botanical).botanical,"Epipremnum aureum 'Goldilocks'");
 assert.equal(detail.get('Goldilocks Gold'),null);
 const water=hooks.topicHtml('Watering checks',p);
 assert.match(water,/upper 2 cm/);assert.match(water,/No fixed checking days/);
 assert.match(water,/Inspect every 8 days/);assert.match(water,/Bunnings — Goldilocks Pothos/);
 assert.match(water,/<details class="panel care-sources"><summary>Sources/);
 assert.match(water,/<details class="care-watering-notes"><summary>Weather/);
 assert.doesNotMatch(water,/<details[^>]*\bopen\b/);
 assert.match(hooks.topicHtml('Feeding',p),/UK April–October/);
 assert.match(hooks.topicHtml('Pruning',p),/Indoor First Aid/);
 const soil=ctx.window.PLANT_CARE_PRESENTATION.soilInfo(p);
 assert.match(soil.description,/peat-free, loam-based/);
 assert.ok(soil.products.every(x=>x.unverified));
 for(const topic of hooks.GUIDE_TOPICS)assert.doesNotMatch(hooks.topicHtml(topic,p),/undefined|\[object Object\]/);
 assert.equal(a.interval(p),8);assert.equal(a.summary(p),'Check every 8 days.');
 assert.equal(JSON.stringify(p),saved);assert.equal(JSON.stringify(care),before);
 assert.equal(a.summary({...p,wateringCheckDays:null}),'');
});
test('Greek oregano Bunnings practical details retain field attribution and subspecies scope',()=>{
 const {detail,hooks,care}=setup(),name='Origanum vulgare subsp. hirtum';
 const p={name:'Greek oregano',botanical:name,location:'Outdoor',wateringCheckDays:5};
 for(const field of ['sunlight','water','soil','feed','prune','repotting','propagation','problems'])assert.ok(detail.fieldSources(name,field).some(s=>s.id==='bunnings-oregano'),field);
 assert.match(hooks.topicHtml('Feeding',p),/Routine fertiliser is usually unnecessary/);
 assert.match(hooks.topicHtml('Propagation',p),/6–8 weeks/);
 assert.match(hooks.topicHtml('Propagation',p),/not a subspecies hirtum trial/);
 assert.match(hooks.topicHtml('Propagation',p),/How to grow and harvest oregano/);
 assert.doesNotMatch(hooks.topicHtml('Propagation',p),/<details[^>]*\bopen\b/);
 assert.equal(detail.products(name).length,care.get(name).products.length);
 assert.ok(detail.fieldSources(name,'soil').some(s=>s.id==='abc-pizza'));
 assert.match(detail.get(name).gap,/fixed inspection days/);
 assert.equal(detail.get('Greek oregano'),null);
});
test('Greek oregano rendering keeps reminders, photos, history and profile summaries intact',()=>{
 const {ctx,care,hooks}=setup();
 const p={name:'Greek oregano',botanical:'Origanum vulgare subsp. hirtum',location:'Outdoor',wateringCheckDays:5,lastWatered:'2026-10-03',photoScale:1.3,history:[{type:'Watered',date:'2026-10-03'}]};
 const before=JSON.stringify(p),profile=JSON.stringify(care.get(p.botanical)),interval=ctx.window.PLANT_WATERING_AUDIT.interval(p);
 for(const topic of hooks.GUIDE_TOPICS)hooks.topicHtml(topic,p);
 assert.equal(JSON.stringify(p),before);assert.equal(JSON.stringify(care.get(p.botanical)),profile);
 assert.equal(ctx.window.PLANT_WATERING_AUDIT.interval(p),interval);
});
test('Watermelon Peperomia uses Bunnings details with field-linked sources and label-specific products',()=>{
 const {detail,hooks}=setup();
 const p={name:'Renamed plant',botanical:'Peperomia argyreia',location:'Indoor',wateringCheckDays:14};
 const water=hooks.topicHtml('Watering checks',p);
 assert.match(water,/2.5–5 cm/);assert.match(water,/No fixed check days/);
 assert.match(water,/Inspect every 14 days/);assert.match(water,/Bunnings — How to grow and propagate peperomias/);
 assert.doesNotMatch(water,/<details[^>]*\bopen\b/);
 for(const field of ['habit','water','sunlight','soil','feed','prune','repotting','propagation','problems'])assert.ok(detail.fieldSources(p.botanical,field).some(s=>s.id==='bunnings-peperomia'),field);
 assert.match(hooks.topicHtml('Propagation',p),/5–7 cm/);
 assert.match(hooks.topicHtml('Repotting',p),/1–2 years/);
 const products=detail.products(p.botanical);
 assert.equal(products.length,3);assert.ok(products.some(x=>x.name==='Brunnings 5L Perlite'));
 assert.ok(products.some(x=>x.name==='Scotts Osmocote 1L Pour+Feed Indoor Plants'));
 assert.match(hooks.topicHtml('Feeding',p),/ready to use/);
 assert.match(detail.get(p.botanical).gap,/numerical pH|perlite ratio/);
 assert.equal(detail.get('Watermelon Peperomia'),null);
 assert.equal(detail.products("Peperomia caperata 'Milano'",'feed')[0].name,'Yates 500mL Thrive Indoor Plants & Ferns Liquid Plant Food');
});
test('Watermelon Bunnings rendering preserves existing profile record and device data',()=>{
 const {care,detail,hooks,ctx}=setup();
 const p={id:'melon',name:'Watermelon',botanical:'Peperomia argyreia',location:'Indoor',wateringCheckDays:8,lastWatered:'2026-10-01',photoScale:1.5,photo:'existing-photo',history:[{type:'Watered',date:'2026-10-01'}]};
 const saved=JSON.stringify(p),profile=JSON.stringify(care.get(p.botanical)),interval=ctx.window.PLANT_WATERING_AUDIT.interval(p);
 for(const topic of hooks.GUIDE_TOPICS)hooks.topicHtml(topic,p);
 assert.equal(JSON.stringify(p),saved);assert.equal(JSON.stringify(care.get(p.botanical)),profile);
 assert.equal(ctx.window.PLANT_WATERING_AUDIT.interval(p),interval);
 assert.equal(detail.get('Peperomia argyreia'),detail.get('Peperomia argyraea'));
});
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

test('Brasil habit uses Australian cultivar evidence without changing other care or saved records',()=>{
 const {ctx,detail,hooks,care,before}=setup(),botanical="Philodendron hederaceum ‘Brasil’";
 const p={id:'brasil',name:'Brasil Philodendron',botanical,wateringCheckDays:7,photoScale:1.4,history:[{type:'Watered',date:'2026-10-01'}]};
 const saved=JSON.stringify(p);
 for(const field of detail.fields.filter(x=>x!=='habit')){
  assert.equal(JSON.stringify(detail.steps(botanical,field)),JSON.stringify(detail.steps('Philodendron hederaceum',field)),field);
  assert.equal(JSON.stringify(detail.fieldSources(botanical,field)),JSON.stringify(detail.fieldSources('Philodendron hederaceum',field)),field);
 }
 const html=hooks.topicHtml('Growth habit',p);
 assert.match(html,/Evergreen vine; climbing with support or trailing from pots/);
 assert.match(html,/Florafolia/);assert.match(html,/Plant Nest/);assert.match(html,/Bunnings/);
 assert.match(html,/A Brasil-specific growing-habit statement was not verified/);
 assert.equal(detail.get('Brasil Philodendron'),null);
 assert.deepEqual(Array.from(detail.steps('Philodendron hederaceum','habit')[0].refs),['heartleaf']);
 for(const topic of hooks.GUIDE_TOPICS)assert.doesNotMatch(hooks.topicHtml(topic,p),/undefined|\[object Object\]/);
 assert.equal(JSON.stringify(p),saved);assert.equal(JSON.stringify(care),before);
 assert.equal(ctx.window.PLANT_WATERING_AUDIT.interval(p),7);
});
