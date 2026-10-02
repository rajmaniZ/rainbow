# Rainbow Electrical & Electronics — Refactored V2

React + JavaScript + Vite catalogue website for Rainbow.

## What was fixed

- Removed the active Control Panels product category and all Control Panel products from the catalogue.
- Removed Control Panel-specific service entries and public-facing marketing references.
- Kept automation/control components as a separate product family; these are components, not a Control Panels catalogue.
- Fixed `CartItem.jsx`, which previously returned before rendering its JSX.
- Removed the broken/empty duplicate `src/pages/Products/ProductCard/ProductCard.jsx` file.
- Enabled the global stylesheet from `src/main.jsx` and replaced the duplicate reset with a small global foundation.
- Fixed product-category links in the header so they use `/products?category=...` instead of being treated as product-detail slugs.
- Removed the large legacy/commented copy of the old data file.
- Added catalogue validation and preserved explicit product IDs/slugs.

## Data architecture

`src/data.js` is now only a compatibility entry point.

```text
src/
  data.js
  data/
    index.js
    company.js
    categories.js
    helpers.js
    catalog.js
    services.js
    projects.js
    clients.js
    certifications.js
    siteData.js
    products/
      ups.js
      upsComponents.js
      batteries.js
      stabilizers.js
      inverters.js
      solar.js
      automationComponents.js
      wiringAccessories.js
      electricalBoxes.js
      wiresConduits.js
      lighting.js
      fans.js
      bells.js
```

Product data is split by product family. `catalog.js` combines the families and exposes lookup/validation helpers.

## Current catalogue

- 13 product categories
- 103 products
- 0 duplicate product IDs
- 0 duplicate product slugs
- 0 invalid product-category references
- Control Panels category removed
- Control Panel products removed

## Existing imports

Existing components may continue importing from:

```js
import { products, categories } from "../../data.js";
```

because `src/data.js` re-exports the organized modules. New code can import directly from `src/data/index.js` or the specific module it needs.

## Assets

The source merger excludes image binaries. Keep the existing `src/assets/` directory from the original project unchanged. Product modules now reference those assets from their new `src/data/products/` location using the correct `../../assets/...` path.

## Run

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```

The catalog modules were independently executed after refactoring with their image imports stubbed, and the catalogue validation returned valid IDs, slugs, categories and references.
