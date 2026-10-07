(()=>{
// Read-only presentation. Never writes plant records, reminders or storage.
const detail=()=>window.PLANT_PRACTICAL_CARE;
const descriptions={
 'Begonia maculata':'Light, airy, peat-free medium that retains some moisture and drains freely.',
 "Philodendron 'Birkin'":'Airy houseplant medium that retains some moisture without staying saturated.',
 'Sedum morganianum':'Very free-draining, loam-based succulent medium with perlite; peat-free in the selected guidance.',
 'Coriandrum sativum':'Fertile, freely draining medium that stays just moist; peat-free in the selected container guidance.',
 'Pilea involucrata':'Moisture-retentive houseplant medium with good drainage.',
 'Gardenia jasminoides':'Acidic, lime-free, moisture-retentive medium with free drainage; selected guidance prefers peat-free.',
 'Epipremnum aureum':'Airy indoor medium that retains some moisture and drains freely.',
 "Epipremnum aureum 'Goldilocks'":'Fertile, airy medium that retains some moisture and drains freely; RHS species guidance specifies peat-free, loam-based compost.',
 'Delosperma lehmannii':'Freely draining succulent medium; avoid prolonged root-zone wetness.',
 'Adiantum aethiopicum':'Organically rich, moisture-retentive medium with drainage; prevent prolonged drying.',
 "Epipremnum aureum 'Marble Queen'":'Houseplant medium that retains some moisture but drains freely.',
 'Monstera deliciosa':'Humus-rich, airy, freely draining loam-based medium; selected guidance prefers peat-free.',
 'Dracaena trifasciata':'Very freely draining loam/sand-based medium; avoid wet roots in winter.',
 'Curio rowleyanus':'Freely draining succulent medium with low moisture retention.',
 'Haworthia cymbiformis':'Gritty succulent medium with strong mineral drainage; avoid saturation.',
 'Zamioculcas zamiifolia':'Freely draining houseplant medium with a loam/sand component; avoid saturation.',
 'Bougainvillea spectabilis × glabra':'Light, freely draining loam-based container medium; selected guidance prefers peat-free.',
 'Citrus × microcarpa':'Moisture-retentive, loam-based citrus medium with excellent drainage.',
 'Capsicum annuum':'Fertile medium that retains moisture but drains freely; selected guidance prefers peat-free.',
 'Capsicum chinense':'Fertile vegetable/container medium with even moisture and free drainage.',
 'Citrus limon':'Moisture-retentive, freely draining loam-based citrus medium with grit; selected guidance prefers peat-free.',
 "Citrus × limon 'Meyer'":'Humus-rich, slightly acidic medium that retains moisture and drains freely.',
 "Citrus × meyeri 'Lemonicious'":'Humus-rich, slightly acidic medium that retains moisture and drains freely.',
 'Petroselinum crispum':'Fertile, moisture-retentive container medium that drains freely.',
 'Salvia rosmarinus':'Poor to moderately fertile, very freely draining loam-based medium.',
 'Eucalyptus cinerea':'Freely draining neutral-to-acid loam or sandy medium; avoid waterlogging.',
 'Phalaenopsis cultivar':'Chunky, airy bark-based orchid medium; roots need excellent aeration and drainage.',
 'Phalaenopsis amabilis':'Open bark-based orchid medium; ordinary dense soil is unsuitable.',
 'Hypoestes phyllostachya':'Moisture-retentive, freely draining loam-based medium; selected guidance prefers peat-free.',
 'Cheiridopsis pillansii':'Sandy, mineral-rich medium with exceptional drainage; avoid excess potassium.',
 'Mentha × piperita':'Moisture-retentive medium with free drainage, in a container that restrains spreading roots.',
 'Spathiphyllum wallisii':'Peat-free houseplant medium that holds moisture but drains freely.',
 'Curio herreanus':'Very freely draining succulent medium with a sandy/mineral component.',
 'Origanum vulgare subsp. hirtum':'Freely draining herb medium that can dry between waterings; avoid prolonged wetness.',
 'Thymus vulgaris':'Sandy or rocky, freely draining medium; avoid rich, persistently wet mixes.',
 "Peperomia caperata 'Milano'":'Airy indoor medium that drains freely while retaining some moisture.',
 'Peperomia argyraea':'Airy indoor medium with good drainage; avoid dense, persistently wet mixes.'
};
const product=(name,url,manufacturer,basis,unverified=false)=>({field:'soil',name,url,manufacturer,basis,unverified});
const extra={
 edible:product('Scotts Osmocote 25L Tomato, Vegetable & Herb Premium Potting Mix','https://www.bunnings.com.au/scotts-osmocote-25l-tomato-vegetable-herb-premium-potting-mix_p2962103','https://www.lovethegarden.com/au-en/product/scotts-osmocote-tomato-vegetable-herb-potting-mix','Requirement match for fertile herb/vegetable containers. Includes fertiliser; use from the bag according to the pack. No extra feed or amendment is automatically required.'),
 native:product('Scotts Osmocote 25L Native Premium Potting Mix','https://www.bunnings.com.au/scotts-osmocote-25l-native-premium-potting-mix_p2961492','https://www.lovethegarden.com/au-en/product/scotts-osmocote-native-potting-mix','Requirement match for an Australian-native container medium. Manufacturer covers Australian natives; no Eucalyptus cinerea-specific trial was verified. Includes fertiliser.'),
 premium:product('Scotts Osmocote 25L Premium Potting Mix','https://www.bunnings.com.au/scotts-osmocote-25l-premium-potting-mix_p2962139','https://www.lovethegarden.com/au-en/product/scotts-osmocote-premium-potting-mix','Unverified complete match: manufacturer covers shrubs/foliage plants, but exact peat-free and loam-based composition required by this botanical guide has not been verified. Do not treat this as an equivalent recipe.',true),
 perlite:product('Brunnings 5L Perlite','https://www.bunnings.com.au/brunnings-5l-perlite_p3010203','https://brunnings.com.au/product/perlite-5l/','Drainage/aeration amendment match only; not a complete medium. No botanical-specific mixing ratio verified.'),
 citrus:product('Scotts Osmocote 25L Citrus And Fruit Premium Potting Mix','https://www.bunnings.com.au/scotts-osmocote-25l-citrus-and-fruit-premium-potting-mix_p2961638','https://www.lovethegarden.com/au-en/product/scotts-osmocote-citrus-fruit-potting-mix','Citrus container requirement match; includes fertiliser. Exact loam/grit/peat-free equivalence to the selected reference recipe is unverified.',true)
};
function soilInfo(p){
 const c=detail()?.getCare(p?.botanical),d=detail()?.get(p?.botanical);if(!c||!d)return null;
 const description=descriptions[c.botanical]||c.soil?.[0]||'Soil requirements need further research.';
 let products=detail().products(p.botanical,'soil').map(x=>({...x}));
 const n=c.botanical;
 if(!products.length){
  if(['Petroselinum crispum','Coriandrum sativum','Capsicum annuum','Capsicum chinense','Mentha × piperita'].includes(n))products=[{...extra.edible}];
  else if(n==='Eucalyptus cinerea')products=[{...extra.native}];
  else if(n.startsWith('Citrus'))products=[{...extra.citrus}];
  else if(['Salvia rosmarinus','Thymus vulgaris','Cheiridopsis pillansii'].includes(n))products=[{...extra.perlite}];
  else products=[{...extra.premium},{...extra.perlite}];
 }
 if(/peat-free/.test(description))products=products.map(x=>({...x,unverified:true,basis:x.basis+' Peat-free equivalence to the sourced requirement is unverified.'}));
 const gap=(/mineral-rich|Sandy or rocky|loam-based/.test(description)?'Exact mineral/loam proportions and a complete equivalent bag recipe were not verified. ':'')+'No species-tested amendment ratio is established. Products are matches to requirements, not endorsements by the botanical sources. Local Bunnings stock is unverified.';
 return {description,products,gap,reviewedAt:'2026-10-07',scope:c.careScope||'Botanical requirements summarised from the guide’s cited soil evidence.'};
}
const climate={label:'BOM — Laverton RAAF climate averages',url:'https://www.bom.gov.au/climate/averages/tables/cw_087031.shtml',scope:'Nearby Altona climate context. Seasonal monitoring is app interpretation; averages are not a forecast or a numerical check formula.'};
const daily={label:'ABC Gardening Australia — Potted Produce',url:'https://www.abc.net.au/gardening/how-to/potted-produce/9431786',scope:'At least daily summer inspection for edible containers as a group; not daily watering or a species-specific requirement.'};
function seasonalInfo(p){
 const c=detail()?.getCare(p?.botanical),d=detail()?.get(p?.botanical);if(!c||!d)return null;
 const trigger=window.PLANT_WATERING_AUDIT?.entry(p)?.trigger||detail().steps(p.botanical,'water').map(x=>x.text).join(' ')||c.water;
 const refs=[...detail().fieldSources(p.botanical,'water'),...detail().fieldSources(p.botanical,'seasonal'),...(c.sources||[]).filter(s=>[...(c.fieldSources?.water||[]),...(c.fieldSources?.seasonal||[])].includes(s.id)),...window.PLANT_WATERING_AUDIT.sources(p),climate];
 const outdoor=String(p.location||'').toLowerCase()==='outdoor',ground=p.growingIn==='ground',waterCulture=p.growingIn==='water';
 let rows;
 if(waterCulture)rows=[['All seasons — grown in water','Observe water level and root condition; a soil-moisture interval does not apply.'],['Warmer/brighter conditions','Inspect sooner if evaporation increases.'],['Cooler/lower-light conditions','Judge root condition and water quality; do not use a soil calendar.']];
 else if(c.botanical==='Cheiridopsis pillansii')rows=[['Autumn–spring — observed active growth','Inspect medium and leaves during growth; add water only when needed. No published check-day frequency established.'],['Cool/wet Altona conditions','Check drainage and shelter from persistent wet; do not keep mineral medium saturated.'],['Summer — dormancy or very slow growth','Observe the plant; use minimal water only if needed. Some plants continue growing in favourable conditions: verify its actual state. No fixed interval established.']];
 else{
  const edible=['Coriandrum sativum','Petroselinum crispum','Mentha × piperita','Capsicum annuum','Capsicum chinense'].includes(c.botanical)||c.botanical.startsWith('Citrus');
  const dry=['succulent','mineral','rosemary'].includes(d.group)||c.botanical==='Zamioculcas zamiifolia'||c.botanical==='Origanum vulgare subsp. hirtum';
  const orchid=d.group==='orchid';
  const seasonalCare=detail().steps(p.botanical,'seasonal').filter(x=>x.kind!=='App climate interpretation').map(x=>x.text).join(' ')||c.seasonal||'';
  rows=[['Spring (Sep–Nov) — observed new growth',orchid?'Inspect bark and root condition as roots grow; water when the airy medium approaches dryness.':trigger],['Summer (Dec–Feb) — heat or drying wind',outdoor&&edible&&!ground?'At least daily checks — ABC’s edible-container group recommendation. Water only when this plant’s moisture trigger is met; this does not change reminders.':dry?'Inspect sooner during drying heat, but confirm medium and plant condition before watering. Do not infer dormancy from the season alone.':'Inspect sooner if warmth, light or airflow accelerates drying. '+(orchid?'Use bark/root condition, not ordinary soil.':'Use the botanical moisture trigger above.')],['Autumn (Mar–May) — growth changes','Follow observed growth and how quickly the medium dries; reduce watering as demand falls. '+seasonalCare+' '+(c.botanical==='Coriandrum sativum'?'Cooler growth is useful; watch for bolting when warm.':'')],['Winter (Jun–Aug) — cool or low-light conditions',dry?'Inspect drainage; allow the appropriate drying before watering. Cold persistent wetness is a risk.':orchid?'In cool rooms bark dries more slowly; inspect roots and medium before watering and drain fully.':'Inspect root-zone moisture; do not water an already moist pot. Moisture-sensitive plants still need protection from drying.']];
  if(outdoor&&edible&&!ground)refs.push(daily);
 }
 return {botanical:c.botanical,rows,sources:[...new Map(refs.filter(Boolean).map(s=>[s.url,s])).values()],note:'Altona seasonal interpretation of botanical care; indoor conditions and actual growth take precedence. Qualitative frequencies have no fixed day number. The only numerical recommendation shown is explicitly attributed group-level evidence. Guide advice never creates or changes reminders.',gap:'No exact botanical, pot-size and Altona-specific seasonal check-day frequencies were verified. The screenshot’s 10-day and 2–3-week figures are not adopted.'};
}
function soilSources(p){const info=soilInfo(p);return info?info.products.filter(x=>x.manufacturer).map(x=>({label:'Manufacturer — '+x.name,url:x.manufacturer,scope:'Product intended use/composition; '+x.basis})):[]}
window.PLANT_CARE_PRESENTATION={soilInfo,seasonalInfo,soilSources};
})();
