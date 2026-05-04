# Vercel Deployment Guide

Follow these steps to deploy the PixelNiti website to production.

## 1. Push Code to GitHub
1. Create a new repository on GitHub named `pixelniti-website`.
2. Open your terminal in the project folder.
3. Run the following commands:
   ```bash
   git add .
   git commit -m "Initial production release"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pixelniti-website.git
   git push -u origin main
   ```

## 2. Connect GitHub to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** > **Project**.
3. Import the `pixelniti-website` repository from your GitHub account.
4. Leave all build settings as default (Framework Preset: Next.js).
5. Click **Deploy**. Vercel will build and deploy the site to a temporary `.vercel.app` domain.

## 3. Add Custom Domain (`pixelniti.com`)
1. In the Vercel dashboard, go to your deployed project.
2. Click on **Settings** > **Domains**.
3. Enter `pixelniti.com` and click **Add**.
4. Vercel will recommend adding `www.pixelniti.com` as well. Choose to redirect `www` to the apex domain (or vice versa, depending on preference. Apex `pixelniti.com` is generally preferred).

## 4. DNS Configuration
Log in to your domain registrar (GoDaddy, Namecheap, Hostinger, etc.) and update the DNS records as prompted by Vercel:

**For the Apex Domain (`pixelniti.com`):**
- **Type:** A
- **Name:** @
- **Value:** `76.76.21.21`

**For the Subdomain (`www.pixelniti.com`):**
- **Type:** CNAME
- **Name:** www
- **Value:** `cname.vercel-dns.com.`

*Alternatively, you can change your domain's Nameservers to Vercel's nameservers if Vercel suggests it.*

## 5. Verify Deployment and SSL
- Vercel automatically provisions an SSL certificate (HTTPS) once the DNS propagates.
- Visit `https://pixelniti.com` to verify the site is live and secure.

## 6. Performance Checking
- Once live, run a Lighthouse audit (in Chrome DevTools) or use PageSpeed Insights to verify performance, accessibility, and SEO scores. Target is 90+ across all metrics.
