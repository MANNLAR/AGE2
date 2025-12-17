const StatsUI = (() => {
<<<<<<< Updated upstream
=======

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function renderTop3(range) {
    const container = document.getElementById('top3');
    if (!container) return;

    const top3 = shuffle(PLAYERS.winrates[range]).slice(0, 3);
    const medals = ['🥇', '🥈', '🥉'];

  container.innerHTML = top3.map((civ, i) => `
  <div class="meta-top3-card">
    <span class="meta-top3-medal">${medals[i]}</span>
    <h4 class="meta-top3-title">${civ.civ}</h4>
    <p class="meta-top3-stat">WR: <strong>${civ.wr}%</strong></p>
    <p class="meta-top3-stat">Pico: ${civ.peak}%</p>
  </div>
`).join('');

  }

>>>>>>> Stashed changes
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
