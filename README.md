<div align="center">

<img src="public/monika_logo.png" alt="Mónika Családállítás" width="120" />

# Mónika Családállítás

**Marketing site & booking funnel for Nagy Mónika, family constellation facilitator (Gyál, Hungary).**

### 🌿 [www.monikacsaladallitas.hu](https://www.monikacsaladallitas.hu/) 🌿

[![Next.js](https://img.shields.io/badge/Next.js-15.3-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-deployed-000000?logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## About the project

A single-page, Hungarian-language site that introduces Mónika's family and systemic
constellation practice and turns visitors into applicants. Everything lives on one
scroll: who she is, what constellation work does, the next group event, the application
form, testimonials, and contact details.

Submitting the form sends two emails through a Next.js Route Handler — a confirmation
to the applicant and a notification to Mónika — so there is no database, CMS or
third-party form service to maintain.

## Highlights

- 🧭 **One-page funnel** — anchor navigation (`#bemutatkozas`, `#csaladallitas`, `#jelentkezes`, `#velemenyek`, `#kapcsolat`) with smooth scrolling from both the desktop nav and the mobile sheet menu.
- ✉️ **Application form that just works** — `POST /apply` sends the applicant a confirmation and Mónika a notification via Nodemailer + Gmail, with `sonner` toasts for feedback.
- 📅 **Group event block** — highlights the upcoming session with dates, location and pricing (20.000 Ft with a topic, 15.000 Ft as a helper), and deep-links into the form with the right service preselected.
- 💬 **Testimonial carousel** — autoplaying Embla carousel of real client quotes.
- 🎬 **Motion throughout** — scroll-triggered `motion` animations on every section.
- 📱 **TikTok embed** — pulls in Mónika's latest videos from [@monimatekmagyar](https://www.tiktok.com/@monimatekmagyar).
- 🔍 **SEO & structured data** — Hungarian metadata, Open Graph tags, `Person` + `LocalBusiness` JSON-LD, `sitemap.xml` and `robots.txt`.
- 📊 **Analytics** — Vercel Analytics and Speed Insights wired into the root layout.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router, Turbopack dev) |
| Language | TypeScript 5, React 19 |
| Styling | Tailwind CSS 4, `tw-animate-css`, Typography plugin |
| Components | shadcn/ui on Radix primitives, `lucide-react` icons |
| Motion | `motion` (Framer Motion) |
| Carousel | Embla + autoplay |
| Email | Nodemailer over Gmail SMTP |
| Hosting | Vercel |

## Getting started

```bash
git clone https://github.com/matet2001/monika-portfolio.git
cd monika-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create a `.env.local` in the project root — the application form needs these:

```bash
GMAIL_USER=your.address@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
```

> `GMAIL_APP_PASSWORD` is a [Google App Password](https://support.google.com/accounts/answer/185833),
> not the account password. Without these two values the form returns a 500 and no mail is sent.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (note: lint errors are ignored during builds) |

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Fonts, metadata, JSON-LD, header/footer, analytics
│   ├── page.tsx            # Composes the one-page site from sections
│   ├── globals.css         # Tailwind theme tokens & gradients
│   └── apply/route.ts      # POST /apply — sends the two emails
├── components/
│   ├── Header.tsx          # Sticky nav + mobile sheet menu
│   ├── Footer.tsx
│   ├── sections/           # about, constellation, tiktok, group-event,
│   │                       # apply, testimonials, contact
│   └── ui/                 # shadcn/ui primitives
└── lib/utils.ts            # cn() + scrollToView()
public/                     # Photos, logos, favicons, sitemap.xml, robots.txt
```

Adding a section means dropping a component into `src/components/sections/` and
rendering it from [`src/app/page.tsx`](src/app/page.tsx); give it an `id` if it should
appear in the header navigation.

## Deployment

Deployed on Vercel from `main`. Set `GMAIL_USER` and `GMAIL_APP_PASSWORD` in the Vercel
project's environment variables, otherwise the production form will fail silently for
the visitor and log a 500 on the server.

---

<div align="center">
<sub>Built with ❤️ for Nagy Mónika · <a href="https://www.monikacsaladallitas.hu/">monikacsaladallitas.hu</a></sub>
</div>
