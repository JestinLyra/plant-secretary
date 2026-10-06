(()=>{
// Inspection reminders are separate from permission to water. No calendar
// frequency is represented as a species-specific published recommendation.
const ABC_INDOOR={label:'ABC Gardening Australia — Water and Humidity',url:'https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846',scope:'General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval.'};
const ABC_POTS={label:'ABC Gardening Australia — Potted Produce',url:'https://www.abc.net.au/gardening/how-to/potted-produce/9431786',scope:'General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency.'};
const UMD={label:'University of Maryland Extension — Containers',url:'https://www.extension.umd.edu/resource/growing-vegetables-containers-and-salad-tables',scope:'Supplementary edible-container monitoring: inspect daily until familiar with drying, especially in summer. No fixed watering calendar.'};
const BOM={label:'BOM — Laverton RAAF climate averages',url:'https://www.bom.gov.au/climate/averages/tables/cw_087031.shtml',scope:'Nearby regional climate context for Altona, not a live forecast or a formula for inspection intervals.'};
const nc=slug=>'https://plants.ces.ncsu.edu/plants/'+slug+'/';
const rows=[
['Adiantum capillus-veneris',1,'Keep the root zone moist, not saturated; do not wait for prolonged drying.',nc('adiantum-capillus-veneris')],
['Begonia maculata',1,'Water moderately during growth; avoid waterlogging.', 'https://www.rhs.org.uk/plants/112222/begonia-maculata-c/details'],
["Philodendron 'Birkin'",3,'Maintain moist but well-drained medium; do not water a saturated pot.',nc('philodendron-birkin')],
['Sedum morganianum',3,'Let the medium dry between waterings; reduce water in winter.',nc('sedum-morganianum')],
['Coriandrum sativum',1,'Maintain just-moist, freely draining medium; avoid drought and saturation.',nc('coriandrum-sativum')],
['Phalaenopsis cultivar',3,'Inspect airy orchid medium and roots; water when almost dry and drain freely. Soil rules do not apply.', 'https://www.rhs.org.uk/plants/phalaenopsis'],
['Phalaenopsis amabilis',3,'Inspect orchid bark; water when almost dry and drain freely.', 'https://www.rhs.org.uk/plants/119644/phalaenopsis-amabilis/details'],
['Spathiphyllum wallisii',1,'Maintain moisture during active growth without leaving the roots waterlogged.', 'https://www.rhs.org.uk/plants/17623/spathiphyllum-wallisii/details'],
['Pilea involucrata',1,'Water moderately during growth; reduce water in cooler conditions.',nc('pilea-involucrata')],
['Gardenia jasminoides',1,'Maintain moist but well-drained medium; avoid waterlogging.',nc('gardenia-jasminoides')],
['Philodendron hederaceum',3,'Inspect the upper mix before watering; never leave standing in water.', 'https://www.abc.net.au/gardening/watering-pot-plants/102997550'],
["Peperomia caperata 'Milano'",3,'Let the upper mix dry before watering; avoid persistent wetness. Species guidance, not a cultivar-specific numerical interval.',nc('peperomia-caperata')],
['Peperomia argyraea',3,'Inspect the upper mix before watering; avoid persistent wetness.',nc('peperomia-argyraea')],
['Epipremnum aureum',3,'Inspect the upper mix; let it dry somewhat before watering, then drain freely.',nc('epipremnum-aureum')],
["Epipremnum aureum 'Marble Queen'",3,'Inspect the upper mix; let it dry somewhat before watering, then drain freely. Species guidance, not a cultivar-specific numerical interval.',nc('epipremnum-aureum')],
['Monstera deliciosa',3,'Allow the top quarter to third of the medium to dry between waterings.',nc('monstera-deliciosa')],
['Callisia repens',3,'Inspect moisture before watering; retain free drainage and reduce water in cool periods.',nc('callisia-repens')],
['Dracaena trifasciata',3,'Let the medium dry between waterings; winter watering is much less frequent than inspections.',nc('dracaena-trifasciata')],
['Curio rowleyanus',3,'Avoid persistent wetness and prolonged drought; inspect the medium and fleshy leaves before watering.',nc('curio-rowleyanus')],
['Haworthia cymbiformis',3,'Avoid persistent wetness in freely draining succulent medium. Exact species check frequency remains unestablished.', 'https://www.abc.net.au/gardening/watering-pot-plants/102997550'],
['Zamioculcas zamiifolia',3,'Only water when the medium is dry; inspecting more often does not mean watering more often.',nc('zamioculcas-zamiifolia')],
['Citrus × microcarpa',3,'Maintain moist but well-drained medium during growth; avoid drought and saturation.',nc('citrus-x-microcarpa')],
['Capsicum annuum',1,'Maintain reliable moisture while growing and fruiting; avoid repeated wilting and waterlogging.',nc('capsicum-annuum')],
['Capsicum chinense',1,'Maintain reliable moisture while growing and fruiting; avoid drought swings and waterlogging.',nc('capsicum-chinense')],
["Citrus × limon 'Meyer'",3,'Water when the upper few centimetres dry; do not let a fruiting container dry completely or remain saturated. Inspect daily outdoors as a practical reminder, not a published cultivar interval.', 'https://www.yates.com.au/garden-hub/meyer-lemon/'],
["Citrus × meyeri 'Lemonicious'",3,'Water when the upper few centimetres dry; do not let a fruiting container dry completely or remain saturated. Inspect daily outdoors as a practical reminder, not a published cultivar interval.', 'https://www.evergreentrees.com.au/products/citrus-meyeri-lemonicious-pbr-lemonicious-meyer-lemon'],
['Citrus limon',3,'Inspect moisture during growth; reduce water in winter without allowing damaging drought.',nc('citrus-x-limon')],
['Petroselinum crispum',1,'Keep actively growing plants evenly moist with free drainage.',nc('petroselinum-crispum')],
['Salvia rosmarinus',3,'Allow some drying between waterings; established plants tolerate drought, but avoid winter wet.',nc('salvia-rosmarinus')],
['Eucalyptus cinerea',3,'Check establishment and container moisture; established ground trees tolerate drier conditions.',nc('eucalyptus-cinerea')],
['Hypoestes phyllostachya',1,'Let the surface begin drying before watering; avoid damaging drought during active growth.',nc('hypoestes-phyllostachya')],
['Curio herreanus',3,'Avoid excess water, especially in winter; adjust watering to growth and actual medium moisture.', 'https://www.rhs.org.uk/plants/537170/curio-herreanus/details'],
['Cheiridopsis pillansii',3,'Summer dormancy: use minimal water only when needed; autumn–spring growth requires closer attention. Avoid splitting from excess water.', 'https://www.llifle.com/Encyclopedia/SUCCULENTS/Family/Aizoaceae/14664/Cheiridopsis_pillansii'],
['Origanum vulgare subsp. hirtum',3,'Let container medium dry before watering; avoid persistent wetness. Established ground plants need much less additional water.',nc('origanum-vulgare-subsp-hirtum')]
];
const entries=Object.fromEntries(rows.map(([botanical,indoor,trigger,url])=>[botanical,{botanical,indoor,trigger,url}]));
function entry(p){const c=window.PLANT_BOTANICAL_CARE?.get(p?.botanical);return c?entries[c.botanical]||null:null}
function season(date=new Date()){const month=Number(new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Melbourne',month:'numeric'}).format(date));return month===12||month<=2?'summer':month<=5?'autumn':month<=8?'winter':'spring'}
function interval(p){const e=entry(p);if(!e)return null;const location=String(p.location||'').trim().toLowerCase();return location==='outdoor'?1:location==='indoor'?e.indoor:null}
function describe(p,date=new Date()){
 const e=entry(p),days=interval(p);if(!e||days===null)return 'Manual moisture checks required. Botanical identity or indoor/outdoor location needs review; no numerical default has been assigned.';
 const outdoors=String(p.location).trim().toLowerCase()==='outdoor';
 const basis=outdoors?'Daily monitoring while learning this pot’s drying pattern. ABC publishes daily summer checks for edible containers; applying daily inspections in other seasons or to other plants is a conservative app choice.':days===1?'Daily inspection is a conservative app choice for moisture-sensitive plants; no published one-day species interval was established.':'Three days is an app interpretation of ABC’s general indoor advice to recheck moist pots in a few days; no published three-day species interval was established.';
 return `Inspect every ${days} ${days===1?'day':'days'} — not an automatic watering schedule. ${e.trigger} ${basis} Evidence gap: no exact botanical check interval established. Assume a suitable, freely draining medium and correctly sized pot. Altona regional season: ${season(date)}; BOM Laverton averages provide climate context only. No live BOM weather adjustment is connected. Heat, wind, recent effective rain and actual pot moisture can require earlier checks. If still moist, withhold water and inspect again; the droplet records actual watering only.`;
}
function summary(p){const e=entry(p),days=interval(p);return !e||days===null?'Manual moisture checks · botanical identity or location needs review. No numerical default.':`Inspect every ${days} ${days===1?'day':'days'} · practical reminder, not a published species interval. ${e.trigger} Water only if needed.`}
function sources(p){const e=entry(p),c=window.PLANT_BOTANICAL_CARE?.get(p?.botanical);const specific=(c?.sources||[]).filter(s=>c.fieldSources?.water?.includes(s.id));const fallback=e?{label:e.url.includes('ncsu')?'NC State Extension — '+e.botanical:e.url.includes('rhs')?'RHS — '+e.botanical:e.url.includes('llifle')?'LLIFLE — '+e.botanical:'ABC — cultivation principles',url:e.url,scope:'Moisture/cultivation evidence; does not establish the numerical inspection reminder. General guidance is not attributed as exact-species evidence.'}:null;return e?[ABC_INDOOR,ABC_POTS,UMD,BOM,...(specific.length?specific:[fallback])]:[]}
window.PLANT_WATERING_AUDIT={entries,entry,interval,describe,summary,sources,season,reviewedAt:'2026-10-06'};
})();
