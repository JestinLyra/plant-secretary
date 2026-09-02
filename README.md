# Plant Secretary

A free, mobile-first Progressive Web App for iPhone, designed for plant watering checks in Altona, Victoria.

## Evidence sources
- ABC Gardening Australia — everyday care guidance
- Royal Botanic Gardens & Australian National Botanic Gardens — identification and botanical requirements
- Bureau of Meteorology — Altona weather and seasonal watering adjustments
- APVMA-approved product labels — pest treatment, dilution rates and safety

## Publish free with GitHub Pages
1. Create a new public GitHub repository named `plant-secretary`.
2. Upload all files in this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then Save.
6. Open the GitHub Pages URL on iPhone Safari.
7. Tap **Share → Add to Home Screen**.

## Home page
The Home page now starts with square tiles for all plants, followed by the Weather Aware Watering card. Tapping a tile jumps to that plant’s watering card.

## Current weather behaviour
This first version lets you enter today's BOM Altona max temperature, rain chance and expected rainfall. The values are stored only on the device and adjust outdoor watering-check intervals.

A later version can automate BOM/weather ingestion using a scheduled GitHub Action or a small free weather-data bridge while keeping GitHub Pages as the host.

## Cache busting
Static files include `?v=3` and the service worker cache is named `plant-secretary-v1`. When publishing a new build, this build uses `v=3` and `plant-secretary-v3`. Increase both again on the next build.

## Version 3 tile design
- Chilli plants are excluded from the app only.
- Home tiles are colour-coded by baseline watering-check frequency: blue = most frequent, light blue = moderate, white = least frequent.
- Tile icons show sunlight needs only: ☀️ direct, 🌤️ direct to indirect, ⛅️ indirect/direct-sensitive, ☁️ minimal sunlight.

## Version 4
- Removed the Weather Aware Watering card from Home.
- Watering Check cards now use the same blue/light-blue/white watering-need colours as Home tiles.
- Watering Check cards now show the same sunlight icon as Home tiles.


## Fortnight forecast
The Home page includes a 14-day predicted watering schedule. It assumes soil is dry/not damp when a check is due and repeats each plant using its baseline interval. Always check soil or growing medium before watering.

## Version 6
- The primary watering button now shows the last watering status for each plant.
- Same-day watering displays `Watered today`.
- Older watering records display the weekday, date and relative age, for example `Saturday, 29 August, 1 day ago`.
- If no record exists, it displays `No watering recorded`.
- Tapping the button records today and immediately recalculates watering checks and the fortnight forecast.


## v9
Home is now My Plant Collection with circular plant photos and the confirmed 29-plant list (17 indoor, 12 outdoor).

## v10 bug fix
- Restored initial app rendering, so the Home plant collection appears immediately.
- Restored bottom-navigation tap handlers.
- Restored Fortnight shortcut tap handling.
- Plant collection photos now have visible loading/error fallbacks.
- Cache bumped to v10 for iPhone/GitHub Pages.

## v11
- Changed the Fortnight navigation icon to a calendar icon (📅).

## v12
Fortnight View condenses long lists with “All indoor plants, except …” and “All outdoor plants, except …”.

## v13
- “except …” text in Fortnight View is now grey and italic.
- Days with no watering scheduled use a smaller, more compact card.

## v14
- Plant collection photos are centred and use contain-fit so the full image stays visible inside each circle.
- Home label changed from “Golden Pothos / Devil’s Ivy” to “Golden Pothos”.

## v15
- Removed the duplicate introductory statement under the care-guide tag from every plant profile.

## v16
- Home plant collection now shows all indoor plants first, alphabetically.
- Outdoor plants appear after the indoor section, also alphabetically.

## v17
- Removed the Plants icon/button from the bottom navigation.

## v18
- Added String of Pearls to the indoor plant collection.
- Indoor plants remain alphabetically ordered, followed by outdoor plants alphabetically.
- Plant collection count updated to 30.

## v19
- Added Pink Lady — Callisia repens to the indoor plant collection.
- Indoor collection remains alphabetically ordered.
- Collection total updated to 31 plants.

## v20
- Confirmed Pink Lady — Callisia repens as an indoor plant.
- Confirmed String of Pearls as an indoor plant.
- Collection remains 31 plants total.

