/**
 * OVA: AUTOPOIESIS Y SISTEMAS VIVOS
 * Controlador Principal de la Aplicación Web
 * Autor: Romero Herrera Julian Esteban - Universidad Simón Bolívar
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Barra de Progreso de Lectura
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;
  });

  // 2. Alternador de Tema Oscuro / Claro
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('ova-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('ova-theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark' ? '🌙' : '☀️';
    themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro');
  }

  // 3. Menú Móvil
  const btnMobileMenu = document.getElementById('btn-mobile-menu');
  const navLinks = document.getElementById('nav-links');
  if (btnMobileMenu && navLinks) {
    btnMobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('show'));
    });
  }

  // 4. Navegación Activa según Scroll (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentId}`) {
        item.classList.add('active');
      }
    });
  });

  // 5. Herramientas de Accesibilidad (Tamaño de fuente & Síntesis de voz)
  let currentFontSize = 16;
  const btnFontIncrease = document.getElementById('btn-font-increase');
  const btnFontDecrease = document.getElementById('btn-font-decrease');
  const btnTextToSpeech = document.getElementById('btn-tts-toggle');

  if (btnFontIncrease) {
    btnFontIncrease.addEventListener('click', () => {
      if (currentFontSize < 22) {
        currentFontSize += 1.5;
        document.documentElement.style.fontSize = `${currentFontSize}px`;
      }
    });
  }

  if (btnFontDecrease) {
    btnFontDecrease.addEventListener('click', () => {
      if (currentFontSize > 13) {
        currentFontSize -= 1.5;
        document.documentElement.style.fontSize = `${currentFontSize}px`;
      }
    });
  }

  // Lectura en voz alta mediante Web Speech API
  let isSpeaking = false;
  if (btnTextToSpeech && 'speechSynthesis' in window) {
    btnTextToSpeech.addEventListener('click', () => {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        btnTextToSpeech.innerHTML = '🗣️ Voz: OFF';
      } else {
        const textToRead = "Bienvenido al Objeto Virtual de Aprendizaje sobre Autopoiesis y sistemas vivos, basado en las investigaciones de Humberto Maturana y Francisco Varela para la Universidad Simón Bolívar. Esta OVA explora la clausura operacional, el acoplamiento estructural y su aplicación en la teoría general de sistemas.";
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'es-ES';
        utterance.rate = 1.0;
        utterance.onend = () => {
          isSpeaking = false;
          btnTextToSpeech.innerHTML = '🗣️ Voz: OFF';
        };
        window.speechSynthesis.speak(utterance);
        isSpeaking = true;
        btnTextToSpeech.innerHTML = '⏹️ Detener Voz';
      }
    });
  }

  // 6. Ejercicios Planteados con Retroalimentación Inmediata (Sección 4)
  const exerciseContainers = document.querySelectorAll('.exercise-card');
  exerciseContainers.forEach(card => {
    const options = card.querySelectorAll('.option-btn');
    const feedbackBox = card.querySelector('.exercise-feedback');

    options.forEach(btn => {
      btn.addEventListener('click', () => {
        // Limpiar selecciones previas
        options.forEach(b => b.classList.remove('correct', 'incorrect'));
        const isCorrect = btn.getAttribute('data-correct') === 'true';
        const feedbackMsg = btn.getAttribute('data-feedback');

        if (isCorrect) {
          btn.classList.add('correct');
          if (feedbackBox) {
            feedbackBox.className = 'exercise-feedback feedback-success show';
            feedbackBox.innerHTML = `<strong>✨ ¡Excelente análisis sistémico!</strong> ${feedbackMsg}`;
          }
        } else {
          btn.classList.add('incorrect');
          if (feedbackBox) {
            feedbackBox.className = 'exercise-feedback feedback-error show';
            feedbackBox.innerHTML = `<strong>⚠️ Revisa el concepto:</strong> ${feedbackMsg}`;
          }
        }
      });
    });
  });

  // 7. Modales: Ficha Técnica Oficial y Certificado
  const btnOpenFicha = document.getElementById('btn-open-ficha');
  const modalFicha = document.getElementById('modal-ficha-tecnica');
  const closeBtns = document.querySelectorAll('.modal-close-btn');

  if (btnOpenFicha && modalFicha) {
    btnOpenFicha.addEventListener('click', () => {
      modalFicha.classList.add('active');
    });
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });

  // Cerrar al hacer clic fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('active');
    }
  });

  // Botón para Imprimir Ficha Técnica en PDF
  const btnPrintFicha = document.getElementById('btn-print-ficha');
  if (btnPrintFicha) {
    btnPrintFicha.addEventListener('click', () => {
      window.print();
    });
  }
});
