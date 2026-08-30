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
