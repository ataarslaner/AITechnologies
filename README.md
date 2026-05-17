# Ada

Working site for **Ada Intelligence** — an AI studio building adaptive systems for law, commerce, and healthcare. Built with Next.js 14, TypeScript, and Tailwind. Ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Brand

Everything brand-related lives in `src/lib/brand.ts`. Change the name, tagline, domain, and contact info there and the whole site updates.

Site copy lives in `src/lib/content.ts`.

## Structure

- `src/app/` — App Router pages: home, services, industries, team, consultancy, about, contact, shop
- `src/components/` — header, footer, section, card, wordmark, consultancy assistant
- `src/lib/` — brand and content data

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import it at https://vercel.com/new.
3. Vercel auto-detects Next.js. No env vars needed for the static demo.

## Roadmap

- Wire the contact form to a route handler or service like Resend.
- Connect the consultancy assistant to a model gateway (OpenAI, Bedrock, Vertex).
- Open the shop with a real commerce backend (Shopify, Stripe).

## Naming

Working name is **Ada**. See `src/lib/brand.ts` to swap to one of: Anatolia, Bosphorus, Pera, Levent, Mythra.
