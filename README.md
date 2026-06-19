# Hussain Siddique — Portfolio

Personal portfolio of **Hussain Siddique**, a Full-Stack & DevOps Engineer.
I build software, then ship and run it in production — SaaS products, websites,
cloud infrastructure, and AI automation.

🔗 **Live:** [hussainsiddique.dev](https://hussainsiddique.dev)

## Tech stack

- **Framework:** Next.js (App Router) + React + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Deploy:** Vercel + custom domain (Cloudflare)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the project |

## Structure

```
src/
  app/            # App Router (layout, page, metadata, icon)
  components/     # Sections (Hero, About, Projects, Skills, DevOps, Services, Contact) + ui/
  data/           # projects.ts, skills.ts (typed content)
  lib/            # site.ts (identity / contact config)
```

To edit content, update the files in `src/data/` and `src/lib/site.ts` — the UI reads from them.

---

© Hussain Siddique. Built with Next.js.
