# Copies repo root app.js into extension/firefox/app.js (wrapper.js is a separate script in newtab.html).
$root = Split-Path -Parent $PSScriptRoot
Copy-Item -Path "$root\app.js" -Destination "$root\extension\firefox\app.js" -Force
Write-Host "Updated extension/firefox/app.js from app.js"
