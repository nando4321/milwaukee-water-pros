# Milwaukee Water Pros

Marketing website for **Milwaukee Water Pros** — water filtration and treatment for Greater Milwaukee (Milwaukee County, Waukesha County, and Ozaukee County).

- Canonical URL: https://milwaukeewaterpros.com
- Office: 205 Bishops Way #3, Brookfield, WI 53005
- Phone: coming soon (not published on the site)

The site is modeled on the structure and visual language of a professional water-treatment marketing page: hero + consultation form, a three-step process, a six-service grid, trust/about, a clearly labeled reviews placeholder, FAQ, and contact.

## Pages

- `/` — Home
- `/services` and `/services/[slug]` — Six treatment solutions
- `/service-areas` and `/service-areas/[slug]` — Milwaukee, Waukesha, and Ozaukee counties
- `/about` — Company and coverage
- `/contact` — Estimate form (demo)
- `/contact/thank-you` — Form confirmation
- `/privacy` — Privacy policy
- `/robots.txt` and `/sitemap.xml` — generated from `app/robots.ts` and `app/sitemap.ts` with `metadataBase` https://milwaukeewaterpros.com

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

`npm run build` should complete with no errors before deploy.

## Deploy

This is a standard Next.js App Router app. Connect the GitHub repository to Vercel (or run `npx vercel`) and set the production domain to milwaukeewaterpros.com when DNS is ready. No environment variables are required for the demo form.

The consultation form currently redirects to a thank-you page and does not send email. Wire `app/actions.ts` to your provider when you are ready to receive leads.
