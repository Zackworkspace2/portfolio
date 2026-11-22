(() => {
  const header = document.getElementById('site-header');
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const body = document.body;

  const root = document.documentElement;
  const themeButtons = [...document.querySelectorAll('[data-theme-set]')];
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  const themes = ['light', 'dark', 'system'];

  const applyTheme = (pref, persist = true) => {
    const choice = themes.includes(pref) ? pref : 'system';
    const resolved = choice === 'system' ? (systemDark.matches ? 'dark' : 'light') : choice;

    root.setAttribute('data-theme', resolved);
    root.setAttribute('data-theme-pref', choice);

    if (themeMeta) themeMeta.setAttribute('content', resolved === 'dark' ? '#07161C' : '#EEF1EC');

    themeButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.themeSet === choice));
    });

    if (persist) {
      try { localStorage.setItem('theme', choice); } catch (e) { /* storage blocked */ }
    }
  };

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => applyTheme(button.dataset.themeSet));
  });

  systemDark.addEventListener('change', () => {
    if ((root.getAttribute('data-theme-pref') || 'system') === 'system') applyTheme('system', false);
  });

  window.addEventListener('storage', (event) => {
    if (event.key === 'theme') applyTheme(event.newValue || 'system', false);
  });

  applyTheme(root.getAttribute('data-theme-pref') || 'system', false);

  const closeNav = (restoreFocus = false) => {
    if (!toggle || !mobileNav) return;
    const hadFocus = mobileNav.contains(document.activeElement);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('.sr-only').textContent = 'Open menu';
    mobileNav.hidden = true;
    body.classList.remove('nav-open');
    if (restoreFocus || hadFocus) toggle.focus();
  };

  const openNav = () => {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.querySelector('.sr-only').textContent = 'Close menu';
    mobileNav.hidden = false;
    body.classList.add('nav-open');
    const first = mobileNav.querySelector('a');
    if (first) first.focus();
  };

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    open ? closeNav(true) : openNav();
  });

  mobileNav?.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeNav();
  });

  document.addEventListener('keydown', (e) => {
    if (!toggle || toggle.getAttribute('aria-expanded') !== 'true') return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeNav(true);
      return;
    }

    if (e.key !== 'Tab') return;
    const items = [toggle, ...mobileNav.querySelectorAll('a')];
    const first = items[0];
    const last = items[items.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeNav();
  });

  if (header) {
    const setHeaderState = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    setHeaderState();
    window.addEventListener('scroll', setHeaderState, { passive: true });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach((section) => observer.observe(section));
  }

  const form = document.getElementById('contact-form');
  if (form) {
    const status = document.createElement('p');
    status.className = 'form-note';
    status.setAttribute('role', 'status');
    status.hidden = true;
    form.appendChild(status);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const project = String(data.get('project') || '').trim();
      const message = String(data.get('message') || '').trim();

      const subject = `Project enquiry: ${project}`;
      const bodyText = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project: ${project}`,
        '',
        message,
      ].join('\n');

      const href = `mailto:zacksammy11@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      window.location.href = href;

      status.textContent = 'Opening your email app. If nothing happens, email zacksammy11@outlook.com directly.';
      status.hidden = false;
    });
  }
})();
