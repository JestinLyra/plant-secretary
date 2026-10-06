const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'..');
const identity='Origanum vulgare subsp. hirtum';
function setup(){
 const modal={dataset:{plantId:'oregano'}};
 const plants=[{id:'wrong',name:'Same name',botanical:'Coriandrum sativum'},{id:'oregano',name:'Same name',botanical:identity}];
 const document={querySelector:s=>s==='#plantModal'?modal:null,createElement:()=>({}),head:{appendChild(){}},addEventListener(){}};
 const ctx=vm.createContext({window:{},plants,document});
 vm.runInContext(fs.readFileSync(path.join(root,'watering-audit.js'),'utf8'),ctx);
 vm.runInContext(fs.readFileSync(path.join(root,'botanical-care.js'),'utf8'),ctx);
 let code=fs.readFileSync(path.join(root,'app-actions.js'),'utf8');
 code=code.replace(/\}\)\(\);\s*$/, 'window.testCare={currentPlant,botanicalCare,topicHtml,sourcePanel};})();');
 vm.runInContext(code,ctx);
 return {ctx,plants,modal,care:ctx.window.PLANT_BOTANICAL_CARE,hooks:ctx.window.testCare};
}
test('exact subspecies resolves and display names never select species',()=>{
 const {care,plants,hooks}=setup();
 assert.equal(care.get(identity).botanical,identity);
 assert.equal(care.get('Greek oregano'),null);
 assert.equal(care.get('Origanum vulgare'),null);
 assert.equal(care.get('Origanum'),null);
 plants[1].name='Coriander';
 assert.equal(hooks.botanicalCare(plants[1]).botanical,identity);
 plants[1].botanical='';
 plants[1].name='Greek oregano';
 assert.equal(hooks.botanicalCare(plants[1]),null);
});
test('duplicate display names select the open profile by ID',()=>{
 const {hooks,plants,modal}=setup();
 assert.equal(hooks.currentPlant(),plants[1]);
 modal.dataset.plantId='wrong';
 assert.equal(hooks.currentPlant(),plants[0]);
 modal.dataset.plantId='missing';
 assert.equal(hooks.currentPlant(),null);
});
test('every guide care field has valid source attribution',()=>{
 const {care}=setup();const c=care.get(identity);
 for(const key of ['water','sunlight','soil','ph','feed','habit','prune','pinching','repotting','propagation','problems','seasonal']){
  assert.ok(c[key],key);
  assert.ok(c.fieldSources[key].length,key);
  for(const id of c.fieldSources[key])assert.ok(c.sources.some(s=>s.id===id),id);
 }
 assert.match(c.evidenceGaps,/ANBG/);
 assert.doesNotMatch(c.water,/7.day|app check default/);
 assert.match(c.seasonal,/interpretation/);
 assert.match(c.feed.join(' '),/group.level/);
});
test('field panels show actual supplementary source links and scope',()=>{
 const {hooks,plants}=setup();
 const feed=hooks.topicHtml('Feeding',plants[1]);
 assert.match(feed,/href="https:\/\/www.rhs.org.uk/);
 assert.match(feed,/Supplementary herb-group/);
 assert.doesNotMatch(feed,/href="https:\/\/www.abc.net.au/);
 const habit=hooks.topicHtml('Growth habit',plants[1]);
 assert.match(habit,/href="https:\/\/hortflora.rbg.vic.gov.au/);
 assert.match(habit,/href="https:\/\/www.abc.net.au/);
 assert.doesNotMatch(habit,/href="https:\/\/www.rhs.org.uk/);
});
test('unknown botanical identity never substitutes display-name care',()=>{
 const {hooks}=setup();
 const html=hooks.topicHtml('Watering',{name:'Greek oregano',botanical:'Unknown species'});
 assert.match(html,/Species-specific care unavailable/);
 assert.doesNotMatch(html,/Let container compost dry/);
});
test('profile opening records ID before rendering guide, summary has no name lookup',()=>{
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 assert.match(html,/dataset.plantId=String\(p.id\)/);
 const code=fs.readFileSync(path.join(root,'profile-care-summary-v2.js'),'utf8');
 assert.doesNotMatch(code,/p\.name===name/);
 assert.match(code,/byBotanical\(p.botanical\)/);
});
test('water topic describes soil checks and conditional watering',()=>{
 const {hooks,plants,care}=setup();
 const c=care.get(identity);
 assert.equal(c.interval,null);
 const html=hooks.topicHtml('Watering checks',plants[1]);
 plants[1].location='Outdoor';
 const revised=hooks.topicHtml('Watering checks',plants[1]);
 assert.match(revised,/Check actual moisture/);
 assert.match(revised,/no supported numerical inspection interval/);
 assert.match(revised,/If sufficiently moist/);
 assert.match(revised,/Let container medium dry/);
});
test('soil, feeding and products render the appropriate Bunnings links',()=>{
 const {hooks,plants}=setup();
 const soil=hooks.topicHtml('Soil',plants[1]);
 const feed=hooks.topicHtml('Feeding',plants[1]);
 const products=hooks.topicHtml('Recommended products',plants[1]);
 assert.match(soil,/href="https:\/\/www.bunnings.com.au\/scotts-osmocote-25l-tomato-vegetable-herb-premium-potting-mix_p2962103"/);
 assert.match(feed,/href="https:\/\/www.bunnings.com.au\/yates-500ml-thrive-all-purpose-liquid-plant-food_p2961784"/);
 assert.match(feed,/do not automatically add liquid feed/);
 assert.match(products,/Already contains fertiliser/);
 assert.match(products,/Conditional supplementary feed only/);
 assert.match(products,/not endorsed by the botanical sources/);
 assert.match(products,/check your store for stock/);
 assert.doesNotMatch(products,/No generic product has been substituted/);
});
