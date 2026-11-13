# AEM Campaign Landing Kit

Reusable AEM component library and page template for marketing campaign landing pages. Marketers assemble a new promo page in minutes, with no developer needed.

## Problem solved
Marketing needs many promo/ad pages with fewer resources. Building each from scratch is slow and inconsistent. This kit gives authors on-brand components and a template, cutting time-to-market.

## Components
Hero Banner, Promo Cards, Countdown Timer, Testimonials, FAQ Accordion, Lead Capture Form, Footer (each with an author dialog), plus a Campaign Page base component with SEO and Open Graph tags.

## Structure
- `ui.apps/` components (HTL + dialogs) and clientlib (CSS/JS)
- `ui.content/` editable template `campaign-page`
- `pom.xml`, `ui.apps/pom.xml`, `ui.content/pom.xml` Maven + FileVault packaging
- `docs/HOW-TO-USE.md` deployment and authoring steps
- `preview/index.html` open in a browser to see the design without AEM

## Run
1. Quick look: open `preview/index.html`.
2. In AEM (SDK/local): deploy `ui.apps` and `ui.content` (AEM Maven archetype or VS Code AEM Sync), create a page from "Campaign Page", add components.

## Tech
HTML5, CSS3 (variables, Grid, mobile-first), JavaScript, HTL, AEM Core Components, ClientLibs, Git.

## Roadmap
Experience Fragments for header/footer, Lighthouse 90+ report, accessibility audit.
