const plants=[
{id:'begonia',name:'Begonia',place:'indoor',base:6,sun:'⛅️'},
{id:'birkin-green',name:'Birkin — green pot',place:'indoor',base:8,sun:'⛅️'},
{id:'birkin-white',name:'Birkin — white pot',place:'indoor',base:8,sun:'⛅️'},
{id:'gardenia-radicans',name:'Gardenia',place:'indoor',base:5,sun:'🌤️'},
{id:'golden-pothos',name:'Golden Pothos',place:'indoor',base:8,sun:'⛅️'},
{id:'maidenhair',name:'Maidenhair Fern',place:'indoor',base:3,sun:'⛅️'},
{id:'marble-queen',name:'Marble Queen Pothos',place:'indoor',base:8,sun:'⛅️'},
{id:'many',name:'Monstera — thick',place:'indoor',base:8,sun:'⛅️'},
{id:'konti',name:'Monstera — thin',place:'indoor',base:8,sun:'⛅️'},
{id:'moon-valley',name:'Moon Valley',place:'indoor',base:5,sun:'⛅️'},
{id:'orchid-purple',name:'Orchids — Purple',place:'indoor',base:8,sun:'⛅️'},
{id:'orchid-white',name:'Orchids — White',place:'indoor',base:8,sun:'⛅️'},
{id:'peace-lily',name:'Peace Lily',place:'indoor',base:5,sun:'⛅️'},
{id:'pink-lady',name:'Pink Lady',place:'indoor',base:7,sun:'🌤️'},
{id:'baby-snake',name:'Snake Plant — Bub',place:'indoor',base:7,sun:'⛅️'},
{id:'mama-snake',name:'Snake Plant — Mum',place:'indoor',base:18,sun:'⛅️'},
{id:'string-of-pearls',name:'Variegated String of Pearls',place:'indoor',base:12,sun:'🌤️'},
{id:'zz-thick',name:'ZZ Plant — Thick',place:'indoor',base:20,sun:'☁️'},
{id:'zz-thin',name:'ZZ Plant — Thin',place:'indoor',base:20,sun:'☁️'},
{id:'bougainvillea',name:'Bougainvillea — White',place:'outdoor',base:6,sun:'☀️'},
{id:'calamansi',name:'Calamansi — Dwarf',place:'outdoor',base:4,sun:'☀️'},
{id:'chilli-firecracker',name:'Firecracker — Chilli',place:'outdoor',base:3,sun:'☀️'},
{id:'habanero',name:'Habanero',place:'outdoor',base:3,sun:'☀️'},
{id:'jalapeno',name:'Jalapeño',place:'outdoor',base:3,sun:'☀️'},
{id:'regular-lemon',name:'Lemon',place:'outdoor',base:4,sun:'☀️'},
{id:'dwarf-lemon',name:'Lemon — Dwarf',place:'outdoor',base:4,sun:'☀️'},
{id:'mint',name:'Mint',place:'outdoor',base:3,sun:'🌤️'},
{id:'parsley',name:'Parsley',place:'outdoor',base:3,sun:'🌤️'},
{id:'rosemary',name:'Rosemary — purple flowers',place:'outdoor',base:8,sun:'☀️'},
{id:'thai-peppers',name:'Thai Peppers',place:'outdoor',base:3,sun:'☀️'},
{id:'chilli-timble',name:'Timble — Chilli',place:'outdoor',base:3,sun:'☀️'}
];


const soilPreference={
  'gardenia-radicans':'🍋',
  'begonia':'🍋',
  'golden-pothos':'🍋',
  'marble-queen':'🍋',
  'many':'🍋',
  'konti':'🍋',
  'moon-valley':'🍋',
  'peace-lily':'🍋',
  'birkin-green':'🍋',
  'birkin-white':'🍋',
  'orchid-purple':'🍋',
  'orchid-white':'🍋',
  'calamansi':'🍋',
  'regular-lemon':'🍋',
  'dwarf-lemon':'🍋',
  'rosemary':'🪨'
};
const sunlight={
  'gardenia-radicans':'🌤️','mama-snake':'⛅️','baby-snake':'⛅️','peace-lily':'⛅️',
  'golden-pothos':'⛅️','marble-queen':'⛅️','moon-valley':'⛅️',
  'many':'⛅️','konti':'⛅️','birkin-green':'⛅️','birkin-white':'⛅️',
  'zz-thick':'☁️','zz-thin':'☁️','maidenhair':'⛅️','begonia':'⛅️',
  'orchid-purple':'⛅️','orchid-white':'⛅️','pink-lady':'🌤️','string-of-pearls':'🌤️',
  'bougainvillea':'☀️','dwarf-lemon':'☀️','regular-lemon':'☀️','calamansi':'☀️',
  'rosemary':'☀️','mint':'🌤️','parsley':'🌤️','thai-peppers':'☀️',
  'chilli-timble':'☀️','chilli-firecracker':'☀️','habanero':'☀️','jalapeno':'☀️'
};

