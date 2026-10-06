# Plant Secretary care sourcing policy

Applies to every plant and every care-guide field from this change onward.

1. ABC Gardening Australia: first source for practical Australian cultivation and care.
2. Royal Botanic Gardens Victoria and ANBG: primary Australian botanical identity, taxonomy and cultivation references.
3. BOM: Altona/Melbourne/Victoria temperature, rain, heat, frost/cold and seasonal context. Climate interpretation must be labelled; averages are not live forecasts or plant tolerance evidence.
4. APVMA: authoritative for regulated pesticides, fungicides, insecticides and other treatment products. Check current approved use and label before prescribing a product.

Search the applicable Australian authorities first. Record evidence gaps. Supplement only missing information with authoritative/reputable horticultural references (for example RHS, Kew, recognised botanic gardens or universities/extensions). Retain actual source links, original publication credits, and scope: subspecies, species, genus or general cultivation. Never attribute supplementary evidence to an Australian authority.

Unknown or unsupported values remain explicit gaps. App check intervals and practical interpretation must not be presented as sourced biological requirements.

Water care means intervals for checking soil moisture before deciding whether to water. A reminder is never an instruction to water automatically. Soil and feed requirements come from the sourcing hierarchy; match them to specific products listed by Bunnings and verify manufacturer suitability and directions. Keep product matching distinct from horticultural attribution and do not imply botanical authorities endorse a brand. Retail listings do not establish local store stock.

Species selection uses the saved botanical name through PLANT_BOTANICAL_CARE.get(p.botanical). Display names label the UI only. Active profiles are selected by plant ID for care topics and summaries, so duplicate or edited display names cannot select another plant.

## Review: Origanum vulgare subsp. hirtum — 2026-10-06

Australian searches found ABC's exact-subspecies Thyme for Pizza article, genus-level Origanum guidance and unspecified-oregano Herb Your Enthusiasm pot renovation. RBG Victoria HortFlora provides subspecies identification. No useful ANBG subspecies cultivation profile was located in this review; this is a search limitation, not a claim that none exists. BOM Laverton RAAF supplies regional climate context. APVMA label guidance applies to possible treatment; no chemical product is prescribed.

Gaps: exact moisture practice, pH categories, pre-flowering pruning and pest details are supplemented by NC State's exact-subspecies profile. Container watering and feeding are supplemented by RHS Mediterranean-herb group guidance. No numerical optimum pH, tested subspecies fertiliser dose, fixed repotting interval or mandatory pinching schedule is asserted. The former seven-day default has been removed by the inspection audit below.

The record in botanical-care.js retains links, credits, field-source mappings and review date; app-actions.js renders the relevant links in each care topic.

Product matching update: Scotts Osmocote 25L Tomato Vegetable & Herb Premium Potting Mix and conditional Yates 500mL Thrive All Purpose Liquid Plant Food. Bunnings listings and manufacturer pages checked 2026-10-06. Included fertiliser is accounted for; additional feeding is not automatic. Product formulations and current pack instructions govern use. Soil/feeding topics and Recommended products retain links and matching rationale.

Legacy plant records retain their previous attribution. They have not all been re-researched or converted to field-level evidence in this review. The policy string alone is not proof of a completed evidence audit.

## Inspection audit — 2026-10-06, v1.0.118

Scope: all 32 botanical care identities and all 36 factory collection entries in the repository. Saved device-only plants cannot be inspected remotely. On load, durable restore and save, every saved plant resolves its reminder through its botanical identity; unresolved identities or missing location receive null/manual checks, never seven days. Photos, IDs and care histories are preserved. Factory numeric intervals and runtime numeric fallbacks have been removed.

The audit in watering-audit.js records a moisture trigger and an actual cultivation reference for every supported botanical identity. ABC general indoor and edible-container guidance was consulted first; RBG/ANBG identity/cultivation references do not provide exact numerical inspection frequencies for this collection. Supplementary RHS, university extension and, for Cheiridopsis, specialist LLIFLE guidance fill moisture/cultivation gaps. Cultivar entries using species evidence say so; Haworthia moisture principles are general succulent guidance. APVMA is not a watering-frequency source; no treatment product is prescribed. This audit does not revalidate unrelated soil, feed or treatment fields.

Numerical evidence remains limited. ABC Potted Produce explicitly recommends at least daily summer checks for edible containers. ABC Water and Humidity says to recheck moist indoor pots in a few days, not exactly three. Maryland Extension recommends daily edible-container checks until familiar with drying, especially in summer; it rejects fixed watering calendars. None establishes an exact botanical numerical inspection interval for all conditions.

Implementation choices (not published species requirements):

- Indoor moisture-sensitive plants: one-day conservative inspections.
- Other supported indoor plants: three-day inspections, an explicit interpretation of ABC's general advice. Orchid reminders inspect orchid medium, not ordinary soil. Succulent reminders do not authorise watering every three days.
- Supported outdoor container plants: daily monitoring while learning drying. Summer edible containers have ABC group-level support. Other seasons and non-edible plants are explicitly conservative app extrapolations, not species recommendations.
- Unresolved botanical identities/location: manual moisture checks with a visible evidence gap.

These are initial inspection reminders assuming appropriate draining medium and a correctly sized pot, not experimentally determined optimum intervals. Actual moisture overrides calendar watering. Inspection-only logging has not been added: the droplet continues to record actual watering and resets the next inspection; if water is withheld, continue checking manually.

BOM Laverton RAAF station 087031 climate averages provide nearby Altona regional context. Melbourne season is calculated in Australia/Melbourne time. No live weather feed or validated weather-to-interval formula is connected; no automatic forecast adjustment is claimed.

