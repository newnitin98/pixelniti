# Technical Architecture

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (via PostCSS)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **UI Primitives:** Radix UI / shadcn/ui concepts (implemented cleanly without heavy overhead)
- **Deployment:** Vercel

## Folder Structure
```
pixelniti-website/
├── docs/                # Project documentation and Graphify layer
├── public/              # Static assets (images, icons, fonts)
├── src/                 # Main source code (if using src dir, else root app/)
│   ├── app/             # App Router pages and layouts
│   │   ├── (routes)/    # Route groups if needed
│   │   ├── layout.tsx   # Root layout (Navbar, Footer, SEO metadata)
│   │   └── page.tsx     # Homepage
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Base components (Buttons, Inputs, Cards)
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   └── sections/    # Page-specific sections (Hero, FAQ)
│   ├── lib/             # Utility functions (cn, formatters)
│   ├── data/            # Static data arrays (Services, Portfolio, FAQ)
│   └── types/           # TypeScript interfaces and types
├── tailwind.config.ts   # Tailwind configuration
└── next.config.mjs      # Next.js configuration
```

## Component Architecture
- **Server Components (Default):** Used for standard UI, layouts, and data rendering to maximize SEO and minimize JS payload.
- **Client Components (`"use client"`):** Used specifically for interactive elements (Framer Motion animations, interactive forms, mobile menu toggles).

## Routing Architecture
- `/` -> `app/page.tsx`
- `/services` -> `app/services/page.tsx`
- `/portfolio` -> `app/portfolio/page.tsx`
- `/process` -> `app/process/page.tsx`
- `/pricing` -> `app/pricing/page.tsx`
- `/about` -> `app/about/page.tsx`
- `/contact` -> `app/contact/page.tsx`
- `/privacy` -> `app/privacy/page.tsx`
- `/terms` -> `app/terms/page.tsx`

## Deployment Architecture
- **Hosting:** Vercel Edge Network
- **CI/CD:** Automatic deployments via GitHub integration. Push to `main` triggers production build.
- **Environment Variables:** Managed in Vercel Dashboard (e.g., future Form API keys).

## Future Extensibility
- **CMS Integration:** The `src/data/` structure allows easy swapping with a Headless CMS (Sanity, Contentful) in the future.
- **Blog Option:** The App Router is ready to support an `app/blog/[slug]` dynamic route.
- **Contact Form Backend:** The frontend form can easily be wired up to EmailJS, Resend, Formspree, or a custom Next.js Route Handler (`app/api/contact/route.ts`).
