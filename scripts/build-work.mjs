import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const workDir = path.join(root, 'work');
fs.mkdirSync(workDir, { recursive: true });

const projects = [
  {
    slug: 'greatnext',
    name: 'GreatNext',
    cat: 'E-commerce · Clothing',
    tagline: 'A streetwear storefront built for the phone-first shopper.',
    title: 'A streetwear store that moves as fast as the drop.',
    description: 'GreatNext case study: a WooCommerce clothing store with product variants, cart and checkout, built by Zakariya Samuel.',
    scope: 'Storefront design & build',
    sector: 'Clothing retail',
    platform: 'WordPress · WooCommerce',
    role: 'Design & development',
    brief: [
      'GreatNext needed a storefront that matched the brand: bold, fast, and easy to shop from a phone. The product range changes with each drop, so the catalogue had to stay simple for the team to update.',
      'The job was not just a good-looking home page. It was a complete path from landing to cart to checkout, with product variants, stock levels and order emails working properly.',
    ],
    built: [
      'Brand-led homepage with a clear shop entry point',
      'Product catalogue with size and colour variants',
      'Cart, checkout and order confirmation flow',
      'Mobile-first product pages and navigation',
      'WooCommerce setup with payment and shipping rules',
    ],
    cover: { type: 'browser', url: 'shop.greatnxt.com', img: 'greatnext-desktop.webp', w: 1440, h: 731, alt: 'GreatNext homepage with a model in braided hair and a Shop Now button' },
    gallery: [
      { img: 'greatnext-phone-1.webp', alt: 'GreatNext mobile homepage' },
      { img: 'greatnext-phone-2.webp', alt: 'GreatNext mobile product collection' },
      { img: 'greatnext-phone-3.webp', alt: 'GreatNext mobile product options' },
      { img: 'greatnext-phone-4.webp', alt: 'GreatNext mobile cart and checkout' },
    ],
  },
  {
    slug: 'earnexxt',
    name: 'Earnexxt',
    cat: 'Fintech · Investment',
    tagline: 'An investment platform that had to feel safe before it looked clever.',
    title: 'Plans, maturity and returns, explained without the jargon.',
    description: 'Earnexxt case study: an investment platform with plan selection and account dashboard UI, built by Zakariya Samuel.',
    scope: 'Platform design & build',
    sector: 'Digital investment',
    platform: 'WordPress · Custom PHP',
    role: 'Design & development',
    brief: [
      'Earnexxt lets users invest dollars and earn returns at maturity. Investment products live or die on trust, so the interface had to be plain about what happens to the money and when.',
      'The site needed to explain the plans, show maturity timelines, and carry a user from interest to account without hiding the important details in fine print.',
    ],
    built: [
      'Plan overview with maturity timelines',
      'Investment package selection flow',
      'Account dashboard UI with balance and activity',
      'Clear calls to action for new and returning investors',
      'Responsive layouts tested on small screens',
    ],
    cover: { type: 'browser', url: 'earnexxt.com', img: 'earnexxt-desktop.webp', w: 1440, h: 738, alt: 'Earnexxt homepage with a dark digital asset hero and gold coin graphic' },
    gallery: [
      { img: 'earnexxt-phone-1.webp', alt: 'Earnexxt mobile homepage' },
      { img: 'earnexxt-phone-2.webp', alt: 'Earnexxt investment package overview' },
      { img: 'earnexxt-phone-3.webp', alt: 'Earnexxt account dashboard' },
      { img: 'earnexxt-phone-4.webp', alt: 'Earnexxt choose investment package screen' },
    ],
  },
  {
    slug: 'samxpress',
    name: 'Samxpress',
    cat: 'Marketplace · E-commerce',
    tagline: 'A marketplace where every vendor runs their own shop.',
    title: 'One checkout, many sellers, no extra admin work.',
    description: 'Samxpress case study: a multi-vendor WooCommerce marketplace with vendor product management and order tracking, built by Zakariya Samuel.',
    scope: 'Marketplace design & build',
    sector: 'Multi-vendor retail',
    platform: 'WordPress · WooCommerce',
    role: 'Design & development',
    brief: [
      'Samxpress is an online marketplace, not a single shop. Vendors needed to add products, manage stock and see their own orders without emailing the site owner every time.',
      'Shoppers needed the opposite: one place to browse, one cart, and a checkout that did not fall apart when the basket mixed items from different stores.',
    ],
    built: [
      'Vendor onboarding and product management',
      'Separate vendor dashboards and order views',
      'Multi-store cart and checkout flow',
      'Order tracking for buyers',
      'Responsive marketplace layout',
    ],
    cover: { type: 'phones', images: [
      { img: 'samxpress-home.webp', alt: 'Samxpress marketplace home screen with offers and categories' },
      { img: 'samxpress-desktop.webp', alt: 'Samxpress marketplace home screen with a full product grid' },
    ]},
    gallery: [
      { img: 'samxpress-phone-1.webp', alt: 'Samxpress vendor login screen' },
      { img: 'samxpress-phone-2.webp', alt: 'Samxpress product page with a handbag listing' },
    ],
  },
  {
    slug: 'ngsf',
    name: 'NGSF',
    cat: 'Sports · Publishing',
    tagline: 'A football federation site that keeps up with match day.',
    title: 'Fixtures, tables and top scorers the admin team can update.',
    description: 'NGSF case study: a football federation website with fixtures, league tables and top scorer tracking, built by Zakariya Samuel.',
    scope: 'Federation site & build',
    sector: 'Football · Two leagues',
    platform: 'WordPress · Custom PHP',
    role: 'Design & development',
    brief: [
      'NextGen Sport Federation runs two active leagues. The site had to publish fixtures, results, tables and top scorers week after week, without the admin team touching code.',
      'Supporters needed to find the next match quickly. Clubs needed a clear way to register. The federation needed both to work on a phone at the side of a pitch.',
    ],
    built: [
      'Fixtures and results by league and gameweek',
      'League tables that update from match data',
      'Top scorer tracking across the season',
      'Federation news and announcements',
      'Club registration and contact flow',
    ],
    cover: { type: 'browser', url: 'ngsf.greatnxt.com', img: 'ngsf-desktop.webp', w: 1440, h: 734, alt: 'NGSF homepage with a football pitch and a View Fixtures button' },
    gallery: [
      { img: 'ngsf-phone-1.webp', alt: 'NGSF mobile homepage' },
      { img: 'ngsf-phone-2.webp', alt: 'NGSF mobile fixtures screen' },
      { img: 'ngsf-phone-3.webp', alt: 'NGSF mobile league table' },
      { img: 'ngsf-phone-4.webp', alt: 'NGSF mobile league statistics' },
    ],
  },
  {
    slug: 'dunafort',
    name: 'Dunafort Hospital',
    cat: 'Healthcare · Hospital',
    tagline: 'A hospital site for patients, bookings and the EMR team.',
    title: 'Appointments, enquiries and medical records under one roof.',
    description: 'Dunafort Hospital case study: a hospital website with appointment booking, contact enquiries and a secure EMR staff portal, built by Zakariya Samuel.',
    scope: 'Hospital site, bookings & EMR portal',
    sector: 'Private healthcare',
    platform: 'WordPress · Elementor',
    role: 'Design & development',
    brief: [
      'Dunafort Specialist Hospital needed one place for patients to understand its services, book an appointment and reach the right department without calling around.',
      'Behind the public pages, staff needed a secure way into the hospital\'s electronic medical records system. The public site and the staff portal had to share a brand without sharing access.',
    ],
    built: [
      'Appointment booking with preferred date, time and reason',
      'Contact page with address, phone, email and enquiry form',
      'Secure staff login for the EMR portal',
      'Service, leadership and specialty pages',
      'Mobile-first layout for patients on their phones',
    ],
    cover: { type: 'browser', url: 'dunaforthospital.com', img: 'dunafort-desktop.webp', w: 1440, h: 900, alt: 'Dunafort Hospital homepage with a doctor holding a stethoscope' },
    gallery: [
      { img: 'dunafort-phone-home.webp', alt: 'Dunafort Hospital mobile homepage' },
      { img: 'dunafort-phone-appointment.webp', alt: 'Dunafort Hospital mobile appointment booking form' },
      { img: 'dunafort-phone-contact.webp', alt: 'Dunafort Hospital mobile contact page' },
      { img: 'dunafort-phone-login.webp', alt: 'Dunafort Hospital staff EMR login screen' },
    ],
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const cover = (p) => {
  if (p.cover.type === 'browser') {
    return `<figure class="browser">
        <div class="browser-bar"><span class="browser-url">${esc(p.cover.url)}</span></div>
        <img src="../assets/img/${p.cover.img}" width="${p.cover.w}" height="${p.cover.h}" alt="${esc(p.cover.alt)}" fetchpriority="high" decoding="async">
      </figure>`;
  }
  return `<div class="phones">
        ${p.cover.images.map((im) => `<figure class="phone"><img src="../assets/img/${im.img}" width="408" height="799" alt="${esc(im.alt)}" fetchpriority="high" decoding="async"></figure>`).join('')}
      </div>`;
};

const template = (p, next) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.name)} case study — Zakariya Samuel</title>
<meta name="description" content="${esc(p.description)}">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(p.name)} — WordPress case study by Zakariya Samuel">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:image" content="../assets/img/${p.cover.type === 'browser' ? p.cover.img : p.cover.images[0].img}">
<meta name="theme-color" content="#EEF1EC">
<meta name="color-scheme" content="light dark">
<script>
(function () {
  var pref = 'system';
  try { pref = localStorage.getItem('theme') || 'system'; } catch (e) {}
  if (pref !== 'light' && pref !== 'dark' && pref !== 'system') pref = 'system';
  var dark = pref === 'dark' || (pref === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  var root = document.documentElement;
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  root.setAttribute('data-theme-pref', pref);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? '#07161C' : '#EEF1EC');
})();
</script>
<link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="../assets/fonts/bricolage-grotesque-200-800-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="../assets/fonts.css">
<link rel="stylesheet" href="../assets/css/site.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="../index.html" aria-label="Zakariya Samuel, home">
      <span class="brand-mark" aria-hidden="true">ZS</span>
      <span>Zakariya Samuel</span>
    </a>
    <a class="back-link" href="../index.html#work">All work</a>
    <div class="theme-switch header-theme" role="group" aria-label="Colour theme">
      <button type="button" data-theme-set="light" aria-pressed="false" aria-label="Light theme" title="Light">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      </button>
      <button type="button" data-theme-set="dark" aria-pressed="false" aria-label="Dark theme" title="Dark">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"/></svg>
      </button>
      <button type="button" data-theme-set="system" aria-pressed="true" aria-label="Use system theme" title="System">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/></svg>
      </button>
    </div>
    <a class="btn btn--small btn--primary" href="../index.html#contact">Start a project</a>
  </div>