const commonProfiles={
  pothos:{tag:'Easy • trailing • forgiving',light:'Bright indirect light is best. Avoid harsh direct sun.',water:'Water when the top 2–3 cm of mix is dry.',soil:'Well-draining indoor potting mix with added perlite.',temp:'18–30°C; protect from cold drafts.',humidity:'Average indoor humidity is usually suitable.',fertiliser:'Balanced liquid feed monthly in spring and summer.',pruning:'Trim long vines above a node to encourage fuller growth.',propagation:['Cut below a node with at least one healthy leaf.','Place the node in water or moist propagation mix.','Pot up once roots are well developed.'],tips:['Wipe leaves occasionally.','Yellow leaves often suggest excess moisture.','Rotate for even growth.']},
  monstera:{tag:'Bold • climbing • tropical',light:'Bright indirect light; gentle morning sun is usually tolerated.',water:'Water after the upper few centimetres of mix dry.',soil:'Chunky, airy potting mix with bark and perlite.',temp:'18–30°C; avoid cold drafts.',humidity:'Moderate humidity; higher humidity can support lush growth.',fertiliser:'Feed monthly during active spring–summer growth.',pruning:'Remove damaged leaves and guide aerial growth onto support.',propagation:['Take a cutting with a node.','Root in water or a moist airy medium.','Pot once several roots are established.'],tips:['Give climbing support as it matures.','Do not keep the mix constantly wet.','Clean broad leaves to improve light capture.']},
  succulent:{tag:'Dry-loving • compact • resilient',light:'Bright light; acclimatise gradually to stronger direct sun.',water:'Water thoroughly, then let the mix dry well before watering again.',soil:'Very free-draining succulent mix.',temp:'Generally comfortable in normal indoor temperatures.',humidity:'Prefers drier air and good airflow.',fertiliser:'Light feeding only during active growth.',pruning:'Remove dead or damaged growth with clean tools.',propagation:['Take a healthy offset or cutting if the species allows.','Allow cut surfaces to dry before placing in mix.','Water sparingly until established.'],tips:['Avoid waterlogged soil.','Use a pot with drainage.','More light usually means sturdier growth.']},
  citrus:{tag:'Sunny • productive • thirsty in growth',light:'Direct sun is best; aim for a bright outdoor position.',water:'Water deeply when the upper soil begins to dry; do not let roots stay soggy.',soil:'Free-draining, fertile potting mix suited to citrus.',temp:'Best outdoors in Melbourne conditions with protection from severe frost.',humidity:'Normal outdoor humidity is suitable.',fertiliser:'Use a citrus fertiliser according to the label during active growth.',pruning:'Remove dead, crossing or congested growth; avoid excessive pruning.',propagation:['Seed is possible but may not come true to type.','Named citrus is commonly grafted or budded.','For reliable fruit quality, maintain the existing grafted plant.'],tips:['Full sun supports flowering and fruiting.','Do not let pots dry out completely in hot weather.','Watch for citrus pests and follow registered label directions.']}
};

