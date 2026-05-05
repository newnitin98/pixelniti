# PixelNiti Website

Official repository for **[PixelNiti](https://pixelniti.com)** — a premium digital strategy and build studio.

**Live:** https://pixelniti.com  
**Staging:** https://pixelniti.vercel.app  
**Contact:** pixelnitiofficial@gmail.com  
**Brand assets:** `public/brand/` (8 SVG logo variants)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Production Build
```bash
npm run build
npm start
```

## 🏗 Project Structure

- **`/docs`**: The "Graphify Layer" - contains the complete strategic documentation, brand guidelines, content strategy, and SEO plan.
- **`/src/app`**: Core application pages and layouts.
- **`/src/components`**: Reusable UI components.
- **`/src/data`**: Static data arrays representing services and portfolio content.
- **`/public/brand`**: SVG logo variants (`pixelniti-full-dark-transparent.svg`, `pixelniti-square-dark.svg`, etc.)
- **`/src/data/site.ts`**: Central config — domain, email, social links, logo paths
- **`/public`**: Static assets. Social media links in `src/data/site.ts` are currently `#` placeholders — replace after PixelNiti social pages are created.

## 📦 Deployment to Vercel

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Initial launch"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pixelniti-website.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Import the repository and click **Deploy**. Vercel will automatically detect Next.js.
4. Add your custom domain `pixelniti.com` in the Project Settings > Domains.

## 🤖 Future AI Assistance
Check the `/docs/CLAUDE_HANDOFF_PROMPT.md` and `/docs/CODEX_HANDOFF_PROMPT.md` files for pre-written prompts to guide future AI agents in extending this codebase while maintaining strict architectural standards.
