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
    intro:`${psDisplayName(p)} is part of your Plant Secretary collection. Use soil moisture and plant response as the final check before watering.`,
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
  base.intro=`${psDisplayName(p)} — ${base.tag.toLowerCase()}.`;
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
const PS_PHOTO_RESET_V100_KEY = 'plantSecretary.photoReset.v100';
const PS_PHOTO_RESET_V101_KEY = 'plantSecretary.photoReset.v102';

// v100/v102: clear all user-saved profile photos once on upgrade while keeping
// the upload/delete feature available for photos saved after this release.
try{
  if(localStorage.getItem(PS_PHOTO_RESET_V100_KEY)!=='done'){
    localStorage.removeItem(PS_PHOTO_KEY);
    localStorage.setItem(PS_PHOTO_RESET_V100_KEY,'done');
  }
  if(localStorage.getItem(PS_PHOTO_RESET_V101_KEY)!=='done'){
    localStorage.removeItem(PS_PHOTO_KEY);
    localStorage.setItem(PS_PHOTO_RESET_V101_KEY,'done');
  }
}catch(e){}

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
function psSavedPlantPhoto(id){
  const photos=psGetPlantPhotos();
  if(!Object.prototype.hasOwnProperty.call(photos,id)) return '';
  return photos[id]==='__NONE__' ? '' : photos[id];
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
  const card=p=>{const displayName=psDisplayName(p),safeName=psEscapeHTML(displayName);return `<div class="collection-item" role="button" tabindex="0" data-profile="${p.id}" aria-label="Open ${safeName} profile">
    <span class="collection-photo-wrap">
      ${psPlantPhoto(p.id)?`<img class="collection-photo" src="${psPlantPhoto(p.id)}" alt="${safeName} photo" loading="lazy">`:''}
      <span class="collection-fallback" aria-hidden="true">${psEscapeHTML(psPlantInitials(displayName))}</span>
    </span>
    <span class="collection-name">${safeName}</span>
  </div>`};
  const section=(title,list)=>`<section class="collection-group">
    <div class="collection-group-title"><span>${title}</span><small>${list.length}</small></div>
    <div class="plant-collection">${list.map(card).join('')}</div>
  </section>`;
  const byName=(a,b)=>psDisplayName(a).localeCompare(psDisplayName(b),'en',{sensitivity:'base'});
  const indoor=plants.filter(p=>p.place==='indoor').sort(byName);
  const outdoor=plants.filter(p=>p.place==='outdoor').sort(byName);
  el('plantCollection').innerHTML=section('Indoor plants',indoor)+section('Outdoor plants',outdoor);
  document.querySelectorAll('#plantCollection img').forEach(img=>{
    img.addEventListener('load',()=>img.closest('.collection-photo-wrap')?.classList.add('image-ok'),{once:true});
    img.addEventListener('error',()=>img.closest('.collection-photo-wrap')?.classList.add('image-failed'),{once:true});
    if(img.complete && img.naturalWidth>0) img.closest('.collection-photo-wrap')?.classList.add('image-ok');
  });
  // Profile opening is handled by one delegated listener below. This remains
  // reliable after Home is re-rendered when watering/custom-plant state changes.
}

// v79: stable Home profile activation for iPhone/Safari and re-rendered cards.
// Collection items are non-nested interactive containers so the edit-mode delete
// button remains valid HTML and cannot interfere with the plant-profile tap target.
function activateCollectionProfile(event){
  const collection=el('plantCollection');
  if(!collection) return;
  const card=event.target.closest('[data-profile]');
  if(!card || !collection.contains(card)) return;
  if(event.target.closest('.collection-delete-btn')) return;
  const id=card.dataset.profile;
  if(id) openProfile(id);
}
el('plantCollection').addEventListener('click',activateCollectionProfile);
el('plantCollection').addEventListener('keydown',(event)=>{
  if(event.key!=='Enter' && event.key!==' ') return;
  const card=event.target.closest('[data-profile]');
  if(!card || event.target.closest('.collection-delete-btn')) return;
  event.preventDefault();
  activateCollectionProfile(event);
});

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

function wateringPhIcon(p){
  const pref=soilPreference[p.id];
  if(pref==='🍋') return '<img class="cube-ph-affinity" src="assets/icons/ph-acidic-approved.png" alt="Acidic pH affinity">';
  if(pref==='🪨') return '<img class="cube-ph-affinity" src="assets/icons/ph-alkaline-approved.png" alt="Alkaline pH affinity">';
  return '<img class="cube-ph-affinity" src="assets/icons/ph-slight-neutral-approved.png" alt="Slightly acidic to neutral pH affinity">';
}

function renderWateringCubes(){
  const filter=el('filterSelect').value;
  const placeRank={indoor:0,outdoor:1};
  const list=plants
    .filter(p=>filter==='all'||p.place===filter||(filter==='due'&&statusFor(p)==='due'))
    .sort((a,b)=>(placeRank[a.place]??9)-(placeRank[b.place]??9)||psDisplayName(a).localeCompare(psDisplayName(b),'en',{sensitivity:'base'}));
  el('wateringCubes').innerHTML=list.map(p=>`<article class="water-cube ${wateringClass(p)} ${statusFor(p)}">
    <span class="cube-status">${shortDue(p)}</span>
    ${p.sun==='☀️'?'<img class="cube-direct-sun" src="assets/icons/direct-sun-pencil.png" alt="Direct sunlight">':p.sun==='☁️'?'<img class="cube-light-pencil cube-minimal-sun" src="assets/icons/minimal-sun-pencil.png" alt="Minimal sunlight">':'<img class="cube-light-pencil cube-indirect-sun" src="assets/icons/indirect-sun-pencil.png" alt="Indirect sunlight">'}
    ${wateringPhIcon(p)}
    <strong class="cube-name">${psEscapeHTML(psDisplayName(p))}</strong>
    <span class="cube-maintenance">${(maintenanceIcons[p.id]||[]).map(icon=>`<span class="maintenance-icon">${icon}</span>`).join('')}</span>
    <button class="cube-water" type="button" data-water="${p.id}" aria-label="Record ${psEscapeHTML(psDisplayName(p))} watered today"><span class="drop-icon" aria-hidden="true"></span></button>
  </article>`).join('');
  document.querySelectorAll('[data-water]').forEach(btn=>btn.addEventListener('click',()=>{
    const id=btn.dataset.water;
    state.lastWaterUndo={id,hadPrevious:Object.prototype.hasOwnProperty.call(state.watered,id),previous:state.watered[id]??null};
    state.watered[id]=localDateOnly();
    save();renderAll();updateWateringUndoButton();
    if(currentProfile===id)renderProfile(currentProfile);
  }));
}


