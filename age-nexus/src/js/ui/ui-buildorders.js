const BuildUI = (() => {
  const listId = 'build-list';

  function renderBuild(build) {
    const steps = build.steps.map(step => `<li>${step}</li>`).join('');
    return `
      <article class="card build" data-name="${build.name}" data-civ="${build.civ}">
        <div class="card-body">
          <div class="tag">${build.age.toUpperCase()}</div>
          <h3>${build.name}</h3>
          <p>${build.focus}</p>
          <p class="highlight">${build.civ} · ${build.mode.toUpperCase()} · ${build.style}</p>
          <ul>${steps}</ul>
        </div>
      </article>
    `;
  }

  function render(list) {
    const container = document.getElementById(listId);
    if (!container) return;
    container.innerHTML = list.map(renderBuild).join('');
  }

  function applyFilters() {
    const age = document.getElementById('filter-age').value;
    const mode = document.getElementById('filter-mode').value;
    const style = document.getElementById('filter-build-style').value;
    const civ = document.getElementById('filter-build-civ').value;
    const filtered = BUILD_ORDERS.filter(b =>
      (age === 'all' || b.age === age) &&
      (mode === 'all' || b.mode === mode) &&
      (style === 'all' || b.style === style) &&
      (civ === 'all' || b.civ === civ)
    );
    render(filtered);
  }

  function populateCivFilter() {
    const select = document.getElementById('filter-build-civ');
    if (!select) return;
    const civs = Array.from(new Set(BUILD_ORDERS.map(b => b.civ)));
    select.innerHTML = '<option value="all">Todas las civs</option>' + civs.map(c => `<option value="${c}">${c}</option>`).join('');
  }

  function init() {
    populateCivFilter();
    render(BUILD_ORDERS);
    ['filter-age','filter-mode','filter-build-style','filter-build-civ'].forEach(id => {
      const el = document.getElementById(id);
      el && el.addEventListener('change', applyFilters);
    });
  }

  return { init, render };
})();
