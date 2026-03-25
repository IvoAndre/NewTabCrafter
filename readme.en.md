# NewTabCrafter

A lightweight, browser-based new tab page with zero build tools and client-side persistence.

## Highlights

- Search bar with engine presets, custom engine, and direct URL detection.
- Main shortcuts grid and apps menu with add/edit/remove/drag reorder.
- Background modes: solid, gradient, uploaded image, uploaded playlist, random stock.
- Random stock uses Unsplash search with local category caching and attribution.
- Theme controls (including component transparency), custom fonts, and UI sizing.
- Collapsible settings categories.
- Import/export settings JSON.
- Localization: `en-US` and `pt-PT`.

## Tech

- Static app: `index.html`, `styles.css`, `app.js`
- Storage: browser `localStorage` (`newtab.config`)

## Run locally

```powershell
cd c:\Users\Ivo\source\repos\newtab-page
python -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy (GitHub Pages)

1. Push this project to your GitHub repository.
2. In GitHub, open Settings -> Pages.
3. Set Source to Deploy from a branch.
4. Select `main` and folder `/ (root)`.
5. Save and wait for the Pages URL.

## Notes

- Data is local to each browser profile/device.
- Use Export/Import to transfer settings.
- To change default values, edit `defaultConfig` in `app.js`.
