# Galib — Portfolio

Next.js 14 (App Router) + Tailwind CSS + React portfolio site.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Edit content
All project content lives in one place: `lib/projects.js`. Add a new object to the
array and a page is generated automatically at `/projects/<slug>`.

## Deploy for free (Vercel)
1. Push this folder to a new GitHub repo (e.g. `portfolio`).
2. Go to vercel.com → New Project → import that repo. No config needed —
   Vercel auto-detects Next.js.
3. Every future `git push` auto-deploys. Free Hobby tier, no card required,
   includes a free `yourproject.vercel.app` subdomain.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Plain React, no extra UI libraries