function profileFor(p){
  if(p.id==='string-of-pearls') return {
    kicker:'Trailing succulent • bright light • drought-tolerant',
    light:'Bright indirect light with some gentle morning sun.',
    water:'Let the potting mix dry well between waterings; avoid keeping it constantly moist.',
    soil:'Very free-draining succulent/cactus mix.',
    temperature:'Protect from frost and prolonged cold.',
    humidity:'Normal indoor humidity is suitable.',
    fertiliser:'Feed lightly in spring and summer with a diluted balanced fertiliser.',
    pruning:'Trim long or sparse strands to encourage fuller growth.',
    propagation:'Lay stem cuttings on moist free-draining mix or root cuttings in soil.',
    tips:'Use a pot with drainage and avoid burying the pearl-like leaves.',
    toxicity:'Toxic — Humans, Dogs & Cats'
  };
  const base={
    intro:`${p.name} is part of your Plant Secretary collection. Use soil moisture and plant response as the final check before watering.`,
    light:'Bright filtered light is generally suitable.',water:p.note,soil:'Use a well-draining mix suited to the plant type.',temp:'Protect from temperature extremes.',humidity:'Normal household or outdoor humidity is usually suitable.',fertiliser:'Feed only during active growth and follow the product label.',pruning:'Remove damaged growth with clean tools.',toxicity:'Non-toxic',propagation:['Use a healthy section of the plant.','Root using the method suited to the species.','Pot up once new roots or growth are established.'],tips:['Check moisture before watering.','Use a pot with drainage where appropriate.','Watch new growth for signs of stress.'],tag:'Care guide'};

  if(['golden-pothos','marble-queen'].includes(p.id)) Object.assign(base,commonProfiles.pothos,{toxicity:'Toxic — Humans, Dogs & Cats'});
  if(['many','konti'].includes(p.id)) Object.assign(base,commonProfiles.monstera,{toxicity:'Toxic — Humans, Dogs & Cats'});
  if(['haworthia-retusa','string-of-pearls'].includes(p.id)) Object.assign(base,commonProfiles.succulent,{toxicity:p.id==='string-of-pearls'?'Toxic — Humans, Dogs & Cats':'Non-toxic'});
  if(['dwarf-lemon','regular-lemon','calamansi'].includes(p.id)) Object.assign(base,commonProfiles.citrus,{toxicity:'Toxic — Dogs & Cats'});

  const overrides={
    'gardenia-radicans':{tag:'Fragrant • acid-loving • moisture-sensitive',light:'Bright light with gentle direct sun; protect from harsh afternoon sun.',water:'Keep evenly moist but never waterlogged.',soil:'Acidic, organic, free-draining mix.',temp:'Mild temperatures; protect from cold and hot drying winds.',humidity:'Moderate humidity is helpful.',fertiliser:'Use an acid-loving plant fertiliser according to label directions.',pruning:'Shape lightly after flowering and remove dead growth.',toxicity:'Non-toxic',propagation:['Take a healthy semi-ripe cutting.','Root in a humid, free-draining propagation mix.','Pot on once roots are established.'],tips:['Avoid alkaline conditions.','Consistent moisture helps prevent bud drop.','Yellowing may indicate root or nutrient stress.']},
    'mama-snake':{tag:'Tough • upright • drought-tolerant',light:'Indirect light is ideal; tolerates lower light.',water:'Allow the potting mix to dry well between waterings.',soil:'Very free-draining indoor mix.',temp:'Normal indoor temperatures; protect from cold.',humidity:'Average indoor humidity.',fertiliser:'Feed lightly during active growth.',pruning:'Remove damaged leaves at the base.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Divide offsets, or cut a healthy leaf section.','Allow cut surfaces to dry briefly.','Root in free-draining mix.'],tips:['Overwatering is the main risk.','Do not leave standing in water.','Lower light means slower drying.']},
    'baby-snake':{tag:'Water propagation • young • developing',light:'Bright indirect light.',water:'Keep established roots in clean water; refresh regularly.',soil:'Not in soil yet — currently a water propagation.',temp:'Normal indoor temperatures.',humidity:'Average indoor humidity.',fertiliser:'No routine fertiliser while newly rooting in water.',pruning:'Remove only damaged tissue.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Keep the rooted section upright in clean water.','Refresh water regularly.','Move to a free-draining mix once roots are robust.'],tips:['Keep leaves above the water line.','Watch for soft or rotting tissue.','Transition gradually when potting into soil.']},
    'peace-lily':{tag:'Lush • shade-tolerant • moisture-loving',light:'Bright indirect light; avoid harsh direct sun.',water:'Water when the upper layer begins to dry.',soil:'Moisture-retentive but free-draining indoor mix.',temp:'Warm indoor temperatures; avoid cold drafts.',humidity:'Moderate to higher humidity is helpful.',fertiliser:'Feed lightly in active growth.',pruning:'Cut spent flowers and yellow leaves at the base.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Divide a mature clump during repotting.','Keep several roots and leaves on each division.','Replant into moist, free-draining mix.'],tips:['Drooping can indicate thirst but check soil first.','Avoid constantly saturated soil.','Wipe broad leaves clean.']},
    'moon-valley':{tag:'Textured • compact • humidity-loving',light:'Bright indirect light; avoid strong direct sun.',water:'Keep lightly moist, allowing the surface to begin drying.',soil:'Light, organic and free-draining mix.',temp:'Warm indoor temperatures.',humidity:'Moderate to higher humidity.',fertiliser:'Feed lightly during spring and summer.',pruning:'Pinch tips to encourage bushier growth.',toxicity:'Non-toxic',propagation:['Take a healthy stem cutting.','Root in water or moist propagation mix.','Pot once roots are established.'],tips:['Avoid letting it dry completely.','Keep away from hot direct sun.','Pinching helps maintain a compact shape.']},
    'birkin-green':{tag:'Striped • compact • tropical',light:'Bright indirect light.',water:'Water when the upper mix is partly dry.',soil:'Airy indoor aroid mix.',temp:'Warm indoor temperatures.',humidity:'Moderate humidity.',fertiliser:'Feed monthly in active growth.',pruning:'Remove damaged leaves at the base.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Propagate by division or stem cutting when a node is available.','Root in water or airy mix.','Pot once roots establish.'],tips:['Variegation may vary between leaves.','Avoid saturated soil.','Rotate for even growth.']},
    'birkin-white':{tag:'Striped • compact • tropical',light:'Bright indirect light.',water:'Water when the upper mix is partly dry.',soil:'Airy indoor aroid mix.',temp:'Warm indoor temperatures.',humidity:'Moderate humidity.',fertiliser:'Feed monthly in active growth.',pruning:'Remove damaged leaves at the base.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Propagate by division or stem cutting when a node is available.','Root in water or airy mix.','Pot once roots establish.'],tips:['Variegation may vary between leaves.','Avoid saturated soil.','Rotate for even growth.']},
    'zz-thick':{tag:'Tough • glossy • drought-tolerant',light:'Indirect light; tolerates lower light.',water:'Let the mix dry thoroughly before watering again.',soil:'Very free-draining indoor mix.',temp:'Normal indoor temperatures.',humidity:'Average indoor humidity.',fertiliser:'Feed lightly during active growth.',pruning:'Remove yellow or damaged stems at soil level.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Divide rhizomes during repotting or use leaf/stem cuttings.','Root patiently in a free-draining medium.','Avoid keeping propagation material wet.'],tips:['Overwatering is the main risk.','Rhizomes store water.','Lower light means even less frequent watering.']},
    'zz-thin':{tag:'Tough • glossy • drought-tolerant',light:'Indirect light; tolerates lower light.',water:'Let the mix dry thoroughly before watering again.',soil:'Very free-draining indoor mix.',temp:'Normal indoor temperatures.',humidity:'Average indoor humidity.',fertiliser:'Feed lightly during active growth.',pruning:'Remove yellow or damaged stems at soil level.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Divide rhizomes during repotting or use leaf/stem cuttings.','Root patiently in a free-draining medium.','Avoid keeping propagation material wet.'],tips:['Overwatering is the main risk.','Rhizomes store water.','Lower light means even less frequent watering.']},
    'maidenhair':{tag:'Delicate • airy • moisture-loving',light:'Bright indirect light; protect from direct sun.',water:'Keep the root zone consistently moist; do not let it fully dry.',soil:'Moisture-retentive, organic but free-draining mix.',temp:'Cool to mild indoor temperatures.',humidity:'Prefers higher humidity.',fertiliser:'Feed lightly in active growth.',pruning:'Trim brown fronds at the base.',toxicity:'Non-toxic',propagation:['Divide a healthy established clump.','Keep roots moist during division.','Replant promptly into moist mix.'],tips:['Drying out can quickly damage fronds.','Avoid hot air from heaters.','Consistent humidity helps.']},
    'begonia':{tag:'Spotted • decorative • humidity-friendly',light:'Bright indirect light; gentle morning sun may be tolerated.',water:'Water when the surface begins to dry.',soil:'Airy, free-draining mix.',temp:'Warm indoor temperatures.',humidity:'Moderate humidity with airflow.',fertiliser:'Feed lightly during active growth.',pruning:'Pinch or trim leggy stems to encourage branching.',toxicity:'Toxic — Dogs & Cats',propagation:['Take a healthy stem cutting with a node.','Root in water or moist propagation mix.','Pot once roots are established.'],tips:['Avoid wet leaves staying stagnant.','Do not keep roots waterlogged.','Bright indirect light supports leaf pattern.']},
    'orchid-purple':{tag:'Elegant • epiphytic • airy-rooted',light:'Bright indirect light; protect from harsh direct sun.',water:'Water when roots/bark approach dryness; drain completely.',soil:'Orchid bark or another airy orchid medium.',temp:'Typical indoor temperatures suit Phalaenopsis-type orchids.',humidity:'Moderate humidity with airflow.',fertiliser:'Use an orchid fertiliser according to label directions.',pruning:'Remove dead roots and spent flower spikes as appropriate.',toxicity:'Non-toxic',propagation:['Home propagation is usually by keiki/offshoot where produced.','Allow a keiki to develop roots before separation.','Pot into fresh orchid bark.'],tips:['Green roots usually indicate moisture.','Never leave the crown full of water.','Good airflow reduces rot risk.']},
    'orchid-white':{tag:'Elegant • epiphytic • airy-rooted',light:'Bright indirect light; protect from harsh direct sun.',water:'Water when roots/bark approach dryness; drain completely.',soil:'Orchid bark or another airy orchid medium.',temp:'Typical indoor temperatures suit Phalaenopsis-type orchids.',humidity:'Moderate humidity with airflow.',fertiliser:'Use an orchid fertiliser according to label directions.',pruning:'Remove dead roots and spent flower spikes as appropriate.',toxicity:'Non-toxic',propagation:['Home propagation is usually by keiki/offshoot where produced.','Allow a keiki to develop roots before separation.','Pot into fresh orchid bark.'],tips:['Green roots usually indicate moisture.','Never leave the crown full of water.','Good airflow reduces rot risk.']},
    'pink-lady':{tag:'Trailing • pink-variegated • compact',light:'Bright light with some gentle direct sun to support colour.',water:'Allow the upper mix to begin drying before watering.',soil:'Light, free-draining potting mix.',temp:'Warm indoor temperatures.',humidity:'Average to moderate humidity.',fertiliser:'Feed lightly in active growth.',pruning:'Pinch stems to encourage a fuller plant.',toxicity:'Non-toxic',propagation:['Take a healthy stem cutting.','Root in water or moist mix.','Pinch new growth after establishment.'],tips:['More light can improve pink colour.','Avoid prolonged sogginess.','Pinch regularly for a dense habit.']},
    'bougainvillea':{tag:'Sun-loving • flowering • vigorous',light:'Direct sun is essential for best flowering.',water:'Water deeply, then allow some drying between waterings.',soil:'Very free-draining outdoor potting mix.',temp:'Warm sunny conditions; protect from severe frost.',humidity:'Normal outdoor humidity.',fertiliser:'Feed for flowering according to label directions.',pruning:'Prune after flowering flushes and train long shoots.',toxicity:'Non-toxic',propagation:['Take a semi-hardwood cutting.','Root in a free-draining propagation medium.','Keep warm and bright while roots form.'],tips:['Too much water can reduce flowering.','Full sun drives blooms.','Wear gloves around thorns.']},
    'rosemary':{tag:'Aromatic • Mediterranean • sun-loving',light:'Direct sun is best.',water:'Allow soil to dry between waterings.',soil:'Very free-draining mix.',temp:'Handles a broad outdoor temperature range once established.',humidity:'Prefers good airflow and drier conditions.',fertiliser:'Light feeding only; avoid excessive nitrogen.',pruning:'Trim lightly to maintain shape; avoid cutting hard into old bare wood.',toxicity:'Non-toxic',propagation:['Take a non-flowering stem cutting.','Strip lower leaves and place in propagation mix.','Pot once rooted.'],tips:['Wet feet are a major risk.','Full sun keeps growth dense.','Good airflow helps prevent disease.']},
    'mint':{tag:'Fresh • vigorous • moisture-loving',light:'Direct to indirect light; some sun supports strong growth.',water:'Keep soil consistently moist, especially in pots.',soil:'Rich, moisture-retentive but free-draining mix.',temp:'Performs well outdoors in mild conditions.',humidity:'Normal outdoor humidity.',fertiliser:'Feed lightly during active leafy growth.',pruning:'Harvest or pinch often to keep it bushy.',toxicity:'Non-toxic',propagation:['Take a healthy stem cutting.','Root in water or moist soil.','Plant out once roots are established.'],tips:['Pots help control spreading.','Do not let containers dry completely.','Frequent harvesting encourages fresh growth.']},
    'parsley':{tag:'Edible • leafy • cool-season friendly',light:'Direct to indirect sun; protect from extreme heat.',water:'Keep soil consistently moist but not saturated.',soil:'Fertile, free-draining potting mix.',temp:'Prefers mild growing conditions.',humidity:'Normal outdoor humidity.',fertiliser:'Use a suitable edible-plant fertiliser according to label.',pruning:'Harvest outer stems from the base.',toxicity:'Non-toxic',propagation:['Grow from seed.','Keep seedbed evenly moist during germination.','Thin seedlings for airflow and space.'],tips:['Harvest outer stems first.','Consistent moisture supports tender leaves.','Replace when plants become old or bolt.']}
  };
  if(overrides[p.id]) Object.assign(base,overrides[p.id]);
  base.intro=`${p.name} — ${base.tag.toLowerCase()}.`;
  return base;
}

