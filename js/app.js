/**
 * Autopoiesis y sistemas vivos (Maturana y Varela)
 * Controlador principal de la interfaz
 * Autor: Romero Herrera Julián Esteban - TGS 2026-2
 */

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Barra de progreso de lectura
  const progressBar = document.getElementById('scroll-progress');
  const updateProgress = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${pct}%`;
      progressBar.setAttribute('aria-valuenow', Math.round(pct));
    }
  };

  // 2. Menú móvil (hamburguesa < 1180px)
  const btnMobileMenu = document.getElementById('btn-mobile-menu');
  const navLinks = document.getElementById('nav-links');
  if (btnMobileMenu && navLinks) {
    const setMenu = (open) => {
      navLinks.classList.toggle('show', open);
      btnMobileMenu.setAttribute('aria-expanded', String(open));
      btnMobileMenu.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    };
    btnMobileMenu.addEventListener('click', () => setMenu(!navLinks.classList.contains('show')));
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  }

  // 3. Enlace activo según la sección visible
  const sections = document.querySelectorAll('main section[id]');
  const navItems = document.querySelectorAll('.nav-link');
  const updateActive = () => {
    let currentId = '';
    const pos = window.scrollY + 160;
    sections.forEach(sec => {
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) currentId = sec.id;
    });
    navItems.forEach(item => item.classList.toggle('active', item.getAttribute('href') === `#${currentId}`));
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateProgress(); updateActive(); ticking = false; });
  }, { passive: true });
  updateProgress();
  updateActive();

  // 4. Animaciones de aparición al hacer scroll
  const revealTargets = document.querySelectorAll(
    '.slide-word, .slide-card, .paper:not(.hero-card):not(.slide-card), .stack-word, .sub-heading'
  );
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach((el, i) => {
      // No ocultar elementos dentro de paneles de juego ocultos ni del modal
      if (el.closest('.game-panel:not(.active)') || el.closest('.modal-overlay') || el.closest('.quiz-container')) return;
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 3) * 80}ms`;
      io.observe(el);
    });
  }

  // 5. Accesibilidad: tamaño de fuente y lectura en voz alta
  let fontSize = 16;
  const setFont = (size) => {
    fontSize = Math.min(22, Math.max(13, size));
    document.documentElement.style.fontSize = `${fontSize}px`;
  };
  const btnInc = document.getElementById('btn-font-increase');
  const btnDec = document.getElementById('btn-font-decrease');
  if (btnInc) btnInc.addEventListener('click', () => setFont(fontSize + 1.5));
  if (btnDec) btnDec.addEventListener('click', () => setFont(fontSize - 1.5));

  const btnTTS = document.getElementById('btn-tts-toggle');
  if (btnTTS) {
    if (!('speechSynthesis' in window)) {
      btnTTS.disabled = true;
      btnTTS.title = 'Tu navegador no admite lectura en voz alta';
    } else {
      let speaking = false;
      const stop = () => {
        window.speechSynthesis.cancel();
        speaking = false;
        btnTTS.setAttribute('aria-pressed', 'false');
        btnTTS.title = 'Lectura en voz alta';
      };
      btnTTS.addEventListener('click', () => {
        if (speaking) { stop(); return; }
        // Lee la sección visible actualmente (o la portada)
        const current = [...sections].find(sec => {
          const r = sec.getBoundingClientRect();
          return r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.3;
        }) || document.getElementById('inicio');
        const clone = current.cloneNode(true);
        clone.querySelectorAll('[aria-hidden="true"], script, svg, iframe, canvas, button').forEach(n => n.remove());
        const text = clone.innerText.replace(/\s+/g, ' ').trim().slice(0, 3800) ||
          'Autopoiesis y sistemas vivos, de Maturana y Varela.';
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'es-ES';
        utter.rate = 1;
        utter.onend = stop;
        utter.onerror = stop;
        window.speechSynthesis.speak(utter);
        speaking = true;
        btnTTS.setAttribute('aria-pressed', 'true');
        btnTTS.title = 'Detener lectura';
      });
    }
  }

  // 6. Ejercicios con retroalimentación inmediata
  document.querySelectorAll('.exercise-card').forEach(card => {
    const options = card.querySelectorAll('.option-btn');
    const feedbackBox = card.querySelector('.exercise-feedback');
    options.forEach(btn => {
      btn.addEventListener('click', () => {
        options.forEach(b => b.classList.remove('correct', 'incorrect'));
        const ok = btn.getAttribute('data-correct') === 'true';
        const msg = btn.getAttribute('data-feedback');
        btn.classList.add(ok ? 'correct' : 'incorrect');
        if (feedbackBox) {
          feedbackBox.className = `exercise-feedback ${ok ? 'feedback-success' : 'feedback-error'} show`;
          feedbackBox.innerHTML = `<strong>${ok ? '¡Buen análisis sistémico!' : 'Revisa el concepto:'}</strong> ${msg}`;
        }
      });
    });
  });

  // 7. Modal de constancia: cierre
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });
  window.addEventListener('click', (e) => {
    if (e.target.classList && e.target.classList.contains('modal-overlay')) e.target.classList.remove('active');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
  });
});