## v21
- Merged the former Plants function into Home.
- Home is now the single place for the full plant collection and plant profiles.
- Removed the separate Plants icon from the bottom navigation.
- Bottom navigation now contains Home, Watering Check, and Fortnight.

## v22
- Updated plant names to the latest user-provided list.
- Indoor plants: 19, kept together and listed first.
- Outdoor plants: 12, kept together and listed after indoor plants.
- Total collection: 31 plants.

## v23
- Saturday forecast tiles are sage.
- Sunday forecast tiles are sky blue.

## v24
- Fortnight Watering Forecast now uses the latest exact indoor and outdoor plant names.
- Stable plant IDs remain unchanged so existing watering records are preserved.

## v25
- Home redesigned from the supplied plant-gallery inspiration.
- Indoor and outdoor plants are shown as separate groups.
- Bunnings Australia reference imagery is used for exact/closest matching plants where available.
- Home images are reference-only and do not indicate the condition or health of the user's plants.
- Existing profiles, watering history, Watering Check and Fortnight features remain intact.

## v26
- Watering Check legend renamed to Moisture-loving, Regular watering, and Drought tolerant.
- Added sunlight icon legend: direct sun, in-/direct sun, sun sensitive, and no sunlight.
- Added 🍋 acid-loving and 🪨 alkaline-tolerant icons beneath sun icons on relevant plant tiles.

## v27
- Added hands-on maintenance icons below the 🍋/🪨 soil-preference icon in Watering Check.
- ✂️ Pruning · 🤏 Pinching · 🧤 Wiping leaves · 🔄 Rotating plants.
- Added a legend for the four maintenance icons.

## v28
- Fixed the Watering Check bug seen in the screen recording where Bunnings image URLs appeared in place of sunlight icons.
- Restored ☀️ / 🌤️ / ⛅️ / ☁️ sunlight icons for all plants.
- Removed fragile hotlinked image URLs from the app and restored stable plant-specific local reference assets.
- Restored the correct Variegated String of Pearls reference image instead of the unrelated room/furniture image.
- Added safer image-failure handling so broken reference images do not disrupt the Home layout.

## v29
- Watering Check plant names are larger, darker and easier to read.
- Sunlight emoji is slightly larger than the other care icons.
- Care icons are spaced more evenly within each tile.
- Maintenance icons are grouped toward the right side of each plant tile.
- Water button position is preserved at the lower-right of the tile.

## v30
- Removed the extra “WATERING” eyebrow above Watering checks.
- Legend descriptions were removed; legends now show centered icons only.
- Kept accessibility labels/tooltips for each icon.
- Increased contrast between moisture-loving blue and regular-watering light blue.

## v31
- Restored the 💧 watering button on every Watering Check tile.
- Restored “In N days” / “Check today” status.
- Restored the instruction: “Tap the droplet to record watering. Tile colour shows typical watering demand.”
- Removed the small WATERING eyebrow.
- Square tile layout: sun upper-left, soil preference upper-right above the centered name, maintenance icons below the name.

## v32
- Removed the duplicate small “WATERING” label above “Watering checks”.

## v33
- Removed all Watering Check legends above the plant tiles.
- Preserved the watering instruction text.
- Fixed icon/name overlap inside Watering Check tiles.
- Kept tile dimensions unchanged.
- Sunlight-related icons are now slightly larger than the 💧 button icon.
- 🍋/🪨 and maintenance icons are now slightly smaller than the 💧 icon.
- Plant names are constrained to a clear area so they do not cover care icons.

## v34
- Removed any remaining Moisture-loving / Regular watering / Drought tolerant legend.
- Moved maintenance icons lower into a dedicated row.
- Prevented maintenance emojis from clipping or sitting underneath plant names.
- Improved plant-name wrapping: names stay on one line when they fit and otherwise wrap at natural word/syllable boundaries.
- Preserved square tile size, watering schedule and droplet controls.

## v35
- 🍋 and 🪨 now match the maintenance emoji size.
- Moved the pH icon closer to the maintenance row with no overlap.
- Kept the white 💧 cube the same size.
- Made the 💧 icon slightly larger and rounder while keeping it fully inside the cube.

## v36
- Replaced the Gardenia home-page reference photo with the Gardenia photo supplied by the user.
- The supplied photo is used as the Gardenia reference image only; no generated image was created.