Actual links and scope render in Watering checks; short profile cards label reminders as practical rather than published species intervals. The review leaves the numerical evidence gap visible for every plant.

## Meyer / Lemonicious cultivar review — 2026-10-06, v1.0.119

Two distinct botanical records were added: Citrus × limon 'Meyer' (the requested identity, following RBG Victoria's broad treatment) and Citrus × meyeri 'Lemonicious' (the named compact selection as listed by Australian nurseries). Quoted/unquoted Meyer and known botanical naming variants resolve by botanical aliases. Curly single quotes are normalised. Trade/display names do not select these records. Generic Citrus limon remains generic; existing saved botanical names are not rewritten or inferred from a display name. A previously ineffective generic Citrus × limon alias was corrected after multiplication-sign normalisation.

Primary Australian review: ABC Lemonicious (general lemon article including Meyer, not specifically the branded selection), A-Peel-ing Citrus, Potted Produce, and repotting FAQs; RBG Victoria HortFlora Citrus classification; BOM Laverton RAAF regional averages; APVMA label constraints. ANBG search found finger-lime information but no useful Meyer/Lemonicious profile; finger-lime recommendations were not substituted. Gaps in branded identity/container moisture guidance were supplemented with accessible Diaco’s, Evergreen Trees Direct and Yates Meyer pages. All supplementary attribution remains distinct.

GardensOnline's requested Citrus Meyer Dwarf Lemonicious page was searched and linked. Its full text was blocked by a security check; Warners' full page returned 403. This is not a claim that either page was fully read. The source scope records access limits and does not copy unseen claims. Nursery height estimates differ; broader Meyer is not assumed to have Lemonicious's compact size.

Water care means moisture inspections. Both records use the existing explicitly labelled inspection policy: daily outdoors while learning container drying, three days indoors as a practical interpretation, with no published exact cultivar numerical interval asserted. Upper-mix dryness triggers container watering; do not completely desiccate fruiting container roots or leave saturated. Curated water-field sources now appear in the watering topic rather than being replaced with a generic label.

Soil match: Scotts Osmocote 25L Citrus And Fruit Premium Potting Mix, Bunnings I/N 2961638, matched to citrus/dwarf-container suitability and drainage. Feed match: conditional Scotts Osmocote 500g Citrus and Fruit Controlled Release Fertiliser, Bunnings I/N 2961295. Bunnings and manufacturer pages checked; no local stock/price assertion. Included nutrients in fresh mix must be accounted for. ABC schedules differ by feeding system and the fertiliser manufacturer's web timing text is not fully consistent; the current pack rate/reapplication instructions govern use. A liquid-feed frequency is not applied to controlled-release granules.

Numerical cultivar pH optimum, exact check interval, tested cultivar feeding dose, mandatory pinching regimen and cultivar-specific home propagation protocol remain explicit gaps. No regulated treatment product is prescribed. Climate advice is an interpretation of regional averages, with no live BOM adjustment claimed.

Validation: 44 Node tests passed, including requested botanical text, cultivar separation, generic-name handling, saved-data preservation, source mappings, rendered topic links/product warnings, next-inspection logic and photo regression checks. These are code/mock tests, not a live iPhone visual verification.

## Owner-preferred dwarf-lemon guide — 2026-10-06, v1.0.120

The attached 17.4-second recording was viewed frame by frame. It shows a ChatGPT Meyer care table and an explicitly practical five-day inspection suggestion, not an authority-published numerical check interval. The owner requested that wording over the previously published guide.

Meyer and Lemonicious botanical records now use the owner's five-day baseline for indoor/outdoor records with a valid location. The scheduler, home label, short profile summary and full water topic read the same botanical preference. The guide states that five days is a chosen reminder, not a cultivar biological requirement. Moist soil means no watering; drying root-zone moisture need means thorough watering followed by drainage. Heat/wind can require earlier inspection, and cool/wet winter mix can remain moist beyond the reminder. ABC's at-least-daily summer edible-container checks remain attributed separately, so the owner's baseline does not claim a pot is safe to ignore for five days in heat.

The concise care fields now follow the supplied table: sunny warm sheltered position; consistent moisture through growth/fruiting without waterlogging; humus-rich drainage and slightly acidic soil; citrus feed by its label; minimal pruning including dead/damaged/crossing growth and below-graft shoots; pots with premium mix, mulch and condition-based repotting; protected Melbourne winter microclimate; scale, aphids, citrus leaf miner, mealybugs and gall wasp monitoring. Bunnings citrus mix/feed matches and included-nutrient cautions are retained.

New verification: ABC Citrus Plant Finder explicitly supports genus-level moist, humus-rich, drained and slightly acidic soil. Actual publication credit (Flora’s Gardening Cards / Global Book Publishing) is retained. RHS's named Meyer profile supplements winter watering, label-directed citrus feeding and aphid/mealybug gaps. UK-facing aspects, greenhouse requirements and hardiness ratings are not applied to Melbourne. No numerical pH optimum is invented.

The factory Lemon — Dwarf record p29 was previously stored as generic Citrus limon. The owner identified this dwarf lemon as Meyer in this conversation. Its factory botanical field and a guarded saved-data migration now correct p29 from generic Citrus limon to Citrus × limon 'Meyer' by stable ID. The migration never uses display names; an explicitly different species on p29 is preserved. The separate factory ordinary lemon p28 and custom generic lemon records remain generic. All subsequent care selection is botanical-name based. Photos, history and IDs are preserved. Unknown/custom records cannot be identified from a device-only display label remotely.

Validation: 46 Node tests passed, including the five-day countdown, rendered preferred guide, pH source link, botanical alias handling, stable-ID identity correction, preservation of unrelated records/photos/history, and photo regressions. These are code/mock validations, not live iPhone verification.
