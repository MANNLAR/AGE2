(async function() {
  const SECTION_FILES = [
    'section-home.html',
    'section-lore.html',
    'section-campaigns.html',
    'section-civilizations.html',
    'section-buildorders.html',
    'section-units-techs.html',
    'section-maps-modes.html',
    'section-stats.html',
    'section-community.html',
    'section-about.html'
  ];

  async function loadSections() {
    const container = document.getElementById('content');
    for (const file of SECTION_FILES) {
      const res = await fetch(`src/html/${file}`);
      const html = await res.text();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      container.appendChild(wrapper.firstElementChild);
    }
  }

  function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('open');
  }

  function bindNavigation() {
    document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('main-nav').classList.remove('open');
      });
    });
    document.addEventListener('scroll', highlightActiveLink);
  }

  function highlightActiveLink() {
    const fromTop = window.scrollY + 140;
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    document.querySelectorAll('section').forEach(section => {
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        const link = document.querySelector(`.nav-link[data-section="${section.id}"]`);
        link?.classList.add('active');
      }
    });
  }

  function initAccordion() {
    document.querySelectorAll('.accordion-item header').forEach(header => {
      header.addEventListener('click', () => header.parentElement.classList.toggle('active'));
    });
  }

  function renderUnits(filter = 'all') {
    const grid = document.getElementById('unit-grid');
    if (!grid) return;
    const filtered = UNITS.filter(u => filter === 'all' || u.class === filter);
    grid.innerHTML = filtered.map(u => `
      <article class="card">
        <div class="card-body">
          <h3>${u.name}</h3>
          <p>${u.strength}</p>
          <p class="highlight">${u.class.toUpperCase()} · ${u.civ}</p>
          <small>Counter: ${u.counter} | Tech: ${u.tech} | Coste: ${u.cost}</small>
        </div>
      </article>
    `).join('');
    renderCompare(filtered.slice(0, 3));
  }

  function renderCompare(units) {
    const container = document.getElementById('unit-compare');
    if (!container) return;
    container.innerHTML = units.map(u => `
      <div class="card">
        <div class="card-body">
          <h4>${u.name}</h4>
          <p>${u.strength}</p>
          <p class="highlight">Counter: ${u.counter}</p>
        </div>
      </div>
    `).join('');
  }

  function bindUnitFilters() {
    const select = document.getElementById('filter-class');
    select?.addEventListener('change', () => renderUnits(select.value));
  }

  function bindHeroButtons() {
    document.querySelectorAll('[data-scroll]').forEach(btn => {
      btn.addEventListener('click', () => document.getElementById(btn.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' }));
    });
  }

  function globalSearch() {
    const query = document.getElementById('global-search').value.toLowerCase();
    if (!query) return;
    const civ = CIVILIZATIONS.find(c => c.name.toLowerCase().includes(query));
    const build = BUILD_ORDERS.find(b => b.name.toLowerCase().includes(query));
    const map = MAPS.find(m => m.name.toLowerCase().includes(query));
    if (civ) { scrollToAndHighlight('civs', `[data-id="${civ.id}"]`); return; }
    if (build) { scrollToAndHighlight('builds', `[data-name="${build.name}"]`); return; }
    if (map) { scrollToAndHighlight('mapas', `[data-id="${map.id}"]`); return; }
  }

  function scrollToAndHighlight(sectionId, selector) {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const el = document.querySelector(selector);
      if (!el) return;
      el.classList.add('highlighted');
      setTimeout(() => el.classList.remove('highlighted'), 2000);
    }, 400);
  }

  function bindSearch() {
    document.getElementById('search-btn').addEventListener('click', globalSearch);
    document.getElementById('global-search').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); globalSearch(); }
    });
  }

  async function init() {
    await loadSections();
    bindNavigation();
    initAccordion();
    CivUI.init();
    BuildUI.init();
    renderUnits();
    bindUnitFilters();
    MapUI.render();
    StatsUI.init();
    CommunityUI.init();
    bindHeroButtons();
    bindSearch();
    highlightActiveLink();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