## v37
- Replaced the Home page Gardenia circular reference photo with the user-supplied Gardenia photo.
- All other Plant Secretary data and functionality preserved.

## v38
- Gardenia Home reference photo now fills the entire circular frame with no white space.
- Only the Gardenia Home-page crop/fitting was changed.

## v39
- Home page only: centered/cropped all plant reference photos so the plant is the focus inside each circular frame.
- Other app pages and functionality are unchanged.

## v40
- Corrected only Home-page circular plant photo crops.
- Reframed Begonia, both Birkins, Golden Pothos, Maidenhair Fern, Marble Queen Pothos, both Orchids, Peace Lily, Pink Lady, and Variegated String of Pearls to focus on foliage/flowers and reduce source-image labels/white space.
- Preserved the Gardenia crop and other already plant-focused images.
- No Watering Check, Fortnight, profile, navigation, or watering logic changes.

## v41
- Home page only: reduced the Monstera — thin image inside its circular frame so roughly 80% of the plant/reference image is visible.
- No other plant photos, pages, layouts, watering data, profiles, navigation, or functions were changed.

## v42
- Replaced the Home-page Monstera — thin reference image with the approved brighter, white-background photo.
- Cropped/positioned the circular Home image to show roughly 80% of the plant and emphasise the large leaves.
- No other plant photos, pages, watering data, profiles, navigation, or functionality changed.

## v43
- Watering Check: moved plant names slightly higher so they do not overlap 🍋/🪨.
- Kept maintenance icons fully clear of the white droplet button.
- Made the 💧 visually wider/fatter without increasing its height or the white button size.
- Fixed the Monstera — thin tile bug that displayed the image path/HTTP-style text instead of the 🍋 icon.
- Corrected Monstera — thin Home image mapping to the approved bright local photo.
- Removed the stray leftover legend fragment above the watering tiles.

## v44
- Repositioned the lower care icons on Watering Check tiles after reviewing the screen recording.
- Gloves/rotate and other maintenance icons now stay in a protected left-side row aligned with the pH/maintenance area.
- Reserved the lower-right corner exclusively for the white water-droplet button, preventing icons from appearing underneath it.

## v45
- Standardised Home-page raster plant reference-photo brightness against Monstera — thin (reference mean luminance 0.778).
- Existing Home plant photos were individually brightness-normalised rather than applying one blanket exposure value.
- Added a Home-photo rendering standard so newly added reference photos use the same white, clean, coherent presentation.
- Future photo assets should be brightness-normalised to the Monstera — thin reference before being added to `assets/plants/`.
- No Watering Check, Fortnight, plant-profile, navigation, or watering-data logic was changed.

## v46
- Replaced only the Home-page Monstera — thick reference photo with the exact user-supplied image.
- Removed the visible circle border/shadow around the Monstera — thick image by adjusting only its Home-page crop and frame styling.
- No other Home photos, pages, watering data, profiles, navigation, or app functionality changed.

## v47
- Fixed the Monstera — thick Watering Check tile bug.
- Restored the correct 🍋 soil-preference icon on the Monstera — thick tile.
- Removed the accidental image-path text from the Watering Check data.
- Kept the exact user-supplied Monstera — thick photo assigned only to the Home-page image.
- No other plant data, watering schedules, profiles, or navigation were changed.

## v49
- Confirmed Peace Lily in Home → My Plant Collection.
- Peace Lily uses the user-supplied Home reference photo.
- No Watering Check, watering schedules, Fortnight, profiles, or navigation changes.

## v50
- Home → My Plant Collection only: made the Peace Lily reference photo less bright and more zoomed in.
- No Watering Check, watering schedules/history, Fortnight, profiles, or navigation changes.

## v51
- Home/My Plant Collection only: restored Gardenia to its original pre-brightness-normalisation colour rendering.
- No Watering Check, watering schedule/history, Fortnight, profile, or navigation changes.

## v52
- Home → My Plant Collection only: removed/hid all plant photos inside the circular frames.
- Circular placeholders and plant names remain.
- No Watering Check, watering schedules/history, Fortnight, profiles, navigation, or plant data changed.

## v53
- Watering Check only: removed all maintenance icons from plant tiles.
- Home, watering schedules/history, Fortnight, profiles, navigation, and plant data are unchanged.

