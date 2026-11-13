# How to use the kit in AEM

1. Install the AEM SDK locally (author on http://localhost:4502).
2. Build and deploy: `mvn clean install -PautoInstallPackage` (add the AEM deploy plugin config, or upload the built packages from `ui.apps/target` and `ui.content/target` in Package Manager at /crx/packmgr).
3. Create a site folder at `/content/campaign-kit`, then create a page using the **Campaign Page** template.
4. Drag components from the **Campaign Kit** group: Hero, Promo Cards, Countdown, Testimonials, FAQ, Lead Form, Footer.
5. Edit text, images and links in each component dialog.

## Interview talking points
- Why components + template: reuse, brand consistency, faster time-to-market
- Why CSS variables: change branding in one place
- Why data-track attributes: campaign analytics without extra code
