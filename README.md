# TeamX

A complete, responsive, single-page TeamX company website built with Next.js 16 App Router, TypeScript, React, and plain CSS. Includes Geist Sans through `next/font`, CSS/SVG concept illustrations, responsive navigation, independent FAQ disclosures, and product inquiry email links.

## Run locally

Use Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables, database, authentication, or external service configuration is required.

On Windows PowerShell, use `npm.cmd` instead of `npm` if execution policy blocks `npm.ps1` (for example, `npm.cmd run dev`).

## Production

```sh
npm run build
npm start
```

Geist font files and their SIL Open Font License are bundled in `app/fonts` and loaded through `next/font/local`. Builds and visitors need no Google Fonts connection.

## Source

- `app/page.tsx`: complete landing page, product previews, and native accessible FAQs. The first FAQ starts open; each disclosure opens independently.
- `app/site-header.tsx`: mobile navigation, Escape handling, outside-click dismissal, and responsive menu reset.
- `app/globals.css`: brand styling, responsive layouts, focus indicators, and reduced-motion support.
- `app/layout.tsx`: Geist font and page metadata.
- `app/icon.svg`: TeamX favicon.

All product/navigation links target sections of this page. Inquiry links open the visitor’s mail application with appropriate subjects; LinkedIn opens in a new tab. Product visuals are illustrative and every product is marked as launching soon.

The prior contact form, contact API, demo route, and session proxy have been removed from the application. Existing unused service utilities and dependencies are retained so unrelated setup is not overwritten.
