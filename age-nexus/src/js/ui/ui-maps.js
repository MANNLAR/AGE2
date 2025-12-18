const MapUI = (() => {
  const state = {
    type: 'all',              // all | abierto | cerrado
    competitiveOnly: false,   // true/false

    // multi-select
    formats: new Set(),       // 1v1..4v4
    economy: new Set(),       // estandar | nomada
    water: new Set(),         // sin | parcial | dominante
    duration: new Set()       // corta | media | larga
  };

  function normalizeMap(map) {
    return {
      id: map?.id ?? '',
      name: map?.name ?? '—',
      type: map?.type ?? 'abierto',
      competitive: !!map?.competitive,
      formats: Array.isArray(map?.formats) ? map.formats : [],
      economy: map?.economy ?? 'estandar',
      water: map?.water ?? 'sin',
      duration: map?.duration ?? 'media',
      description: map?.description ?? '',
      image: map?.image ?? '',
      strong: map?.strong ?? { civ: '—', winrate: '—' },
      weak: map?.weak ?? { civ: '—', winrate: '—' },
      builds: Array.isArray(map?.builds) ? map.builds : []
    };
  }

  function matchesFilters(rawMap) {
    const map = normalizeMap(rawMap);

    // tipo (single)
    if (state.type !== 'all' && map.type !== state.type) return false;

    // competitivo (single toggle)
    if (state.competitiveOnly && !map.competitive) return false;

    // formatos (multi)
    if (state.formats.size > 0) {
      const ok = map.formats.some(f => state.formats.has(f));
      if (!ok) return false;
    }

    // economía (multi)
    if (state.economy.size > 0 && !state.economy.has(map.economy)) return false;

    // agua (multi)
    if (state.water.size > 0 && !state.water.has(map.water)) return false;

    // duración (multi)
    if (state.duration.size > 0 && !state.duration.has(map.duration)) return false;

    return true;
  }

  function renderMapCard(rawMap) {
    const map = normalizeMap(rawMap);

    return `
      <article class="card geo-card" data-name="${map.name}" data-id="${map.id}">
        <div class="geo-media">
          <img src="${map.image}" alt="${map.name}">
        </div>

        <div class="geo-body">
          <div class="map-meta">
            <span>${map.name}</span>
            <span>${map.builds.length} builds</span>
          </div>

          <p>${map.description}</p>

          <div class="quick-actions">
            <span class="tag">Fuerte: ${map.strong.civ} (${map.strong.winrate}%)</span>
            <span class="tag">Débil: ${map.weak.civ} (${map.weak.winrate}%)</span>
          </div>

          <button class="btn ghost" data-map="${map.id}">Ver builds recomendados</button>
        </div>
      </article>
    `;
  }

  function render() {
    const grid = document.getElementById('map-grid');
    if (!grid) return;

    const list = (window.MAPS || []).filter(matchesFilters);
    grid.innerHTML = list.map(renderMapCard).join('');

    grid.querySelectorAll('[data-map]').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.map));
    });
  }

  function openModal(id) {
    const map = (window.MAPS || []).find(m => String(m.id) === String(id));
    const modal = document.getElementById('map-modal');
    const detail = document.getElementById('map-detail');
    if (!map || !modal || !detail) return;

    const m = normalizeMap(map);

    detail.innerHTML = `
      <h3>${m.name}</h3>
      <p>${m.description}</p>

      <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 14px;">
        <div>
          <h4>Builds recomendados</h4>
          <ul>${m.builds.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
        <div>
          <h4>Lectura rápida</h4>
          <p class="highlight">Tipo: ${m.type.toUpperCase()}</p>
          <p>Competitivo: <span class="highlight">${m.competitive ? 'Sí' : 'No'}</span></p>
          <p>Formato: ${m.formats.length ? m.formats.join(' · ') : '—'}</p>
          <p>Economía: ${m.economy}</p>
          <p>Agua: ${m.water}</p>
          <p>Duración: ${m.duration}</p>
          <div class="tag build-tags">
            Fuerte: ${m.strong.civ} (${m.strong.winrate}%) · Débil: ${m.weak.civ} (${m.weak.winrate}%)
          </div>
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

  function toggleSetFilter(set, value, btn) {
    if (set.has(value)) {
      set.delete(value);
      btn.classList.remove('active');
    } else {
      set.add(value);
      btn.classList.add('active');
    }
    render();
  }

  function resetFiltersUI() {
    // type -> all
    state.type = 'all';
    document.querySelectorAll('#map-filters-main [data-type]').forEach(b => b.classList.remove('active'));
    document.querySelector('#map-filters-main [data-type="all"]')?.classList.add('active');

    // competitivo off
    state.competitiveOnly = false;
    const comp = document.getElementById('map-competitive-only');
    if (comp) comp.checked = false;

    // sets empty
    state.formats.clear();
    state.economy.clear();
    state.water.clear();
    state.duration.clear();

    // limpiar activos en avanzados (todos los botones)
    const adv = document.getElementById('map-filters-advanced');
    adv?.querySelectorAll('.tab-btn.active').forEach(b => b.classList.remove('active'));

    render();
  }

  function bindMainFilters() {
    // tipo (single)
    document.querySelectorAll('#map-filters-main [data-type]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.type = btn.dataset.type;
        setActive(btn, '#map-filters-main [data-type]');
        render();
      });
    });

    // competitivo
    const comp = document.getElementById('map-competitive-only');
    comp?.addEventListener('change', () => {
      state.competitiveOnly = !!comp.checked;
      render();
    });

    // toggle avanzados
    const advBtn = document.getElementById('map-advanced-toggle');
    const advPanel = document.getElementById('map-filters-advanced');
    advBtn?.addEventListener('click', () => {
      const isHidden = advPanel.style.display === 'none';
      advPanel.style.display = isHidden ? 'block' : 'none';
    });

    // limpiar
    document.getElementById('map-clear-filters')?.addEventListener('click', resetFiltersUI);
  }

  function bindAdvancedFilters() {
    const adv = document.getElementById('map-filters-advanced');
    if (!adv) return;

    // formatos (multi)
    adv.querySelectorAll('[data-format]').forEach(btn => {
      btn.addEventListener('click', () => toggleSetFilter(state.formats, btn.dataset.format, btn));
    });

    // economy (multi)
    adv.querySelectorAll('[data-economy]').forEach(btn => {
      btn.addEventListener('click', () => toggleSetFilter(state.economy, btn.dataset.economy, btn));
    });

    // water (multi)
    adv.querySelectorAll('[data-water]').forEach(btn => {
      btn.addEventListener('click', () => toggleSetFilter(state.water, btn.dataset.water, btn));
    });

    // duration (multi)
    adv.querySelectorAll('[data-duration]').forEach(btn => {
      btn.addEventListener('click', () => toggleSetFilter(state.duration, btn.dataset.duration, btn));
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

  function init() {
    bindMainFilters();
    bindAdvancedFilters();
    bindModalClose();
    render();
  }

  return { init, render };
})();
