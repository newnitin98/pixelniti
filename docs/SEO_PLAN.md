# SEO Plan

## Global Metadata Strategy

### Canonical Domain
`https://pixelniti.com`

### Homepage
- **Title:** PixelNiti | Websites, Apps & AI Agents Built with Strategy
- **Description:** PixelNiti builds premium websites, business applications, AI agents, automation workflows, and SEO-ready digital experiences for growing businesses.
- **Keywords:** PixelNiti, website development, AI agent development, app development, business website, Vercel website development, SEO website design, automation services, website development for small businesses

## Page-Specific Metadata
*To be implemented in Next.js `generateMetadata`.*

- **/services**: PixelNiti Services | Web, App & AI Development
- **/portfolio**: Our Work | Business Websites & AI Applications
- **/process**: How We Work | The PixelNiti Strategy
- **/pricing**: Pricing & Engagement Models | PixelNiti
- **/about**: About PixelNiti | Digital Strategy Studio
- **/contact**: Contact Us | Start Your Project with PixelNiti

## Open Graph & Twitter Cards
- **og:title:** (Match page title)
- **og:description:** (Match page description)
- **og:url:** `https://pixelniti.com/[path]`
- **og:site_name:** PixelNiti
- **og:type:** website
- **twitter:card:** summary_large_image

## Technical SEO Features
- **Semantic HTML:** Strict use of `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Heading Hierarchy:** One `<h1>` per page. Sequential use of `<h2>`, `<h3>` without skipping levels.
- **Image Optimization:** All images must use Next.js `<Image>` component with explicit `alt` text.
- **Sitemap:** Generate `sitemap.xml` listing all static routes.
- **Robots.txt:** Standard `robots.txt` allowing indexing of all non-administrative pages.
- **Structured Data (JSON-LD):** Implemented on the layout level for `Organization` and `WebSite`, and on specific pages for `Service` and `FAQPage`.

## Footer Backlink Strategy (Client Sites)
Every site delivered will ideally contain:
`<a href="https://pixelniti.com" target="_blank" rel="noopener noreferrer">Website crafted by PixelNiti</a>`
*(Note: Consider whether `rel="nofollow"` is preferred depending on client SEO agreements, though `dofollow` is better for PixelNiti's authority if permitted).*
