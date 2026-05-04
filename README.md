# PixelNiti Website

This is the official repository for the [PixelNiti](https://pixelniti.com) digital strategy studio website. 
It is a production-ready Next.js application built with the App Router, TypeScript, Tailwind CSS, and Framer Motion.

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
- **`/public`**: Static assets like images, robots.txt, and sitemap.

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
