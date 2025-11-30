const CivUI = (() => {
  const gridId = 'civ-grid';
  const modalId = 'civ-modal';
  const detailId = 'civ-detail';

  function renderCivCard(civ) {
    return `
      <article class="card civ-card" data-name="${civ.name}" data-id="${civ.id}" data-region="${civ.region}" data-style="${civ.style}" data-difficulty="${civ.difficulty}">
        <div class="card-media placeholder" style="background-image:url('${civ.image}'); background-size:cover; background-position:center;"></div>
        <div class="card-body">
          <div class="tag">${civ.region.toUpperCase()}</div>
          <h3>${civ.name}</h3>
          <p>${civ.recommended}</p>
          <div class="quick-actions">
            ${civ.builds.map(b => `<span class="tag">${b}</span>`).join('')}
          </div>
          <button class="btn outline" data-open="${civ.id}">Ver detalle</button>
        </div>
      </article>
    `;
  }

  function renderCivs(list) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = list.map(renderCivCard).join('');
    grid.querySelectorAll('[data-open]').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.open)));
  }

  function openModal(id) {
    const civ = CIVILIZATIONS.find(c => c.id === id);
    const modal = document.getElementById(modalId);
    const detail = document.getElementById(detailId);
    if (!civ || !modal || !detail) return;
    detail.innerHTML = `
      <h3>${civ.name}</h3>
      <p>${civ.recommended}</p>
      <div class="grid">
        <div>
          <h4>Bonificaciones</h4>
          <ul>${civ.bonuses.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
        <div>
          <h4>Unidades únicas</h4>
          <p>${civ.uniqueUnits.join(', ')}</p>
          <h4>Tecnologías únicas</h4>
          <p>${civ.uniqueTechs.join(', ')}</p>
        </div>
      </div>
      <div class="tag">Builds: ${civ.builds.join(' | ')}</div>
    `;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  function bindFilters() {
    const region = document.getElementById('filter-region');
    const style = document.getElementById('filter-style');
    const difficulty = document.getElementById('filter-difficulty');
    const filterFunction = () => {
      const filtered = CIVILIZATIONS.filter(c =>
        (region.value === 'all' || c.region === region.value) &&
        (style.value === 'all' || c.style === style.value) &&
        (difficulty.value === 'all' || c.difficulty === difficulty.value)
      );
      renderCivs(filtered);
    };
    [region, style, difficulty].forEach(el => el && el.addEventListener('change', filterFunction));
  }

  function init() {
    renderCivs(CIVILIZATIONS);
    bindFilters();
    document.querySelectorAll('[data-close="civ-modal"]').forEach(btn => btn.addEventListener('click', closeModal));
    document.addEventListener('click', (e) => {
      if (e.target.id === modalId) closeModal();
    });
  }

  return { init, renderCivs };
})();
