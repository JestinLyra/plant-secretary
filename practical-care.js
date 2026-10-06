(()=>{
// Presentation-only additions. Never infer identity from a display name or
// change a plant, reminder, history entry, photo or existing summary.
const care=()=>window.PLANT_BOTANICAL_CARE;
const reviewedAt='2026-10-06';
const fields=['habit','sunlight','water','soil','ph','feed','prune','pinching','repotting','propagation','problems','seasonal'];
const sources={};
function source(id,label,url,scope){sources[id]={id,label,url,scope};return id}
const abc=(id,title,path,scope)=>source(id,'ABC Gardening Australia — '+title,'https://www.abc.net.au/gardening/'+path,scope);
const nc=(id,name,slug,scope='Supplementary species guidance; US seasonal dates and pest treatments are not adopted for Victoria.')=>source(id,'NC State Extension — '+name,'https://plants.ces.ncsu.edu/plants/'+slug+'/',scope);
const rhs=(id,name,path,scope='Supplementary horticultural guidance; use growth stages rather than UK calendar months in Melbourne.')=>source(id,'RHS — '+name,'https://www.rhs.org.uk/'+path,scope);
abc('light','Light Up Indoors','how-to/light-up-indoors/102110534','Australian indoor-light guidance: filtered light and scorch; group-level placement, not an exact distance from a window.');
abc('water','Water and Humidity','water-and-humidity/102686292','General indoor-pot moisture inspection and draining saucers; species moisture triggers remain separate.');
abc('pot','Potting-on Plants','how-to/potting-on-plants/13813302','General container signs and method; gradual pot-size increases, existing planting depth and shelter afterwards. Not a mandatory species repotting interval.');
abc('succulent','Watering Succulents','how-to/watering-succulents/13146268','General succulent drying and drainage. Does not establish an exact species inspection interval or a mesemb dormancy regime.');
abc('display','Worthy Display','how-to/worthy-display/106525930','Haworthia-group indoor display, gritty mix and overcrowding; includes Curio rowleyanus and Callisia Pink Lady. Not exact Haworthia cymbiformis care or a universal monthly watering rule.');
abc('snake','Snake Plants','how-to/snake-plants/104347544','Snake-plant group: bright indirect light, drying, succulent mix, dead-leaf removal and sap-sucking pests. Soil-grown plants only.');
abc('zz','Bringing the Outdoors In','how-to/bringing-the-outdoors-in/9436710','ZZ storage organs and low-water tolerance; no published numerical soil-check interval.');
abc('orchid','Orchid Revival','how-to/orchid-revival/12096898','Phalaenopsis genus/hybrids: root inspection, airy bark, repotting and flower-spike choices. Not proof of a particular hybrid identity.');
abc('herbs','Planting Winter Herbs','how-to/planting-winter-herbs/9436528','Australian coriander and parsley: cooler growing conditions, bolting and seed. Not all Mediterranean herbs.');
abc('rosemary','Rockery Renewal','how-to/rockery-renewal/106683542','Light trimming of woody herbs including rosemary; not the hard-pruning recommendation for other salvias.');
abc('chilli','Easy Solanaceae','how-to/easy-solanaceae/104462956','Capsicum/chilli crop-group warmth, drainage, support and seed raising; not a cultivar yield or fertiliser trial.');
abc('gardenia','FAQs: Gardenia and winter watering','how-to/faqs-feeding-lawns-gardenia-watering-in-winter/9437806','Cold can restrict gardenia nutrient uptake. Yellow leaves alone are not proof that more fertiliser is needed.');
abc('citrus','Lemonicious','lemonicious/102656362','Australian lemon/Meyer light, planting and pot guidance. Title alone does not identify the commercial Lemonicious selection.');
source('bom','BOM — Laverton RAAF climate averages','https://www.bom.gov.au/climate/averages/tables/cw_087031.shtml','Regional Altona context only. App interpretation of seasonal exposure, not horticultural advice, live weather or a numerical soil-check formula.');
source('forecast','BOM — Altona forecast','https://www.bom.gov.au/places/vic/altona/forecast/','Open for current weather; the app does not fetch a live forecast in these guides.');
source('apvma','APVMA — Understanding pesticide labels','https://www.apvma.gov.au/resources/using-chemicals/understanding-pesticide-labels','Use only approved label uses and restrictions. No pesticide, insecticide or fungicide product is prescribed by this update.');
source('rbg-eucalypt','RBG Victoria — HortFlora: Eucalyptus cinerea','https://hortflora.rbg.vic.gov.au/taxon/ad99bfd6-5340-11e7-b82b-005056b0018f','Australian botanical reference; species has multiple subspecies. This guide does not assign an unverified subspecies.');
nc('heartleaf','Philodendron hederaceum','philodendron-hederaceum');
nc('monstera','Monstera deliciosa','monstera-deliciosa');
nc('pothos','Epipremnum aureum','epipremnum-aureum');
nc('ripple','Peperomia caperata','peperomia-caperata','Supplementary species evidence for Milano: filtered light, porous medium and cuttings. No cultivar-specific protocol found in this review.');
nc('watermelon','Peperomia argyraea','peperomia-argyraea');
nc('hypoestes','Hypoestes phyllostachya','hypoestes-phyllostachya');
nc('sedum','Sedum morganianum','sedum-morganianum');
nc('zz-specific','Zamioculcas zamiifolia','zamioculcas-zamiifolia','Supplementary ZZ drying, light, sparse feeding and division/leaf cuttings. Its conditional watering examples are not automatic inspection intervals.');
nc('gardenia-specific','Gardenia jasminoides','gardenia-jasminoides');
nc('annuum','Capsicum annuum','capsicum-annuum');
nc('chinense','Capsicum chinense','capsicum-chinense');
rhs('adiantum','Adiantum capillus-veneris','plants/23998/adiantum-capillus-veneris/details');
rhs('begonia','Begonia maculata','plants/112222/begonia-maculata-c/details');
rhs('birkin',"Philodendron 'Birkin'",'plants/505239/philodendron-birkin-v/details','Supplementary named cultivar guidance, including stem-tip/leaf-bud cuttings. RHS marks its taxonomic name status unresolved; this is horticultural cultivar guidance.');
rhs('peace','Spathiphyllum wallisii','plants/17623/spathiphyllum-wallisii/details');
rhs('pilea','Pilea involucrata','plants/47637/pilea-involucrata/details');
rhs('peperomia-group','Growing peperomia','plants/peperomia/how-to-grow-peperomia','Supplementary genus-level inspection, light and feeding; no Milano-specific fertiliser trial.');
rhs('callisia','Callisia repens','plants/2685/callisia-repens/details');
rhs('snake-specific','Dracaena trifasciata','plants/530138/dracaena-trifasciata/details');
rhs('curio','Growing string of beads','plants/string-of-beads/how-to-grow-string-of-beads','Supplementary Curio-group pot, light, feeding and propagation advice; species differences retained.');
rhs('herreanus','Curio herreanus','plants/537170/curio-herreanus/details');
rhs('citrus-group','Growing citrus','fruit/citrus/grow-your-own','Supplementary citrus container guidance; UK greenhouse calendar is not an Altona planting calendar.');
rhs('coriander','Growing coriander','herbs/coriander/grow-your-own');
rhs('parsley','Growing parsley','herbs/parsley/grow-your-own');
rhs('rosemary-specific','Growing rosemary','herbs/rosemary/grow-your-own');
rhs('eucalypt','Eucalyptus cinerea','plants/19957/eucalyptus-cinerea/details');
rhs('eucalypt-group','Growing eucalyptus','plants/eucalyptus/growing-guide','Supplementary eucalyptus-group establishment and juvenile-foliage pruning; not a routine coppicing instruction for every tree.');
source('mesemb','LLIFLE — Cheiridopsis pillansii','https://www.llifle.com/Encyclopedia/SUCCULENTS/Family/Aizoaceae/14664/Cheiridopsis_pillansii','Supplementary specialist species evidence: cool-season growth, mineral soil, summer dormancy and potassium sensitivity. Not Australian primary-source advice.');
const records={};
const step=(text,refs,kind='Sourced guidance')=>({text,refs,kind});
function add(name,group,entries,gap='No exact soil-check frequency, tested pot diameter or universal fertiliser dose established. Australian primary guidance covers the stated groups; supplementary references fill the named species/cultivar gaps.'){records[name]={botanical:name,group,entries,gap,reviewedAt};}
add('Adiantum capillus-veneris','indoor',{
 water:[step('Inspect for a moist root zone; do not wait for the whole pot to become dry. Free drainage is still necessary.',['adiantum'])],
 sunlight:[step('Use a filtered, shaded position; if a hot window scorches fronds, add shade or move the pot.',['adiantum','light'])],
 propagation:[step('Divide established clumps or use spores; a detached frond is not a reviewed propagation method.',['adiantum'])]
});
add('Begonia maculata','peat-free',{
 sunlight:[step('Filter strong window light; avoid exposing the leaves to hot direct sun.',['begonia','light'])],
 water:[step('Water moderately while growing; a wet pot is not a reason to add more water. Drain the saucer afterwards.',['begonia','water'])],
 prune:[step('In late spring, shorten over-long canes to two or three buds rather than repeatedly cutting every leaf.',['begonia'])],
 propagation:[step('Use stem cuttings; keep the cane-growing method distinct from rhizomatous-begonia leaf propagation.',['begonia'])]
});
add("Philodendron 'Birkin'",'indoor',{
 sunlight:[step('Position in bright filtered light, with a sheer curtain where needed; hot direct exposure can scorch foliage.',['birkin','light'])],
 propagation:[step('Take stem-tip or leaf-bud cuttings. Retain a bud-bearing stem section rather than relying on a leaf blade alone.',['birkin'])],
 repotting:[step('RHS gives a two-to-three-year guide; also inspect actual root crowding and medium condition rather than repotting solely because a reminder elapsed.',['birkin','pot'])]
});
add('Sedum morganianum','succulent',{
 habit:[step('The brittle leaves detach easily. Handle the trailing stems gently when moving or repotting.',['sedum'])],
 sunlight:[step('Choose a bright position with some sun; do not treat its high-light preference as a deep-shade recommendation.',['sedum'])],
 water:[step('Check that the mix has dried between waterings; reduce actual watering in winter.',['sedum'])],
 propagation:[step('Dropped leaves and stem cuttings can root. Handle carefully so intact trailing stems are preserved.',['sedum'])]
});
add('Coriandrum sativum','herb',{
 seasonal:[step('ABC recommends cooler growing conditions. Warmth or root disturbance can accelerate bolting; sow another crop rather than expecting an ageing flowering plant to remain leafy.',['herbs'])],
 prune:[step('For leaf harvest, remove developing flower stems; keep some flowers only if you want seed.',['coriander'])],
 propagation:[step('Sow seed for replacement crops and avoid unnecessary root disturbance.',['herbs','coriander'])]
});
const orchidEntries={
 water:[step('Look through a clear pot at roots and bark moisture. When water is needed, wet the medium and let it drain freely.',['orchid'])],
 soil:[step('Use open bark-based orchid medium rather than ordinary garden soil. Keep the crown above the mix and do not pack bark tightly around roots.',['orchid'])],
 prune:[step('After flowering, a healthy green spike may be left, shortened to a node or removed. Remove a dead spike; inspect for new buds before cutting.',['orchid'])],
 repotting:[step('Repot after flowering as new roots begin growing. Remove dead or damaged roots, settle fresh bark loosely and use a pot with ample drainage.',['orchid'])],
 sunlight:[step('Use filtered light and protect from harsh summer sun; the source describes tropical epiphytic culture, not ordinary outdoor bedding.',['orchid'])]
};
add('Phalaenopsis cultivar','orchid',orchidEntries,'Phalaenopsis cultivar is a cultivated/hybrid group, not an identified species or named hybrid. Guidance is explicitly group-level. No exact hybrid identity, pot diameter or soil-check interval established.');
add('Phalaenopsis amabilis','orchid',orchidEntries,'Practical additions here are Phalaenopsis genus-level ABC culture. They do not establish species-specific fertiliser doses or inspection intervals.');
add('Spathiphyllum wallisii','peat-free',{
 sunlight:[step('Choose indirect or partially shaded light; deep shade may reduce flowering.',['peace'])],
 repotting:[step('Pot on when roots overfill the container; choose a gradual increase with effective drainage.',['peace','pot'])],
 propagation:[step('Divide a mature clump in winter or just after flowering rather than taking leaf-only cuttings.',['peace'])]
});
add('Pilea involucrata','indoor',{
 sunlight:[step('Provide bright filtered light with humidity and shelter from draughts.',['pilea'])],
 pinching:[step('Pinch growing tips if you want bushier foliage; retain healthy growth rather than treating pinching as mandatory.',['pilea'])],
 propagation:[step('Use softwood cuttings from growing shoots.',['pilea'])]
});
add('Gardenia jasminoides','gardenia',{
 problems:[step('Before feeding yellow leaves, consider cold conditions: ABC notes that winter cold can restrict nutrient uptake. Check drainage and exposure as well.',['gardenia'])],
 soil:[step('Use an acidic, freely draining medium; avoid disturbing shallow roots unnecessarily.',['gardenia-specific'])],
 sunlight:[step('Provide bright light or partial shade and shelter from strong wind and cold exposure.',['gardenia-specific'])],
 prune:[step('Remove spent flowers; prune for shape with flowering on new growth in mind. Exact cultivar flowering time is not established here.',['gardenia-specific'])]
});
add('Philodendron hederaceum','indoor',{
 habit:[step('Give the vine a climbing support or allow it to trail; support changes the growth form, not its botanical identity.',['heartleaf'])],
 sunlight:[step('Prefer medium filtered light; tolerance of low light does not mean it is the best growing position.',['heartleaf'])],
 seasonal:[step('Reduce actual watering when cooler conditions slow growth, while checking the medium rather than applying a calendar automatically.',['heartleaf'])]
});
add("Peperomia caperata 'Milano'",'indoor',{
 sunlight:[step('Use filtered light such as a bright position behind a thin curtain. Avoid cold draughts.',['ripple'])],
 water:[step('Allow some drying, but avoid both a saturated pot and severe prolonged dryness. Porous medium matters more than an invented number of days.',['ripple'])],
 propagation:[step('Species guidance supports leaf or stem-tip cuttings in spring; a separate Milano protocol was not found.',['ripple'])]
},'Milano-specific practical protocols were not located in this review. The additions are labelled Peperomia caperata species guidance, not cultivar trials.');
add('Peperomia argyraea','indoor',{
 water:[step('Feel the top of the medium: let it become dry to the touch before watering. Both severe dryness and persistent wetness can cause decline.',['watermelon'])],
 sunlight:[step('Use bright indirect light and protect from cold draughts.',['watermelon'])],
 repotting:[step('This species tolerates a snug pot and does not need frequent repotting. Check the root mass before increasing pot size.',['watermelon'])]
});
const pothosEntries={
 habit:[step('Use a support for climbing or let vines trail. Adequate light and support can produce larger mature leaves.',['pothos'])],
 prune:[step('Shorten bare or over-long vines to encourage a bushier plant; wipe dust from remaining leaves.',['pothos'])],
 propagation:[step('The vines can root in water; use healthy stem growth to renew a sparse plant.',['pothos'])],
 sunlight:[step('Choose bright indirect light. Low-light survival is not the same as vigorous growth.',['pothos'])]
};
add('Epipremnum aureum','indoor',pothosEntries);
add("Epipremnum aureum 'Marble Queen'",'indoor',pothosEntries,'These practical additions use Epipremnum aureum species guidance. No separate Marble Queen fertiliser trial or numerical inspection interval established.');
add('Monstera deliciosa','indoor',{
 water:[step('Check the upper quarter to third of the medium for drying before watering thoroughly; let excess drain. This is a moisture trigger, not a number of days.',['monstera'])],
 habit:[step('Provide sturdy support for climbing stems so their weight does not cause breakage.',['monstera'])],
 propagation:[step('Use stem cuttings or layering rather than detached leaf blades.',['monstera'])],
 prune:[step('Prune or repot when needed during spring growth; wipe dust from the broad leaves.',['monstera'])]
});
add('Callisia repens','succulent',{
 habit:[step('The trailing stems root at nodes; keep discarded growth contained rather than placing it in the garden.',['callisia','display'])],
 propagation:[step('Use softwood cuttings or divide rooted offsets; several rooted pieces can create denser coverage.',['callisia'])],
 sunlight:[step('Use bright filtered light; shelter from winter cold.',['callisia'])]
});
add('Dracaena trifasciata','succulent',{
 water:[step('For soil-grown plants, let the medium dry between waterings. These soil instructions do not apply to a water-propagated cutting.',['snake'])],
 sunlight:[step('Prefer bright indirect light; low-light tolerance is useful but does not remove the need to check moisture.',['snake'])],
 prune:[step('Remove dead or yellowing leaves; inspect occasionally for sap-sucking insects.',['snake'])]
});
add('Curio rowleyanus','succulent',{
 repotting:[step('Avoid a much oversized container; excess medium can remain damp and encourage root rot.',['curio'])],
 propagation:[step('Use healthy trailing stem cuttings to renew a sparse plant.',['curio'])],
 water:[step('In cooler conditions use much less water; inspect both the medium and leaves rather than following a universal monthly calendar.',['curio','display'])]
},'Sources differ in the extent of drying advised: NC State cautions against complete desiccation, while the ABC mixed display dries fully. The guide avoids importing the display calendar as a species interval.');
add('Haworthia cymbiformis','succulent',{
 sunlight:[step('Use filtered indoor light and protect from harsh hot exposure; this addition uses Haworthia-group guidance.',['display'])],
 soil:[step('Use a gritty, freely draining succulent medium in a pot with drainage.',['display'])],
 repotting:[step('Inspect overcrowding and remove dead leaves; do not repot solely to give a slow-growing rosette a very large pot.',['display'])]
},'RHS species page does not supply a detailed cultivation protocol. Practical additions use the Australian Haworthia group guidance; no exact species frequency, mineral percentage or dose established.');
add('Zamioculcas zamiifolia','indoor',{
 water:[step('Confirm that the medium has dried before watering; stored water in rhizomes makes a wet pot unnecessary. A personal check reminder is not permission to water.',['zz','zz-specific'])],
 sunlight:[step('Prefer bright indirect light. Direct sun can brown or scorch leaves even though the plant tolerates very low light.',['zz-specific'])],
 feed:[step('NC State suggests balanced liquid houseplant feed only once or twice a year. This is sparse species feeding, not a monthly rule for all indoor plants; the chosen product label still governs dilution.',['zz-specific'])],
 propagation:[step('Divide the plant or use leaf cuttings; its rhizomatous growth supports division.',['zz-specific'])]
});
const citrusEntries={
 sunlight:[step('Use a sunny, sheltered position; protect container plants from cold exposure rather than applying a UK greenhouse calendar.',['citrus','citrus-group'])],
 repotting:[step('Inspect root crowding before potting on. Increase size gradually and retain planting depth; an oversized pot can stay cold and wet.',['pot'])],
 propagation:[step('Seed-grown citrus can take years to fruit and may differ from the parent. Use labelled nursery material when retaining cultivar identity matters.',['citrus-group'])]
};
add('Citrus × microcarpa','citrus',citrusEntries,'Citrus-group practical additions; no dwarf-rootstock identity, exact cultivar dose or fixed soil-check interval established.');
add('Citrus limon','citrus',citrusEntries);
const chilliEntries={
 sunlight:[step('Use a warm sunny position; protect from frost and cold wind.',['chilli'])],
 water:[step('Maintain consistent moisture while growing and fruiting; do not respond to a wet pot by adding more water.',['annuum'])],
 habit:[step('Stake a heavy fruiting bush if needed. Routine tomato-style trellising or heavy pruning is not required.',['chilli'])],
 propagation:[step('Start seed with warmth; pot seedlings on after the first true leaves develop. Keep cultivar seed labelled.',['chilli'])]
};
add('Capsicum annuum','chilli',chilliEntries);
add('Capsicum chinense','chilli',{...chilliEntries,
 water:[step('Maintain moist, freely draining medium; prolonged drought can reduce fruit quality.',['chinense'])],
 seasonal:[step('NC State recommends transplanting when nights reach about 13°C (55°F). Use actual Altona forecasts to assess warmth; this is supplementary species guidance, not a BOM planting prescription.',['chinense','forecast'])]
});
add('Petroselinum crispum','herb',{
 prune:[step('Cut leafy stems near their base when harvesting; keep harvesting while the plant is producing fresh leaves.',['parsley'])],
 propagation:[step('Raise replacement plants from seed; an older biennial flowering plant is not a failed perennial.',['parsley','herbs'])],
 water:[step('Keep container medium moist during growth; containers need closer attention than established plants in the ground.',['parsley'])]
});
add('Salvia rosmarinus','rosemary',{
 prune:[step('Trim lightly after flowering, leaving leafy growth. Avoid a hard cut into old bare wood, which may not recover.',['rosemary','rosemary-specific'])],
 feed:[step('Established ground plants generally need no feed. A plant in the same container for over a year may benefit from a general granular feed in late spring or early summer.',['rosemary-specific'])],
 seasonal:[step('Shelter a container from prolonged winter rain if its medium remains wet; cold wet roots can rot.',['rosemary-specific'])],
 propagation:[step('Use softwood or semi-ripe cuttings to retain the parent form; low stems can also be layered.',['rosemary-specific'])]
});
add('Eucalyptus cinerea','native',{
 water:[step('Water during establishment; drought tolerance belongs to established plants, not newly planted or root-restricted specimens.',['eucalypt'])],
 habit:[step('Plan for a tree rather than assuming it stays the size of a florist pot. The silver juvenile foliage is not the adult foliage form.',['rbg-eucalypt','eucalypt'])],
 prune:[step('Coppicing is an intentional way to retain juvenile foliage, not mandatory routine pruning. Consult the eucalyptus growing guide before cutting a tree back.',['eucalypt-group'])]
},'Exact subspecies, permanent container size and a tested species fertiliser dose were not established. A native-plant product label alone does not prove a requirement for this species.');
add('Hypoestes phyllostachya','peat-free',{
 sunlight:[step('Too little light can fade colour and cause leggy growth; too much direct sun can curl leaves. Use bright filtered light.',['hypoestes'])],
 pinching:[step('Pinch back leggy shoots for compact foliage. Flower spikes may be removed if foliage is the aim.',['hypoestes'])],
 propagation:[step('Stem cuttings can root in water in a bright position.',['hypoestes'])]
});
add('Curio herreanus','succulent',{
 sunlight:[step('RHS cultivation favours bright indirect sun. Do not move an indoor trailing plant abruptly into harsh hot-window exposure.',['herreanus'])],
 propagation:[step('Use stem cuttings to renew trailing growth; no routine structural pruning is needed.',['herreanus'])],
 seasonal:[step('RHS advises maintaining above 10°C; assess actual sheltered conditions before leaving a container outside in Melbourne winter.',['herreanus','forecast'])]
});
add('Cheiridopsis pillansii','mineral',{
 soil:[step('Use a sandy mineral-rich substrate with exceptional drainage. A moisture-retentive indoor mix is not equivalent.',['mesemb'])],
 water:[step('During summer dormancy, use minimal water only if shrivelling warrants it. Active autumn-to-spring growth can use more water; excess can split the leaf surface.',['mesemb'])],
 feed:[step('Do not apply a high-potassium succulent-feed rule automatically: LLIFLE reports sensitivity to excess potassium and growth in poor soil.',['mesemb'])],
 seasonal:[step('Keep bright in winter but cooler and shaded from harsh summer heat; observe whether the plant is actually growing or dormant.',['mesemb'])]
},'No exact mineral percentage, pot diameter, nutrient dose or numerical soil-check interval established. Specialist supplementary cultivation is used; Australian species-specific practical guidance was not found.');
// These three already have field-linked, Australian-first research. Reuse it
// rather than create a parallel identity or duplicate source catalogue.
for(const name of ['Origanum vulgare subsp. hirtum',"Citrus × limon 'Meyer'","Citrus × meyeri 'Lemonicious'"]){
 const c=care()?.get(name);if(!c)continue;
 const oregano=name.startsWith('Origanum');
 add(name,oregano?'existing-herb':'existing-citrus',oregano?{
  habit:[step('Keep spreading growth contained in a pot; divide rooted growth when refreshing a crowded herb container.',['abc-pot'])],
  prune:[step('Harvest or trim regularly to maintain compact leafy growth; pre-flowering pruning is supplementary subspecies guidance.',['abc-genus','ncsu'])],
  soil:[step('Inspect free drainage before adding a rich herb mix; nutrients already included in fresh mix must be counted before extra feeding.',['abc-pizza','scotts'])]
 }:{
  habit:[step('Use the nursery label to distinguish plain Meyer from the compact Lemonicious selection; dwarf size depends on selection and rootstock.',['rbg','diacos'])],
  prune:[step('Check the graft union and remove shoots from below it; shape lightly after harvest rather than repeatedly cutting fruiting tips.',['abc-citrus','evergreen'])],
  repotting:[step('Use drainage holes, retain planting depth and keep mulch away from the trunk. Inspect roots and medium before deciding to repot.',['abc-lemon','abc-repot'])]
 },c.evidenceGaps);
 records[name].existingSources=true;
}
// Product matches are composition/label matches, not botanical-source endorsements.
const productCatalog={};
function product(id,field,name,retailer,manufacturer,basis){
 const ref='product-'+id;
 source(ref,'Manufacturer — '+name,manufacturer,'Product composition and intended use only; does not establish this plant’s biological needs or endorse a retailer. Follow the current pack; local store stock is unverified.');
 productCatalog[id]={field,name,url:retailer,basis,manufacturer,refs:[ref]};
}
product('indoor-mix','soil','Scotts Osmocote 10L Indoor Plants Premium Potting Mix','https://www.bunnings.com.au/scotts-osmocote-10l-indoor-plants-premium-potting-mix_p0164627','https://www.lovethegarden.com/au-en/product/scotts-osmocote-premium-potting-mix-indoor-plants','Container option for a draining houseplant medium. Contains peat, coir and perlite; not a peat-free match. Includes controlled-release fertiliser: account for it before adding feed.');
product('indoor-feed','feed','Yates 500mL Thrive Indoor Plants & Ferns Liquid Plant Food','https://www.bunnings.com.au/yates-500ml-thrive-indoor-plants-and-ferns-liquid-plant-food_p0273523','https://www.yates.com.au/yates-thrive-indoor-plants-ferns-liquid-plant-food/','Liquid houseplant/fern feed option when feeding is warranted. Dilute according to the current pack; this is not a universal monthly schedule. ZZ guidance remains sparse, not monthly.');
product('succulent-mix','soil','Scotts Osmocote 25L Cacti and Succulent Premium Potting Mix','https://www.bunnings.com.au/scotts-osmocote-25l-cacti-and-succulent-premium-potting-mix_p2961490','https://www.lovethegarden.com/au-en/product/scotts-osmocote-cacti-succulent-potting-mix','Commercial draining succulent-medium option. Includes fertiliser; not proof of an exact mineral recipe or suitability for a potassium-sensitive mesemb.');
product('orchid-mix','soil','Scotts Osmocote 10L Orchid Coarse Potting Mix','https://www.bunnings.com.au/scotts-osmocote-10l-orchid-coarse-potting-mix_p0168581','https://www.lovethegarden.com/au-en/product/scotts-osmocote-orchid-coarse-mix','Bark-based epiphytic orchid option matching ABC’s open-medium requirement. Confirm suitability and bark condition for the plant on the current pack; not ordinary potting soil.');
product('orchid-feed','feed','Yates 500mL Thrive Orchid Liquid Plant Food','https://www.bunnings.com.au/yates-500ml-thrive-orchid-liquid-plant-food_p2961896','https://www.yates.com.au/yates-thrive-orchid-liquid-plant-food/','Manufacturer explicitly includes Phalaenopsis. Use its orchid-feed dilution and directions; do not apply a general houseplant dose or translate liquid-feed timing into a granular dose.');
product('gardenia-mix','soil','Scotts Osmocote 25L Rose, Gardenia and Azalea Premium Potting Mix','https://www.bunnings.com.au/scotts-osmocote-25l-rose-gardenia-and-azalea-premium-potting-mix_p2961491','https://www.lovethegarden.com/au-en/product/scotts-osmocote-rose-gardenia-azalea-camellia-mix','Acid-loving container-medium option. Includes fertiliser; count the nutrients already present. This is not a soil replacement instruction for a plant established in the ground.');
product('gardenia-feed','feed','Scotts Osmocote 500g Roses, Gardenias, Azaleas and Camellias Controlled Release Fertiliser','https://www.bunnings.com.au/scotts-osmocote-500g-roses-gardenias-azaleas-and-camellias-controlled-release-fertiliser_p2961298','https://www.lovethegarden.com/au-en/product/scotts-osmocote-controlled-release-fertiliser-roses-gardenias-azaleas-camellias','Gardenia-labelled controlled-release option when needed. Use the current pack rate for the pot size and account for existing fertiliser. Do not treat cold-season yellowing as an automatic instruction to feed.');
const groupProducts={indoor:['indoor-mix','indoor-feed'],'peat-free':['indoor-feed'],succulent:['succulent-mix'],orchid:['orchid-mix','orchid-feed'],gardenia:['gardenia-mix','gardenia-feed']};
const productGaps={
 'peat-free':'A matching peat-free Bunnings medium was not verified. The indoor mix checked contains peat, so it is not substituted for a peat-free requirement.',
 succulent:'No additional species-matched fertiliser has been selected. A general succulent product is not proof of an exact species dose; do not add feed automatically to fertilised fresh mix.',
 mineral:'No matching mineral recipe or fertiliser has been verified. Cheiridopsis potassium sensitivity prevents automatically substituting a high-potassium succulent feed.',
 native:'No species-tested container mix or fertiliser dose has been verified for Eucalyptus cinerea.',
 herb:'An additional species-matched soil/feed product was not verified. General herb labels alone do not establish the best nutrient regime for this plant.',
 chilli:'An exact cultivar feed formulation and dose were not established; no new product is substituted.',
 rosemary:'No new product is substituted for the distinction between unfed established ground plants and occasional granular feed for older container plants.',
 citrus:'No additional species/rootstock product match was verified. The existing Meyer-specific product matches are retained for the identified Meyer records only.'
};
function products(botanical,field){const c=care()?.get(botanical),d=get(botanical);if(!c||!d)return[];return (c.products?.length?c.products:(groupProducts[d.group]||[]).map(id=>productCatalog[id])).filter(p=>!field||p.field===field)}
function productGap(botanical){const d=get(botanical);return d?productGaps[d.group]||'':''}
const common={
 water:[step('For a soil-grown indoor container, inspect the medium before watering and empty collected water from its saucer after drainage. This does not describe a plant kept in water.',['water'],'Australian container guidance')],
 repotting:[step('Inspect the root mass and whether water bypasses the roots. Increase container size gradually, retain planting depth and give the plant shelter while it settles. An oversized pot can remain cold and wet.',['pot'],'Australian container guidance')],
 problems:[step('Identify the problem before selecting a regulated treatment. Check the approved Australian label for the plant, pest, rate and restrictions; no treatment product is prescribed here.',['apvma'],'Australian treatment requirement')],
 seasonal:[step('Use Altona’s current forecast to assess outdoor heat, cold and rain exposure. Indoor conditions also depend on the room; regional climate alone does not calculate a soil-check interval.',['bom','forecast'],'App climate interpretation')]
};

function get(botanical){const c=care()?.get(botanical);return c?records[c.botanical]||null:null}
function steps(botanical,field){const d=get(botanical);if(!d)return[];const own=d.entries[field]||[];if(d.existingSources)return own;const extra=field==='water'?(['indoor','peat-free'].includes(d.group)?common.water:[]):field==='repotting'?(!['herb','chilli','mineral','native','orchid'].includes(d.group)?common.repotting:[]):common[field]||[];return [...own,...extra]}
function fieldSources(botanical,field){const c=care()?.get(botanical),d=get(botanical);if(!c||!d)return[];const catalogue=d.existingSources?Object.fromEntries((c.sources||[]).map(s=>[s.id,s])):sources;return [...new Set(steps(botanical,field).flatMap(s=>s.refs))].map(id=>catalogue[id]).filter(Boolean)}
function identityReview(plants){return (plants||[]).map(p=>{
 const botanical=String(p.botanical||'').trim(),issue=care()?.identificationIssue(botanical);
 if(!botanical)return {id:p.id,name:p.name,botanical,kind:'identity',reason:'Botanical name is not set.'};
 if(issue)return {id:p.id,name:p.name,botanical,kind:'identity',reason:issue};
 if(!care()?.get(botanical))return {id:p.id,name:p.name,botanical,kind:'coverage',reason:'No researched guide matches this saved botanical name. This does not prove the name is invalid.'};
 if(care().get(botanical).botanical==='Phalaenopsis cultivar')return {id:p.id,name:p.name,botanical,kind:'group',reason:'Cultivated/hybrid group only; exact species or named hybrid is not established. Group guidance remains available.'};
 return null;
 }).filter(Boolean)}
window.PLANT_PRACTICAL_CARE={records,sources,fields,get,steps,fieldSources,products,productGap,identityReview,reviewedAt};
})();