const KEY='plantSecretary.v2';
const state=JSON.parse(localStorage.getItem(KEY)||'{}');
state.watered=state.watered||{};
const el=id=>document.getElementById(id);
function localDateOnly(d=new Date()){const y=d.getFullYear();const m=String(d.getMonth()+1).padStart(2,'0');const day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`;}
function parseDateOnly(s){const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d,12,0,0,0);}
function addDays(date,n){const d=new Date(date);d.setDate(d.getDate()+n);return d;}
function dayDiff(a,b){const x=new Date(a.getFullYear(),a.getMonth(),a.getDate());const y=new Date(b.getFullYear(),b.getMonth(),b.getDate());return Math.round((x-y)/86400000);}
function wateringClass(p){if(p.base<=5)return 'water-high';if(p.base<=9)return 'water-moderate';return 'water-low';}
function save(){localStorage.setItem(KEY,JSON.stringify(state));}
const today=new Date();
el('todayLabel').textContent=`Altona, Victoria · ${today.toLocaleDateString('en-AU',{weekday:'long',day:'numeric',month:'short',year:'numeric'})}`;
function daysSince(dateStr){if(!dateStr)return 999;return dayDiff(today,parseDateOnly(dateStr));}
function wateredStatusLabel(dateStr){if(!dateStr)return 'No watering recorded';const d=parseDateOnly(dateStr);const ago=Math.max(0,dayDiff(today,d));if(ago===0)return 'Watered today';const when=d.toLocaleDateString('en-AU',{weekday:'long',day:'numeric',month:'long'});return `${when}, ${ago} day${ago===1?'':'s'} ago`;}
function targetDays(p){return p.base;}
function statusFor(p){const elapsed=daysSince(state.watered[p.id]);const target=targetDays(p);if(elapsed>=target)return 'due';if(elapsed>=Math.max(0,target-2))return 'soon';return 'ok';}
function shortDue(p){const s=statusFor(p);if(s==='due')return 'Check today';const last=state.watered[p.id];if(!last)return 'Check today';const due=addDays(parseDateOnly(last),targetDays(p));const n=Math.max(0,dayDiff(due,today));return n===1?'In 1 day':`In ${n} days`;}

const plantImages={
  'begonia':'assets/plants/begonia.jpg',
  'birkin-green':'assets/plants/birkin-green.jpg',
  'birkin-white':'assets/plants/birkin-white.jpg',
  'gardenia-radicans':'assets/plants/gardenia-radicans.jpg',
  'golden-pothos':'assets/plants/golden-pothos.jpg',
  'maidenhair':'assets/plants/maidenhair.jpg',
  'marble-queen':'assets/plants/marble-queen.jpg',
  'many':'assets/plants/monstera-thick-user.jpg',
  'konti':'assets/plants/monstera-thin-bright.png',
  'moon-valley':'assets/plants/moon-valley.jpg',
  'orchid-purple':'assets/plants/orchid-purple.jpg',
  'orchid-white':'assets/plants/orchid-white.jpg',
  'peace-lily':'assets/plants/peace-lily-user.jpg',
  'pink-lady':'assets/plants/pink-lady.jpg',
  'baby-snake':'assets/plants/baby-snake.jpg',
  'mama-snake':'assets/plants/mama-snake.jpg',
  'string-of-pearls':'assets/plants/string-of-pearls.jpg',
  'zz-thick':'assets/plants/zz-thick.jpg',
  'zz-thin':'assets/plants/zz-thin.jpg',
  'bougainvillea':'assets/plants/bougainvillea.jpg',
  'calamansi':'assets/plants/calamansi.svg',
  'chilli-firecracker':'assets/plants/chilli-firecracker.svg',
  'habanero':'assets/plants/habanero.svg',
  'jalapeno':'assets/plants/jalapeno.svg',
  'regular-lemon':'assets/plants/lemon.svg',
  'dwarf-lemon':'assets/plants/dwarf-lemon.svg',
  'mint':'assets/plants/mint.jpg',
  'parsley':'assets/plants/parsley.jpg',
  'rosemary':'assets/plants/rosemary.jpg',
  'thai-peppers':'assets/plants/thai-peppers.svg',
  'chilli-timble':'assets/plants/chilli-timble.svg'
};

const PS_PHOTO_KEY = 'plantSecretary.plantPhotos.v1';

function psGetPlantPhotos(){
  try{return JSON.parse(localStorage.getItem(PS_PHOTO_KEY)||'{}')||{};}
  catch(e){return {};}
}
function psSavePlantPhotos(photos){
  localStorage.setItem(PS_PHOTO_KEY, JSON.stringify(photos));
}
function psPlantPhoto(id){
  const photos=psGetPlantPhotos();
  if(Object.prototype.hasOwnProperty.call(photos,id)){
    return photos[id]==='__NONE__' ? '' : photos[id];
  }
  return plantImages[id] || '';
}
function psPlantInitials(name){
  return String(name||'').split(/[ —/]/).filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase() || 'PL';
}
function psResizePhoto(file, maxSize=1000, quality=.84){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onerror=()=>reject(new Error('Could not read photo.'));
    reader.onload=()=>{
      const img=new Image();
      img.onerror=()=>reject(new Error('Could not open photo.'));
      img.onload=()=>{
        const scale=Math.min(1,maxSize/Math.max(img.width,img.height));
        const w=Math.max(1,Math.round(img.width*scale));
        const h=Math.max(1,Math.round(img.height*scale));
        const canvas=document.createElement('canvas');
        canvas.width=w; canvas.height=h;
        const ctx=canvas.getContext('2d');
        ctx.drawImage(img,0,0,w,h);
        resolve(canvas.toDataURL('image/jpeg',quality));
      };
      img.src=reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function renderCollection(){
  el('plantTotal').textContent=plants.length;
  const card=p=>`<button class="collection-item" type="button" data-profile="${p.id}" aria-label="Open ${p.name} profile">
    <span class="collection-photo-wrap">
      ${psPlantPhoto(p.id)?`<img class="collection-photo" src="${psPlantPhoto(p.id)}" alt="${p.name} photo" loading="lazy">`:''}
      <span class="collection-fallback" aria-hidden="true">${psPlantInitials(p.name)}</span>
    </span>
    <span class="collection-name">${p.name}</span>
  </button>`;
  const section=(title,list)=>`<section class="collection-group">
    <div class="collection-group-title"><span>${title}</span><small>${list.length}</small></div>
    <div class="plant-collection">${list.map(card).join('')}</div>
  </section>`;
  const byName=(a,b)=>a.name.localeCompare(b.name,'en',{sensitivity:'base'});
  const indoor=plants.filter(p=>p.place==='indoor').sort(byName);
  const outdoor=plants.filter(p=>p.place==='outdoor').sort(byName);
  el('plantCollection').innerHTML=section('Indoor plants',indoor)+section('Outdoor plants',outdoor);
  document.querySelectorAll('#plantCollection img').forEach(img=>{
    img.addEventListener('load',()=>img.closest('.collection-photo-wrap')?.classList.add('image-ok'),{once:true});
    img.addEventListener('error',()=>img.closest('.collection-photo-wrap')?.classList.add('image-failed'),{once:true});
    if(img.complete && img.naturalWidth>0) img.closest('.collection-photo-wrap')?.classList.add('image-ok');
  });
  document.querySelectorAll('#plantCollection [data-profile]').forEach(btn=>{
    btn.addEventListener('click',()=>openProfile(btn.dataset.profile));
  });
}

const maintenanceIcons={
  'begonia':["✂️", "🤏", "🔄"],
  'birkin-green':["🧤", "🔄"],
  'birkin-white':["🧤", "🔄"],
  'gardenia-radicans':["✂️", "🤏", "🧤", "🔄"],
  'golden-pothos':["✂️", "🤏", "🧤", "🔄"],
  'maidenhair':["✂️", "🔄"],
  'marble-queen':["✂️", "🤏", "🧤", "🔄"],
  'many':["✂️", "🧤", "🔄"],
  'konti':["✂️", "🧤", "🔄"],
  'moon-valley':["✂️", "🤏", "🔄"],
  'orchid-purple':["✂️", "🧤", "🔄"],
  'orchid-white':["✂️", "🧤", "🔄"],
  'peace-lily':["✂️", "🧤", "🔄"],
  'pink-lady':["✂️", "🤏", "🔄"],
  'baby-snake':["🧤", "🔄"],
  'mama-snake':["🧤", "🔄"],
  'string-of-pearls':["✂️", "🔄"],
  'zz-thick':["🧤", "🔄"],
  'zz-thin':["🧤", "🔄"],
  'bougainvillea':["✂️", "🤏"],
  'calamansi':["✂️"],
  'chilli-firecracker':["✂️", "🤏"],
  'habanero':["✂️", "🤏"],
  'jalapeno':["✂️", "🤏"],
  'regular-lemon':["✂️"],
  'dwarf-lemon':["✂️"],
  'mint':["✂️", "🤏"],
  'parsley':["✂️"],
  'rosemary':["✂️", "🤏"],
  'thai-peppers':["✂️", "🤏"],
  'chilli-timble':["✂️", "🤏"]
};

function renderWateringCubes(){
  const filter=el('filterSelect').value;
  const placeRank={indoor:0,outdoor:1};
  const list=plants
    .filter(p=>filter==='all'||p.place===filter||(filter==='due'&&statusFor(p)==='due'))
    .sort((a,b)=>(placeRank[a.place]??9)-(placeRank[b.place]??9)||a.name.localeCompare(b.name,'en',{sensitivity:'base'}));
  el('wateringCubes').innerHTML=list.map(p=>`<article class="water-cube ${wateringClass(p)} ${statusFor(p)}">
    <span class="cube-sun">${sunlight[p.id]||'⛅️'}</span>
    <span class="cube-status">${shortDue(p)}</span>
    ${soilPreference[p.id]?`<span class="cube-soil">${soilPreference[p.id]}</span>`:''}
    <strong class="cube-name">${p.name}</strong>
    <span class="cube-maintenance">${(maintenanceIcons[p.id]||[]).map(icon=>`<span class="maintenance-icon">${icon}</span>`).join('')}</span>
    <button class="cube-water" type="button" data-water="${p.id}" aria-label="Record ${p.name} watered today"><span class="drop-icon">💧</span></button>
  </article>`).join('');
  document.querySelectorAll('[data-water]').forEach(btn=>btn.addEventListener('click',()=>{state.watered[btn.dataset.water]=localDateOnly();save();renderAll();if(currentProfile===btn.dataset.water)renderProfile(currentProfile);}));
}

function firstForecastDate(p){const last=state.watered[p.id];if(!last)return new Date(today.getFullYear(),today.getMonth(),today.getDate(),12);const due=addDays(parseDateOnly(last),p.base);const t=new Date(today.getFullYear(),today.getMonth(),today.getDate(),12);return due<t?t:due;}
function renderFortnight(){
  const start=new Date(today.getFullYear(),today.getMonth(),today.getDate(),12);
  const days=Array.from({length:14},(_,i)=>({date:addDays(start,i),plants:[]}));
  plants.forEach(p=>{let date=firstForecastDate(p);while(dayDiff(date,start)<14){const idx=dayDiff(date,start);if(idx>=0)days[idx].plants.push(p);date=addDays(date,Math.max(1,p.base));}});

  const indoor=plants.filter(p=>p.place==='indoor');
  const outdoor=plants.filter(p=>p.place==='outdoor');
  function groupText(group,due){
    if(!due.length)return '';
    const label=group[0].place==='indoor'?'All indoor plants':'All outdoor plants';
    if(due.length===group.length)return label;
    const excluded=group.filter(p=>!due.some(d=>d.id===p.id));
    if(due.length>excluded.length)return `${label}<span class="forecast-except">, except ${excluded.map(p=>p.name).join(', ')}</span>`;
    return due.map(p=>p.name).join(', ');
  }

  el('fortnightGrid').innerHTML=days.map((day,i)=>{
    const dateLabel=day.date.toLocaleDateString('en-AU',{weekday:'short',day:'numeric',month:'short'});
    const lines=[
      groupText(indoor,day.plants.filter(p=>p.place==='indoor')),
      groupText(outdoor,day.plants.filter(p=>p.place==='outdoor'))
    ].filter(Boolean);
    const content=lines.length?lines.map(x=>`<div class="forecast-summary">${x}</div>`).join(''):'<span class="no-water">No watering predicted</span>';
    const emptyClass = day.plants.length ? '' : ' forecast-empty';
    const weekday = day.date.getDay();
    const weekendClass = weekday===6 ? ' forecast-saturday' : weekday===0 ? ' forecast-sunday' : '';
    return `<article class="forecast-day${i===0?' forecast-today':''}${emptyClass}${weekendClass}"><div class="forecast-date"><strong>${i===0?'Today':dateLabel}</strong>${i===0?`<span>${dateLabel}</span>`:''}</div><div class="forecast-plants">${content}</div></article>`;
  }).join('');
}

function renderAll(){renderCollection();renderWateringCubes();renderFortnight();}

let currentProfile=null;
function careCard(icon,title,text){return `<article class="care-mini"><span class="care-icon">${icon}</span><div><span class="care-label">${title}</span><p>${text}</p></div></article>`;}
function renderProfile(id){
  const p=plants.find(x=>x.id===id);if(!p)return;
  const q=profileFor(p);const watered=wateredStatusLabel(state.watered[p.id]);
  el('profileContent').innerHTML=`
    <article class="profile-hero ${wateringClass(p)}">
      <div class="profile-top-actions">
        <span class="profile-eyebrow">CARE GUIDE</span>
        <button id="profileEditPhotoBtn" class="profile-edit-photo-btn" type="button">Edit</button>
      </div>
      <h2 id="profileName">${p.name}</h2>
      <span class="profile-tag">${q.tag}</span>
      <div class="profile-photo-wrap ${psPlantPhoto(p.id)?'has-photo':''}">
        ${psPlantPhoto(p.id)?`<img class="profile-plant-photo" src="${psPlantPhoto(p.id)}" alt="${p.name} photo">`:`<span class="profile-photo-fallback">${psPlantInitials(p.name)}</span>`}
      </div>
    </article>
    <section class="profile-core">
      ${careCard('◉','LIGHT',q.light)}
      ${careCard('💧','WATER',q.water)}
      ${careCard('♧','SOIL',q.soil)}
    </section>
    <section class="profile-grid">
      ${careCard('🌡️','TEMPERATURE',q.temp)}
      ${careCard('◯','HUMIDITY',q.humidity)}
      ${careCard('▣','FERTILISER',q.fertiliser)}
      ${careCard('✂︎','PRUNING',q.pruning)}
      ${careCard('🐶','TOXICITY',q.toxicity)}
    </section>
    <section class="profile-lower">
      <article class="profile-panel"><span class="care-label">PROPAGATE & GROW MORE</span><ol>${q.propagation.map(x=>`<li>${x}</li>`).join('')}</ol></article>
      <article class="profile-panel"><span class="care-label">QUICK TIPS</span><ul>${q.tips.map(x=>`<li>${x}</li>`).join('')}</ul></article>
    </section>
    <button id="profileWaterBtn" class="profile-water-btn" type="button">💧 ${watered}</button>
  `;
  el('profileWaterBtn').addEventListener('click',()=>{state.watered[p.id]=localDateOnly();save();renderAll();renderProfile(p.id);});
  el('profileEditPhotoBtn').addEventListener('click',()=>psOpenProfilePhotoMenu(p.id));
}

let psEditingPhotoPlantId=null;

function psOpenProfilePhotoMenu(id){
  psEditingPhotoPlantId=id;
  const menu=el('profilePhotoMenu');
  const del=el('profileDeletePhotoBtn');
  const p=plants.find(x=>x.id===id);
  if(!menu||!p)return;
  del.disabled=!psPlantPhoto(id);
  menu.hidden=false;
}
function psCloseProfilePhotoMenu(){
  const menu=el('profilePhotoMenu');
  if(menu)menu.hidden=true;
  psEditingPhotoPlantId=null;
}
function psRefreshPlantPhotoViews(id){
  renderCollection();
  if(currentProfile===id)renderProfile(id);
  setTimeout(psAddDeleteButtons,0);
}

function openProfile(id){currentProfile=id;renderProfile(id);el('profileScreen').classList.add('open');el('profileScreen').setAttribute('aria-hidden','false');document.body.classList.add('profile-open');}
function closeProfile(){el('profileScreen').classList.remove('open');el('profileScreen').setAttribute('aria-hidden','true');document.body.classList.remove('profile-open');currentProfile=null;}
el('profileBack').addEventListener('click',closeProfile);
el('filterSelect').addEventListener('change',renderWateringCubes);

el('profileUploadPhotoBtn').addEventListener('click',()=>{
  if(!psEditingPhotoPlantId)return;
  el('profilePhotoInput').value='';
  el('profilePhotoInput').click();
});
el('profilePhotoInput').addEventListener('change',async(e)=>{
  const file=e.target.files&&e.target.files[0];
  const id=psEditingPhotoPlantId;
  if(!file||!id)return;
  try{
    const data=await psResizePhoto(file);
    const photos=psGetPlantPhotos();
    photos[id]=data;
    psSavePlantPhotos(photos);
    psCloseProfilePhotoMenu();
    psRefreshPlantPhotoViews(id);
  }catch(err){
    alert('That photo could not be saved. Please try another image.');
  }
});
el('profileDeletePhotoBtn').addEventListener('click',()=>{
  const id=psEditingPhotoPlantId;
  if(!id)return;
  const photos=psGetPlantPhotos();
  // Hide the currently displayed photo for this specific plant, including
  // a bundled reference photo. Uploading again replaces this marker.
  photos[id]='__NONE__';
  psSavePlantPhotos(photos);
  psCloseProfilePhotoMenu();
  psRefreshPlantPhotoViews(id);
});
el('profileCancelPhotoBtn').addEventListener('click',psCloseProfilePhotoMenu);
document.querySelectorAll('[data-close-photo-menu]').forEach(x=>x.addEventListener('click',psCloseProfilePhotoMenu));



function showView(viewId){
  document.querySelectorAll('.app-view').forEach(v=>{
    const active=v.id===viewId;
    v.hidden=!active;
    v.classList.toggle('active-view',active);
  });
  document.querySelectorAll('.bottom-nav [data-view]').forEach(b=>{
    b.classList.toggle('nav-active',b.dataset.view===viewId);
  });
  window.scrollTo({top:0,behavior:'smooth'});
}

document.querySelectorAll('.bottom-nav [data-view]').forEach(btn=>{
  btn.addEventListener('click',()=>showView(btn.dataset.view));
});

el('fortnightShortcut').addEventListener('click',()=>showView('fortnightView'));

renderAll();

if('serviceWorker'in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=72').catch(()=>{}));}


// v57 — dynamic plant collection management
const PS_CUSTOM_KEY = 'plantSecretary.customPlants.v1';
const PS_DELETED_KEY = 'plantSecretary.deletedPlants.v1';

function psReadJson(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  }catch(e){ return fallback; }
}
function psWriteJson(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}
function psSlugify(name){
  return 'custom-' + name.toLowerCase().trim()
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') + '-' + Date.now().toString(36);
}
function psGetCustomPlants(){ return psReadJson(PS_CUSTOM_KEY, []); }
function psGetDeletedIds(){ return psReadJson(PS_DELETED_KEY, []); }

function psNormalizeCustomPlant(cp){
  const place = cp.place || cp.location || (cp.indoor===false ? 'outdoor' : 'indoor');
  const base = Number(cp.base || cp.baseInterval || cp.interval) || (place==='outdoor' ? 4 : 7);
  return {
    ...cp,
    place,
    base,
    sun: cp.sun || (place==='outdoor' ? '🌤️' : '⛅️')
  };
}

function psEnsureDynamicPlants(){
  const deleted = new Set(psGetDeletedIds());
  const rawCustom = psGetCustomPlants();
  const custom = rawCustom.map(psNormalizeCustomPlant);

  // Persist the corrected schema so plants already added in older builds are repaired automatically.
  if (JSON.stringify(rawCustom)!==JSON.stringify(custom)) psWriteJson(PS_CUSTOM_KEY, custom);

  // Hide deleted built-in plants from the active plant list without deleting their saved history.
  if (Array.isArray(plants)){
    for (let i = plants.length - 1; i >= 0; i--){
      if (deleted.has(plants[i].id)) plants.splice(i,1);
    }
    for (const cp of custom){
      if (!plants.some(p => p.id === cp.id)) plants.push(cp);
    }
  }
}

function psAddDeleteButtons(){
  document.querySelectorAll('.collection-item').forEach(item => {
    if (item.querySelector('.collection-delete-btn')) return;
    const id = item.getAttribute('data-profile');
    if (!id) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'collection-delete-btn';
    btn.setAttribute('aria-label','Delete plant');
    btn.textContent = '−';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      psDeletePlant(id);
    });
    item.appendChild(btn);
  });
}

function psDeletePlant(id){
  const plant = plants.find(p => p.id === id);
  if (!plant) return;
  const ok = window.confirm(`Delete "${plant.name}" from your collection?`);
  if (!ok) return;

  const custom = psGetCustomPlants();
  const customIndex = custom.findIndex(p => p.id === id);
  if (customIndex >= 0){
    custom.splice(customIndex,1);
    psWriteJson(PS_CUSTOM_KEY, custom);
  }else{
    const deleted = new Set(psGetDeletedIds());
    deleted.add(id);
    psWriteJson(PS_DELETED_KEY, Array.from(deleted));
  }

  const idx = plants.findIndex(p => p.id === id);
  if (idx >= 0) plants.splice(idx,1);

  psRenderAllCollectionViews();
}

function psRenderAllCollectionViews(){
  if (typeof renderCollection === 'function') renderCollection();
  else if (typeof renderPlants === 'function') renderPlants();

  if (typeof renderWateringCubes === 'function') renderWateringCubes();
  if (typeof renderFortnight === 'function') renderFortnight();

  const total = document.getElementById('plantTotal');
  if (total) total.textContent = String(plants.length);

  setTimeout(psAddDeleteButtons,0);
}

function psOpenAddModal(){
  const modal = document.getElementById('addPlantModal');
  if (!modal) return;
  modal.hidden = false;
  const input = document.getElementById('newPlantName');
  if (input) setTimeout(() => input.focus(),0);
}
function psCloseAddModal(){
  const modal = document.getElementById('addPlantModal');
  if (modal) modal.hidden = true;
}


function psEstimateWaterInterval(name, location){
  const n = (name || '').toLowerCase();

  // Prefer a matching plant already known to Plant Secretary.
  const match = plants.find(p => {
    const pn = (p.name || '').toLowerCase();
    return pn === n || pn.includes(n) || n.includes(pn);
  });
  if (match && Number(match.base || match.interval || match.baseInterval)){
    return Number(match.base || match.interval || match.baseInterval);
  }

  // Common-name families used by the existing Plant Secretary care set.
  const rules = [
    { words:['maidenhair'], days:3 },
    { words:['mint','parsley','chilli','pepper','habanero','jalapeno','jalapeño'], days:3 },
    { words:['calamansi','lemon','citrus'], days:4 },
    { words:['gardenia','peace lily','moon valley','pilea'], days:5 },
    { words:['bougainvillea'], days:6 },
    { words:['begonia'], days:6 },
    { words:['pink lady','callisia'], days:7 },
    { words:['orchid','phalaenopsis'], days:8 },
    { words:['pothos','monstera','birkin','philodendron'], days:8 },
    { words:['rosemary'], days:8 },
    { words:['string of pearls','senecio','curio'], days:12 },
    { words:['snake plant','sansevieria','dracaena trifasciata'], days:18 },
    { words:['zz plant','zamioculcas'], days:20 }
  ];

  for (const rule of rules){
    if (rule.words.some(w => n.includes(w))) return rule.days;
  }

  // Conservative fallback when the plant name is not recognised.
  return location === 'outdoor' ? 4 : 7;
}

function psSetupCollectionControls(){
  const addBtn = document.getElementById('addPlantBtn');
  const editBtn = document.getElementById('editPlantsBtn');
  const form = document.getElementById('addPlantForm');

  if (addBtn) addBtn.addEventListener('click', psOpenAddModal);
  document.querySelectorAll('[data-close-add-modal],#closeAddPlantBtn').forEach(el => {
    el.addEventListener('click', psCloseAddModal);
  });

  if (editBtn){
    editBtn.addEventListener('click', () => {
      const active = document.body.classList.toggle('collection-edit-mode');
      editBtn.classList.toggle('is-active', active);
      editBtn.setAttribute('aria-pressed', active ? 'true':'false');
      editBtn.textContent = active ? 'Done' : 'Edit';
      psAddDeleteButtons();
    });
  }

  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('newPlantName').value.trim();
      const location = document.getElementById('newPlantLocation').value;
      const interval = psEstimateWaterInterval(name, location);
      if (!name) return;

      const id = psSlugify(name);
      const plant = {
        id,
        name,
        place: location,
        base: interval,
        sun: location === 'outdoor' ? '🌤️' : '⛅️',
        custom: true
      };

      const custom = psGetCustomPlants();
      custom.push(plant);
      psWriteJson(PS_CUSTOM_KEY, custom);
      plants.push(plant);

      form.reset();
      psCloseAddModal();
      psRenderAllCollectionViews();
    });
  }
}

psEnsureDynamicPlants();
if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => {
    psSetupCollectionControls();
    psRenderAllCollectionViews();
  }, {once:true});
}else{
  psSetupCollectionControls();
  psRenderAllCollectionViews();
}

