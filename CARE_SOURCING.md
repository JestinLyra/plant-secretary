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


## v1.0.121 — correction of unsupported inspection countdowns (6 October 2026)

Reviewed all 34 canonical botanical records in the app, not an unseen device's personal collection. The former indoor 1/3-day and universal outdoor daily schedules were app choices, not published species-specific soil-check requirements. They have been removed. No seven-day default was reintroduced.

ABC Gardening Australia's Potted Produce explicitly supports at least daily summer inspection of edible containers. The app applies that group-level rule only to outdoor edible containers during Australia/Melbourne summer, assuming appropriate pots and medium as requested. An explicitly ground-grown record is excluded. This is not automatic daily watering. The owner-selected Meyer/Lemonicious five-day preference remains in other seasons and indoors, clearly labelled as a preference, and summer edible-container advice takes priority outdoors. Other plants receive manual moisture checks with their botanical trigger because a defensible numerical inspection frequency was not established. Removing a countdown does not mean a plant needs no observation: moisture-sensitive plants must be watched closely. A measured personalised drying cycle would be needed to supply reliable numerical reminders for each particular pot.

BOM Altona forecast verified: issued 8:48 pm AEDT 6 October 2026, product IDV10450. Forecast snapshot expires after 24 hours and is then labelled not current; it is not a live weather connection. Weather interpretation (earlier checks for exposed pots in warm/windy conditions) is app guidance, not a BOM botanical interval formula. Rain does not prove an individual pot was watered and has no numerical effect on indoor countdowns. Nearby Laverton climate averages remain regional context.

