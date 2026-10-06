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
