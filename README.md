# Rainbow Electrical & Electronics — V2

This version uses the supplied Rainbow business content and the uploaded reference project's **content organization philosophy**, without copying its visual style.

## Main decisions

- React + JavaScript + Vite only.
- No backend, login or payment gateway.
- Product catalogue behaves like an e-commerce site but uses an **enquiry cart** instead of checkout.
- Dedicated `/cart` page.
- Cart persists in localStorage.
- WhatsApp enquiry is generated from selected products.
- Product, service, project, client and certification information is centralized in data files.
- Major UI sections are split into components with their own `.module.css` file.
- Only `src/styles/global.css` contains global tokens/reset/font rules.

## Debugging-friendly structure

```text
src/
  components/
    common/
    layout/
    home/
    products/
    cart/
  context/
  data/
  pages/
    Home/
    About/
    Products/
    ProductDetails/
    Services/
    Projects/
    Contact/
    Cart/
```

A typical section is:

```text
components/home/Industries/
  Industries.jsx
  Industries.module.css
```

So you can debug a section without searching through one huge stylesheet.

## Centralized content

The existing Rainbow product/service/project content is kept in `src/data.js`. Additional website-specific content is in `src/data/siteData.js`.

Do not duplicate product names or service lists in individual pages.

## Before production

1. Replace placeholder phone, email and WhatsApp values in `src/data.js`.
2. Replace demo product images with Rainbow's real product photographs.
3. Add exact product specifications, brands, capacity ranges and datasheets where Rainbow provides them.
4. Confirm the client/brand relationship before describing any manufacturer as an authorized dealer.
5. Add the real address/map if required.

## Run

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```
