/* ==========================================================================
   LORE ENGINE - Edición México (Voz Femenina Natural + Cierre Automático)
   ========================================================================== */

let currentUtterance = null;

function obtenerMejorVozMexicana() {
    const voces = window.speechSynthesis.getVoices();
    
    // 1. Prioridad: Voces Naturales/Neurales de México (Edge/Chrome)
    // Buscamos: "Dalia", "Jorge" (aunque sea hombre, a veces es la única MX), "Larissa"
    const vozMX = voces.find(v => v.lang.includes('es-MX') && (v.name.includes('Natural') || v.name.includes('Google')));
    if (vozMX) return vozMX;

    // 2. Segunda opción: Cualquier voz de México (es-MX)
    const cualquierMX = voces.find(v => v.lang.includes('es-MX'));
    if (cualquierMX) return cualquierMX;

    // 3. Tercera opción: Español latino (es-419)
    const latino = voces.find(v => v.lang.includes('es-419'));
    if (latino) return latino;

    // 4. Fallback: Cualquier voz en español
    return voces.find(v => v.lang.includes('es')) || voces[0];
}

window.initLore = function() {
    const grid = document.getElementById('loreGrid');
    const datos = window.LORE_DATA;

    if (!grid || !datos) {
        console.warn("Esperando datos de Lore...");
        setTimeout(window.initLore, 500);
        return;
    }

    grid.innerHTML = '';

    datos.forEach(civ => {
        const card = document.createElement('article');
        card.className = 'lore-card';
        
        card.innerHTML = `
            <span class="lore-era">${civ.era}</span>
            <h3>${civ.nombre}</h3>
            <p class="lore-desc">${civ.resumen}</p>
            
            <div class="lore-actions">
                <button class="lore-btn-read">Iniciar Crónica</button>
            </div>

            <div class="lore-reader">
                ${civ.capitulos.map((cap, i) => `
                    <div class="lore-chapter" data-index="${i}">
                        <div class="lore-chapter-header">${cap.titulo}</div>
                        <div class="lore-chapter-body">
                            <p>${cap.texto}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        const btn = card.querySelector('.lore-btn-read');
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (card.classList.contains('is-expanded')) {
                detenerTodo();
            } else {
                detenerTodo(); // Cierra cualquier otra tarjeta abierta
                iniciarLecturaConVoz(card, btn);
            }
        });

        grid.appendChild(card);
    });
};

function iniciarLecturaConVoz(card, btn) {
    card.classList.add('is-expanded');
    btn.textContent = "Detener Crónica";
    btn.style.background = "#ef4444";

    const chapters = card.querySelectorAll('.lore-chapter');
    let currentIndex = 0;

    function leerSiguiente() {
        chapters.forEach(c => c.classList.remove('active'));

        if (currentIndex < chapters.length) {
            const currentCap = chapters[currentIndex];
            currentCap.classList.add('active');
            currentCap.scrollIntoView({ behavior: 'smooth', block: 'center' });

            const texto = currentCap.querySelector('.lore-chapter-body p').textContent;
            currentUtterance = new SpeechSynthesisUtterance(texto);
            
            // Configuración de Identidad (México)
            currentUtterance.voice = obtenerMejorVozMexicana();
            currentUtterance.lang = 'es-MX'; // Forzamos acento de México
            
            // Ajustes para que suene humana
            currentUtterance.rate = 0.95;  // Un poquito más pausado
            currentUtterance.pitch = 1.0; // Tono equilibrado
            currentUtterance.volume = 1;

            currentUtterance.onend = () => {
                currentIndex++;
                // Pausa de 800ms para que no se sienta apresurada
                setTimeout(leerSiguiente, 800);
            };

            window.speechSynthesis.speak(currentUtterance);
        } else {
            btn.textContent = "Crónica Finalizada";
            btn.style.background = "#10b981";
            setTimeout(detenerTodo, 3000);
        }
    }

    leerSiguiente();
}

function detenerTodo() {
    window.speechSynthesis.cancel();
    
    document.querySelectorAll('.lore-card').forEach(card => {
        card.classList.remove('is-expanded');
        const btn = card.querySelector('.lore-btn-read');
        if (btn) {
            btn.textContent = "Iniciar Crónica";
            btn.style.background = ""; 
        }
        card.querySelectorAll('.lore-chapter').forEach(c => c.classList.remove('active'));
    });
}

// Escuchamos cuando las voces cambian (carga asíncrona en algunos navegadores)
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = obtenerMejorVozMexicana;
}

document.addEventListener('DOMContentLoaded', window.initLore);