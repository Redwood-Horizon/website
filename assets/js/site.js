(() => {
  const config = window.REDWOOD_HORIZON_CONFIG || {};

  const header = `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header" data-header>
      <div class="shell nav-shell">
        <a class="brand" href="index.html" aria-label="Redwood Horizon home">
          <img src="assets/img/redwood-mark.svg" alt="" width="38" height="48">
          <span>Redwood<br>Horizon</span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
          <span class="sr-only">Open menu</span><span></span><span></span><span></span>
        </button>
        <nav id="primary-nav" class="primary-nav" aria-label="Primary navigation">
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="partners.html">For Partners</a>
          <a href="faq.html">Common Questions</a>
          <a href="contact.html">Contact</a>
          <a class="button button-small" href="get-support.html">Get Support</a>
        </nav>
      </div>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div class="footer-brand">
          <a class="brand brand-footer" href="index.html">
            <img src="assets/img/redwood-mark-light.svg" alt="" width="44" height="55">
            <span>Redwood<br>Horizon</span>
          </a>
          <p>Grounded in community.<br>Built around people.</p>
        </div>
        <div><h2>Explore</h2><a href="about.html">About</a><a href="services.html">Services</a><a href="partners.html">For Partners</a><a href="faq.html">Common Questions</a></div>
        <div><h2>Connect</h2><a href="get-support.html">Get Support</a><a href="contact.html">Contact</a><a href="careers.html">Careers</a></div>
        <div><h2>Serving</h2><p>Humboldt County<br>Mendocino County<br>Trinity County<br>Del Norte County</p></div>
        <div><h2>Contact</h2><p><a href="contact.html" data-contact-email>Contact us</a></p><p>California nonprofit public benefit corporation.</p></div>
      </div>
      <div class="shell footer-bottom"><span>© 2026 Redwood Horizon. All rights reserved.</span><span><a href="privacy.html">Privacy</a> · <a href="accessibility.html">Accessibility</a></span></div>
    </footer>`;

  const headerSlot = document.querySelector('[data-site-header]');
  const footerSlot = document.querySelector('[data-site-footer]');
  if (headerSlot) headerSlot.outerHTML = header;
  if (footerSlot) footerSlot.outerHTML = footer;

  document.querySelectorAll('[data-contact-email]').forEach(el => {
    if (config.contactEmail) {
      el.textContent = config.contactEmail;
      el.href = `mailto:${config.contactEmail}`;
      document.querySelectorAll('[data-contact-label]').forEach(label => { label.textContent = 'Email us'; });
    }
  });
  document.querySelectorAll('[data-media-email]').forEach(el => {
    if (config.mediaEmail) {
      el.textContent = config.mediaEmail;
      el.href = `mailto:${config.mediaEmail}`;
    }
  });

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.primary-nav a').forEach(a => {
    if (a.getAttribute('href') === current) a.setAttribute('aria-current','page');
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }

  document.querySelectorAll('.accordion button').forEach(button => {
    button.addEventListener('click', () => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });

  document.querySelectorAll('form[data-contact-form]').forEach(form => {
    form.addEventListener('submit', async event => {
      const endpoint = config.formEndpoint;
      if (!endpoint) {
        event.preventDefault();
        const status = form.querySelector('[data-form-status]');
        if (status) {
          status.hidden = false;
          status.className = 'form-status form-status-info';
          status.textContent = 'This preview form is ready for your existing form endpoint. Add it in assets/js/config.js before publishing.';
        }
        return;
      }
      event.preventDefault();
      const status = form.querySelector('[data-form-status]');
      const button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      if (status) { status.hidden = false; status.className='form-status'; status.textContent='Sending…'; }
      try {
        const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error('Request failed');
        form.reset();
        if (status) { status.className='form-status form-status-success'; status.textContent='Message sent. Someone from our team will follow up within two business days.'; }
      } catch (error) {
        if (status) { status.className='form-status form-status-error'; status.textContent='Something went wrong. Please try again or contact us by email.'; }
      } finally { button.disabled = false; }
    });
  });
})();
