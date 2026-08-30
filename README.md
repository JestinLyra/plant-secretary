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
