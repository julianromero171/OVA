/**
 * Actividades en plataformas externas (Juegos 4 y 5)
 * ---------------------------------------------------------------------------
 * CONFIGURACIÓN: pega aquí los enlaces de tus actividades publicadas.
 *   embed: URL para el iframe (Wordwall: botón "Compartir" > "Insertar" >
 *          copia el src, p. ej. https://wordwall.net/embed/XXXXXXXX ;
 *          Educaplay: "Compartir" > "Embeber" > copia el src del iframe).
 *   url:   enlace público para abrir la actividad en una pestaña nueva.
 * También se acepta una cadena simple (se usa como embed y como url).
 * Si se deja vacío, se muestra el aviso "Actividad en preparación".
 */
const EXTERNAL_ACTIVITIES = {
  wordwall: { embed: '', url: '' },
  educaplay: { embed: '', url: '' }
};

(function () {
  const PLATFORMS = {
    wordwall: { name: 'Wordwall', home: 'https://wordwall.net/es' },
    educaplay: { name: 'Educaplay', home: 'https://es.educaplay.com/' }
  };

  function normalize(cfg) {
    if (!cfg) return { embed: '', url: '' };
    if (typeof cfg === 'string') return { embed: cfg.trim(), url: cfg.trim() };
    const embed = (cfg.embed || '').trim();
    return { embed, url: (cfg.url || embed).trim() };
  }

  function isSafeUrl(u) {
    return /^https:\/\//i.test(u);
  }

  function render(key) {
    const meta = PLATFORMS[key];
    const cfg = normalize(EXTERNAL_ACTIVITIES[key]);
    const embedEl = document.getElementById(`embed-${key}`);
    const actionsEl = document.getElementById(`actions-${key}`);
    if (!embedEl || !actionsEl) return;

    embedEl.innerHTML = '';
    actionsEl.innerHTML = '';

    if (cfg.embed && isSafeUrl(cfg.embed)) {
      const iframe = document.createElement('iframe');
      iframe.src = cfg.embed;
      iframe.title = `Actividad interactiva en ${meta.name}`;
      iframe.loading = 'lazy';
      iframe.allowFullscreen = true;
      iframe.setAttribute('allow', 'fullscreen; autoplay');
      embedEl.appendChild(iframe);

      const open = document.createElement('a');
      open.className = 'btn btn-ink btn-sm';
      open.href = isSafeUrl(cfg.url) ? cfg.url : cfg.embed;
      open.target = '_blank';
      open.rel = 'noopener';
      open.textContent = `Abrir en ${meta.name} ↗`;
      actionsEl.appendChild(open);
    } else {
      embedEl.innerHTML = `
        <div class="external-placeholder">
          <span class="ph-title">Actividad en<br>preparación</span>
          <span class="ph-text">Muy pronto podrás jugar aquí esta actividad de ${meta.name}.</span>
        </div>`;
      const btn = document.createElement('a');
      btn.className = 'btn btn-ghost btn-sm';
      btn.href = meta.home;
      btn.target = '_blank';
      btn.rel = 'noopener';
      btn.textContent = `Conocer ${meta.name} ↗`;
      actionsEl.appendChild(btn);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    Object.keys(PLATFORMS).forEach(render);
  });
})();