## v54
- Bottom navigation only: Home now uses the selected Leaf Circle icon (#13).
- Watering Check now uses the selected Progress Droplet icon (#15).
- No other pages, watering schedules/history, plant data, Fortnight, profiles, or layout were changed.

## v55
- Fortnight/calendar bottom navigation icon changed to the exact approved Calendar + Droplet artwork.
- Home icon and Watering Check icon remain unchanged.
- No page content, watering schedules/history, plant data, profiles, or layout changed.

## v56
- Watering Check bottom-navigation icon updated to the approved Progress Droplet design.
- Watering Check icon is 2× the previous 27 px size (54 px) and uses crisp inline SVG artwork.
- Home and Fortnight icons are unchanged.
- No page content, watering schedules/history, plant data, profiles, or other pages changed.

## v57
- Home → My Plant Collection:
  - Added + button to add a new plant.
  - Added Edit button; in edit mode every plant circle gets a red minus button in the upper-left.
  - Tapping minus removes the plant from the active collection.
- Collection changes sync to Watering Check and Fortnight/Calendar.
- Deleted built-in plants keep any old watering history in storage but are hidden from active views.
- Added custom plants persist in local storage on the device.

## v58
- Watering Check bottom-navigation icon only:
  - Replaced with the exact user-supplied Progress Droplet artwork.
  - Preserved the approved 2× size at 54×54 px.
  - Uses the exact original dark-green and bright-green colors from the supplied image.
- No changes to Home, Fortnight, collection management, watering schedules/history, plant data, profiles, or other page content.

## v59
- Bottom navigation sizing only:
  - Home icon enlarged to 54×54 px.
  - Fortnight/Calendar icon enlarged to 54×54 px.
  - Watering Check remains 54×54 px.
- No changes to page content, watering schedules/history, collection management, plant data, profiles, or navigation behavior.

## v60
- Home → My Plant Collection heading row only:
  - Moved “MY PLANT COLLECTION” to the left.
  - Moved + and Edit controls to the right.
  - Kept title and controls on one line with clear space between them.
  - Made + and Edit smaller and visually subtler.
- No changes to plant data, collection behavior, Watering Check, Fortnight, profiles, or watering schedules/history.

## v61
- Home bottom-navigation icon only:
  - Replaced with the exact approved Leaf Circle image.
  - Sized at 54×54 px, matching Watering Check and Fortnight.
- No other app content, behavior, plant data, watering schedules/history, or layout changed.

## v62
- Fortnight bottom-navigation icon only:
  - Re-applied the exact approved Calendar + Droplet image already bundled with Plant Secretary.
  - Display size fixed at 54×54 px, matching Home and Watering Check.
- No other app page, data, watering schedule/history, collection behavior, or navigation behavior changed.

## v63
- Bottom navigation visual sizing only:
  - Home icon enlarged so its outer circle visually matches Watering Check.
  - Watering Check kept at the same matched display size.
  - Fortnight icon enlarged slightly so its existing outline reads bolder and visually matches the other two.
- Exact existing icon image files are unchanged.
- No changes to watering schedules/history, plant data, collection management, profiles, or page content.

## v64
- Normalized the visible outer-circle sizes of Home, Watering Check and Fortnight.
- Exact icon images are unchanged; only their rendered scale is adjusted.
- No other app content or behavior changed.

## v65
- Fortnight navigation icon only:
  - Existing Calendar + Droplet artwork retained.
  - Green linework made darker and visually thicker to better match Home and Watering Check.
- No Home icon, Watering Check icon, page content, plant data, watering schedules/history, or app behavior changed.

## v66
- Home navigation icon only: removed the visible white circular background/ring.
- Fortnight navigation icon only: removed the visible light-gray circular background/disc.
- Icon drawings, colors, sizes, navigation behavior, and all other app pages/data remain unchanged.

## v67
- Add New Plant only:
  - Removed the manual “Water every” selector.
  - Plant Secretary now estimates a starting watering interval automatically from the plant name and Indoor/Outdoor location.
  - It first reuses intervals from recognised plants already in the app, then common plant-family rules, then a conservative fallback (Indoor 7 days / Outdoor 4 days).
- Watering Check and Fortnight automatically use that assigned interval for the new plant.
- No other pages, existing plant schedules/history, icons, or navigation changed.

## v68
- Fixed custom plants added with the + button.
- Existing custom plants from v57–v67 are automatically migrated to the correct `place` and `base` fields.
- A custom Indoor plant now appears in Home → Indoor plants immediately.
- Home collection is alphabetical within Indoor and Outdoor sections.
- Watering Check is ordered Indoor first, Outdoor second, alphabetical within each group.
- New custom plants use an initials circle on Home until a photo is supplied.
- Fortnight uses the same corrected plant location and watering interval.
- No existing built-in plant schedules/history were changed.

## v69
- Home → My Plant Collection only:
  - The existing ❧ decorative symbols now sit immediately before and after “MY PLANT COLLECTION”.
  - + and Edit remain separate controls on the right.
  - Total plant count is left-aligned below the heading.
- No changes to plant order/data, Watering Check, Fortnight, watering schedules/history, profiles, or navigation.

## v70
- Navigation icon colors only; artwork geometry is unchanged.
- Watering Check: existing inner droplet recolored blue/cyan to resemble 💧.
- Fortnight: existing six calendar squares recolored leaf green to match the Home icon family.
- Fortnight: existing droplet recolored to the same blue/cyan water color.
- No icon size, shape, line placement, crop, navigation layout, app page, plant data, or watering schedule/history changes.

## v71
- Every plant profile now has an Edit button for that specific plant's photo.
- Edit → Upload / Replace Photo opens the iPhone/native photo picker.
- Uploaded photos are resized for local storage and saved per plant on the device.
- The same uploaded photo appears on both Home → My Plant Collection and that plant's profile.
- Edit → Delete Photo removes that plant's currently displayed photo from both Home and the profile, including bundled reference photos.
- No watering schedules/history, plant ordering, Fortnight calculations, or navigation behavior changed.

## v72
- Navigation icon color fill only.
- Watering Check: filled the existing droplet interior with a cyan-to-blue water gradient inspired by 💧.
- Fortnight: filled the existing small droplet interior with the same cyan-to-blue water gradient.
- Existing droplet outlines, icon artwork, sizes, positions, green calendar squares, navigation, plant data, and watering schedules/history are unchanged.

## v73
- Home navigation icon only: improved the existing leaf fill with subtle natural-green tonal shading.
- Leaf shapes, outlines, stem, outer circle, icon size and position are unchanged.
- Watering Check, Fortnight, all app pages, plant data and watering schedules/history are unchanged.

## v74
- Home page Fortnight View card only: replaced the old calendar emoji with the same approved green-squares + aqua-droplet calendar artwork used by the bottom Fortnight navigation.
- No wording, navigation icon, watering schedule, plant data, layout behavior, or other app content changed.

## v75
- Watering Check navigation icon only: corrected the dark droplet tip to aqua/blue and softened the existing droplet fill to a cleaner 💧-like cyan-to-blue gradient.
- No other icon, artwork geometry, size, position, page, plant data, or watering schedule/history changed.

## v76
- Rebuilt every Plant Profile as a four-page mobile care guide: Quick, Care, Pests, Problems.
- Quick page uses a large circular user photo, botanical/common names, Indoor/Outdoor tag, Edit Photo, light/moisture/pH summary, four care cards and a Grow Tip.
- Care page adds position, practical soil components/pH, watering, specific fertiliser choice, growing tips, repotting, propagation and maintenance.
- Pest page is plant-group specific and includes symptoms, inspection points and label-first treatment guidance.
- Troubleshooting page uses Problem → Likely causes → What to do.
- Existing Watering Check intervals/history, Home and Fortnight logic are unchanged.
- Product directions are deliberately label-first; no pesticide/fertiliser dilution rate is invented.


## v77
- Watering Check tile droplets only: replaced the emoji-rendered droplet with a continuous cyan/blue CSS droplet so the black triangular tip is gone.
- Preserved tile button size/position, tap behavior, watering calculations/history, and bottom-navigation droplet artwork.
- Bumped PWA cache/service worker to v77.

## v78
- Fixed Home plant-circle profile routing so each tapped plant reliably opens its own profile after Home re-renders.
- Fixed the redesigned profile content resolver so it uses each plant's existing species/cultivar-specific care record instead of showing only a broad group template.
- Preserved Home, Watering Check, Fortnight, watering history/calculations, photos, custom plants and deletion behaviour.
- Bumped PWA cache/service worker to v78.


## v79
- Fixed the root cause preventing all Home plant circles from opening profiles: the redesigned profile code called a missing `careCard()` renderer, causing a runtime error before the profile overlay could open.
- Added the missing care-card renderer used by Quick and Care profile pages.
- Hardened Home plant-card activation for iPhone/Safari by removing invalid nested-button markup and keeping delegated tap/keyboard routing by exact plant ID.
- Added a defensive profile-open fallback so a future content rendering error cannot silently make taps appear unresponsive.
- Preserved plant data, watering intervals/history, Watering Check, Fortnight, photos, custom plants, deletion behavior and navigation.
- Bumped PWA cache/service worker to v79.


## v80
- Watering Check tile droplets rotated upright without changing their colours, size, tap behaviour, watering calculations, or history.
- Lemon/pH markers removed from Watering Check tiles only.
- Bottom Watering Check navigation droplet dark tip recoloured cyan/blue; navigation behaviour unchanged.

## v82
Visual-only Watering Check refinements: tile droplet white highlights are upright and moved to the lower-right without changing droplet body shape/colour; bottom Watering Check navigation droplet tip is lightened only. No functionality changes.


## v83
Added a small single-level Undo control beside Watering checks. It restores only the most recent Watering Check tile watering record and then disables itself.


## v84
Removed all sunlight/weather icons (☀️ ☁️ 🌤️ ⛅️) from Watering Check tiles only. Underlying sunlight data and all other app behaviour remain unchanged.


## v85
- Watering Check schedule/status text moved to the lower-left of each tile.
- Plant names and water droplet buttons remain in their existing positions.
- Added the approved coloured-pencil direct-sun icon at the upper-right only for plants marked as needing direct sunlight.
- No watering calculations, history, Undo, Fortnight, profile, or navigation behaviour changed.


## v87
Fixed direct-sun icon delivery on Watering Check by cache-busting app/CSS and precaching the direct-sun asset. Direct-sun icon is 36px, slightly larger than the 31px watering button.


## v88
- Fixed Watering Check direct-sun pencil icon visibility by placing it above the tile background.
- Direct-sun icon remains upper-left and is now 56px, larger than the unchanged watering button.
- Plant-name position is unchanged and may intentionally overlap the sun icon.
- Bumped stylesheet, script and service-worker cache references to v88 to prevent stale PWA assets.

## v89
- Watering Check direct-sun pencil icon increased to 65px.
- Direct-sun tile plant names use a deeper botanical green for stronger contrast against the sun artwork.
- All other layout, watering data, controls and app behaviour remain unchanged.


## v92
- Watering Check direct-sun pencil icon increased from 65px to 75px.
- Deeper botanical-green plant-name contrast retained on direct-sun tiles.
- All other layout, watering schedule positions, droplet appearance/function, Undo, watering history, Fortnight, profiles and navigation remain unchanged.


## v92
- Watering Check tiles: added uploaded 75px pencil sun+cloud icon for indirect/partial-light plants.
- Added uploaded 75px pencil cloud icon for minimal-light plants.
- Direct-sun icon and all watering/app behavior remain unchanged.


## v92
Watering Check light-icon artwork only: cloud interiors in the indirect-light and minimal-light pencil icons are now opaque white. No layout, watering logic, Undo, history, Fortnight, profiles, or navigation changes.

## v93
- Watering Check light icons only: cloud interiors changed to solid white while preserving the blue pencil outlines.
- No layout, watering, Undo, Fortnight, profile, navigation, or other behavior changes.


## v94
Replaced Watering Check indirect-light and minimal-light icons with the user-uploaded transparent-background pencil artwork. Direct-sun icon and all layout/functionality unchanged.


## v95
- Watering Check visual-only update: added 50 px pH-affinity icons in the upper-right of every plant tile using the approved uploaded artwork.
- Existing acid-affinity plants use Acidic; Rosemary uses Alkaline; remaining plants use Slightly Acidic to Neutral, based on the app's existing pH-affinity classification data.
- No changes to plant-name position, schedule placement, droplets, Undo, watering history/calculations, Fortnight, profiles, or navigation.


## v96
- Watering Check visual-only update: removed all pH affinity icons from plant tiles.
- Preserved sunlight icons, plant names, watering schedule placement, droplets, Undo, watering history/calculations, Fortnight, profiles, and navigation.
- Bumped PWA asset/service-worker cache version to v96.
