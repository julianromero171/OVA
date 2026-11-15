/**
 * Juegos didácticos propios del OVA
 * Juego 2: Desafío ontológico (autopoiético vs. no autopoiético)
 * Juego 3: Aventura de acoplamiento estructural
 * Autopoiesis y sistemas vivos (Maturana y Varela) · TGS 2026-2 · Romero Herrera Julián Esteban
 * Textos revisados en docs/contenido_revisado.md
 */

// ==========================================
// JUEGO 2: DESAFÍO ONTOLÓGICO
// ==========================================
const ontologyCards = [
  {
    title: "Bacteria Escherichia coli",
    icon: "🦠",
    desc: "Organismo unicelular que toma glucosa del medio y con ella fabrica sus propios lípidos, proteínas, ribosomas y pared celular.",
    type: "autopoietic",
    explanation: "Es autopoiética (unidad de primer orden): su red metabólica produce los componentes que renuevan la membrana que la delimita."
  },
  {
    title: "Gigafábrica automatizada de vehículos eléctricos",
    icon: "🏭",
    desc: "Planta con robots que transforman aluminio, baterías y chips en automóviles terminados.",
    type: "allopoietic",
    explanation: "Es alopoiética: su producto (los autos) es distinto de ella misma y no fabrica sus propios robots ni su edificio."
  },
  {
    title: "Modelo de lenguaje (IA generativa)",
    icon: "🤖",
    desc: "Red neuronal artificial que genera texto a partir de parámetros obtenidos en un entrenamiento hecho por personas y servidores externos.",
    type: "allopoietic",
    explanation: "Es alopoiético: produce texto, pero no produce el hardware, la energía ni el código que lo sostienen."
  },
  {
    title: "Hormiga obrera (un individuo de la colonia)",
    icon: "🐜",
    desc: "Insecto pluricelular que se alimenta, renueva sus tejidos y coopera con otras hormigas para sostener la colonia.",
    type: "autopoietic",
    explanation: "Es un ser vivo: sus células son autopoiéticas y el organismo depende de ellas (unidad de segundo orden). La colonia completa es una unidad de tercer orden; Maturana y Varela no afirman que sea autopoiética en sí misma."
  },
  {
    title: "Reloj mecánico de péndulo",
    icon: "⏱️",
    desc: "Mecanismo de engranajes y resortes que usa la oscilación de un péndulo para marcar intervalos regulares.",
    type: "allopoietic",
    explanation: "Es alopoiético: no fabrica sus engranajes ni su lubricante, y su función (marcar la hora) tiene sentido para un observador externo."
  },
  {
    title: "Neurona humana",
    icon: "🧠",
    desc: "Célula con axón y dendritas que conduce impulsos eléctricos y sintetiza neurotransmisores y lípidos de membrana.",
    type: "autopoietic",
    explanation: "Es autopoiética: como toda célula, renueva continuamente sus proteínas, canales iónicos y membrana."
  },
  {
    title: "Cristal de sal en crecimiento",
    icon: "💎",
    desc: "Estructura mineral que añade iones de sodio y cloro a su red cristalina a medida que el agua se evapora.",
    type: "allopoietic",
    explanation: "No es autopoiético: crece por acumulación de material desde afuera, sin una red de procesos que produzca sus propios componentes. (Un cristal tampoco es una máquina diseñada; en este juego se agrupa como \"no autopoiético\".)"
  },
  {
    title: "Virus (p. ej., SARS-CoV-2)",
    icon: "🧬",
    desc: "Material genético dentro de una cápside de proteínas; no tiene metabolismo propio y solo se multiplica dentro de una célula viva.",
    type: "allopoietic",
    explanation: "No es autopoiético por sí mismo: no tiene metabolismo ni produce sus componentes; es la célula infectada la que fabrica nuevos virus."
  }
];

class OntologyGame {
  constructor() {
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.locked = false;
    this.streakEl = document.getElementById('onto-streak');
    this.scoreEl = document.getElementById('onto-score');
    this.cardContainer = document.getElementById('onto-card-target');
    this.feedbackEl = document.getElementById('onto-feedback');
    if (this.cardContainer) this.renderCard();
  }

