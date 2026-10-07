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
abc('peperomia-au','Plant Profile | Peperomias','how-to/plant-profile-peperomias/105327900','Australian genus-level drainage, frost sensitivity, indoor light and leaf-cutting guidance; featured plants are not Watermelon Peperomia.');
source('bunnings-peperomia','Bunnings — How to grow and propagate peperomias','https://www.bunnings.com.au/diy-advice/garden/planting-and-growing/how-to-grow-and-propagate-peperomias','Includes Watermelon Peperomia as Peperomia argyreia. Most cultivation advice is genus-level; the water-propagation section specifically includes watermelon. No fixed soil-check interval or exact perlite ratio.');
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
 habit:[step('Watermelon-like silver and green leaf markings identify the form described by Bunnings.',['bunnings-peperomia'],'Bunnings Watermelon Peperomia description')],
 water:[step('Test the upper 2.5–5 cm; water when dry there, without drying the entire root ball. Leaf loss can follow either excess water or drought. No fixed check days are specified.',['bunnings-peperomia'],'Bunnings genus-level moisture guidance')],
 sunlight:[step('Choose bright indirect light in a warm indoor position.',['bunnings-peperomia','peperomia-au'],'Australian genus-level guidance'),step('Protect from cold draughts.',['watermelon'])],
 soil:[step('Blend premium potting mix with perlite and use drainage holes.',['bunnings-peperomia','peperomia-au'],'Bunnings mix guidance; ABC drainage guidance')],
 feed:[step('Choose growing-season indoor liquid feed OR spring–autumn slow-release feed; reduce liquid feeding in winter.',['bunnings-peperomia'],'Bunnings genus-level feeding guidance'),step('Count fertiliser already in fresh mix. Pour+Feed is ready to use on moist mix; follow its pot-width dose on the current pack. Its two-week feed direction is not a watering-check interval.',['product-indoor-mix','product-watermelon-feed'],'Product-label application, not a species trial')],
 prune:[step('Remove browning leaves and finished flower spikes.',['bunnings-peperomia'],'Bunnings genus-level cleanup guidance')],
 repotting:[step('Bunnings suggests refreshing mix every 1–2 years. Inspect roots first: snug pots suit this species; avoid unnecessary upsizing.',['bunnings-peperomia','watermelon'],'Bunnings genus recommendation; supplementary species pot guidance')],
 propagation:[step('Bunnings’ watermelon method uses a healthy 10 cm cutting in water, renewed weekly; pot the new plant when roots reach 5–7 cm. Leaf cuttings are another option.',['bunnings-peperomia','peperomia-au'],'Bunnings watermelon method; ABC genus leaf-cutting support')],
 problems:[step('Check for mites, mealybugs and scale.',['bunnings-peperomia'],'Bunnings genus-level pest guidance')],
 seasonal:[step('In cooler Altona conditions, protect indoors from frost and judge actual room light and moisture. ABC supports indoor growing in cooler climates; BOM provides regional context, not a check-day formula.',['peperomia-au','bom'],'Australian genus guidance with app climate interpretation')]
},'Bunnings explicitly includes Watermelon Peperomia, but most advice applies to the genus. ABC supports genus-level cultivation; RBG Victoria/ANBG searches did not yield an exact-species care record. No fixed soil-check days, numerical pH optimum, measured perlite ratio, species-tested fertiliser dose or mandatory pinching method established. NC State supplies complementary species guidance, including snug pots.');
records['Peperomia argyraea'].reviewedAt='2026-10-07';
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
source('bunnings-oregano','Bunnings — How to grow and harvest oregano','https://www.bunnings.com.au/diy-advice/garden/planting-and-growing/how-to-grow-oregano','Origanum vulgare / general oregano guidance, including Greek oregano by common name; not a subspecies hirtum trial. No numerical moisture-check interval, pH optimum or fertiliser dose.');
const greekDetail=records['Origanum vulgare subsp. hirtum'];
greekDetail.extraSources=[sources['bunnings-oregano']];
greekDetail.reviewedAt='2026-10-07';
const oreganoStep=text=>step(text,['bunnings-oregano'],'Bunnings general oregano guidance; not subspecies-tested');
greekDetail.entries.sunlight=[oreganoStep('Prefer full sun for stronger flavour; partial shade is tolerated.')];
greekDetail.entries.water=[oreganoStep('Check actual moisture; water after soil or mix dries, avoiding overwatering. No fixed number of check days is supplied.')];
greekDetail.entries.soil.push(oreganoStep('Use premium herb/vegetable potting mix. For damp garden soil, raise the planting area or choose a better-drained site.'));
greekDetail.entries.feed=[oreganoStep('Routine fertiliser is usually unnecessary. Existing optional container feed is not a mandatory schedule; account for nutrients already in fresh mix.')];
greekDetail.entries.prune.push(oreganoStep('Trim wayward stems and harvest regularly. Cut above a leaf node; collect after morning dew dries.'));
greekDetail.entries.repotting=[oreganoStep('Water before transplanting and retain the previous planting depth; water in afterwards.')];
greekDetail.entries.propagation=[oreganoStep('Take spring tip cuttings about 6 cm long, remove the lower 2 cm of leaves, and insert into propagation mix. Bunnings estimates rooting in 6–8 weeks. Alternatively peg a stem against soil, then separate it after rooting.')];
greekDetail.entries.problems=[oreganoStep('Check young growth for slugs, snails and aphids. A water jet can dislodge aphids.'),step('No pesticide product is prescribed. Any edible-herb treatment must have an approved label use and applicable harvest restrictions.',['apvma'],'Australian treatment requirement')];
greekDetail.gap+=' Bunnings supplements practical general oregano advice, not exact-subspecies evidence. Its propagation times are estimates; fixed inspection days, measured soil recipes and hirtum-tested nutrient doses remain gaps.';
const productCatalog={};
function product(id,field,name,retailer,manufacturer,basis){
 const ref='product-'+id;
 source(ref,'Manufacturer — '+name,manufacturer,'Product composition and intended use only; does not establish this plant’s biological needs or endorse a retailer. Follow the current pack; local store stock is unverified.');
 productCatalog[id]={field,name,url:retailer,basis,manufacturer,refs:[ref]};
}
product('indoor-mix','soil','Scotts Osmocote 10L Indoor Plants Premium Potting Mix','https://www.bunnings.com.au/scotts-osmocote-10l-indoor-plants-premium-potting-mix_p0164627','https://www.lovethegarden.com/au-en/product/scotts-osmocote-premium-potting-mix-indoor-plants','Container option for a draining houseplant medium. Contains peat, coir and perlite; not a peat-free match. Includes controlled-release fertiliser: account for it before adding feed.');
product('indoor-feed','feed','Yates 500mL Thrive Indoor Plants & Ferns Liquid Plant Food','https://www.bunnings.com.au/yates-500ml-thrive-indoor-plants-and-ferns-liquid-plant-food_p0273523','https://www.yates.com.au/yates-thrive-indoor-plants-ferns-liquid-plant-food/','Liquid houseplant/fern feed option when feeding is warranted. Dilute according to the current pack; this is not a universal monthly schedule. ZZ guidance remains sparse, not monthly.');
product('watermelon-perlite','soil','Brunnings 5L Perlite','https://www.bunnings.com.au/brunnings-5l-perlite_p3010203','https://brunnings.com.au/product/perlite-5l/','Drainage/aeration amendment suggested by the Bunnings peperomia article. No tested Watermelon Peperomia proportion established; not a complete potting medium.');
product('watermelon-feed','feed','Scotts Osmocote 1L Pour+Feed Indoor Plants','https://www.bunnings.com.au/scotts-osmocote-1l-pour-feed-indoor-plants_p0162252','https://www.lovethegarden.com/au-en/product/scotts-osmocote-pourfeed-indoor-plants','Suggested by the Bunnings peperomia article; manufacturer explicitly includes Peperomia. Ready to use, not a concentrate to dilute. Follow current pot-width dose on moist mix; account for existing fertiliser and reduced winter growth.');
records['Peperomia argyraea'].products=['indoor-mix','watermelon-perlite','watermelon-feed'].map(id=>productCatalog[id]);
records['Peperomia argyraea'].productGap='The indoor mix already includes perlite and fertiliser. Extra perlite is conditional on drainage; no exact species ratio is verified. Feed is optional when needed, not an instruction to stack fertilisers. Store stock is unverified.';
product('succulent-mix','soil','Scotts Osmocote 25L Cacti and Succulent Premium Potting Mix','https://www.bunnings.com.au/scotts-osmocote-25l-cacti-and-succulent-premium-potting-mix_p2961490','https://www.lovethegarden.com/au-en/product/scotts-osmocote-cacti-succulent-potting-mix','Commercial draining succulent-medium option. Includes fertiliser; not proof of an exact mineral recipe or suitability for a potassium-sensitive mesemb.');
product('orchid-mix','soil','Scotts Osmocote 10L Orchid Coarse Potting Mix','https://www.bunnings.com.au/scotts-osmocote-10l-orchid-coarse-potting-mix_p0168581','https://www.lovethegarden.com/au-en/product/scotts-osmocote-orchid-coarse-mix','Bark-based epiphytic orchid option matching ABC’s open-medium requirement. Confirm suitability and bark condition for the plant on the current pack; not ordinary potting soil.');
product('orchid-feed','feed','Yates 500mL Thrive Orchid Liquid Plant Food','https://www.bunnings.com.au/yates-500ml-thrive-orchid-liquid-plant-food_p2961896','https://www.yates.com.au/yates-thrive-orchid-liquid-plant-food/','Manufacturer explicitly includes Phalaenopsis. Use its orchid-feed dilution and directions; do not apply a general houseplant dose or translate liquid-feed timing into a granular dose.');
product('gardenia-mix','soil','Scotts Osmocote 25L Rose, Gardenia and Azalea Premium Potting Mix','https://www.bunnings.com.au/scotts-osmocote-25l-rose-gardenia-and-azalea-premium-potting-mix_p2961491','https://www.lovethegarden.com/au-en/product/scotts-osmocote-rose-gardenia-azalea-camellia-mix','Acid-loving container-medium option. Includes fertiliser; count the nutrients already present. This is not a soil replacement instruction for a plant established in the ground.');
product('gardenia-feed','feed','Scotts Osmocote 500g Roses, Gardenias, Azaleas and Camellias Controlled Release Fertiliser','https://www.bunnings.com.au/scotts-osmocote-500g-roses-gardenias-azaleas-and-camellias-controlled-release-fertiliser_p2961298','https://www.lovethegarden.com/au-en/product/scotts-osmocote-controlled-release-fertiliser-roses-gardenias-azaleas-camellias','Gardenia-labelled controlled-release option when needed. Use the current pack rate for the pot size and account for existing fertiliser. Do not treat cold-season yellowing as an automatic instruction to feed.');
const groupProducts={fern:['indoor-mix','indoor-feed'],indoor:['indoor-mix','indoor-feed'],'peat-free':['indoor-feed'],succulent:['succulent-mix'],orchid:['orchid-mix','orchid-feed'],gardenia:['gardenia-mix','gardenia-feed']};
const productGaps={
 mint:'No new exact peppermint soil/feed product match has been verified; species dose and a peat-free Bunnings recipe remain gaps.',
 bougainvillea:'No matching peat-free loam-based Bunnings medium or White Stripe cultivar feed dose has been verified; an indoor peat mix is not substituted.',
 'peat-free':'A matching peat-free Bunnings medium was not verified. The indoor mix checked contains peat, so it is not substituted for a peat-free requirement.',
 succulent:'No additional species-matched fertiliser has been selected. A general succulent product is not proof of an exact species dose; do not add feed automatically to fertilised fresh mix.',
 mineral:'No matching mineral recipe or fertiliser has been verified. Cheiridopsis potassium sensitivity prevents automatically substituting a high-potassium succulent feed.',
 native:'No species-tested container mix or fertiliser dose has been verified for Eucalyptus cinerea.',
 herb:'An additional species-matched soil/feed product was not verified. General herb labels alone do not establish the best nutrient regime for this plant.',
 chilli:'An exact cultivar feed formulation and dose were not established; no new product is substituted.',
 rosemary:'No new product is substituted for the distinction between unfed established ground plants and occasional granular feed for older container plants.',
 citrus:'No additional species/rootstock product match was verified. The existing Meyer-specific product matches are retained for the identified Meyer records only.'
};
function products(botanical,field){const c=getCare(botanical),d=get(botanical);if(!c||!d)return[];return (d.products|| (c.products?.length?c.products:(groupProducts[d.group]||[]).map(id=>productCatalog[id]))).filter(p=>!field||p.field===field)}
function productGap(botanical){const d=get(botanical);return d?d.productGap||productGaps[d.group]||'':''}
const common={
 water:[step('For a soil-grown indoor container, inspect the medium before watering and empty collected water from its saucer after drainage. This does not describe a plant kept in water.',['water'],'Australian container guidance')],
 repotting:[step('Inspect the root mass and whether water bypasses the roots. Increase container size gradually, retain planting depth and give the plant shelter while it settles. An oversized pot can remain cold and wet.',['pot'],'Australian container guidance')],
 problems:[step('Identify the problem before selecting a regulated treatment. Check the approved Australian label for the plant, pest, rate and restrictions; no treatment product is prescribed here.',['apvma'],'Australian treatment requirement')],
 seasonal:[step('Use Altona’s current forecast to assess outdoor heat, cold and rain exposure. Indoor conditions also depend on the room; regional climate alone does not calculate a soil-check interval.',['bom','forecast'],'App climate interpretation')]
};

