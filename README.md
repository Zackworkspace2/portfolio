# Zakariya Samuel — portfolio

A hand-built portfolio for a WordPress and WooCommerce developer. Static HTML, CSS and a little JavaScript. No build step, no framework, no Canva.

## Preview

The site is being served locally at:

```
http://127.0.0.1:4199
```

If that server stops, run this from the project root:

```
python -m http.server 4199
```

Then open `http://127.0.0.1:4199`.

## What changed from the Canva site

- Custom domain structure, no Canva subdomain or badge.
- Real navigation, working links, and a contact form that opens a prefilled email.
- Mobile-first layout. No horizontal overflow. Tested at 390px.
- One type system: Bricolage Grotesque for display, Instrument Sans for body, IBM Plex Mono for small metadata.
- One palette built from the portrait and WordPress blue: paper, ink, petrol blue, lilac accent.
- Four case study pages with the real project screenshots, brief and build notes.
- Semantic headings, alt text on every image, visible keyboard focus, skip link.
- Light, dark and system themes. The choice is saved in `localStorage`; system mode follows the OS live.
- Meta title and description on every page, Open Graph image, Person schema.
- Local fonts. No Google Fonts request, no third-party JavaScript.

## Structure

```
index.html                 Home page
work/greatnext.html        Case studies
work/earnexxt.html
work/samxpress.html
work/ngsf.html
assets/css/site.css        All styles
assets/js/site.js          Mobile menu, active nav, contact form, theme switch
assets/fonts/              Self-hosted WOFF2 files
assets/img/                Optimised WebP screenshots
assets/og.png              Social preview image
assets/favicon.svg
scripts/build-work.mjs     Regenerates the four case study pages
scripts/qa.mjs             Checks links, images, headings, meta
```

## Editing content

Home page copy lives in `index.html`. Styles are in `assets/css/site.css`; the tokens at the top are the palette, type and spacing controls.

Case study content lives in `scripts/build-work.mjs` as a `projects` array. Edit it, then rebuild:

```
node scripts/build-work.mjs
```

## Theme

The site has three theme choices: Light, Dark and System. The switch is in the header on desktop, in the mobile menu, and in the footer on every page.

- The inline script in each `<head>` applies the saved theme before CSS loads, so there is no flash.
- The choice is saved under the `theme` key in `localStorage`.
- System mode listens to `prefers-color-scheme` and updates live when the OS changes.
- Colours live in the `:root` and `html[data-theme="dark"]` token blocks in `assets/css/site.css`.

## Checks

```
node scripts/qa.mjs
```

Verifies every local link and image resolves, each page has one `h1` and a meta description, and every image has alt text and dimensions.

## Deploy

The site is plain static files. Drag the folder into Netlify, or push it to GitHub and enable Pages.

- Netlify: `netlify.toml` is included for asset caching. Drop the folder at app.netlify.com/drop.
- GitHub Pages: push to a repo, enable Pages on the main branch.
- Any host: upload `index.html`, `work/`, `assets/`.

## Before launch

These are intentionally left for you because they need real information:

1. **Domain.** Buy `zakariyasamuel.com` or similar. Add a canonical link and absolute Open Graph URLs once the domain exists.
2. **Email.** Replace `zacksammy11@outlook.com` with `hello@yourdomain.com` in `index.html`, `work/*.html` and `assets/js/site.js`.
3. **Live project links.** `shop.greatnxt.com`, `earnexxt.com` and `ngsf.greatnxt.com` were offline when this was built. Add live links to the case pages once they resolve, or keep them offline and say so.
4. **Testimonials.** Two or three short client quotes with name, role and company will do more than any design tweak. Add them between the work and services sections.
5. **Social links.** Instagram, X and LinkedIn were icons only on the old site. Add the real profile URLs to the footer and contact section.
6. **Form backend.** The form currently opens the visitor's email app. If you want messages delivered without that step, connect Netlify Forms, Formspree or a small PHP endpoint.
7. **Analytics.** Add Plausible, Fathom or GA4 if you want to track enquiries.
8. **Availability.** The "Available for new projects" badge is a claim. Keep it accurate.

## Fonts

Bricolage Grotesque, Instrument Sans and IBM Plex Mono are served locally under the SIL Open Font License.