Primary sources reviewed in this correction: ABC Water and Humidity; Potted Produce; Bringing the Outdoors In (explicit ZZ water-storage evidence); Snake Plants; Watering Succulents (group); Adiantum Plant Finder (genus, credited to Flora's Gardening Cards/Global Book Publishing); Orchid Revival (Phalaenopsis genus/hybrids). These are not claimed as exact-species inspection frequencies. Existing NC State/RHS/LLIFLE/cultivar sources are retained for the moisture/dormancy/cultivar gaps, with attribution separate from ABC. RBG/ANBG do not establish a numerical inspection schedule in the existing identification records; no treatment products are added, so APVMA is not invoked for this interval-only correction. No claim that all 34 plants have an ABC exact-species profile.

### Record-by-record interval decisions

Current season for the dated review: spring. “Manual” means moisture-based inspection without a numeric countdown; it must not be read as a published frequency. All summer daily entries are group-level edible-container evidence.

| Botanical record | Spring interval | Outdoor summer interval | Moisture trigger | Primary Australian evidence scope |
|---|---|---|---|---|
| Adiantum capillus-veneris | Manual | Manual | Keep the root zone moist, not saturated; do not wait for prolonged drying. | [ABC Gardening Australia — Adiantum](https://www.abc.net.au/gardening/plant-finder/adiantum/9441730) — Genus guidance: keep just moist. Plant Finder credits Flora’s Gardening Cards / Global Book Publishing; no species check interval. |
| Begonia maculata | Manual | Manual | Water moderately during growth; avoid waterlogging. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Philodendron 'Birkin' | Manual | Manual | Maintain moist but well-drained medium; do not water a saturated pot. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Sedum morganianum | Manual | Manual | Let the medium dry between waterings; reduce water in winter. | [ABC Gardening Australia — Watering Succulents](https://www.abc.net.au/gardening/how-to/watering-succulents/13146268) — Succulent-group principles, not exact species/dormancy advice: mostly dry between watering; small pots can dry quickly in summer. |
| Coriandrum sativum | Manual | 1 days | Maintain just-moist, freely draining medium; avoid drought and saturation. | [ABC Gardening Australia — Potted Produce](https://www.abc.net.au/gardening/how-to/potted-produce/9431786) — General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency. |
| Phalaenopsis cultivar | Manual | Manual | Inspect airy orchid medium and roots; water when almost dry and drain freely. Soil rules do not apply. | [ABC Gardening Australia — Orchid Revival](https://www.abc.net.au/gardening/how-to/orchid-revival/12096898) — Phalaenopsis genus/hybrids: airy bark, inspect roots, drain freely; no fixed inspection interval. |
| Phalaenopsis amabilis | Manual | Manual | Inspect orchid bark; water when almost dry and drain freely. | [ABC Gardening Australia — Orchid Revival](https://www.abc.net.au/gardening/how-to/orchid-revival/12096898) — Phalaenopsis genus/hybrids: airy bark, inspect roots, drain freely; no fixed inspection interval. |
| Spathiphyllum wallisii | Manual | Manual | Maintain moisture during active growth without leaving the roots waterlogged. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Pilea involucrata | Manual | Manual | Water moderately during growth; reduce water in cooler conditions. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Gardenia jasminoides | Manual | Manual | Maintain moist but well-drained medium; avoid waterlogging. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Philodendron hederaceum | Manual | Manual | Inspect the upper mix before watering; never leave standing in water. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Peperomia caperata 'Milano' | Manual | Manual | Let the upper mix dry before watering; avoid persistent wetness. Species guidance, not a cultivar-specific numerical interval. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Peperomia argyraea | Manual | Manual | Inspect the upper mix before watering; avoid persistent wetness. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Epipremnum aureum | Manual | Manual | Inspect the upper mix; let it dry somewhat before watering, then drain freely. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Epipremnum aureum 'Marble Queen' | Manual | Manual | Inspect the upper mix; let it dry somewhat before watering, then drain freely. Species guidance, not a cultivar-specific numerical interval. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Monstera deliciosa | Manual | Manual | Allow the top quarter to third of the medium to dry between waterings. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Callisia repens | Manual | Manual | Inspect moisture before watering; retain free drainage and reduce water in cool periods. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Dracaena trifasciata | Manual | Manual | Let the medium dry between waterings; winter watering is much less frequent than inspections. | [ABC Gardening Australia — Snake Plants](https://www.abc.net.au/gardening/how-to/snake-plants/104347544) — Snake-plant group: let the medium dry between waterings; prevent waterlogging. No numerical inspection frequency. |
| Curio rowleyanus | Manual | Manual | Avoid persistent wetness and prolonged drought; inspect the medium and fleshy leaves before watering. | [ABC Gardening Australia — Watering Succulents](https://www.abc.net.au/gardening/how-to/watering-succulents/13146268) — Succulent-group principles, not exact species/dormancy advice: mostly dry between watering; small pots can dry quickly in summer. |
| Haworthia cymbiformis | Manual | Manual | Avoid persistent wetness in freely draining succulent medium. Exact species check frequency remains unestablished. | [ABC Gardening Australia — Watering Succulents](https://www.abc.net.au/gardening/how-to/watering-succulents/13146268) — Succulent-group principles, not exact species/dormancy advice: mostly dry between watering; small pots can dry quickly in summer. |
| Zamioculcas zamiifolia | Manual | Manual | Keep drier: allow drying between waterings and avoid prolonged wetness. Water-storing rhizomes mean it can go weeks without water; that is not a published soil-check interval. | [ABC Gardening Australia — Bringing the Outdoors In](https://www.abc.net.au/gardening/how-to/bringing-the-outdoors-in/9436710) — Explicit ZZ guidance: its underground storage organs allow weeks without water. No numerical inspection frequency. |
| Citrus × microcarpa | Manual | 1 days | Maintain moist but well-drained medium during growth; avoid drought and saturation. | [ABC Gardening Australia — Potted Produce](https://www.abc.net.au/gardening/how-to/potted-produce/9431786) — General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency. |
| Capsicum annuum | Manual | 1 days | Maintain reliable moisture while growing and fruiting; avoid repeated wilting and waterlogging. | [ABC Gardening Australia — Potted Produce](https://www.abc.net.au/gardening/how-to/potted-produce/9431786) — General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency. |
| Capsicum chinense | Manual | 1 days | Maintain reliable moisture while growing and fruiting; avoid drought swings and waterlogging. | [ABC Gardening Australia — Potted Produce](https://www.abc.net.au/gardening/how-to/potted-produce/9431786) — General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency. |
| Citrus × limon 'Meyer' | 5 days | 1 days | Keep consistently moist during active growth and fruit development, never waterlogged. If sufficiently moist, do nothing; if drying and the root zone needs moisture, water thoroughly and allow excess water to drain. Reduce watering in winter. | [ABC Gardening Australia — Potted Produce](https://www.abc.net.au/gardening/how-to/potted-produce/9431786) — General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency. |
| Citrus × meyeri 'Lemonicious' | 5 days | 1 days | Keep consistently moist during active growth and fruit development, never waterlogged. If sufficiently moist, do nothing; if drying and the root zone needs moisture, water thoroughly and allow excess water to drain. Reduce watering in winter. | [ABC Gardening Australia — Potted Produce](https://www.abc.net.au/gardening/how-to/potted-produce/9431786) — General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency. |
| Citrus limon | Manual | 1 days | Inspect moisture during growth; reduce water in winter without allowing damaging drought. | [ABC Gardening Australia — Potted Produce](https://www.abc.net.au/gardening/how-to/potted-produce/9431786) — General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency. |
| Petroselinum crispum | Manual | 1 days | Keep actively growing plants evenly moist with free drainage. | [ABC Gardening Australia — Potted Produce](https://www.abc.net.au/gardening/how-to/potted-produce/9431786) — General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency. |
| Salvia rosmarinus | Manual | 1 days | Allow some drying between waterings; established plants tolerate drought, but avoid winter wet. | [ABC Gardening Australia — Potted Produce](https://www.abc.net.au/gardening/how-to/potted-produce/9431786) — General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency. |
| Eucalyptus cinerea | Manual | Manual | Check establishment and container moisture; established ground trees tolerate drier conditions. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Hypoestes phyllostachya | Manual | Manual | Let the surface begin drying before watering; avoid damaging drought during active growth. | [ABC Gardening Australia — Water and Humidity](https://www.abc.net.au/gardening/how-to/the-great-indoors-water-and-humidity/12851846) — General indoor guidance: inspect moisture; if moist, recheck in a few days. Does not specify three days or a species interval. |
| Curio herreanus | Manual | Manual | Avoid excess water, especially in winter; adjust watering to growth and actual medium moisture. | [ABC Gardening Australia — Watering Succulents](https://www.abc.net.au/gardening/how-to/watering-succulents/13146268) — Succulent-group principles, not exact species/dormancy advice: mostly dry between watering; small pots can dry quickly in summer. |
| Cheiridopsis pillansii | Manual | Manual | Summer dormancy: use minimal water only when needed; autumn–spring growth requires closer attention. Avoid splitting from excess water. | [ABC Gardening Australia — Watering Succulents](https://www.abc.net.au/gardening/how-to/watering-succulents/13146268) — Succulent-group principles, not exact species/dormancy advice: mostly dry between watering; small pots can dry quickly in summer. |
| Origanum vulgare subsp. hirtum | Manual | 1 days | Let container medium dry before watering; avoid persistent wetness. Established ground plants need much less additional water. | [ABC Gardening Australia — Potted Produce](https://www.abc.net.au/gardening/how-to/potted-produce/9431786) — General edible-container guidance: check at least daily in summer. Includes oregano, citrus, coriander and parsley; not an exact subspecies frequency. |

Verification: 49 Node tests passed, including botanical coverage, removal of legacy defaults, preserved histories/photos, summer-only and container-only applicability, explicit owner preferences, snapshot expiry, indoor rainfall isolation, guide rendering/source attribution and existing photo-upload/display regression checks. These tests verify code behaviour, not horticultural certainty or the owner's iPhone. Manual-check plants retain moisture guidance and watering logs but do not receive a computed next-check date; a watering tap on a manual-check plant does not invent a future interval.


## v1.0.123 — individual user-selected watering-check intervals

Edit plant now has a separate “Edit watering check interval” action. A whole-day value from 1 to 365 is stored as `wateringCheckDays` on that individual plant record. Clearing the field removes only that override and restores the existing audit guidance. Valid overrides take priority before botanical identification, location, seasonal rules and existing cultivar preferences. They are explicitly described as set by the user, not a source-published botanical frequency. Species care still resolves exclusively from botanical identity.

The existing shared interval resolver supplies the profile summary, Home tile colour, next-check countdown and watering confirmation, avoiding a second scheduling implementation. Botanical hydration updates the derived legacy `interval` from that resolver without overwriting `wateringCheckDays`. Plant snapshots and backups already serialize the complete record, so the new property persists through those existing mechanisms. Watering history remains the countdown anchor; editing the interval records no watering event.

Removed the unused indoor interval column and repeated null placeholders from the audit table; no watering rules were changed for plants without a personal interval. Name/location editing, delete/undo, photo handling, source guidance and the approved Home legend remain unchanged.

Validation: 57 Node tests passed. Eight new behavioural tests cover the Edit plant action, separate plants with identical display names, JSON save/reload and botanical hydration, override priority, cancellation/validation, clearing, persistence failure rollback, storage readiness, all four colour buckets, countdown after actual watering, history/photo preservation and the existing same-day duplicate-water guard. Tests use a DOM/storage harness; no claim of a completed interaction on the owner’s iPhone.

## Practical-detail expansion — 2026-10-06, v1.0.124

`practical-care.js` adds presentation-only steps for all 34 canonical care records. It resolves through the existing botanical-name registry, never through display names. It does not modify profile summaries, saved plants, soil-check intervals, owner overrides, watering history or photo settings. Unmatched names receive no substitute species guide.

Expanded topic sheets retain the existing summary and add practical steps, clearly scoped references, and evidence gaps. Sources use native collapsed details. The full sourcing policy appears once in the Care Guides entry screen. A runtime identity review inspects the current device's saved plants: missing/ambiguous identity, cultivated group identity and missing research coverage are separate categories. The repository's starter plants are not a claim about the owner's current phone collection.

Australian-first review: ABC indoor lighting, water/humidity and potting-on guidance applies only to its stated container groups. Snake Plants, Orchid Revival, Planting Winter Herbs, Easy Solanaceae, Rockery Renewal, Worthy Display and the gardenia winter FAQ supply specific Australian practical guidance where available. RBG Victoria HortFlora and ANBG searches did not produce a complete practical protocol for every non-native taxon; this is a limitation of this review, not a statement that none exists. HortFlora Eucalyptus cinerea supplies botanical context. BOM Laverton averages are regional context, not live Altona weather; current forecasts remain external links. APVMA governs any regulated treatment label, and no chemical treatment is prescribed here.

Missing species/cultivar details are supplemented with the exact RHS, NC State Extension or specialist LLIFLE links in the structured catalogue. Group guidance is not represented as a species trial. UK/US calendar dates are not transferred unchanged into Melbourne. Existing Greek oregano, Meyer and Lemonicious field-specific references are reused.

### New species/cultivar steps (shared Australian container steps are additional)

| Canonical identity | New practical topics |
|---|---|
| Adiantum capillus-veneris | Moisture trigger, filtered light, division/spores |
| Begonia maculata | Light, water/drainage, cane pruning, stem cuttings |
| Philodendron 'Birkin' | Light, bud-bearing cuttings, repotting |
| Sedum morganianum | Handling fragile leaves, light, drying, propagation |
| Coriandrum sativum | Bolting, leaf/seed harvest choices, seed replacement |
| Phalaenopsis cultivar | Clear-pot root inspection, airy bark, spike choices, repotting, light; group scope |
| Phalaenopsis amabilis | Same Australian genus-level orchid culture; species scope gap retained |
| Spathiphyllum wallisii | Flowering versus shade, root crowding, division |
| Pilea involucrata | Light, pinching, softwood cuttings |
| Gardenia jasminoides | Cold-season yellowing, acidic medium, shelter, pruning |
| Philodendron hederaceum | Climbing support, light, cooler-season moisture |
| Peperomia caperata 'Milano' | Light, moisture extremes, species-level cuttings |
| Peperomia argyraea | Top-medium trigger, light, snug pots |
| Epipremnum aureum | Support, trimming, rooting vines, light |
| Epipremnum aureum 'Marble Queen' | Species-level steps above; cultivar trial gap |
| Monstera deliciosa | Upper-medium trigger, sturdy support, propagation, pruning |
| Callisia repens | Rooting nodes, containment, cuttings/division, light |
| Dracaena trifasciata | Soil versus water culture, drying, light, dead-leaf removal |
| Curio rowleyanus | Oversized pots, cuttings, cooler-season moisture; drying-source disagreement retained |
| Haworthia cymbiformis | Filtered light, gritty medium, crowding; Haworthia group scope |
| Zamioculcas zamiifolia | Drying trigger, light, sparse species feeding, division/leaf cuttings |
| Citrus × microcarpa | Sheltered light, gradual potting-on, seed identity limitation |
| Citrus limon | Citrus group steps above |
| Capsicum annuum | Warmth, moisture, fruit support, seed raising |
| Capsicum chinense | Crop-group steps plus species drought/fruit and night-temperature guidance |
| Petroselinum crispum | Harvest stems, biennial replacement, container moisture |
| Salvia rosmarinus | Avoid bare old wood, ground versus container feeding, winter wet, cuttings/layering |
| Eucalyptus cinerea | Establishment, tree/juvenile foliage, intentional coppicing |
| Hypoestes phyllostachya | Light/colour response, pinching/flower choice, cuttings |
| Curio herreanus | Light, cuttings, minimum-temperature supplementary guidance |
| Cheiridopsis pillansii | Mineral medium, seasonal dormancy, potassium sensitivity |
| Origanum vulgare subsp. hirtum | Container renewal, harvest/pruning, fertilised mix accounting |
| Citrus × limon 'Meyer' | Nursery/graft identity, suckers, planting/repotting depth |
| Citrus × meyeri 'Lemonicious' | Same steps with retained separate selection identity |

### Product matching and exclusions

Bunnings listings and manufacturer composition/directions were reviewed for indoor mix/liquid feed, succulent mix, epiphytic orchid bark/liquid feed and gardenia mix/controlled-release feed. Actual manufacturer links appear separately from horticultural references. Conditional matching is not a botanical-authority brand endorsement. Stock at a particular store and the owner's physical current pack are not verified. Product labels govern dilution and pot-size rates; nutrients already included in fresh mix must be counted. Granular and liquid feeding schedules are not interchangeable.

The checked indoor mix contains peat: it is excluded where the selected guide specifies peat-free medium. No general high-potassium succulent feed is substituted for Cheiridopsis pillansii. Existing exact Greek oregano/Meyer/Lemonicious product matches are preserved. Additional herb, chilli, rosemary, native-tree and generic-citrus product matches remain explicit review gaps rather than invented species endorsements.

No precise pot diameter, numerical pH correction dose or numerical soil-check interval is invented. Fields without additional verified practical steps say so. Source evidence and app climate interpretation remain distinguishable.

Validation: 65 automated tests cover existing photo upload/view behavior, watering/override persistence, botanical identity matching and the new guide layer. New tests render every topic for every supported canonical record, validate practical-step references, check exclusions, distinguish identity from coverage gaps, and confirm no mutation of care summaries or plant data. These tests do not establish execution on the owner's iPhone.

## Seven owner-supplied identities — v1.0.125, 2026-10-06

The owner explicitly supplied this mapping after the earlier starter-data audit:

| Display label supplied by owner | Botanical input | Comprehensive resolution |
|---|---|---|
| Maidenhair Fern | Adiantum aethiopicum | New exact species record |
| Peppermint | Mentha x piperita | New Mentha × piperita hybrid record |
| Orchids purple | Phalaenopsis cultivar | Existing supported cultivated group |
| Orchids lime mini | Phalaenopsis hybrid | Existing supported cultivated group alias |
| Peace Lily | Spathiphyllum wallisii | Existing supported species record |
| Bougainvillea White Stripe | Bougainvillea spectabilis x glabra | New supplied spectoglabra hybrid-group record; named cultivar unverified |
| Ice Plant | Delosperma lehmannii | New species record; Corpuscularia lehmannii supported as a linked name |

Resolution is botanical-only. No plant is selected or identified by display name. These mappings do not mutate saved plant names or botanical values and do not claim that the phone's current saved records were remotely read. The previously supplied plant-list screenshots and starter data are not substituted for this explicit new owner mapping.

The four added identities live in a comprehensive-only registry inside practical-care.js. app-actions.js consults it for guide sheets. botanical-care.js, profile-care-summary-v2.js, watering-audit.js and all plant storage/photo/history code are untouched. Consequently profile summaries and reminder results remain exactly as they were, even where a new comprehensive record now has practical moisture guidance. The water sheet displays existing reminder settings without assigning a new default.

### Australian-first review and evidence gaps

- Adiantum aethiopicum: ABC Fern Fabulousity explicitly includes the Australian maidenhair and supports moisture, sheltered light and recovery pruning. ABC Adiantum supplies genus-level soil and spore/division guidance and credits Global Book Publishing's Flora's Gardening Cards. RBG Victoria HortFlora identifies the species; ANBG provides botanical imagery, not a fertiliser trial. The general empty-saucer step is not applied to this record because ABC discusses a small water reserve for this fern. No numeric pH optimum, exact bag recipe, check interval or species feeding dose is invented.
- Mentha × piperita: ABC Potted Plant Care addresses mint moisture and containers; Controlling Mint demonstrates M. spicata and expressly extends containment to other mint varieties. RBG Victoria identifies peppermint. ANBG/APNI searches provide name/image information, not complete cultivation. RHS exact peppermint fills light, pH categories, division, after-flowering pruning and disease/pest gaps. UK seasonal/hardiness settings are not imported as Altona dates or reminder intervals.
- Phalaenopsis cultivar/hybrid: ABC Orchid Revival supports airy medium, root inspection, after-flowering spike choices, repotting, specialised food and protection from cold windows/draughts. Additional feed and problem-management steps reuse that source and current manufacturer directions. Purple and mini do not establish an exact species or hybrid name. Group care remains supported and the identity review labels this remaining scope gap.
- Spathiphyllum wallisii: ABC Dividing Peace Lilies adds a practical root-ball division demonstration with explicit cultivar/group scope. RHS exact species fills peat-free medium, root crowding, growth-stage water/feed and propagation details. Profile summaries remain unchanged. No chemically treated pest recommendation is added.
- Bougainvillea spectabilis × glabra: ABC Bougainvillea supplies sun, drainage, moisture during flowering and overfeeding advice; its original Global Book Publishing credit is retained. RBG Victoria identifies the spectoglabra hybrid group and warns that many cultivar origins are uncertain. RHS genus guidance fills support, pruning and container-medium/cold-protection gaps; its UK greenhouse calendar and weekly high-nitrogen feeding schedule are not imported. White Stripe is a display label, not a verified named cultivar. No cultivar dose, exact frost threshold or peat-free Bunnings loam recipe is asserted.
- Delosperma lehmannii: no exact practical protocol was located in the reviewed ABC/RBG Victoria/ANBG results. ABC succulent-group drainage advice is used only at group scope. LLIFLE supplies description and synonymy with Corpuscularia lehmannii. SANBI PlantZAfrica indexed extracts explicitly support compact clumping habit, dehydration leaf shrinkage and seed/cutting propagation. Its full page returned a fetch/access error, so detailed light, mineral percentages, propagation conditions, pH and fertiliser schedules were not inferred from unavailable text. SANBI attribution is preserved as supplementary species evidence, not Australian primary guidance.

BOM Laverton RAAF climate averages remain regional context; Altona forecasts are external current-weather links. Neither is used as a biological inspection formula. APVMA approved-use label requirements apply to any regulated treatment; this change prescribes no pesticide, fungicide or insecticide.

All seven inputs now open practical comprehensive topics with collapsed Sources and explicit limitations. The current-device identity review reports both orchid entries and the bougainvillea as supported groups with unresolved exact hybrid/cultivar scope; the four supplied species/hybrid identities are no longer treated as missing guide coverage. Genus-only old inputs remain unresolved rather than being silently assigned a species.

Product matches retain label/composition scope. The fern has the previously checked indoor/fern product options, orchids retain orchid-specific options, peace lily retains its peat-free exclusion, and Ice Plant has the general draining succulent-medium option. Peppermint exact feeding rates and a peat-free bougainvillea loam recipe remain product-match gaps. Manufacturer labels govern rates; no automatic feed stacking or numerical reminder changes are introduced.

Validation: 69 automated tests pass. New tests exercise all fourteen topics for all seven supplied identities, botanical spelling/× aliases, honest supported-group identity results, sources/evidence gaps, and unchanged profile registry, saved records and reminder outputs. Other practical records, photo uploads/view settings, interval persistence and history behavior retain their regression tests. Live deployment verification is performed separately; these tests do not claim testing on the owner's physical iPhone.

## Watermelon Peperomia — v1.0.126, reviewed 7 October 2026 (Melbourne)

Updated the comprehensive practical-care record selected by botanical identity. Existing alias `Peperomia argyreia` resolves to `Peperomia argyraea`; no display-name lookup, botanical-name migration or profile-summary edit is introduced.

Australian-first review: ABC Gardening Australia’s *Plant Profile | Peperomias* (Jane Edmanson, 23 May 2025) supports genus-level cultivation. It features other peperomias, so it is not labelled exact Watermelon Peperomia evidence. RBG Victoria and ANBG searches did not establish an exact-species cultivation record. Existing BOM regional context and APVMA label constraints remain scoped appropriately. The owner specifically requested Bunnings; its *How to grow and propagate peperomias* article includes the supplied botanical spelling and provides the new practical steps. General care is labelled genus-level, and the propagation passage naming watermelon is distinguished from that general advice. Retained NC State species guidance complements the pot-size advice; the different repotting scope is explicit rather than replacing it silently.

Sources:
- ABC: https://www.abc.net.au/gardening/how-to/plant-profile-peperomias/105327900
- Bunnings practical guide: https://www.bunnings.com.au/diy-advice/garden/planting-and-growing/how-to-grow-and-propagate-peperomias
- Bunnings perlite listing: https://www.bunnings.com.au/brunnings-5l-perlite_p3010203
- Manufacturer perlite composition: https://brunnings.com.au/product/perlite-5l/
- Bunnings feed listing: https://www.bunnings.com.au/scotts-osmocote-1l-pour-feed-indoor-plants_p0162252
- Manufacturer feed directions and explicit Peperomia suitability: https://www.lovethegarden.com/au-en/product/scotts-osmocote-pourfeed-indoor-plants

The existing draining indoor mix is retained as a composition match; it already includes perlite and fertiliser. Extra amendment/feeding is conditional, and local stock is unverified. Pour+Feed is ready to use; the current pack controls its pot-width dose. Product feeding frequency never becomes a soil-check reminder. No pesticide or rooting-hormone product is prescribed. Numerical pH, measured mix ratio, species-tested feed dose and mandatory pinching remain explicit gaps.

Only this practical-care record and its product selection change. Guide presentation uses the existing expandable Sources and Evidence gaps. Profile registry, watering audit, saved records, photos, history and manual intervals are unchanged. Version is v1.0.126; cache is plant-secretary-v162. All 71 Node tests pass, including field-level attribution, aliases, product application distinctions and rendering without plant/profile/reminder mutation. Physical iPhone cache and interaction have not been independently verified.
