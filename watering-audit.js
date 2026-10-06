(()=>{
// Inspection reminders are separate from permission to water. No calendar
// frequency is represented as a species-specific published recommendation.
const ABC_INDOOR={label:'ABC Gardening Australia — Water and Humidity',url:'https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846',scope:'General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval.'};
const ABC_POTS={label:'ABC Gardening Australia — Potted Produce',url:'https://www.abc.net.au/gardening/how-to/potted-produce/9431786',scope:'General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency.'};
const BOM={label:'BOM — Laverton RAAF climate averages',url:'https://www.bom.gov.au/climate/averages/tables/cw_087031.shtml',scope:'Nearby regional climate context for Altona, not a live forecast or a formula for inspection intervals.'};
const nc=slug=>'https://plants.ces.ncsu.edu/plants/'+slug+'/';
const rows=[
['Adiantum capillus-veneris',null,'Keep the root zone moist, not saturated; do not wait for prolonged drying.',nc('adiantum-capillus-veneris')],
['Begonia maculata',null,'Water moderately during growth; avoid waterlogging.', 'https://www.rhs.org.uk/plants/112222/begonia-maculata-c/details'],
["Philodendron 'Birkin'",null,'Maintain moist but well-drained medium; do not water a saturated pot.',nc('philodendron-birkin')],
['Sedum morganianum',null,'Let the medium dry between waterings; reduce water in winter.',nc('sedum-morganianum')],
['Coriandrum sativum',null,'Maintain just-moist, freely draining medium; avoid drought and saturation.',nc('coriandrum-sativum')],
['Phalaenopsis cultivar',null,'Inspect airy orchid medium and roots; water when almost dry and drain freely. Soil rules do not apply.', 'https://www.rhs.org.uk/plants/phalaenopsis'],
['Phalaenopsis amabilis',null,'Inspect orchid bark; water when almost dry and drain freely.', 'https://www.rhs.org.uk/plants/119644/phalaenopsis-amabilis/details'],
['Spathiphyllum wallisii',null,'Maintain moisture during active growth without leaving the roots waterlogged.', 'https://www.rhs.org.uk/plants/17623/spathiphyllum-wallisii/details'],
['Pilea involucrata',null,'Water moderately during growth; reduce water in cooler conditions.',nc('pilea-involucrata')],
['Gardenia jasminoides',null,'Maintain moist but well-drained medium; avoid waterlogging.',nc('gardenia-jasminoides')],
['Philodendron hederaceum',null,'Inspect the upper mix before watering; never leave standing in water.', 'https://www.abc.net.au/gardening/watering-pot-plants/102997550'],
["Peperomia caperata 'Milano'",null,'Let the upper mix dry before watering; avoid persistent wetness. Species guidance, not a cultivar-specific numerical interval.',nc('peperomia-caperata')],
['Peperomia argyraea',null,'Inspect the upper mix before watering; avoid persistent wetness.',nc('peperomia-argyraea')],
['Epipremnum aureum',null,'Inspect the upper mix; let it dry somewhat before watering, then drain freely.',nc('epipremnum-aureum')],
["Epipremnum aureum 'Marble Queen'",null,'Inspect the upper mix; let it dry somewhat before watering, then drain freely. Species guidance, not a cultivar-specific numerical interval.',nc('epipremnum-aureum')],
['Monstera deliciosa',null,'Allow the top quarter to third of the medium to dry between waterings.',nc('monstera-deliciosa')],
['Callisia repens',null,'Inspect moisture before watering; retain free drainage and reduce water in cool periods.',nc('callisia-repens')],
['Dracaena trifasciata',null,'Let the medium dry between waterings; winter watering is much less frequent than inspections.',nc('dracaena-trifasciata')],
['Curio rowleyanus',null,'Avoid persistent wetness and prolonged drought; inspect the medium and fleshy leaves before watering.',nc('curio-rowleyanus')],
['Haworthia cymbiformis',null,'Avoid persistent wetness in freely draining succulent medium. Exact species check frequency remains unestablished.', 'https://www.abc.net.au/gardening/watering-pot-plants/102997550'],
['Zamioculcas zamiifolia',null,'Keep drier: allow drying between waterings and avoid prolonged wetness. Water-storing rhizomes mean it can go weeks without water; that is not a published soil-check interval.',nc('zamioculcas-zamiifolia')],
['Citrus × microcarpa',null,'Maintain moist but well-drained medium during growth; avoid drought and saturation.',nc('citrus-x-microcarpa')],
['Capsicum annuum',null,'Maintain reliable moisture while growing and fruiting; avoid repeated wilting and waterlogging.',nc('capsicum-annuum')],
['Capsicum chinense',null,'Maintain reliable moisture while growing and fruiting; avoid drought swings and waterlogging.',nc('capsicum-chinense')],
["Citrus × limon 'Meyer'",null,'Keep consistently moist during active growth and fruit development, never waterlogged. If sufficiently moist, do nothing; if drying and the root zone needs moisture, water thoroughly and allow excess water to drain. Reduce watering in winter.', 'https://www.yates.com.au/garden-hub/meyer-lemon/'],
["Citrus × meyeri 'Lemonicious'",null,'Keep consistently moist during active growth and fruit development, never waterlogged. If sufficiently moist, do nothing; if drying and the root zone needs moisture, water thoroughly and allow excess water to drain. Reduce watering in winter.', 'https://www.evergreentrees.com.au/products/citrus-meyeri-lemonicious-pbr-lemonicious-meyer-lemon'],
['Citrus limon',null,'Inspect moisture during growth; reduce water in winter without allowing damaging drought.',nc('citrus-x-limon')],
['Petroselinum crispum',null,'Keep actively growing plants evenly moist with free drainage.',nc('petroselinum-crispum')],
['Salvia rosmarinus',null,'Allow some drying between waterings; established plants tolerate drought, but avoid winter wet.',nc('salvia-rosmarinus')],
['Eucalyptus cinerea',null,'Check establishment and container moisture; established ground trees tolerate drier conditions.',nc('eucalyptus-cinerea')],
['Hypoestes phyllostachya',null,'Let the surface begin drying before watering; avoid damaging drought during active growth.',nc('hypoestes-phyllostachya')],
['Curio herreanus',null,'Avoid excess water, especially in winter; adjust watering to growth and actual medium moisture.', 'https://www.rhs.org.uk/plants/537170/curio-herreanus/details'],
['Cheiridopsis pillansii',null,'Summer dormancy: use minimal water only when needed; autumn–spring growth requires closer attention. Avoid splitting from excess water.', 'https://www.llifle.com/Encyclopedia/SUCCULENTS/Family/Aizoaceae/14664/Cheiridopsis_pillansii'],
['Origanum vulgare subsp. hirtum',null,'Let container medium dry before watering; avoid persistent wetness. Established ground plants need much less additional water.',nc('origanum-vulgare-subsp-hirtum')]
];
const entries=Object.fromEntries(rows.map(([botanical,indoor,trigger,url])=>[botanical,{botanical,indoor,trigger,url}]));
function entry(p){const c=window.PLANT_BOTANICAL_CARE?.get(p?.botanical);return c?entries[c.botanical]||null:null}
function season(date=new Date()){const month=Number(new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Melbourne',month:'numeric'}).format(date));return month===12||month<=2?'summer':month<=5?'autumn':month<=8?'winter':'spring'}
const edible=new Set(['Coriandrum sativum','Citrus × microcarpa','Capsicum annuum','Capsicum chinense',"Citrus × limon 'Meyer'","Citrus × meyeri 'Lemonicious'",'Citrus limon','Petroselinum crispum','Salvia rosmarinus','Origanum vulgare subsp. hirtum']);
const succulents=new Set(['Sedum morganianum','Dracaena trifasciata','Curio rowleyanus','Haworthia cymbiformis','Curio herreanus','Cheiridopsis pillansii']);
const article=(label,url,scope)=>({label:'ABC Gardening Australia — '+label,url:'https://www.abc.net.au/gardening/'+url,scope});
function primary(e){
 if(e.botanical==='Zamioculcas zamiifolia')return article('Bringing the Outdoors In','how-to/bringing-the-outdoors-in/9436710','Explicit ZZ guidance: its underground storage organs allow weeks without water. No numerical inspection frequency.');
 if(e.botanical==='Dracaena trifasciata')return article('Snake Plants','how-to/snake-plants/104347544','Snake-plant group: let the medium dry between waterings; prevent waterlogging. No numerical inspection frequency.');
 if(succulents.has(e.botanical))return article('Watering Succulents','how-to/watering-succulents/13146268','Succulent-group principles, not exact species/dormancy advice: mostly dry between watering; small pots can dry quickly in summer.');
 if(e.botanical==='Adiantum capillus-veneris')return article('Adiantum','plant-finder/adiantum/9441730',"Genus guidance: keep just moist. Plant Finder credits Flora’s Gardening Cards / Global Book Publishing; no species check interval.");
 if(e.botanical.startsWith('Phalaenopsis'))return article('Orchid Revival','how-to/orchid-revival/12096898','Phalaenopsis genus/hybrids: airy bark, inspect roots, drain freely; no fixed inspection interval.');
 return edible.has(e.botanical)?ABC_POTS:ABC_INDOOR;
}
function interval(p,date=new Date()){
 const e=entry(p);if(!e)return null;
 const location=String(p.location||'').trim().toLowerCase();if(!['outdoor','indoor'].includes(location))return null;
 // Existing records do not distinguish pots from ground planting. This app's
 // policy assumes a correctly sized container; explicitly ground-grown records
 // cannot receive the container-only summer rule.
 if(location==='outdoor'&&p.growingIn!=='ground'&&season(date)==='summer'&&edible.has(e.botanical))return 1;
 const preference=window.PLANT_BOTANICAL_CARE?.get(p.botanical)?.inspectionPreference;
 return preference?.days||null;
}
const weatherSnapshot={issuedAt:'2026-10-06T09:48:00Z',expiresAt:'2026-10-07T09:48:00Z',label:'BOM Altona forecast, issued 8:48 pm AEDT 6 October 2026',url:'https://www.bom.gov.au/places/vic/altona/forecast/',text:'7 October: 10–16°C, 0 mm forecast rain; 8 October: 7–22°C, 0 mm; 9 October: 12–25°C, 0 mm, Melbourne-area northerly winds up to 40 km/h. 10 October: 15–20°C, 0–4 mm possible rain.'};
function weatherContext(p,date=new Date()){
 const current=+date>=Date.parse(weatherSnapshot.issuedAt)&&+date<Date.parse(weatherSnapshot.expiresAt);
 const outdoors=String(p?.location||'').trim().toLowerCase()==='outdoor';
 const forecast=current?weatherSnapshot.label+'. '+weatherSnapshot.text:'The stored 6 October 2026 BOM forecast is not current. Open BOM for the latest Altona forecast.';
 return forecast+' '+(outdoors?'Practical interpretation: wind and warmer conditions can accelerate drying, so inspect exposed pots earlier. Forecast rain does not establish that this pot received enough water.':'Outdoor rainfall cannot determine moisture in an indoor pot; indoor light, heating, airflow and actual medium moisture govern the check.')+' Altona regional season: '+season(date)+'. No live BOM weather adjustment is connected; weather does not generate an unsupported numerical interval.';
}
function describe(p,date=new Date()){
 const e=entry(p),days=interval(p,date);if(!e)return 'Manual moisture checks required. Botanical identity needs review; no numerical default has been assigned. '+weatherContext(p,date);
 const preference=window.PLANT_BOTANICAL_CARE?.get(p.botanical)?.inspectionPreference;
 const basis=days===1?'Gardening Australia recommends at least daily summer checks for edible containers. This is group-level monitoring advice, not daily watering or an exact species requirement.':days!==null&&preference?'Five-day baseline selected by the owner: a practical app choice, not a published cultivar requirement. Check earlier if this pot is drying faster.':'Manual moisture checks: no supported numerical inspection interval was established for this botanical record in these conditions. The previous blanket daily/three-day countdown has been removed. Learn this pot’s drying pattern rather than use a fabricated number. Moisture-sensitive plants need close observation; drought-tolerant plants should not be kept constantly wet.';
 return (days===null?'Check actual moisture — no fixed countdown.':`Inspect every ${days} ${days===1?'day':'days'} — not an automatic watering schedule.`)+' '+e.trigger+' '+basis+' Evidence gap: no exact botanical check interval established. Assume a suitable, freely draining medium and correctly sized pot. '+weatherContext(p,date)+' If sufficiently moist, do nothing; the droplet records actual watering only, not an inspection.';
}
function summary(p,date=new Date()){const e=entry(p),days=interval(p,date);return !e?'Manual moisture checks · botanical identity needs review. No numerical default.':(days===null?'Moisture checks · no source-supported fixed interval.':`Inspect every ${days} ${days===1?'day':'days'} · ${days===1?'ABC summer edible-container guidance':'owner-selected reminder'}.`)+` ${e.trigger} Water only if needed.`}
function sources(p){const e=entry(p),c=window.PLANT_BOTANICAL_CARE?.get(p?.botanical);if(!e)return[];const specific=(c?.sources||[]).filter(s=>c.fieldSources?.water?.includes(s.id));const fallback={label:e.url.includes('ncsu')?'NC State Extension — '+e.botanical:e.url.includes('rhs')?'RHS — '+e.botanical:e.url.includes('llifle')?'LLIFLE — '+e.botanical:'Cultivation reference — '+e.botanical,url:e.url,scope:'Supplementary moisture/cultivation evidence fills the species/cultivar detail gap; it does not establish a numerical soil-check interval.'};return [primary(e),BOM,{label:'BOM — Altona forecast',url:weatherSnapshot.url,scope:'Dated snapshot, issued 6 October 2026; expires after 24 hours. No live feed or pot-moisture formula.'},...(specific.length?specific:[fallback])];}
window.PLANT_WATERING_AUDIT={entries,entry,interval,describe,summary,sources,season,weatherContext,weatherSnapshot,reviewedAt:'2026-10-06'};
})();
