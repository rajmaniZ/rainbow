# Rainbow — Power & Electrical Engineering Website

Modern responsive React + Vite frontend for Rainbow.

## Stack
- React
- JavaScript
- Vite
- React Router
- Lucide React
- CSS

## Architecture
- `src/data.js` is the single source of truth for products, categories, services, projects, clients and certifications.
- No authentication.
- No backend required.
- No payment integration.
- Product selection works as a client-side enquiry cart.
- The enquiry cart generates a WhatsApp message.
- Replace the placeholder company phone, email and WhatsApp number in `src/data.js` before launch.

## Run
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm run preview
```

## Product images
Product images are centralized in `src/data.js`. For production, replace the remote demo image URLs with Rainbow's own product/project photography under `src/assets` or `/public`.
