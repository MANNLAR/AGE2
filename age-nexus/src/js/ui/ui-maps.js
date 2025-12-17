const MapUI = (() => {
  const state = {
    type: 'all',              // all | abierto | cerrado
    competitiveOnly: false,   // true/false
    formats: new Set(),       // multi: 1v1..4v4
    economy: 'all',           // all | estandar | nomada
    water: 'all',             // all | sin | parcial | dominante
    duration: 'all'           // all | corta | media | larga
  };

  // Espera a que MAPS exista (por si maps.js carga después o es module)
  function waitForMaps(maxTries = 60, everyMs = 100) {
    return new Promise(resolve => {
      let tries = 0;
      const tick = () => {
        const ok = Array.isArray(window.MAPS) && window.MAPS.length >= 0;
        if (ok) return resolve(true);
        tries++;
        if (tries >= maxTries) return resolve(false);
        setTimeout(tick, everyMs);
      };
      tick();
    });
  }

  function matchesFilters(map) {
    const type = map?.type || 'abierto';
    const competitive = !!map?.competitive;
    const formats = Array.isArray(map?.formats) ? map.formats : [];
    const economy = map?.economy || 'all';
    const water = map?.water || 'all';
    const duration = map?.duration || 'all';

    if (state.type !== 'all' && type !== state.type) return false;
    if (state.competitiveOnly && !competitive) return false;

    // formatos (multi): si el mapa aún no trae formats, lo dejamos pasar
    if (state.formats.size > 0) {
      if (formats.length > 0) {
        const ok = formats.some(f => state.formats.has(f));
        if (!ok) return false;
      }
    }

    if (state.economy !== 'all' && economy !== state.economy) return false;
    if (state.water !== 'all' && water !== state.water) return false;
    if (state.duration !== 'all' && duration !== state.duration) return false;

    return true;
  }

  function renderMapCard(map) {
    const builds = Array.isArray(map?.builds) ? map.builds : [];
    const strong = map?.strong || { civ: '—', winrate: '—' };
    const weak = map?.weak || { civ: '—', winrate: '—' };
    const name = map?.name || '—';
    const id = map?.id || '';
    const desc = map?.description || '';
    const img = map?.image || '';

    // Fallback simple para imagen rota (sin depender de map-placeholder)
    // Si no tienes placeholder, deja vacío y no rompe nada.
    const safeImg = img;

    return `
      <article class="card geo-card" data-name="${name}" data-id="${id}">
        <div class="geo-media">
          <img
            src="${safeImg}"
            alt="${name}"
            onerror="this.onerror=null; this.style.opacity='0';"
          >
        </div>

        <div class="geo-body">
          <div class="map-meta">
            <span>${name}</span>
            <span>${builds.length} builds</span>
          </div>

          <p>${desc}</p>

          <div class="quick-actions">
            <span class="tag">Fuerte: ${strong.civ} (${strong.winrate}%)</span>
            <span class="tag">Débil: ${weak.civ} (${weak.winrate}%)</span>
          </div>

          <button class="btn ghost" data-map="${id}">Ver builds recomendados</button>
        </div>
      </article>
    `;
  }

  async function render() {
    const grid = document.getElementById('map-grid');
    if (!grid) return;

    const hasMaps = await waitForMaps();
    const maps = hasMaps ? window.MAPS : [];

    const list = maps.filter(matchesFilters);
    grid.innerHTML = list.map(renderMapCard).join('');

    grid.querySelectorAll('[data-map]').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.map));
    });
  }

  function openModal(id) {
    const maps = Array.isArray(window.MAPS) ? window.MAPS : [];
    const map = maps.find(m => String(m.id) === String(id));
    const modal = document.getElementById('map-modal');
    const detail = document.getElementById('map-detail');
    if (!map || !modal || !detail) return;

    const builds = Array.isArray(map.builds) ? map.builds : [];
    const strong = map.strong || { civ: '—', winrate: '—' };
    const weak = map.weak || { civ: '—', winrate: '—' };
    const formats = Array.isArray(map.formats) ? map.formats : [];

    detail.innerHTML = `
      <h3>${map.name || '—'}</h3>
      <p>${map.description || ''}</p>

      <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 14px;">
        <div>
          <h4>Builds recomendados</h4>
          <ul>${builds.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
        <div>
          <h4>Lectura rápida</h4>
          <p class="highlight">Tipo: ${(map.type || '—').toUpperCase()}</p>
          <p>Competitivo: <span class="highlight">${map.competitive ? 'Sí' : 'No'}</span></p>
          <p>Formato: ${formats.join(' · ') || '—'}</p>
          <p>Economía: ${map.economy || '—'}</p>
          <p>Agua: ${map.water || '—'}</p>
          <p>Duración: ${map.duration || '—'}</p>
          <div class="tag build-tags">Fuerte: ${strong.civ} (${strong.winrate}%) · Débil: ${weak.civ} (${weak.winrate}%)</div>
        </div>
      </div>
    `;

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    const modal = document.getElementById('map-modal');
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }

  function setActive(btn, groupSelector) {
    document.querySelectorAll(groupSelector).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  function bindMainFilters() {
    document.querySelectorAll('#map-filters-main [data-type]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.type = btn.dataset.type;
        setActive(btn, '#map-filters-main [data-type]');
        render();
      });
    });

    const comp = document.getElementById('map-competitive-only');
    comp?.addEventListener('change', () => {
      state.competitiveOnly = !!comp.checked;
      render();
    });

    const advBtn = document.getElementById('map-advanced-toggle');
    const advPanel = document.getElementById('map-filters-advanced');
    advBtn?.addEventListener('click', () => {
      const isHidden = advPanel.style.display === 'none';
      advPanel.style.display = isHidden ? 'block' : 'none';
    });
  }

  function bindAdvancedFilters() {
    const adv = document.getElementById('map-filters-advanced');
    if (!adv) return;

    adv.querySelectorAll('[data-format]').forEach(btn => {
      btn.addEventListener('click', () => {
        const f = btn.dataset.format;
        if (state.formats.has(f)) {
          state.formats.delete(f);
          btn.classList.remove('active');
        } else {
          state.formats.add(f);
          btn.classList.add('active');
        }
        render();
      });
    });

    adv.querySelectorAll('[data-economy]').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.dataset.economy;
        state.economy = (state.economy === v) ? 'all' : v;
        adv.querySelectorAll('[data-economy]').forEach(b => b.classList.remove('active'));
        if (state.economy !== 'all') btn.classList.add('active');
        render();
      });
    });

    adv.querySelectorAll('[data-water]').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.dataset.water;
        state.water = (state.water === v) ? 'all' : v;
        adv.querySelectorAll('[data-water]').forEach(b => b.classList.remove('active'));
        if (state.water !== 'all') btn.classList.add('active');
        render();
      });
    });

    adv.querySelectorAll('[data-duration]').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.dataset.duration;
        state.duration = (state.duration === v) ? 'all' : v;
        adv.querySelectorAll('[data-duration]').forEach(b => b.classList.remove('active'));
        if (state.duration !== 'all') btn.classList.add('active');
        render();
      });
    });
  }

  function bindModalClose() {
    document.querySelectorAll('[data-close="map-modal"]').forEach(btn => {
      btn.addEventListener('click', closeModal);
    });
    document.addEventListener('click', (e) => {
      if (e.target && e.target.id === 'map-modal') closeModal();
    });
  }

  async function init() {
    bindMainFilters();
    bindAdvancedFilters();
    bindModalClose();
    await render();
  }

  return { init, render };
})();

// Hacerlo accesible globalmente (importante si tu main llama MapUI.init())
window.MapUI = MapUI;
