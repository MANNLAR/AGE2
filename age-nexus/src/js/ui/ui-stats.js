const StatsUI = (() => {
  function renderWinrates(range) {
    const tbody = document.querySelector('#winrate-table tbody');
    if (!tbody) return;
    const rows = PLAYERS.winrates[range].map(row => `<tr><td>${row.civ}</td><td>${row.wr}%</td><td>${row.peak}%</td></tr>`).join('');
    tbody.innerHTML = rows;
  }

  function renderRanking(mode) {
    const tbody = document.querySelector('#players-table tbody');
    if (!tbody) return;
    const rows = PLAYERS.rankings[mode].map(p => `<tr><td>${p.name}</td><td>${p.elo}</td><td>${p.style}</td></tr>`).join('');
    tbody.innerHTML = rows;
  }

  function bindControls() {
    const metaRange = document.getElementById('meta-range');
    metaRange && metaRange.addEventListener('change', () => renderWinrates(metaRange.value));
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderRanking(btn.dataset.mode);
      });
    });
  }

  function init() {
    renderWinrates('medio');
    renderRanking('1v1');
    bindControls();
  }

  return { init, renderWinrates, renderRanking };
})();
