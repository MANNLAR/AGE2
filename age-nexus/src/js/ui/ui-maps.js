const MapUI = (() => {
  function renderMapCard(map) {
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

    grid.innerHTML = MAPS.map(renderMapCard).join('');

    grid.querySelectorAll('[data-map]').forEach(btn => {
      btn.addEventListener('click', () => {
        const found = MAPS.find(m => String(m.id) === String(btn.dataset.map));
        if (!found) return;
        alert(`Builds sugeridos: ${found.builds.join(', ')}`);
      });
    });
  }

  return { render };
})();

