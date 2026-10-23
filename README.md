# TeamX

A responsive, single-page TeamX company website built with Next.js 16 App Router, TypeScript, React, and plain CSS. It includes IBM Plex Sans through `next/font`, CSS/SVG product concepts, responsive navigation, independent FAQ disclosures, and a server-backed contact form.

## Run locally

Use Bun and Node.js 20.9 or newer.

```sh
bun install --frozen-lockfile
bun dev
```

Open http://localhost:3000. The public landing page needs no database or authentication. To enable contact email delivery, set `RESEND_API_KEY` and `RESEND_FROM_EMAIL` in `.env.local` and in the deployment environment. The sender address must be verified with Resend. Until configured, the form provides the TeamX email address as a fallback.

On Windows PowerShell, use `npm.cmd` instead of `npm` if execution policy blocks `npm.ps1` (for example, `npm.cmd run dev`).

## Production

```sh
bun run build
bun run start
```

IBM Plex Sans is fetched and self-hosted by `next/font` at build time. The running site does not load the font from Google Fonts.

## Source

- `app/page.tsx`: landing page, product previews and focus section, accessible FAQs, and contact section.
- `components/contact-form.tsx`: accessible contact form and submission feedback.
- `app/api/contact/route.ts`: bounded, validated email endpoint using Resend; submissions go to the TeamX inbox.
- `app/site-header.tsx`: responsive navigation, including the product-focus section.
- `app/globals.css`: brand styling, responsive layouts, focus indicators, and reduced-motion support.
- `app/layout.tsx`: IBM Plex Sans font and page metadata.
- `app/icon.svg`: TeamX favicon.

All product/navigation links target sections of this page. Email links open the visitor’s mail application; LinkedIn opens in a new tab. Product visuals are illustrative and every product is marked as in development. Contact endpoint rate limiting is per server process; production deployments with multiple instances should also use a shared edge or distributed rate limit.
