/* ================== ESTADO GLOBAL ================== */
let currentSpeech = null;
let currentCard = null;

/* ================== INIT ================== */
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('loreGrid');
  if (!grid || !window.LORE_DATA) return;

  LORE_DATA.forEach(civ => {
    const card = createLoreCard(civ);
    grid.appendChild(card);
  });
});

/* ================== CARD ================== */
function createLoreCard(civ) {
  const card = document.createElement('article');
  card.className = 'lore-card';
  card.setAttribute('role', 'article');

  card.innerHTML = `
    <h3>${civ.nombre}</h3>
    <div class="lore-era">${civ.era}</div>
    <p class="lore-desc">${civ.resumen}</p>

    <div class="lore-actions">
      <button class="lore-btn lore-read">Leer</button>
      <button class="lore-btn secondary lore-toggle" aria-expanded="false">
        Capítulos
      </button>
    </div>

    <div class="lore-reader">
      ${civ.capitulos.map((c, i) => `
        <div class="lore-chapter" data-index="${i}">
          <h4>${c.titulo}</h4>
          <p>${c.texto}</p>
        </div>
      `).join('')}
    </div>
  `;

  const reader = card.querySelector('.lore-reader');
  const chapters = [...card.querySelectorAll('.lore-chapter')];
  const toggleBtn = card.querySelector('.lore-toggle');
  const readBtn = card.querySelector('.lore-read');

  toggleBtn.onclick = () => toggleReader(card, reader, toggleBtn);
  readBtn.onclick = () => startReading(card, reader, chapters);

  return card;
}

/* ================== UI ================== */
function toggleReader(card, reader, btn) {
  const open = reader.classList.toggle('active');
  btn.setAttribute('aria-expanded', open);
}

function closeCurrentCard() {
  if (!currentCard) return;

  const reader = currentCard.querySelector('.lore-reader');
  const btn = currentCard.querySelector('.lore-toggle');
  reader.classList.remove('active');
  btn.setAttribute('aria-expanded', false);

  currentCard
    .querySelectorAll('.lore-chapter')
    .forEach(c => c.classList.remove('active'));

  currentCard = null;
}

/* ================== LECTURA ================== */
function startReading(card, reader, chapters) {
  stopReading();

  currentCard = card;
  reader.classList.add('active');
  card.querySelector('.lore-toggle')
      .setAttribute('aria-expanded', true);

  readChapter(chapters, 0);
}

function readChapter(chapters, index) {
  if (index >= chapters.length) {
    stopReading();
    return;
  }

  chapters.forEach(c => c.classList.remove('active'));
  const chapter = chapters[index];
  chapter.classList.add('active');

  chapter.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });

  currentSpeech = new SpeechSynthesisUtterance(chapter.innerText);
  currentSpeech.lang = 'es-ES';
  currentSpeech.rate = 1;

  currentSpeech.onend = () => readChapter(chapters, index + 1);
  speechSynthesis.speak(currentSpeech);
}

function stopReading() {
  if (currentSpeech) {
    speechSynthesis.cancel();
    currentSpeech = null;
  }
  closeCurrentCard();
}

/* ================== SAFETY ================== */
window.addEventListener('beforeunload', () => {
  speechSynthesis.cancel();
});