  renderCard() {
    this.locked = false;
    if (this.currentIndex >= ontologyCards.length) {
      this.cardContainer.innerHTML = `
        <div class="swipe-card">
          <div class="swipe-card-icon">🏆</div>
          <div class="swipe-card-title">¡Desafío completado!</div>
          <p class="swipe-card-desc">Puntaje final: <strong>${this.score} / ${ontologyCards.length * 10}</strong></p>
          <button type="button" class="btn btn-teal" style="margin-top:1.2rem" onclick="window.ontologyGame.restart()">Reiniciar desafío</button>
        </div>
      `;
      this.feedbackEl.className = 'exercise-feedback';
      return;
    }

    const card = ontologyCards[this.currentIndex];
    this.cardContainer.innerHTML = `
      <div class="swipe-card">
        <div class="swipe-card-icon" aria-hidden="true">${card.icon}</div>
        <div class="swipe-card-title">${card.title}</div>
        <div class="swipe-card-desc">${card.desc}</div>
        <div class="swipe-card-count">Caso ${this.currentIndex + 1} de ${ontologyCards.length}</div>
      </div>
    `;
    this.feedbackEl.className = 'exercise-feedback';
  }

  checkAnswer(choice) {
    if (this.locked || this.currentIndex >= ontologyCards.length) return;
    this.locked = true;
    const current = ontologyCards[this.currentIndex];
    const isCorrect = (choice === current.type);

    if (isCorrect) {
      this.score += 10;
      this.streak += 1;
      this.feedbackEl.className = 'exercise-feedback feedback-success show';
      this.feedbackEl.innerHTML = `<strong>¡Exacto!</strong> ${current.explanation}`;
    } else {
      this.streak = 0;
      this.feedbackEl.className = 'exercise-feedback feedback-error show';
      this.feedbackEl.innerHTML = `<strong>Incorrecto.</strong> ${current.explanation}`;
    }

    if (this.scoreEl) this.scoreEl.innerText = this.score;
    if (this.streakEl) this.streakEl.innerText = this.streak;

    setTimeout(() => {
      this.currentIndex++;
      this.renderCard();
    }, 3200);
  }

  restart() {
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    if (this.scoreEl) this.scoreEl.innerText = '0';
    if (this.streakEl) this.streakEl.innerText = '0';
    this.renderCard();
  }
}

// ==========================================
// JUEGO 3: AVENTURA DE ACOPLAMIENTO ESTRUCTURAL
// ==========================================
const couplingScenarios = [
  {
    perturbation: "Aumento brusco de temperatura",
    context: "La temperatura del agua donde vive una célula sube de golpe 12 °C; las proteínas corren riesgo de desnaturalizarse.",
    options: [
      {
        text: "Obedecer la \"orden\" del calor y cambiar de forma sin ninguna regulación.",
        correct: false,
        feedback: "Visión mecanicista. Para Maturana y Varela, el medio no instruye al ser vivo: solo lo perturba."
      },
      {
        text: "Producir proteínas de choque térmico según su propia estructura, protegiendo sus proteínas sin perder su organización.",
        correct: true,
        feedback: "¡Bien! La perturbación desencadena el cambio, pero lo especifica la estructura de la célula (determinismo estructural)."
      },
      {
        text: "Cerrar por completo el intercambio de materia y energía con el entorno.",
        correct: false,
        feedback: "Error fatal: un ser vivo es abierto a materia y energía; si se aísla, no puede sostener su metabolismo."
      }
    ]
  },
  {
    perturbation: "Ataque de denegación de servicio (DDoS)",
    context: "Un clúster de microservicios orquestado con Kubernetes (que usa bucles de control) recibe de repente 100 000 solicitudes por segundo que saturan la entrada de red.",
    options: [
      {
        text: "Dejar pasar todo el tráfico porque \"lo externo manda\".",
        correct: false,
        feedback: "Incorrecto: el sistema perdería su función. El entorno perturba, no dicta."
      },
      {
        text: "Apagar los servidores de forma permanente para proteger la base de datos.",
        correct: false,
        feedback: "Eso equivale a la \"muerte\" del servicio: se destruye la función en lugar de compensar la perturbación."
      },
      {
        text: "Escalar réplicas y aplicar filtros de tráfico según reglas internas ya configuradas, para mantener el servicio.",
        correct: true,
        feedback: "¡Correcto! Los bucles de control reconfiguran el sistema según reglas propias. Recuerda: es una analogía; el clúster no es autopoiético porque no produce sus propios componentes."
      }
    ]
  },
  {
    perturbation: "Escasez de glucosa",
    context: "Se agota la principal fuente de carbono en el medio de cultivo de una colonia de bacterias.",
    options: [
      {
        text: "Cambiar sus rutas metabólicas para usar otras fuentes de carbono y seguir produciendo energía y componentes.",
        correct: true,
        feedback: "¡Correcto! Reorganiza su metabolismo sin perder su organización autopoiética."
      },
      {
        text: "Convertirse instantáneamente en un mineral inerte.",
        correct: false,
        feedback: "Imposible: un ser vivo no puede transformarse en roca y luego volver a vivir."
      },
      {
        text: "Esperar a que el medio le envíe un \"manual de instrucciones\" genético.",
        correct: false,
        feedback: "Concepto erróneo: el medio no envía instrucciones; la respuesta depende de la estructura de la bacteria."
      }
    ]
  }
];

