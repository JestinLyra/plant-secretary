(()=>{
const norm=s=>String(s||'').trim().toLowerCase().replace(/\s+/g,' ');
const records={
'cheiridopsis pillansii':{
 botanical:'Cheiridopsis pillansii',interval:14,light:'sun',ph:'6.0–7.5',demand:'dry',group:'succulent',
 soil:['Very fast-draining, mineral-rich mesemb/succulent mix','Cacti & succulent mix amended heavily with pumice, perlite or coarse mineral grit'],
 feed:['Feed very sparingly during active growth','Diluted cactus/succulent fertiliser only if needed'],
 prune:'No routine pruning · remove only fully dry loose sheaths as needed',
 water:'Winter-growing succulent: during active autumn–spring growth, water thoroughly only after the mix has dried completely. In summer dormancy, keep nearly dry and water minimally only if the plant begins to shrivel.',
 lightGuide:'Bright sun or very bright light during active growth; protect from excessive heat/harsh summer exposure.'
 }
};
function classify(botanical){const n=norm(botanical);if(/gardenia/.test(n))return'acid';if(/phalaenopsis/.test(n))return'orchid';if(/citrus/.test(n))return'citrus';if(/coriandrum|mentha|petroselinum|capsicum/.test(n))return'herb';if(/sedum|curio|haworthia|cheiridopsis|mesembryanthemum|delosperma/.test(n))return'succulent';if(/monstera|epipremnum|philodendron/.test(n))return'aroid';if(/eucalyptus/.test(n))return'native';if(/salvia rosmarinus|bougainvillea/.test(n))return'drymix';return'indoor'}
const botanicalCare={};
try{
 const base=typeof BASE_PLANTS!=='undefined'?BASE_PLANTS:(window.BASE_PLANTS||[]);
 for(const row of base||[]){
  const key=norm(row[1]); if(!key||records[key])continue;
  botanicalCare[key]={botanical:row[1],interval:Number(row[3]),light:row[4],ph:row[5],demand:row[6],group:classify(row[1])};
 }
}catch(_){}
Object.assign(botanicalCare,records);
function get(botanical){return botanicalCare[norm(botanical)]||null}
function applyToPlant(p){
 const c=get(p?.botanical); if(!p||!c)return false;
 if(Number.isFinite(c.interval))p.interval=c.interval;
 if(c.light)p.light=c.light;
 if(c.ph)p.ph=c.ph;
 if(c.demand)p.demand=c.demand;
 return true;
}
function hydrateAll(){
 let changed=false;
 try{
  const list=typeof plants!=='undefined'?plants:(window.plants||[]);
  for(const p of list||[])if(applyToPlant(p))changed=true;
 }catch(_){}
 return changed;
}
window.PLANT_BOTANICAL_CARE={normalize:norm,get,applyToPlant,hydrateAll,records:botanicalCare};
const originalSave=window.save;
if(typeof originalSave==='function'){
 window.save=function(){
  hydrateAll();
  return originalSave.apply(this,arguments);
 };
 try{save=window.save}catch(_){}
}
if(hydrateAll()&&typeof originalSave==='function')originalSave();
})();