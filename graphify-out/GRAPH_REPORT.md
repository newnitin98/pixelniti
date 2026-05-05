# PixelNiti Website — Knowledge Graph Report

**Generated:** 2026-05-05  
**Nodes:** 165 | **Edges:** 172 | **Communities:** 35

---

## God Nodes (Highest-Connectivity Hubs)

These nodes are the most connected in the graph — touching many communities.

- **PixelNiti Website Repository** (`readme_pixelniti_website`) — degree 17
- **PixelNiti Entity (Project Brief)** (`project_brief_pixelniti_entity`) — degree 12
- **src/app (App Router Pages)** (`readme_src_app`) — degree 10
- **PixelNiti** (`readme_pixelniti`) — degree 8
- **Primary Navigation (Sitemap)** (`sitemap_primary_nav`) — degree 8
- **PixelNiti Core Entity (Knowledge Graph)** (`graphify_kg_core_entity`) — degree 7
- **base()** (`ui_socialicons_base`) — degree 6
- **cn()** (`lib_utils_cn`) — degree 6

## Communities

| # | Label | Size |
|---|-------|------|
| 0 | Content & Strategy Docs | 25 nodes |
| 1 | Brand Identity System | 23 nodes |
| 2 | SEO & Site Architecture | 16 nodes |
| 3 | Contact Form Logic | 13 nodes |
| 4 | Navigation & Pricing UI | 12 nodes |
| 5 | Next.js Config & SEO Rules | 11 nodes |
| 6 | Brand SVG Assets | 9 nodes |
| 7 | Home Page Sections | 8 nodes |
| 8 | Scaffold Default Assets | 6 nodes |
| 9 | Root Layout & Animations | 4 nodes |
| 10 | CI/CD & Vercel Deployment | 4 nodes |
| 11 | Process Page & Steps UI | 3 nodes |
| 12 | Robots.txt Config | 2 nodes |
| 13 | Sitemap Config | 2 nodes |
| 14 | About Page | 2 nodes |
| 15 | Contact Page | 2 nodes |
| 16 | Privacy Page | 2 nodes |
| 17 | Services Page | 2 nodes |
| 18 | Terms Page | 2 nodes |
| 19 | Brand & SEO Backlinks | 2 nodes |

## Surprising Connections

Cross-community edges that reveal non-obvious relationships.

- **docs/ (Graphify Layer Documentation)** → **PixelNiti Core Entity (Knowledge Graph)** (`references`)  
  *inferred connection - not explicitly stated in source; connects across different repos/directories; peripheral node `docs/ (Graphify Layer Documentation)` unexpectedly reaches hub `PixelNiti Core Entity (Knowledge Graph)`*
- **Brand Personality** → **PixelNiti** (`rationale_for`)  
  *connects across different repos/directories; peripheral node `Brand Personality` unexpectedly reaches hub `PixelNiti`*
- **Brand Color Palette** → **PixelNiti** (`rationale_for`)  
  *connects across different repos/directories; peripheral node `Brand Color Palette` unexpectedly reaches hub `PixelNiti`*
- **Brand Typography** → **PixelNiti** (`rationale_for`)  
  *connects across different repos/directories; peripheral node `Brand Typography` unexpectedly reaches hub `PixelNiti`*
- **Pixel (Brand Name Component)** → **PixelNiti** (`rationale_for`)  
  *connects across different repos/directories; peripheral node `Pixel (Brand Name Component)` unexpectedly reaches hub `PixelNiti`*

## Suggested Questions

- Why does `PixelNiti Website Repository` connect `Brand Identity System` to `Content & Strategy Docs`, `SEO & Site Architecture`, `CI/CD & Vercel Deployment`, `Next.js Config & SEO Rules`?  
  *High betweenness centrality (0.170) - this node is a cross-community bridge.*
- Why does `PixelNiti Core Entity (Knowledge Graph)` connect `Content & Strategy Docs` to `Brand Identity System`?  
  *High betweenness centrality (0.099) - this node is a cross-community bridge.*
- Why does `src/app (App Router Pages)` connect `SEO & Site Architecture` to `Brand Identity System`?  
  *High betweenness centrality (0.075) - this node is a cross-community bridge.*
- What connects `Vercel Staging (pixelniti.vercel.app)`, `public/brand (SVG Logo Variants)`, `src/data/site.ts (Central Config)` to the rest of the system?  
  *40 weakly-connected nodes found - possible documentation gaps or missing edges.*
- Should `Content & Strategy Docs` be split into smaller, more focused modules?  
  *Cohesion score 0.09 - nodes in this community are weakly interconnected.*
- Should `Brand Identity System` be split into smaller, more focused modules?  
  *Cohesion score 0.11 - nodes in this community are weakly interconnected.*

## Audit Trail

| Edge Type | Count |
|-----------|-------|
| EXTRACTED | 160 |
| INFERRED | 12 |

## Outputs

- `graphify-out/graph.html` — interactive visualization (open in browser)
- `graphify-out/graph.json` — GraphRAG-ready JSON
- `graphify-out/GRAPH_REPORT.md` — this file