// Comprehensive-only identities. Do not extend the profile registry or hydrate
// saved plants: that would change summaries and reminder behavior.
const extendedCare={},extendedAliases={};
const botanicalKey=s=>care()?.normalize(s)||String(s||'').trim().toLowerCase();
abc('fern-australia','Fern Fabulousity','how-to/fern-fabulousity/14061786','Australian fern guidance explicitly includes Adiantum aethiopicum: moisture, sheltered indoor light and cutting back browned fronds. A small reservoir is discussed, not a universal waterlogging rule.');
abc('fern-genus','Adiantum','plant-finder/adiantum/9441730','Adiantum genus cultivation, spores/division and sheltered light. ABC page credits Global Book Publishing, Flora’s Gardening Cards; not an exact species feeding trial.');
abc('mint-pots','Potted Plant Care','how-to/potted-plant-care/9433240','Australian mint/container moisture and pot-bound signs. Mint is not given the drying treatment of rosemary. Jane Edmanson, presenter; genus-level mint culture.');
abc('mint-containment','Controlling Mint','how-to/controlling-mint/13353612','Hannah Moloney demonstrates Mentha spicata and explicitly allows the containment method for other mint varieties. Does not identify peppermint from its display name.');
abc('bougainvillea-group','Bougainvillea','plant-finder/bougainvillea/9441670','Australian genus-level sun, drainage, flowering moisture and overfeeding guidance. ABC page credits Global Book Publishing, Flora’s Gardening Cards; no White Stripe cultivar trial.');
abc('peace-division','Dividing Peace Lilies','how-to/dividing-peace-lilies/12648922','Jane Edmanson demonstrates division of a Spathiphyllum cultivar. General clump technique, not exact S. wallisii cultivar identity.');
source('rbg-fern','RBG Victoria — HortFlora: Adiantum aethiopicum','https://hortflora.rbg.vic.gov.au/taxon/ad8beee2-5340-11e7-b82b-005056b0018f','Species botanical identification, including creeping rhizomes; not a fertiliser dose or indoor pot recipe.');
source('anbg-fern','ANBG — Adiantum aethiopicum image reference','https://www.anbg.gov.au/photo/apii/id/dig/27688','Australian botanical image reference; not cultivation evidence or proof of the owner’s specimen identity.');
source('rbg-mint','RBG Victoria — HortFlora: Mentha × piperita','https://hortflora.rbg.vic.gov.au/taxon/ada137d4-5340-11e7-b82b-005056b0018f','Peppermint botanical identity. Does not establish a named cultivar or mandatory soil-check frequency.');
source('rbg-bougainvillea','RBG Victoria — HortFlora: Bougainvillea','https://hortflora.rbg.vic.gov.au/taxon/ad8e24aa-5340-11e7-b82b-005056b0018f','Recognises B. spectabilis × B. glabra as the spectoglabra hybrid group; warns that cultivar parentage is often uncertain. White-striped foliage does not establish a named cultivar.');
rhs('peppermint','Mentha × piperita','plants/11050/mentha-piperita/details/','Supplementary exact peppermint moisture, light, pH categories, division, post-flowering pruning and problems. UK calendar/hardiness ratings are not an Altona schedule.');
rhs('bougainvillea-practice','Growing bougainvillea','plants/bougainvillea/growing-guide','Supplementary genus-level training, pruning, container medium and cold protection. The UK greenhouse feeding calendar is not transferred to Altona or asserted as a White Stripe cultivar protocol.');
source('ice-taxonomy','LLIFLE — Delosperma lehmannii','https://www.llifle.com/Encyclopedia/SUCCULENTS/Family/Aizoaceae/27712/Delosperma_lehmannii','Supplementary species description and synonymy with Corpuscularia lehmannii. Retains the owner’s saved name; does not identify every plant called Ice Plant.');
source('ice-species','SANBI PlantZAfrica — Corpuscularia lehmannii','https://pza.sanbi.org/corpuscularia-lehmannii','Supplementary exact-species indexed evidence reviewed: clumping habit, dehydration leaf shrinkage, and seed/cutting propagation. Full cultivation text was not available for this review; no precise recipe or schedule inferred.');
function comprehensive(name,group,entries,gap,identityNote,aliases=[]){
 add(name,group,entries,gap);const c={botanical:name,comprehensiveOnly:true,identityNote,evidenceGaps:gap,reviewedAt,source:'Australian-first practical references; scope and remaining gaps are shown below.',sources:[],fieldSources:{}};
 const ids=new Set();for(const [f,list]of Object.entries(entries)){c.fieldSources[f]=[...new Set(list.flatMap(s=>s.refs))];for(const id of c.fieldSources[f])ids.add(id)}
 c.sources=[...ids].map(id=>sources[id]).filter(Boolean);extendedCare[botanicalKey(name)]=c;
 for(const alias of aliases)extendedAliases[botanicalKey(alias)]=botanicalKey(name);
}
comprehensive('Adiantum aethiopicum','fern',{
 habit:[step('Use its creeping, clump-forming fern habit when assessing crowding; it is not Adiantum capillus-veneris.',['rbg-fern','anbg-fern'])],
 water:[step('Inspect for steady moisture before the root ball dries. ABC describes a nursery pot with a small water reserve; this species-specific practice differs from the drying rules for succulents.',['fern-australia'])],
 sunlight:[step('Provide good filtered light away from hot direct sun, heating and air-conditioning outlets.',['fern-australia'])],
 soil:[step('Use an organically rich medium kept just moist; protect the root zone from drying. Exact bag formulation and mineral percentages are not established.',['fern-genus'],'Australian genus guidance')],
 prune:[step('If fronds have browned and died back, cut the damaged foliage down and maintain moisture while new shoots emerge. Do not discard it solely because the fronds look dead.',['fern-australia'])],
 propagation:[step('Divide established plants or raise spores; detached fronds are not the reviewed propagation method.',['fern-genus'],'Australian genus guidance')],
 feed:[step('Use a fern-labelled product only when feeding is warranted, following the current pack dilution. No exact A. aethiopicum dose was established.',['product-indoor-feed'],'Conditional product matching')]
},'No species-tested fertiliser dose, numerical soil-check interval, pH optimum or exact pot diameter established. ABC genus soil/propagation advice is labelled separately from its named Australian maidenhair guidance.','The owner supplied this species identity. The guide does not silently replace it with the previously supported A. capillus-veneris.');
comprehensive('Mentha × piperita','mint',{
 habit:[step('Keep peppermint contained. Inspect stems reaching outside the pot because they can root where they touch soil.',['mint-containment','rbg-mint'])],
 water:[step('Feel into the root zone and keep it moist; mint is not treated like a dry Mediterranean herb. Hot wind can dry a container faster, so inspect actual moisture before watering.',['mint-pots'])],
 sunlight:[step('Grow in sun or partial shade, according to the peppermint species reference. The site’s actual light and drying rate matter more than a fixed window distance.',['peppermint'])],
 soil:[step('Use moist, freely draining medium in a container that restricts spreading roots. Keep drainage holes clear.',['peppermint','mint-pots'])],
 prune:[step('Pick shoots regularly for containment and cut back after flowering to renew foliage.',['mint-containment','peppermint'])],
 propagation:[step('When crowded, divide the root ball and replant healthy sections. RHS recommends division in spring or autumn; use Melbourne seasons.',['mint-containment','peppermint'])],
 repotting:[step('Inspect loss of vigour, rapid drying and crowded roots. Renew a portion of the root ball rather than automatically placing it in a very large wet pot.',['mint-pots','mint-containment'])],
 ph:[step('RHS lists acid, neutral and alkaline soil categories. That is not evidence for a precise optimum or a lime/sulfur correction dose.',['peppermint'])],
 problems:[step('Inspect for rust or powdery mildew rather than assuming every yellow leaf needs feed. The species source also lists leafhoppers and caterpillars; any chemical use requires the Australian approved label.',['peppermint','apvma'])]
},'Exact cultivar, species-tested fertiliser rate, Bunnings peat-free recipe and numerical soil-check interval were not established. ABC mint methods are genus-level; RHS fills peppermint-specific gaps.','Mentha x piperita and Mentha × piperita resolve to the same peppermint hybrid. No display-name lookup is used.');
comprehensive('Bougainvillea spectabilis × glabra','bougainvillea',{
 habit:[step('The supplied cross belongs to the spectoglabra hybrid group. A striped-leaf display name does not verify a particular named cultivar or its final size.',['rbg-bougainvillea'])],
 sunlight:[step('Choose a sunny, warm position with good drainage; glasshouse advice about shading does not mean an outdoor Altona plant belongs in deep shade.',['bougainvillea-group'])],
 water:[step('Inspect moisture during flowering: drought tolerance does not mean withholding all water while flowering. In cool, slower growth let drying rate guide actual watering.',['bougainvillea-group','bougainvillea-practice'])],
 soil:[step('Use light, freely draining soil. RHS specifies peat-free loam-based container compost; an indoor peat mix is not substituted.',['bougainvillea-group','bougainvillea-practice'])],
 feed:[step('Avoid heavy feeding that encourages leaves at the expense of coloured bracts. No cultivar dose or imported UK weekly feeding schedule is asserted.',['bougainvillea-group'])],
 prune:[step('Train young growth onto a support. Prune just before new late-winter/spring growth; after bracts fall, shorten long growth to encourage another flush.',['bougainvillea-practice'],'Supplementary genus guidance')],
 propagation:[step('Use summer cuttings; RHS supplies a semi-ripe cutting method, which is genus-level rather than a trial of White Stripe.',['bougainvillea-group','bougainvillea-practice'])],
 seasonal:[step('Protect containers from frost. RHS cold-protection guidance describes sheltered cultivation; assess actual Altona forecasts rather than assuming a sunny position guarantees frost protection.',['bougainvillea-practice','forecast'],'Supplementary guidance and app climate interpretation')]
},'White Stripe is the owner’s display name; an exact cultivar and parentage of the specimen were not independently verified. The supplied cross is supported as a hybrid group. No cultivar-specific tolerance, pH optimum, fertiliser dose or peat-free Bunnings loam recipe established.','RBG Victoria recognises the supplied spectabilis–glabra cross as the spectoglabra group. Practical cultivation is labelled genus/group-level.', ['Bougainvillea spectabilis × Bougainvillea glabra','Bougainvillea × spectoglabra','Bougainvillea x spectoglabra']);
comprehensive('Delosperma lehmannii','succulent',{
 habit:[step('This is the compact, fleshy-leaved clumping species also described as Corpuscularia lehmannii. Do not use an unrelated flowering ground-cover’s guide merely because both are called Ice Plant.',['ice-taxonomy','ice-species'])],
 water:[step('Check both the medium and leaf firmness. SANBI notes leaf shrinkage with dehydration; confirm the medium condition before adding water rather than treating shrinkage alone as a diagnosis.',['ice-species'])],
 soil:[step('Use freely draining succulent medium in a drainage-holed pot. This Australian succulent-group method does not establish an exact mineral percentage for this species.',['succulent'],'Australian succulent-group guidance')],
 propagation:[step('The species reference supports seed or cuttings. Detailed species rooting conditions and a guaranteed rooting time were not verified.',['ice-species'])],
 seasonal:[step('Assess cool-season wetness and pot drainage; the Cheiridopsis summer-dormancy regime is not automatically transferred to this different species.',['succulent'],'Australian succulent-group guidance')]
},'Australian exact-species cultivation was not located in this review. SANBI species evidence was available in indexed extracts, with full cultivation text unavailable; LLIFLE supplies synonymy. Light optimum, exact mineral recipe, pH, fertiliser dose and fixed inspection interval remain gaps.','Delosperma lehmannii is linked to Corpuscularia lehmannii in the selected supplementary references. The saved botanical name is retained.', ['Corpuscularia lehmannii']);
// Expand already supported identities without touching their profile summaries.
const peaceEntries=records['Spathiphyllum wallisii'].entries;
peaceEntries.water=[step('Check root-zone moisture and maintain even moisture with drainage during active growth. Deep shade or cool conditions slow drying; do not water a saturated pot.',['peace','water'])];
peaceEntries.soil=[step('Use a moisture-retentive but freely draining peat-free medium. Pot on only when roots overfill the container; preserve healthy clumps.',['peace'])];
peaceEntries.feed=[step('The RHS species guide recommends balanced liquid feed during active growth. Account for fertiliser already in new medium and use the current product dilution rather than stacking feeds.',['peace','product-indoor-feed'])];
peaceEntries.propagation.unshift(step('ABC demonstrates cutting a large healthy root ball into two or three clumps with a sharp knife, then potting the divisions. This is a peace-lily group technique.',['peace-division'],'Australian clump-division guidance'));
orchidEntries.feed=[step('Use orchid-labelled food after pruning or repotting, with current pack directions controlling dilution; reduce feed in cool conditions. A controlled-release product is not applied on a liquid-feed timetable.',['orchid','product-orchid-feed'])];
orchidEntries.problems=[step('Protect from cold window glass and draughts; avoid routine misting of flowers or foliage that can encourage damage or disease. Root crowding alone is not proof of root rot.',['orchid'])];