class CouplingGame {
  constructor() {
    this.stageIndex = 0;
    this.locked = false;
    this.container = document.getElementById('coupling-game-target');
    this.render();
  }

  render() {
    if (!this.container) return;
    this.locked = false;
    if (this.stageIndex >= couplingScenarios.length) {
      this.container.innerHTML = `
        <div class="scenario-box" style="text-align: center;">
          <div class="swipe-card-icon" aria-hidden="true">🧬</div>
          <h3 class="scenario-title">¡Lo lograste!</h3>
          <p class="scenario-context">Comprendiste que un sistema vivo responde a su entorno según su propia estructura: el medio desencadena, pero no determina.</p>
          <button type="button" class="btn btn-teal" onclick="window.couplingGame.restart()">Reiniciar aventura</button>
        </div>
      `;
      return;
    }

    const item = couplingScenarios[this.stageIndex];
    const optionsHtml = item.options.map((opt, idx) => `
        <button type="button" class="decision-btn" onclick="window.couplingGame.chooseOption(${idx})">
          <span><strong class="decision-letter">${String.fromCharCode(65 + idx)})</strong> ${opt.text}</span>
        </button>`).join('');

    this.container.innerHTML = `
      <div class="scenario-box">
        <div class="scenario-header">
          <span class="badge badge-violet">Desafío ${this.stageIndex + 1} de ${couplingScenarios.length}</span>
          <span class="scenario-tagline">Acoplamiento estructural y ontogenia</span>
        </div>
        <h3 class="scenario-title">${item.perturbation}</h3>
        <p class="scenario-context">${item.context}</p>
        <div class="decision-options">${optionsHtml}</div>
        <div id="coupling-feedback-${this.stageIndex}" class="exercise-feedback" aria-live="polite"></div>
      </div>
    `;
  }

  chooseOption(optIndex) {
    if (this.locked) return;
    const item = couplingScenarios[this.stageIndex];
    const opt = item.options[optIndex];
    const fbEl = document.getElementById(`coupling-feedback-${this.stageIndex}`);
    if (!fbEl) return;

    const buttons = this.container.querySelectorAll('.decision-btn');
    buttons.forEach(b => b.classList.remove('correct', 'incorrect'));
    buttons[optIndex].classList.add(opt.correct ? 'correct' : 'incorrect');

    if (opt.correct) {
      this.locked = true;
      fbEl.className = 'exercise-feedback feedback-success show';
      fbEl.innerHTML = `<strong>¡Acoplamiento logrado!</strong> ${opt.feedback}`;
      setTimeout(() => {
        this.stageIndex++;
        this.render();
      }, 3000);
    } else {
      fbEl.className = 'exercise-feedback feedback-error show';
      fbEl.innerHTML = `<strong>Revisa tu elección:</strong> ${opt.feedback}`;
    }
  }

  restart() {
    this.stageIndex = 0;
    this.render();
  }
}

// Inicialización de juegos y pestañas
document.addEventListener('DOMContentLoaded', () => {
  window.ontologyGame = new OntologyGame();
  window.couplingGame = new CouplingGame();

  const tabBtns = document.querySelectorAll('.games-tab-nav .tab-btn');
  const gamePanels = document.querySelectorAll('.game-panel');

  tabBtns.forEach(btn => {
    btn.setAttribute('aria-selected', btn.classList.contains('active') ? 'true' : 'false');
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      tabBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      gamePanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');

      if (targetId === 'game-biolab' && window.bioLabSimulator) {
        window.bioLabSimulator.resizeCanvas();
      }
    });
  });
});