</header>

<main id="main" class="case-main">
  <div class="wrap">
    <div class="case-top">
      <a class="back-link" href="../index.html#work">&larr; Back to selected work</a>
    </div>

    <header class="case-intro">
      <div>
        <p class="work-cat">${esc(p.cat)}</p>
        <h1>${esc(p.name)}</h1>
      </div>
      <p class="case-tagline">${esc(p.tagline)}</p>
    </header>

    <dl class="case-meta">
      <div><dt>Scope</dt><dd>${esc(p.scope)}</dd></div>
      <div><dt>Sector</dt><dd>${esc(p.sector)}</dd></div>
      <div><dt>Platform</dt><dd>${esc(p.platform)}</dd></div>
      <div><dt>My role</dt><dd>${esc(p.role)}</dd></div>
    </dl>

    <div class="case-cover">
      ${cover(p)}
    </div>

    <div class="case-body">
      <div class="case-block">
        <h2>The brief</h2>
        ${p.brief.map((par) => `<p>${esc(par)}</p>`).join('')}
      </div>
      <div class="case-block">
        <h2>What I built</h2>
        <ul class="case-list">
          ${p.built.map((item) => `<li>${esc(item)}</li>`).join('')}
        </ul>
      </div>
    </div>
  </div>

  <section class="case-gallery" aria-label="Mobile screens">
    <div class="wrap">
      <p class="side-title">On a phone</p>
      <div class="phones">
        ${p.gallery.map((im) => `<figure class="phone"><img src="../assets/img/${im.img}" width="408" height="799" alt="${esc(im.alt)}" loading="lazy" decoding="async"></figure>`).join('')}
      </div>
    </div>
  </section>

  <div class="wrap">
    <a class="case-next" href="${next.slug}.html">
      <div>
        <p>Next project</p>
        <strong>${esc(next.name)}</strong>
      </div>
      <span class="btn btn--ghost">View case study</span>
    </a>
  </div>
</main>

<footer class="site-footer">
  <div class="wrap footer-inner">
    <p>&copy; <span id="year">2026</span> Zakariya Samuel</p>
    <p class="footer-mid">WordPress &amp; WooCommerce developer · Nigeria</p>
    <div class="footer-theme">
      <span class="footer-theme-label">Theme</span>
      <div class="theme-switch theme-switch--text" role="group" aria-label="Colour theme">
        <button type="button" data-theme-set="light" aria-pressed="false">Light</button>
        <button type="button" data-theme-set="dark" aria-pressed="false">Dark</button>
        <button type="button" data-theme-set="system" aria-pressed="true">System</button>
      </div>
    </div>
    <a href="../index.html">Home</a>
  </div>
</footer>

<script src="../assets/js/site.js" defer></script>
</body>
</html>
`;

projects.forEach((p, i) => {
  const next = projects[(i + 1) % projects.length];
  fs.writeFileSync(path.join(workDir, `${p.slug}.html`), template(p, next));
  console.log('wrote', p.slug);
});
