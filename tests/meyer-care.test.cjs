const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'..');
const meyer="Citrus × limon 'Meyer'",lemonicious="Citrus × meyeri 'Lemonicious'";
function setup(){
 const plants=[{id:'m',name:'Same label',botanical:'Citrus × limon ‘Meyer’',location:'Outdoor',interval:7,photoId:'original',history:[{type:'Watered',date:'2026-10-01'}]},{id:'l',name:'Same label',botanical:lemonicious,location:'Outdoor'},{id:'g',name:'Lemonicious',botanical:'Citrus limon',location:'Outdoor'}];
 const modal={dataset:{plantId:'m'}};const document={querySelector:s=>s==='#plantModal'?modal:null,createElement:()=>({}),head:{appendChild(){}},addEventListener(){}};
 const ctx=vm.createContext({window:{},plants,document});
 for(const name of ['watering-audit.js','botanical-care.js'])vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),ctx);
 let code=fs.readFileSync(path.join(root,'app-actions.js'),'utf8').replace(/\}\)\(\);\s*$/,'window.testCare={currentPlant,topicHtml};})();');vm.runInContext(code,ctx);
 return {ctx,plants,modal,care:ctx.window.PLANT_BOTANICAL_CARE,audit:ctx.window.PLANT_WATERING_AUDIT,hooks:ctx.window.testCare};
}
test('requested curly-quote Meyer identity resolves to its own guide with botanical aliases',()=>{
 const {care}=setup();for(const name of ['Citrus × limon ‘Meyer’',meyer,"Citrus limon 'Meyer'","Citrus x meyeri 'Meyer'",'Citrus limon Meyer'])assert.equal(care.get(name).botanical,meyer,name);
 assert.equal(care.get('Citrus × limon').botanical,'Citrus limon');
 assert.equal(care.get("Citrus × limon 'Eureka'"),null);
});
test('named Lemonicious stays distinct from broader Meyer, generic lemon and display names',()=>{
 const {care,plants,hooks}=setup();assert.notEqual(care.get(meyer),care.get(lemonicious));
 for(const name of [lemonicious,"Citrus limon 'Lemonicious'","Citrus × limon 'Lemonicious'"])assert.equal(care.get(name).botanical,lemonicious);
 assert.equal(care.get('Citrus Meyer Dwarf Lemonicious®'),null);assert.equal(care.get('Lemonicious'),null);
 plants[0].name='Eureka';assert.equal(hooks.currentPlant().botanical,'Citrus × limon ‘Meyer’');
 assert.equal(care.get(plants[2].botanical).botanical,'Citrus limon');
});
test('all Meyer/Lemonicious fields retain valid links with scope and explicit unresolved values',()=>{
 const {care}=setup();for(const name of [meyer,lemonicious]){const c=care.get(name);
 for(const key of ['water','sunlight','soil','ph','feed','habit','prune','pinching','repotting','propagation','problems','seasonal']){assert.ok(c[key],key);assert.ok(c.fieldSources[key].length,key);for(const id of c.fieldSources[key])assert.ok(c.sources.some(s=>s.id===id),id);}
 assert.match(c.evidenceGaps,/ANBG/);assert.match(c.evidenceGaps,/security check/);assert.match(c.ph,/not established/);
 assert.match(c.sources.find(s=>s.id==='abc-lemon').scope,/not proof/);assert.match(c.sources.find(s=>s.id==='reference').scope,/unseen claims were not copied/);
 }
});
test('new records hydrate saved intervals and preserve saved identity, history and photos',()=>{
 const {plants,audit,care}=setup();assert.equal(plants[0].interval,5);assert.equal(plants[0].photoId,'original');assert.equal(plants[0].history[0].date,'2026-10-01');
 assert.equal(plants[0].botanical,'Citrus × limon ‘Meyer’');
 plants[0].location='Indoor';care.applyToPlant(plants[0]);assert.equal(plants[0].interval,5);
 plants[0].name='Lemonicious';assert.equal(audit.entry(plants[0]).botanical,meyer);
});
test('rendered watering guide retains cultivar sources, conditional watering and labelled reminders',()=>{
 const {hooks,plants,audit}=setup();const html=hooks.topicHtml('Watering checks',plants[0]);
 assert.match(html,/Inspect every 5 days/);assert.match(html,/not an automatic watering schedule/);assert.match(html,/no exact botanical check interval/i);
 assert.match(html,/href="https:\/\/www.yates.com.au\/garden-hub\/meyer-lemon\//);assert.match(html,/href="https:\/\/www.evergreentrees.com.au/);
 assert.match(html,/No live BOM weather adjustment/);assert.doesNotMatch(html,/every 7 days/);
 const refs=audit.sources(plants[1]);assert.ok(refs.some(s=>s.id==='evergreen'));assert.ok(!refs.some(s=>s.id==='yates-meyer'));assert.match(html,/selected by the owner/);assert.match(html,/If sufficiently moist, do nothing/);
});
test('rendered product matches use correct citrus Bunnings products and prevent feed stacking',()=>{
 const {hooks,plants}=setup();const soil=hooks.topicHtml('Soil',plants[0]),feed=hooks.topicHtml('Feeding',plants[0]),products=hooks.topicHtml('Recommended products',plants[0]);
 assert.match(soil,/p2961638/);assert.match(feed,/p2961295/);assert.match(products,/p2961638/);assert.match(products,/p2961295/);
 assert.match(feed,/account for fertiliser already included/);assert.match(feed,/actual pack rate/);assert.match(feed,/Do not apply a fortnightly liquid-feed schedule/);assert.doesNotMatch(feed,/p2961784/);
 assert.match(products,/not endorsed by the botanical sources/);
});
test('plant features explain trade selection without falsely making all Meyer lemons dwarf Lemonicious',()=>{
 const {hooks,plants}=setup();const html=hooks.topicHtml('Plant features',plants[0]);assert.match(html,/Meyer name alone does not identify Lemonicious/);assert.match(html,/two records are kept distinct/);
 const branded=hooks.topicHtml('Plant features',plants[1]);assert.match(branded,/compact named Meyer selection/);assert.match(branded,/1.5–2.5 m/);
});
test('owner-identified factory dwarf lemon migrates by stable ID and generic lemon remains generic',()=>{
 const {care,audit}=setup();const history=[{type:'Watered',date:'2026-10-01'}];const dwarf={id:'p29',name:'Renamed by owner',botanical:'Citrus limon',location:'Outdoor',history,photoId:'keep'};
 care.applyToPlant(dwarf);assert.equal(dwarf.botanical,meyer);assert.equal(dwarf.interval,5);assert.equal(dwarf.history,history);assert.equal(dwarf.photoId,'keep');
 const generic={id:'p28',name:'Lemon — Dwarf',botanical:'Citrus limon',location:'Outdoor'};care.applyToPlant(generic);assert.equal(generic.botanical,'Citrus limon');assert.equal(audit.interval(generic,new Date("2026-10-06T12:00:00Z")),null);
 const other={id:'p29',name:'Lemon — Dwarf',botanical:'Capsicum annuum',location:'Outdoor'};care.applyToPlant(other);assert.equal(other.botanical,'Capsicum annuum');
 const unknown={id:'custom',name:'Lemon — Dwarf',botanical:'Unknown',location:'Outdoor'};care.applyToPlant(unknown);assert.equal(audit.interval(unknown),null);
});
test('five-day reminder reaches scheduling and owner-preferred care wording reaches the rendered guide',()=>{
 const {ctx,care,plants,hooks}=setup();const html=fs.readFileSync(path.join(root,'index.html'),'utf8');for(const name of ['latestWateredAt','daysUntil','dueLabel'])vm.runInContext(html.split('\n').find(s=>s.startsWith('function '+name+'(')),ctx);
 ctx.p={...plants[0],history:[],lastWatered:new Date().toISOString(),interval:7};assert.equal(vm.runInContext('daysUntil(p)',ctx),5);assert.equal(vm.runInContext('dueLabel(p)',ctx),'In 5 days');
 const c=care.get(meyer);assert.match(c.ph,/Slightly acidic/);assert.match(c.soil[0],/humus-rich/);assert.match(c.feed[0],/according to its label/);assert.match(c.prune,/crossing/);assert.match(c.seasonal,/warm, sunny, sheltered/);assert.match(c.problems,/aphids/);assert.match(c.problems,/mealybugs/);
 assert.match(hooks.topicHtml('pH',plants[0]),/plant-finder\/citrus\/9441782/);
 const water=hooks.topicHtml('Watering checks',plants[0]);assert.match(water,/Check earlier if this pot is drying faster/);assert.match(water,/not a published cultivar requirement/);
});