// Explicit botanical cultivar links: species guidance, not a display-name lookup.
const scopedCultivars={
 [botanicalKey("Philodendron hederaceum 'Brasil'")]:{species:'Philodendron hederaceum',note:'Brasil: species-level guidance, with ABC’s Brasil example. No distinct cultivar-specific seasonal check frequency or tested soil formula verified.'}
};
// Named Goldilocks retail evidence, supplemented only for cultivation gaps.
const goldilocks="Epipremnum aureum 'Goldilocks'";
source('goldilocks-bunnings','Bunnings — Goldilocks Pothos','https://www.bunnings.com.au/120mm-goldilocks-pothos-epipremnum-aureum-goldilocks_p3842587','Named Goldilocks listing: lime-green foliage, aerial-root climbing, bright indirect light and drying the top layer between waterings. No numerical check frequency or soil recipe.');
rhs('goldilocks-rhs','Growing Epipremnum','plants/epipremnum/growing-guide','Supplementary genus-level moisture and monthly active-growth feeding guidance. Not a Goldilocks trial; UK April–October dates are not adopted for Altona.');
rhs('goldilocks-species','Epipremnum aureum','plants/91403/epipremnum-aureum/details','Supplementary species-level peat-free loam-based medium, spring tip pruning and frost-free culture; not an exact Goldilocks formula.');
abc('goldilocks-prune','Indoor First Aid','indoor-first-aid/101753758','Demonstrates pruning other Epipremnum cultivars above a node to encourage regrowth. General technique, not Goldilocks-specific evidence.');
source('goldilocks-kew','Kew POWO — Epipremnum aureum','https://powo.science.kew.org/taxon/87014-1','Accepted species identity only; does not independently verify the saved specimen or Goldilocks cultivar nomenclature.');
const goldBase=care()?.get('Epipremnum aureum');
if(goldBase){
 const key=botanicalKey(goldilocks);
 extendedCare[key]={...goldBase,botanical:goldilocks,comprehensiveOnly:true,careScope:'Bunnings named Goldilocks guidance; supplementary RHS species/genus guidance for gaps.',identityNote:'Saved identity: Epipremnum aureum ‘Goldilocks’. Bunnings uses this trade name; Kew supports the species. The specimen and formal cultivar synonymy were not independently verified.',habit:'Evergreen lime-green, heart-leaved vine; trails or climbs using aerial roots.',sunlight:'Bright indirect light; lower light is tolerated. Protect from direct summer sun.',water:'Let the upper mix dry before watering, then drain completely; never leave the pot standing in water.',soil:['Fertile, freely draining medium that retains some moisture','RHS species guidance specifies peat-free, loam-based compost; no tested Goldilocks mix ratio.'],feed:['General houseplant fertiliser during active growth','RHS genus guidance: monthly while actively growing; follow current label dilution and account for fertiliser already in the mix.'],prune:'Tip-prune in spring to encourage branching; shorten long vines above a node.',seasonal:'Protect from cold draughts and winter overwatering; follow actual indoor growth and medium drying.',source:'Bunnings — named Goldilocks listing; ABC — general Epipremnum pruning; supplementary RHS — species/genus cultivation; Kew — accepted species; BOM — regional climate context.'};
 add(goldilocks,'indoor',{
  habit:[step('Let the vine trail or provide climbing support; its aerial roots attach to surfaces.',['goldilocks-bunnings'],'Named Goldilocks guidance'),step('Kew accepts Epipremnum aureum. This supports the species name, not independent identification of this specimen or formal Goldilocks synonymy.',['goldilocks-kew'],'Botanical identity scope')],
  sunlight:[step('Place in bright indirect light; lower light is tolerated. Protect foliage from direct summer sun.',['goldilocks-bunnings','goldilocks-rhs'],'Named Goldilocks placement; supplementary genus scorch guidance')],
  water:[step('Let the top layer dry before watering. RHS genus guidance gives the upper 2 cm as a practical moisture test. Water when needed and drain fully; do not leave standing water. No fixed checking days are supplied.',['goldilocks-bunnings','goldilocks-rhs'],'Named Goldilocks moisture advice; supplementary genus depth')],
  soil:[step('Use fertile, freely draining medium that retains some moisture. RHS species guidance specifies peat-free, loam-based compost. No Goldilocks-specific bark/perlite ratio is established; product matches are not equivalent tested recipes.',['goldilocks-species'],'Supplementary species soil guidance')],
  feed:[step('RHS genus guidance allows general houseplant fertiliser monthly during active growth. Follow label dilution and account for fertiliser already in fresh mix. Use actual growth rather than copying the UK April–October calendar to Altona.',['goldilocks-rhs','product-indoor-feed'],'Supplementary genus feeding guidance')],
  prune:[step('Tip-prune in spring for branching. Shorten long vines above a node; ABC demonstrates this technique on other Epipremnum cultivars.',['goldilocks-prune','goldilocks-species'],'Australian group technique; supplementary species timing')],
  propagation:[step('Use stem-tip or leaf-bud cuttings, or layering, during spring or summer. No cultivar-specific rooting time was verified.',['goldilocks-species'],'Supplementary species propagation')],
  seasonal:[step('Keep warm and protected from cold draughts. In Altona’s cool season, avoid watering while the mix remains moist; indoors, observed growth and drying govern care. BOM regional averages do not prescribe a checking interval.',['goldilocks-rhs','goldilocks-species','bom'],'Species/genus evidence with app climate interpretation')]
 },'No Goldilocks-specific cultivation guide was located from ABC, RBG Victoria or ANBG in this review. Bunnings fills named-plant light and moisture guidance; RHS fills species/genus cultivation gaps. No fixed soil-check days, Goldilocks-tested mix ratio or fertiliser dose established. Product matches and climate interpretation are not botanical-source endorsements.');
 records[goldilocks].reviewedAt='2026-10-07';
}
abc('thyme-australia','Herb Your Enthusiasm','how-to/herb-your-enthusiasm/103592354','Australian potted-herb maintenance includes common thyme; not a species-specific watering calendar or recipe.');
source('thyme-identity','RBG Victoria — HortFlora: Thymus vulgaris','https://hortflora.rbg.vic.gov.au/taxon/ada1ef4e-5340-11e7-b82b-005056b0018f','Botanical identification and cultivated variation; not a numerical moisture-check schedule.');
nc('thyme-specific','Thymus vulgaris','thymus-vulgaris','Supplementary species drainage, dry sandy/rocky soil and drought tolerance. Fills detail absent from the consulted Australian guidance; US dates are not copied to Altona.');
comprehensive('Thymus vulgaris','rosemary',{
 soil:[step('Provide a freely draining sandy or rocky medium; avoid a dense mix that stays wet. A rich vegetable mix is not automatically a match for thyme.',['thyme-specific'])],
 water:[step('Established thyme tolerates drying. Check the root zone before watering; young or newly potted plants still need establishment moisture. No exact soil-check interval was verified.',['thyme-specific','water'])],
 seasonal:[step('In Altona’s cool season, inspect drainage and avoid prolonged wetness. During growth or drying heat, inspect the pot sooner; frost tolerance is not tolerance of cold saturated roots.',['thyme-specific','bom'],'Species evidence with app climate interpretation')],
 repotting:[step('Refresh exhausted potting medium while maintaining drainage; ABC’s mixed-herb example includes common thyme but does not give an exact thyme recipe.',['thyme-australia'])]
},'No species-specific numerical check frequency, exact amendment ratio or locally tested product formula established. ANBG did not supply additional cultivated-thyme detail in this review. APVMA treatment selection is not involved.','Saved species identity is supported by RBG Victoria; this does not independently identify the specimen.');
function getCare(botanical){const scoped=scopedCultivars[botanicalKey(botanical)];if(scoped){const base=care()?.get(scoped.species);return base?{...base,identityNote:scoped.note,careScope:'Species-level guidance for the saved cultivar'}:null}const base=care()?.get(botanical);if(base)return base;const k=botanicalKey(botanical);return extendedCare[extendedAliases[k]||k]||null}
function get(botanical){const c=getCare(botanical);return c?records[c.botanical]||null:null}
function steps(botanical,field){const d=get(botanical);if(!d)return[];const own=d.entries[field]||[];if(d.existingSources)return own;const extra=field==='water'?(['indoor','peat-free'].includes(d.group)?common.water:[]):field==='repotting'?(!['herb','chilli','mineral','native','orchid'].includes(d.group)?common.repotting:[]):common[field]||[];return [...own,...extra]}
function fieldSources(botanical,field){const c=getCare(botanical),d=get(botanical);if(!c||!d)return[];const catalogue=d.existingSources?Object.fromEntries([...(c.sources||[]),...(d.extraSources||[])].map(s=>[s.id,s])):sources;return [...new Set(steps(botanical,field).flatMap(s=>s.refs))].map(id=>catalogue[id]).filter(Boolean)}
function identityReview(plants){return (plants||[]).map(p=>{
 const botanical=String(p.botanical||'').trim(),issue=care()?.identificationIssue(botanical);
 if(!botanical)return {id:p.id,name:p.name,botanical,kind:'identity',reason:'Botanical name is not set.'};
 if(issue)return {id:p.id,name:p.name,botanical,kind:'identity',reason:issue};
 if(!getCare(botanical))return {id:p.id,name:p.name,botanical,kind:'coverage',reason:'No researched guide matches this saved botanical name. This does not prove the name is invalid.'};
 if(getCare(botanical).botanical==='Phalaenopsis cultivar')return {id:p.id,name:p.name,botanical,kind:'group',reason:'Cultivated/hybrid group only; exact species or named hybrid is not established. Group guidance remains available.'};
 if(getCare(botanical).botanical==='Bougainvillea spectabilis × glabra')return {id:p.id,name:p.name,botanical,kind:'group',reason:'Supplied spectoglabra hybrid group is supported; named White Stripe cultivar and specimen parentage are not independently verified. Group guidance remains available.'};
 return null;
 }).filter(Boolean)}
window.PLANT_PRACTICAL_CARE={records,sources,fields,get,getCare,steps,fieldSources,products,productGap,identityReview,reviewedAt};
})();