function updateWateringUndoButton(){
  const btn=el('undoWateringBtn');
  if(!btn)return;
  const available=!!(state.lastWaterUndo&&state.lastWaterUndo.id);
  btn.disabled=!available;
  btn.setAttribute('aria-disabled',String(!available));
}
function undoLastWatering(){
  const u=state.lastWaterUndo;
  if(!u||!u.id)return;
  if(u.hadPrevious) state.watered[u.id]=u.previous;
  else delete state.watered[u.id];
  delete state.lastWaterUndo;
  save();renderAll();updateWateringUndoButton();
  if(currentProfile===u.id)renderProfile(currentProfile);
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
    if(due.length>excluded.length)return `${label}<span class="forecast-except">, except ${excluded.map(p=>psEscapeHTML(psDisplayName(p))).join(', ')}</span>`;
    return due.map(p=>psEscapeHTML(psDisplayName(p))).join(', ');
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

// v76 — professional four-page plant profiles. Watering intervals/history remain untouched.
const botanicalNames={
'begonia':'Begonia spp.','birkin-green':"Philodendron ‘Birkin’",'birkin-white':"Philodendron ‘Birkin’",'gardenia-radicans':'Gardenia jasminoides','golden-pothos':'Epipremnum aureum','maidenhair':'Adiantum spp.','marble-queen':"Epipremnum aureum ‘Marble Queen’",'many':'Monstera deliciosa','konti':'Monstera deliciosa','moon-valley':"Pilea involucrata ‘Moon Valley’",'orchid-purple':'Phalaenopsis spp.','orchid-white':'Phalaenopsis spp.','peace-lily':'Spathiphyllum spp.','pink-lady':'Callisia repens','baby-snake':'Dracaena trifasciata','mama-snake':'Dracaena trifasciata','string-of-pearls':"Curio rowleyanus ‘Variegatus’",'zz-thick':'Zamioculcas zamiifolia','zz-thin':'Zamioculcas zamiifolia','bougainvillea':'Bougainvillea spp.','calamansi':'Citrus × microcarpa','chilli-firecracker':'Capsicum annuum','habanero':'Capsicum chinense','jalapeno':'Capsicum annuum','regular-lemon':'Citrus limon','dwarf-lemon':'Citrus limon','mint':'Mentha spp.','parsley':'Petroselinum crispum','rosemary':'Salvia rosmarinus','thai-peppers':'Capsicum annuum','chilli-timble':'Capsicum annuum'};

// v109 — per-plant common/display-name overrides. The stable plant ID and care identity remain unchanged.
const PS_COMMON_NAME_KEY='plantSecretary.plantNames.v1';
function psGetCommonNames(){try{return JSON.parse(localStorage.getItem(PS_COMMON_NAME_KEY)||'{}')||{};}catch(e){return {};}}
function psSaveCommonNames(names){localStorage.setItem(PS_COMMON_NAME_KEY,JSON.stringify(names));}
function psDisplayName(p){const names=psGetCommonNames();return String(names[p.id]||p.name||'Plant').trim();}
function psEscapeHTML(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}

// v106 — per-plant botanical-name overrides. These affect profile care classification only;
// plant IDs, common names, watering intervals/history and navigation are unchanged.
const PS_BOTANICAL_KEY='plantSecretary.botanicalNames.v1';
function psGetBotanicalNames(){try{return JSON.parse(localStorage.getItem(PS_BOTANICAL_KEY)||'{}')||{};}catch(e){return {};}}
function psSaveBotanicalNames(names){localStorage.setItem(PS_BOTANICAL_KEY,JSON.stringify(names));}
function psBotanicalName(p){const names=psGetBotanicalNames();return String(names[p.id]||botanicalNames[p.id]||p.name).trim();}
function psBotanicalGroup(name){
 const n=String(name||'').toLowerCase();
 if(/epipremnum|pothos/.test(n))return 'pothos';
 if(/adiantum|maidenhair/.test(n))return 'fern';
 if(/phalaenopsis|orchid/.test(n))return 'orchid';
 if(/dracaena\s+trifasciata|sansevieria/.test(n))return 'snake';
 if(/gardenia/.test(n))return 'gardenia';
 if(/citrus/.test(n))return 'citrus';
 if(/bougainvillea/.test(n))return 'bougainvillea';
 if(/capsicum|mentha|petroselinum|salvia\s+rosmarinus|rosmarinus/.test(n))return 'edible';
 if(/curio|senecio\s+rowleyanus|callisia|zamioculcas/.test(n))return 'succulent';
 if(/monstera|philodendron|spathiphyllum|pilea|begonia/.test(n))return 'tropical';
 return null;
}

const profileGroups={
 pothos:{position:'Bright, indirect light; keep out of harsh afternoon sun.',soil:'Quality indoor potting mix amended with perlite and fine orchid bark for extra air space. Use a pot with drainage.',ph:'Slightly acidic • about pH 5.5–6.5',moisture:'Let top 2–3 cm dry',water:'Check the top 2–3 cm of mix first. Water thoroughly only when it has begun to dry, then let excess drain.',feed:'Yates Thrive Indoor Plants & Ferns Liquid Plant Food',feedNote:'Suitable for indoor foliage plants. Follow the current bottle label for dilution and frequency.',grow:'Pinch or prune long vines above a node for a fuller plant; rotate for even growth.',repot:'Repot when root-bound or drying much faster than usual. Move up one pot size; refresh the airy mix.',prop:'Take a stem cutting containing a node; root in water or a moist propagation mix, then pot when well rooted.',maint:['Wipe dusty leaves','Trim yellow or damaged leaves','Rotate for even growth','Pinch long vines for fullness'],pests:['spider','mealy','scale','gnat'],problems:['yellow','brown','droop','slow']},
 tropical:{position:'Bright, indirect light. Gentle morning light is useful; avoid hot afternoon sun through glass.',soil:'Quality indoor potting mix with added perlite and orchid bark for drainage and root aeration.',ph:'Slightly acidic • about pH 5.5–6.5',moisture:'Moderately moist',water:'Check the upper few centimetres before watering. Water deeply when partly dry and empty any saucer.',feed:'Yates Thrive Indoor Plants & Ferns Liquid Plant Food',feedNote:'A practical indoor-plant feed. Use only as directed on the current product label.',grow:'Keep leaves clean, rotate regularly and give climbing types support before stems become heavy.',repot:'Repot when roots crowd the pot. Increase by one pot size and retain a chunky, free-draining mix.',prop:'Use a healthy stem section with at least one node; root before potting into an airy mix.',maint:['Wipe broad leaves','Remove damaged foliage','Rotate regularly','Provide support where needed'],pests:['spider','mealy','scale','gnat'],problems:['yellow','brown','droop','curl']},
 fern:{position:'Bright filtered light; protect delicate fronds from direct hot sun and drying draughts.',soil:'Premium indoor potting mix with coco coir for moisture retention plus perlite for drainage.',ph:'Slightly acidic • about pH 5.5–6.5',moisture:'Consistently moist',water:'Check frequently. Water before the root ball dries completely, but do not leave the pot standing in water.',feed:'Yates Thrive Indoor Plants & Ferns Liquid Plant Food',feedNote:'Formulated for indoor plants and ferns. Apply only at the label rate.',grow:'Humidity and steady moisture matter more than frequent feeding. Keep away from heater and air-conditioner airflow.',repot:'Repot when crowded, using a moisture-retentive but draining mix; avoid an oversized pot.',prop:'Divide a healthy established clump with roots attached and replant promptly.',maint:['Remove brown fronds at base','Keep humidity steady','Avoid drying draughts','Check soil often'],pests:['spider','scale','gnat'],problems:['brown','droop','yellow','curl']},
 orchid:{position:'Bright, indirect light with good airflow. Avoid harsh midday/afternoon sun.',soil:'Use a coarse orchid bark mix rather than ordinary potting soil. The roots need high aeration and rapid drainage.',ph:'Mildly acidic • follow orchid-mix guidance',moisture:'Dry slightly between watering',water:'Water when the bark is approaching dry and roots look silvery rather than green. Soak thoroughly, then drain completely.',feed:'Yates Thrive Orchid Liquid Plant Food',feedNote:'Specifically formulated for orchids. Follow the current bottle label; do not guess dilution rates.',grow:'Good root airflow is essential. Keep water out of the crown for long periods and remove spent flower spikes appropriately.',repot:'Repot when bark breaks down or roots have overtaken the pot. Use fresh coarse orchid mix and an orchid pot with drainage.',prop:'Phalaenopsis are not usually propagated by leaf cuttings. Separate a keiki only after it has developed its own roots.',maint:['Inspect aerial roots','Remove spent blooms','Wipe leaves gently','Keep crown and roots ventilated'],pests:['mealy','scale','spider'],problems:['yellow','root','noFlower','wrinkle']},
 succulent:{position:'Very bright light with gentle direct sun; acclimatise gradually to stronger sun.',soil:'Succulent/cactus potting mix with extra perlite or pumice for rapid drainage. Drainage holes are essential.',ph:'Slightly acidic to neutral',moisture:'Dry well between watering',water:'Water thoroughly, then allow the mix to dry well before watering again. Never keep constantly damp.',feed:'Yates Thrive All Purpose Soluble Plant Food',feedNote:'Use sparingly during active growth and strictly at the current label rate; do not feed a stressed or waterlogged plant.',grow:'More light and less frequent watering help maintain compact, sturdy growth.',repot:'Repot only when crowded or mix has degraded. Use a small step up in pot size and very free-draining mix.',prop:'Use healthy cuttings or offsets where appropriate; allow succulent cut surfaces to callus before planting.',maint:['Remove dead growth','Rotate for even light','Keep foliage dry where practical','Inspect stems for pests'],pests:['mealy','scale','gnat'],problems:['root','shrivel','stretch','yellow']},
 snake:{position:'Bright indirect light is ideal, though it tolerates lower light. Avoid prolonged harsh sun.',soil:'Indoor potting mix cut heavily with perlite/pumice or a quality succulent mix for fast drainage.',ph:'Slightly acidic to neutral',moisture:'Dry between watering',water:'Let the potting mix dry well before watering. Water deeply, drain fully, and reduce frequency in cool weather.',feed:'Yates Thrive Indoor Plants & Ferns Liquid Plant Food',feedNote:'Feed lightly during active growth only, following the current product label.',grow:'The main risk is excess moisture. Keep the crown dry and do not use an oversized pot.',repot:'Repot when rhizomes crowd the pot. Move up one size and use a very free-draining mix.',prop:'Divide rhizomes/offsets. Leaf cuttings also root, but variegation may not be retained in some cultivars.',maint:['Remove damaged leaves at base','Wipe leaves','Rotate occasionally','Check crown for softness'],pests:['mealy','scale','spider'],problems:['root','yellow','curl','slow']},
 gardenia:{position:'Very bright light with gentle direct sun; protect from harsh afternoon heat and drying wind.',soil:'Use a premium potting mix formulated for acid-loving plants; add perlite if extra drainage is needed. Avoid alkaline amendments.',ph:'Acidic • about pH 5.0–6.0',moisture:'Evenly moist',water:'Keep evenly moist but not saturated. Check the upper mix and water before the root ball becomes bone dry.',feed:'Scotts Osmocote Roses, Gardenias, Azaleas & Camellias Controlled Release Fertiliser',feedNote:'Formulated for acid-loving plants. The current Bunnings listing states up to 6 months feeding; apply at the pack label rate.',grow:'Stable moisture and acidic root conditions help reduce bud drop and chlorosis.',repot:'Repot when root-bound, one pot size up, using fresh acid-loving potting mix with excellent drainage.',prop:'Take healthy semi-ripe cuttings and root in a humid, free-draining propagation medium.',maint:['Deadhead spent flowers','Prune lightly after flowering','Remove yellow leaves','Watch new leaves for chlorosis'],pests:['scale','aphid','spider','mealy'],problems:['yellow','budDrop','brown','noFlower']},
 citrus:{position:'Full outdoor sun, ideally 6+ hours, with airflow and protection from severe frost.',soil:'Premium citrus/fruit potting mix with excellent drainage. In containers, avoid dense garden soil.',ph:'Slightly acidic • about pH 5.5–6.5',moisture:'Even moisture in active growth',water:'Water deeply when the upper mix begins to dry. In hot Altona weather, container citrus may need checking more often.',feed:'Yates Dynamic Lifter Plant Food Pellets Fruit & Citrus',feedNote:'A fruit/citrus-specific option sold at Bunnings. Apply only according to the current pack label.',grow:'Sun, consistent watering and regular citrus nutrition support flowering and fruit development.',repot:'Repot a container plant when root-bound. Increase one pot size and use fresh citrus potting mix.',prop:'Named citrus is commonly grafted. Seedlings may not reproduce the parent reliably; maintain the graft union above soil.',maint:['Remove dead/crossing growth','Remove shoots below graft','Check leaves for pests','Thin congested growth lightly'],pests:['scale','aphid','mite','leafminer'],problems:['yellow','leafDrop','noFruit','curl']},
 edible:{position:'Sunny outdoor position; aim for strong light and good airflow.',soil:'Premium vegetable/herb potting mix enriched with compost; add perlite if a container mix drains slowly.',ph:'Slightly acidic to neutral • about pH 6.0–7.0',moisture:'Regular moisture',water:'Check frequently in warm weather. Water deeply when the surface begins to dry; avoid repeated wilting.',feed:'Yates Thrive Natural Vegie & Herb Liquid Plant Food',feedNote:'Suitable for home-grown vegetables and herbs. Follow the current label for dilution, frequency and edible-crop directions.',grow:'Harvesting/pruning and steady moisture encourage productive new growth. Avoid letting small pots overheat and dry out.',repot:'Move to a larger container when roots fill the pot; use fresh vegetable/herb potting mix with drainage.',prop:'Use seed, division or cuttings according to the crop; select healthy, pest-free material.',maint:['Harvest/prune regularly','Remove damaged leaves','Check flower/leaf tips for pests','Stake fruiting plants if needed'],pests:['aphid','whitefly','spider','gnat'],problems:['yellow','curl','droop','noFruit']},
 bougainvillea:{position:'Full sun in the warmest, brightest practical outdoor position.',soil:'Premium free-draining potting mix with added perlite/pumice if needed. Do not keep roots constantly wet.',ph:'Slightly acidic to neutral',moisture:'Dry slightly between watering',water:'Water deeply, then allow the upper mix to dry. Established plants flower better without constantly wet roots.',feed:'Yates Thrive All Purpose Soluble Plant Food',feedNote:'Suitable for many flowering potted plants. Follow the current label and avoid excessive nitrogen.',grow:'Strong sun and restrained watering support flowering; excessive feeding can favour leaves over bracts.',repot:'Bougainvillea tolerates being somewhat pot-bound. Repot only when necessary and minimise root disturbance.',prop:'Semi-hardwood cuttings can be rooted in a free-draining propagation mix.',maint:['Prune after flowering flushes','Wear gloves around thorns','Train/support long stems','Remove dead wood'],pests:['aphid','scale','mealy','spider'],problems:['noFlower','leafDrop','yellow','root']}
};

function groupForPlant(p){
 const edited=psGetBotanicalNames()[p.id];
 if(edited){const mapped=psBotanicalGroup(edited);if(mapped)return mapped;}
 if(['golden-pothos','marble-queen'].includes(p.id))return 'pothos';
 if(['many','konti','birkin-green','birkin-white','peace-lily','moon-valley','begonia'].includes(p.id))return 'tropical';
 if(p.id==='maidenhair')return 'fern'; if(['orchid-purple','orchid-white'].includes(p.id))return 'orchid';
 if(['string-of-pearls','pink-lady','zz-thick','zz-thin'].includes(p.id))return 'succulent';
 if(['baby-snake','mama-snake'].includes(p.id))return 'snake'; if(p.id==='gardenia-radicans')return 'gardenia';
 if(['calamansi','regular-lemon','dwarf-lemon'].includes(p.id))return 'citrus';
 if(['chilli-firecracker','habanero','jalapeno','mint','parsley','thai-peppers','chilli-timble','rosemary'].includes(p.id))return 'edible';
 if(p.id==='bougainvillea')return 'bougainvillea'; return p.place==='outdoor'?'edible':'tropical';
}
const pestData={spider:['🕷️','Spider mites','Fine webbing; pale stippling/bronzing; leaves may dry.','Check leaf undersides and stem junctions.','Isolate; rinse/wipe foliage. If a pesticide is needed, select an APVMA-registered product listing the pest and plant/use situation; follow its label exactly.'],mite:['🔎','Mites','Fine stippling, bronzing or distorted new growth.','Inspect undersides with a hand lens.','Improve plant vigour and use only a registered mite treatment whose label covers the crop.'],mealy:['⚪','Mealybugs','White cottony clusters, sticky honeydew, weakened/distorted growth.','Inspect leaf axils, stems, roots and pot rim.','Remove small colonies manually. For larger infestations use a registered product whose label covers mealybugs and the plant.'],scale:['🟤','Scale insects','Brown/white fixed bumps, sticky honeydew, sooty mould, yellowing.','Check stems, veins and leaf undersides.','Physically remove light infestations; use a registered horticultural oil/insecticide only as its label directs.'],aphid:['🟢','Aphids','Clusters on soft new growth; curled leaves; sticky honeydew.','Inspect shoot tips, buds and leaf undersides.','Hose off small colonies; if treatment is needed, use an APVMA-registered aphid product suitable for the plant/crop and obey withholding periods.'],whitefly:['🪽','Whitefly','Tiny white adults fly up when disturbed; nymphs beneath leaves; honeydew.','Check undersides of younger leaves.','Remove heavily infested leaves and use a registered product only where the label permits.'],gnat:['🪰','Fungus gnats','Small dark flies around moist potting mix; larvae live in damp organic media.','Check soil surface and drainage conditions.','Let the surface dry where the plant tolerates it; improve drainage. Use only a registered treatment if needed.'],leafminer:['〰️','Citrus leafminer','Silvery serpentine mines and distorted young citrus leaves.','Inspect fresh flushes of growth.','Protect new flush using a registered citrus leafminer product strictly according to label directions.']};
const problemData={yellow:['Yellow leaves','Overwatering/root stress, ageing leaves or nutrient/pH issues.','Check soil moisture first. If wet for days, improve drainage; if only old leaves yellow, remove them. Look at new-growth pattern before adding fertiliser.'],brown:['Brown tips/edges','Dry air, inconsistent watering, salt build-up or heat/sun scorch.','Check whether damage is crisp/dry versus soft. Correct watering and position first; flush accumulated salts when appropriate.'],droop:['Drooping/wilting','Dry root ball, saturated roots, heat or transplant stress.','Feel the mix before watering. Dry mix needs a thorough drink; wet mix plus wilt suggests root/oxygen stress.'],slow:['Slow growth','Low light, cool season, root crowding or depleted nutrition.','Compare seasonal growth, check light and roots, then feed only if the plant is actively growing.'],curl:['Curling/distorted leaves','Moisture stress, heat, pests or root problems.','Inspect undersides and new growth for pests; then check soil moisture and heat exposure.'],root:['Soft base/root rot signs','Prolonged wet mix and poor aeration.','Stop routine watering, inspect roots, remove rotten tissue where practical and repot into fresh free-draining mix.'],noFlower:['No flowers','Insufficient light, wrong season, excess nitrogen or plant immaturity.','Increase appropriate light, avoid overfeeding and confirm the species’ normal flowering season.'],noFruit:['Poor flowering/fruit set','Insufficient sun, nutrition/water stress or pollination conditions.','Maximise sun, keep moisture steady during flowering and use crop-appropriate fertiliser at label rates.'],budDrop:['Bud drop','Moisture swings, heat/cold stress or sudden environmental change.','Keep moisture and position stable; avoid moving the plant repeatedly while budding.'],leafDrop:['Leaf drop','Water stress, cold/heat shock, root problems or pest pressure.','Check moisture and roots, then inspect stems/leaves for pests and recent environmental changes.'],wrinkle:['Wrinkled leaves','Dehydration or damaged roots unable to take up water.','Inspect roots before simply watering more; healthy dry roots need water, rotten roots need corrective repotting.'],shrivel:['Shrivelling','Extended dryness or compromised roots.','Check whether roots are healthy and mix is dry before watering thoroughly.'],stretch:['Stretched/leggy growth','Insufficient light.','Increase light gradually and rotate the plant; prune stretched growth if appropriate.']};
function phFor(p,g){return g.ph || (soilPreference[p.id]==='🍋'?'Acid-loving':'Plant-appropriate pH');}
// v102 — verified Australian soil + feeding product recommendations.
// Botanical care requirements remain separate from retailer availability. Retail products below
// were verified as current Bunnings Australia listings on 3 Sep 2026. Where the current
// manufacturer/approved application label was not independently verified, the UI explicitly
// tells the user to follow the current product label rather than inventing a rate.
const verifiedCareProducts={
  indoor:{
    soil:'Scotts Osmocote 10L Indoor Plants Premium Potting Mix',
    soilNote:'A current Bunnings Australia premium indoor mix containing coir, sphagnum peat and perlite for moisture balance and root aeration. ABC Gardening Australia recommends a premium Australian-standard potting mix and shows perlite as a drainage amendment for indoor plants. No extra fixed ratio is stated here unless the plant-specific evidence supports one.',
    feed:'Yates 500ml Thrive Indoor Plants And Ferns Liquid Plant Food',
    feedNote:'A current Bunnings Australia liquid fertiliser formulated for indoor plants and ferns. Use during active growth. Follow the current product label directions for dilution and frequency; no unverified rate is supplied.'
  },
  gardenia:{
    soil:'Scotts Osmocote 25L Rose Gardenia And Azalea Premium Potting Mix',
    soilNote:'A current Bunnings Australia lower-pH premium mix formulated for acid-loving gardenias. ABC Gardening Australia specifically identifies Gardenia/Azalea/Camellia/Rhododendron mixes as acid-adjusted specialty mixes.',
    feed:'Scotts Osmocote 2.5L Pour+Feed for Rose, Gardenia and Azalea',
    feedNote:'A current Bunnings Australia ready-to-use feed for acid-loving gardenias. Current listing directions: apply one capful directly to moist soil around the plant, then water as required; for best results feed every 2 weeks. No dilution is required.'
  },
  orchid:{
    soil:'Scotts Osmocote 10L Orchid Premium Potting Mix',
    soilNote:'A current Bunnings Australia free-draining orchid mix made with coir chips and graded composted pine bark. ABC Gardening Australia notes orchids need coarse particles with abundant air around roots rather than ordinary fine potting soil.',
    feed:'Yates 500ml Thrive Orchid Liquid Plant Food',
    feedNote:'A current Bunnings Australia complete liquid fertiliser specifically developed for orchids. Use while the orchid is actively growing. Follow the current bottle label for dilution and frequency; no unverified rate is supplied.'
  },
  succulent:{
    soil:'Scotts Osmocote 10L Cacti And Succulent Premium Potting Mix',
    soilNote:'A current Bunnings Australia coarse, fast-draining premium mix for cacti and succulents. If still more aeration is needed, Brunnings 5L Coarse Grade Perlite is a current Bunnings option; no arbitrary mixing ratio is imposed.',
    feed:'Scotts Osmocote 1L Pour+Feed Cacti & Succulents',
    feedNote:'A current Bunnings Australia ready-to-use low-nitrogen, higher-potassium fertiliser for cacti and succulents. Follow the current bottle label for dose and frequency; no unverified schedule is supplied.'
  },
  citrus:{
    soil:'Scotts Osmocote 10L Citrus & Fruit Premium Potting Mix',
    soilNote:'A current Bunnings Australia citrus/fruit premium mix formulated for container citrus with wetting agent and citrus-oriented nutrition. ABC Gardening Australia also cautions that citrus roots need air and should not remain in overly wet soil.',
    feed:'Yates 500mL Thrive Citrus Liquid Plant Food',
    feedNote:'A current Bunnings Australia complete liquid feed formulated for all citrus, including lemons, limes and mandarins. Use during active growth/fruiting as appropriate. Follow the current bottle label for dilution and frequency; no unverified rate is supplied.'
  },
  edible:{
    soil:'Scotts Osmocote 25L Tomato Vegetable & Herb Premium Potting Mix',
    soilNote:'A current Bunnings Australia premium mix formulated for vegetables, herbs and salad greens, including container growing. No extra fixed amendment ratio is claimed unless plant-specific evidence supports it.',
    feed:'Scotts Osmocote 2.5L Pour+Feed for Tomato & Herb',
    feedNote:'A current Bunnings Australia ready-to-use feed listed for edible plants including herbs and chillies. Current listing directions: apply one capful directly to moist soil around the plant, then water as required; for best results feed every 2 weeks. No dilution is required.'
  },
  bougainvillea:{
    soil:'Scotts Osmocote 25L Premium Potting Mix + Brunnings 5L Perlite (if extra drainage is needed)',
    soilNote:'Both are current Bunnings Australia products. Use a premium Australian-standard potting mix; perlite can improve aeration/drainage where the container mix stays too wet. No authoritative fixed ratio is claimed here.',
    feed:'Yates 500mL Thrive Roses & Flowers Liquid Plant Food',
    feedNote:'A current Bunnings Australia complete liquid fertiliser for flowering plants. Use during active growth/flowering. Follow the current bottle label for dilution and frequency; no unverified rate is supplied.'
  }
};
const productClassByPlant={
  'gardenia-radicans':'gardenia','orchid-purple':'orchid','orchid-white':'orchid',
  'string-of-pearls':'succulent','pink-lady':'succulent','zz-thick':'succulent','zz-thin':'succulent','baby-snake':'succulent','mama-snake':'succulent',
  'calamansi':'citrus','regular-lemon':'citrus','dwarf-lemon':'citrus',
  'chilli-firecracker':'edible','habanero':'edible','jalapeno':'edible','mint':'edible','parsley':'edible','rosemary':'edible','thai-peppers':'edible','chilli-timble':'edible',
  'bougainvillea':'bougainvillea'
};
function verifiedProductsFor(p){
  // Built-ins have a known care identity. Custom plants do not receive a species-specific
  // product recommendation unless their species has been reliably identified in app data.
  const edited=psGetBotanicalNames()[p.id];
  if(edited){
    const mapped=psBotanicalGroup(edited);
    if(!mapped)return null;
    const productKey=['gardenia','orchid','succulent','citrus','edible','bougainvillea'].includes(mapped)?mapped:'indoor';
    return verifiedCareProducts[productKey] || verifiedCareProducts.indoor;
  }
  if(!botanicalNames[p.id]) return null;
  const key=productClassByPlant[p.id] || 'indoor';
  return verifiedCareProducts[key] || verifiedCareProducts.indoor;
}
function individualProfileFor(p){
  const group=profileGroups[groupForPlant(p)] || profileGroups.tropical;
  const hasBotanicalOverride=!!psGetBotanicalNames()[p.id];
  const legacy=hasBotanicalOverride ? {} : (profileFor(p) || {});
  const g={...group};
  // Use each plant's existing species/cultivar-specific care record instead of
  // displaying only the broad group template on every profile.
  if(legacy.light) g.position=legacy.light;
  if(legacy.soil) g.soil=legacy.soil;
  if(legacy.water) g.water=legacy.water;
  if(legacy.fertiliser){ g.feed=legacy.fertiliser; g.feedNote='Use the plant-appropriate product according to its current label directions.'; }
  const products=verifiedProductsFor(p);
  if(products){
    g.soil=`${g.soil}\n\nPractical product: ${products.soil}. ${products.soilNote}`;
    g.feed=products.feed;
    g.feedNote=products.feedNote;
  }else{
    g.soil=`${g.soil}\n\nProduct recommendation: Species not reliably identified — no species-specific soil product added.`;
    g.feed='No species-specific product recommended';
    g.feedNote='Species not reliably identified. Do not guess; identify the plant first, then follow the current product label.';
  }
  if(Array.isArray(legacy.tips) && legacy.tips.length) g.grow=legacy.tips.join(' ');
  if(legacy.pruning){ g.maint=[legacy.pruning, ...(group.maint||[]).filter(x=>x!==legacy.pruning)]; }
  if(Array.isArray(legacy.propagation) && legacy.propagation.length) g.prop=legacy.propagation.join(' ');
  return g;
}
function careCard(icon,label,content){
  const safeContent=(content===undefined || content===null || content==='') ? '—' : content;
  return `<article class="care-mini"><div class="care-icon" aria-hidden="true">${icon}</div><div><span class="care-label">${label}</span><p>${safeContent}</p></div></article>`;
}
function quickGuideIcon(type){
  const common='viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"';
  const stroke='stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"';
  const icons={
    light:`<svg ${common} class="quick-illustration" ${stroke}><circle cx="24" cy="24" r="8"/><path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.6 10.6l4.2 4.2M33.2 33.2l4.2 4.2M37.4 10.6l-4.2 4.2M14.8 33.2l-4.2 4.2"/></svg>`,
    watering:`<svg ${common} class="quick-illustration" ${stroke}><path d="M24 5C18 14 12 21 12 29a12 12 0 0 0 24 0c0-8-6-15-12-24Z"/><path d="M18 30c1 4 3.7 6 7.5 6"/></svg>`,
    soil:`<svg ${common} class="quick-illustration" ${stroke}><path d="M24 41V22M24 28c-5-1-8-4-9-9 5 0 8 2 9 6M24 31c5-1 8-4 9-9-5 0-8 2-9 6"/><path d="M8 41h32M12 38c3-5 6-7 12-7s9 2 12 7"/><path d="M19 41c-1-4-3-6-6-8M29 41c1-4 3-6 6-8"/></svg>`,
    ph:`<svg ${common} class="quick-illustration" ${stroke}><rect x="10" y="7" width="16" height="29" rx="4"/><path d="M14 14h8M14 20h8M14 26h5"/><path d="M18 36v5M13 41h10"/><path d="M33 10v22a5 5 0 0 0 10 0V10"/><path d="M33 28h10"/></svg>`,
    feeding:`<svg ${common} class="quick-illustration" ${stroke}><path d="M17 12h14v6l3 4v19H14V22l3-4v-6Z"/><path d="M19 7h10v5H19zM18 27h12M24 23v8M20 35h8"/></svg>`,
    maintenance:`<svg ${common} class="quick-illustration" ${stroke}><circle cx="14" cy="33" r="6"/><circle cx="34" cy="33" r="6"/><path d="M18 29 34 8M30 29 14 8M24 21l7-9M24 21l-7-9"/></svg>`,
    tip:`<svg ${common} class="quick-illustration" ${stroke}><path d="M24 42V24"/><path d="M24 29c-6-1-10-5-11-11 6 0 10 3 11 8M24 25c6-1 10-5 11-11-6 0-10 3-11 8"/><path d="M15 42h18"/></svg>`
  };
  return icons[type]||'';
}
function quickInfoCard(type,label,content,extraClass=''){
  const safeContent=(content===undefined || content===null || content==='') ? '—' : content;
  return `<article class="quick-info-card quick-info-${type} ${extraClass}"><div class="quick-info-icon">${quickGuideIcon(type)}</div><div class="quick-info-copy"><span class="quick-info-label">${label}</span><p>${safeContent}</p></div></article>`;
}
function quickFullSection(type,label,content,extraClass=''){
  const safeContent=(content===undefined || content===null || content==='') ? '—' : content;
  return `<article class="quick-full-card ${extraClass}"><div class="quick-full-heading">${quickGuideIcon(type)}<span>${label}</span></div><div class="quick-full-body">${safeContent}</div></article>`;
}

function profilePageButton(n,label){return `<button class="profile-tab" type="button" data-profile-page="${n}">${label}</button>`;}
function renderProfile(id,page=1){
 const p=plants.find(x=>x.id===id);if(!p)return;
 const g=individualProfileFor(p);
 const photo=psSavedPlantPhoto(p.id);
 const watered=wateredStatusLabel(state.watered[p.id]);
 const botanical=psBotanicalName(p);
 const displayName=psDisplayName(p),safeName=psEscapeHTML(displayName),safeBotanical=psEscapeHTML(botanical);
 const photoMarkup=`<button class="profile-photo-wrap profile-photo-trigger ${photo?'has-photo':''}" type="button" data-profile-photo-edit="${p.id}" aria-label="Edit ${safeName} profile">${photo?`<img class="profile-plant-photo" src="${photo}" alt="${safeName} photo">`:`<span class="profile-photo-fallback" aria-label="No saved plant photo">${psEscapeHTML(psPlantInitials(displayName))}</span>`}</button>`;
 const identity=page===1
  ? `<section class="profile-identity profile-identity-quick" aria-label="${safeName} identity"><div class="quick-identity-photo">${photoMarkup}</div><div class="quick-identity-copy"><span class="profile-eyebrow">PLANT PROFILE</span><h2 id="profileName">${safeName}</h2><p class="botanical-name"><em>${safeBotanical}</em></p><span class="profile-tag">${p.place==='indoor'?'Indoor plant':'Outdoor plant'}</span></div></section>`
  : `<section class="profile-identity" aria-label="${safeName} identity"><div class="profile-top-actions"><span class="profile-eyebrow">PLANT PROFILE</span></div><h2 id="profileName">${safeName}</h2><p class="botanical-name"><em>${safeBotanical}</em></p><span class="profile-tag">${p.place==='indoor'?'Indoor plant':'Outdoor plant'}</span>${photoMarkup}</section>`;
 const tabs=`<nav class="profile-tabs" aria-label="Profile pages">${profilePageButton(1,'Quick')}${profilePageButton(2,'Care')}${profilePageButton(3,'Pests')}${profilePageButton(4,'Problems')}</nav>`;
 let body='';
 if(page===1) body=`<article class="profile-poster quick-guide-v110"><section class="quick-info-grid">${quickInfoCard('light','LIGHT',g.position)}${quickInfoCard('watering','WATERING',`${g.moisture}. ${g.water}`)}${quickInfoCard('soil','SOIL',g.soil)}${quickInfoCard('ph','pH',phFor(p,g))}</section>${quickFullSection('feeding','FEEDING',`<p><strong>${g.feed}</strong></p><p>${g.feedNote}</p>`,'quick-feeding-card')}${quickFullSection('maintenance','HANDS-ON CARE',`<ul>${(g.maint||[]).map(x=>`<li>${x}</li>`).join('')}</ul>`,'quick-maintenance-card')}${quickFullSection('tip','GROW TIP',`<p>${g.grow}</p>`,'quick-grow-card')}</article>`;
 if(page===2) body=`<section class="detail-stack"><h2>${safeName} — Care Guide</h2>${careCard('☀️','POSITION',g.position)}${careCard('🪴','SOIL + pH',`${g.soil}<br><strong>${phFor(p,g)}</strong>`)}${careCard('💧','WATERING',`${g.water}<br><small>Watering Check interval remains ${p.base} days; always confirm soil moisture first.</small>`)}${careCard('🌿','FERTILISING / FEEDING',`<strong>${g.feed}</strong><br>${g.feedNote}`)}${careCard('💡','GROWING TIPS',g.grow)}${careCard('🪴','REPOTTING',g.repot)}${careCard('🌱','REPLANTING / PROPAGATION',g.prop)}<article class="profile-panel"><span class="care-label">✂️ MAINTENANCE</span><ul>${g.maint.map(x=>`<li>${x}</li>`).join('')}</ul></article><article class="evidence-note"><b>Evidence standard</b><p>Care is structured around Gardening Australia, Australian botanic-garden guidance, Altona/Melbourne seasonal conditions, and product-label directions. Product availability is a practical shopping reference; always follow the current pack/registered label.</p></article></section>`;
 if(page===3) body=`<section class="detail-stack"><h2>Common Pests — Symptoms & Solutions</h2><p class="section-intro">Only pests relevant to this plant type are shown. Confirm the pest before treating.</p>${g.pests.map(k=>{const x=pestData[k];return `<article class="pest-card"><div class="pest-thumb" role="img" aria-label="${x[1]} reference">${x[0]}</div><div><h3>${x[1]}</h3><p><b>Symptoms:</b> ${x[2]}</p><p><b>Inspect:</b> ${x[3]}</p><p><b>Care / treatment:</b> ${x[4]}</p></div></article>`}).join('')}<article class="evidence-note"><b>Product safety</b><p>No pesticide dilution or schedule is invented in Plant Secretary. Use only products whose current APVMA-approved label covers the pest and use situation, and follow that label.</p></article></section>`;
 if(page===4) body=`<section class="detail-stack"><h2>Common Problems & Troubleshooting</h2><div class="trouble-list">${g.problems.map(k=>{const x=problemData[k];return `<article class="trouble-card"><h3>${x[0]}</h3><p><b>Likely causes</b><br>${x[1]}</p><p><b>What to do</b><br>${x[2]}</p></article>`}).join('')}</div><article class="evidence-note"><b>Diagnostic rule</b><p>Similar symptoms can have different causes. Check soil moisture, roots, light and pests before treating or feeding.</p></article></section>`;
 el('profileContent').innerHTML=`${identity}${tabs}<div class="profile-page">${body}</div><button id="profileWaterBtn" class="profile-water-btn" type="button">💧 ${watered}</button>`;
 document.querySelectorAll('.profile-tab').forEach(b=>{b.classList.toggle('active',Number(b.dataset.profilePage)===page);b.addEventListener('click',()=>renderProfile(id,Number(b.dataset.profilePage)));});
 el('profileWaterBtn').addEventListener('click',()=>{state.watered[p.id]=localDateOnly();save();renderAll();renderProfile(p.id,page);});
 document.querySelectorAll('[data-profile-photo-edit]').forEach(btn=>btn.addEventListener('click',()=>psOpenProfilePhotoMenu(p.id)));
}

let psEditingPhotoPlantId=null;
let psCropSource='';
let psCropImage=null;
let psPhotoDirty=false;

function psSetCropSource(src){
  psCropSource=src||'';
  const preview=el('profileCropImage');
  const controls=el('profileCropControls');
  if(!preview||!controls)return;
  if(!src){preview.removeAttribute('src');controls.hidden=true;psCropImage=null;return;}
  preview.src=src;controls.hidden=false;
  el('profileCropZoom').value='1';el('profileCropX').value='0';el('profileCropY').value='0';
  psCropImage=new Image();psCropImage.onload=psUpdateCropPreview;psCropImage.src=src;
  psUpdateCropPreview();
}
function psUpdateCropPreview(){
  const img=el('profileCropImage');if(!img||!psCropSource)return;
  const zoom=Number(el('profileCropZoom').value||1);
  const x=Number(el('profileCropX').value||0);
  const y=Number(el('profileCropY').value||0);
  const box=img.parentElement;
  const size=(box&&box.clientWidth)||190;
  const nw=(psCropImage&&psCropImage.naturalWidth)||img.naturalWidth;
  const nh=(psCropImage&&psCropImage.naturalHeight)||img.naturalHeight;
  if(!nw||!nh){img.style.transform='none';return;}
  const base=Math.max(size/nw,size/nh);
  const w=nw*base*zoom,h=nh*base*zoom;
  const maxX=Math.max(0,(w-size)/2),maxY=Math.max(0,(h-size)/2);
  const tx=(x/100)*maxX,ty=(y/100)*maxY;
  img.style.width=`${w}px`;
  img.style.height=`${h}px`;
  img.style.left=`${(size-w)/2}px`;
  img.style.top=`${(size-h)/2}px`;
  img.style.transform=`translate(${tx}px,${ty}px)`;
}
function psOpenProfilePhotoMenu(id){
  psEditingPhotoPlantId=id;
  const menu=el('profilePhotoMenu');
  const p=plants.find(x=>x.id===id);
  if(!menu||!p)return;
  el('profileCommonNameInput').value=psDisplayName(p);
  el('profileBotanicalInput').value=psBotanicalName(p);
  const saved=psSavedPlantPhoto(id);
  el('profileDeletePhotoBtn').disabled=!saved;
  psSetCropSource(saved);
  psPhotoDirty=false;
  menu.hidden=false;
}
function psCloseProfilePhotoMenu(){
  const menu=el('profilePhotoMenu');if(menu)menu.hidden=true;
  psEditingPhotoPlantId=null;psCropSource='';psCropImage=null;psPhotoDirty=false;
}
function psReadPhotoFile(file){
 return new Promise((resolve,reject)=>{const r=new FileReader();r.onerror=()=>reject(new Error('Could not read photo.'));r.onload=()=>resolve(r.result);r.readAsDataURL(file);});
}
function psRenderCroppedPhoto(src,zoom,xPct,yPct,size=900,quality=.86){
 return new Promise((resolve,reject)=>{
  const img=new Image();img.onerror=()=>reject(new Error('Could not crop photo.'));img.onload=()=>{
   const canvas=document.createElement('canvas');canvas.width=size;canvas.height=size;const ctx=canvas.getContext('2d');
   const base=Math.max(size/img.width,size/img.height);const scale=base*zoom;
   const w=img.width*scale,h=img.height*scale;
   const maxX=Math.max(0,(w-size)/2),maxY=Math.max(0,(h-size)/2);
   const dx=(size-w)/2 + (xPct/100)*maxX;
   const dy=(size-h)/2 + (yPct/100)*maxY;
   ctx.drawImage(img,dx,dy,w,h);resolve(canvas.toDataURL('image/jpeg',quality));
  };img.src=src;
 });
}
function psRefreshPlantPhotoViews(id){renderAll();if(currentProfile===id)renderProfile(id);setTimeout(psAddDeleteButtons,0);}
function openProfile(id){
  const p=plants.find(x=>x.id===id);
  const screen=el('profileScreen');
  const content=el('profileContent');
  if(!p || !screen || !content) return;
  currentProfile=id;
  screen.classList.add('open');
  screen.setAttribute('aria-hidden','false');
  document.body.classList.add('profile-open');
  try{
    renderProfile(id);
  }catch(err){
    console.error('Plant profile render failed',id,err);
    content.innerHTML=`<section class="detail-stack"><h2 id="profileName">${psEscapeHTML(psDisplayName(p))}</h2><article class="profile-panel"><b>Profile temporarily unavailable.</b><p>Please close and reopen this profile. Your watering data has not been changed.</p></article></section>`;
  }
}
function closeProfile(){el('profileScreen').classList.remove('open');el('profileScreen').setAttribute('aria-hidden','true');document.body.classList.remove('profile-open');currentProfile=null;}
el('profileBack').addEventListener('click',closeProfile);
el('filterSelect').addEventListener('change',renderWateringCubes);
el('undoWateringBtn').addEventListener('click',undoLastWatering);
updateWateringUndoButton();

el('profileUploadPhotoBtn').addEventListener('click',()=>{
  if(!psEditingPhotoPlantId)return;el('profilePhotoInput').value='';el('profilePhotoInput').click();
});
el('profilePhotoInput').addEventListener('change',async(e)=>{
  const file=e.target.files&&e.target.files[0];if(!file||!psEditingPhotoPlantId)return;
  try{psSetCropSource(await psReadPhotoFile(file));psPhotoDirty=true;el('profileDeletePhotoBtn').disabled=false;}catch(err){alert('That photo could not be opened. Please try another image.');}
});
['profileCropZoom','profileCropX','profileCropY'].forEach(id=>el(id).addEventListener('input',()=>{psPhotoDirty=true;psUpdateCropPreview();}));
el('profileDeletePhotoBtn').addEventListener('click',()=>{
  if(!psEditingPhotoPlantId)return;psSetCropSource('');psPhotoDirty=true;el('profileDeletePhotoBtn').disabled=true;
});
el('profileSavePhotoBtn').addEventListener('click',async()=>{
  const id=psEditingPhotoPlantId;if(!id)return;const p=plants.find(x=>x.id===id);if(!p)return;
  const commonName=el('profileCommonNameInput').value.trim();if(!commonName){alert('Plant name cannot be blank.');return;}
  const botanical=el('profileBotanicalInput').value.trim();if(!botanical){alert('Botanical name cannot be blank.');return;}
  const commonNames=psGetCommonNames();
  if(commonName===String(p.name||'').trim()) delete commonNames[id]; else commonNames[id]=commonName;
  psSaveCommonNames(commonNames);
  const names=psGetBotanicalNames();names[id]=botanical;psSaveBotanicalNames(names);
  const photos=psGetPlantPhotos();
  try{
    if(psPhotoDirty){
      if(psCropSource){photos[id]=await psRenderCroppedPhoto(psCropSource,Number(el('profileCropZoom').value),Number(el('profileCropX').value),Number(el('profileCropY').value));}
      else{photos[id]='__NONE__';}
      psSavePlantPhotos(photos);
    }
    psCloseProfilePhotoMenu();psRefreshPlantPhotoViews(id);
  }catch(err){alert('That photo could not be saved. Please try again.');}
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

if('serviceWorker'in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=109').catch(()=>{}));}


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
  const ok = window.confirm(`Delete "${psDisplayName(plant)}" from your collection?`);
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

