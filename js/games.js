/**
 * JUEGOS DIDÁCTICOS INTERACTIVOS DE AUTOPOIESIS (TGS)
 * Juego 2: Desafío Ontológico (Autopoiético vs Alopoiético)
 * Juego 3: Simulador de Decisiones de Acoplamiento Estructural
 * TGS 2026-2 - Romero Herrera Julian Esteban
 */

// ==========================================
// JUEGO 2: DESAFÍO ONTO-SISTÉMICO
// ==========================================
const ontologyCards = [
  {
    title: "Bacteria Escherichia coli",
    icon: "🦠",
    desc: "Un organismo unicelular procariota que metaboliza glucosa y sintetiza sus propios ácidos grasos, ribosomas y pared celular continua.",
    type: "autopoietic",
    explanation: "¡Correcto! Es un sistema autopoiético por excelencia (de 1er orden). La red de transformaciones químicas produce los mismos componentes que regeneran la membrana que delimita la red."
  },
  {
    title: "Fábrica Gigafactory de Tesla",
    icon: "🏭",
    desc: "Una megafábrica automatizada con robots que transforman aluminio, baterías y chips en automóviles eléctricos terminados.",
    type: "allopoietic",
    explanation: "¡Correcto! Es un sistema ALOPOIÉTICO. El producto de sus procesos (automóviles) es diferente de sí misma. No regenera sus propios robots ni su estructura física a partir de su producción."
  },
  {
    title: "Modelo de Lenguaje LLM (IA)",
    icon: "🤖",
    desc: "Red neuronal artificial que procesa tokens y genera respuestas de texto basándose en pesos sinápticos estáticos calculados externamente.",
    type: "allopoietic",
    explanation: "¡Correcto! Es un sistema ALOPOIÉTICO. Aunque genera código o texto, no produce los servidores, ni la electricidad, ni la arquitectura física que sostiene su existencia."
  },
  {
    title: "Enjambre de Hormigas",
    icon: "🐜",
    desc: "Superorganismo compuesto por miles de individuos biológicos que cooperan para recolectar hojas, cultivar hongos y sostener la colonia.",
    type: "autopoietic",
    explanation: "¡Correcto! Es un sistema autopoiético de orden superior (2do/3er orden). Los individuos vivos se reproducen y mantienen dinámicamente la identidad y viabilidad ontológica de la colonia."
  },
  {
    title: "Reloj Mecánico de Péndulo",
    icon: "⏱️",
    desc: "Mecanismo de engranajes y resortes que transforma la energía potencial del péndulo en un movimiento regular para marcar horas.",
    type: "allopoietic",
    explanation: "¡Correcto! Es ALOPOIÉTICO. No produce sus propios engranajes ni su aceite; su propósito es externo: medir el tiempo para un observador humano."
  },
  {
    title: "Célula Neuronal Humana",
    icon: "🧠",
    desc: "Célula con prolongaciones axónicas y dendríticas que transporta impulsos eléctricos y sintetiza neurotransmisores y lípidos de membrana.",
    type: "autopoietic",
    explanation: "¡Correcto! Es AUTOPOIÉTICA. Mantiene su homeostasis metabólica y sintetiza continuamente las proteínas de sus canales iónicos y su membrana celular."
  },
  {
    title: "Cristal de Sal Marina en Crecimiento",
    icon: "💎",
    desc: "Estructura mineral repetitiva que incorpora nuevos iones de sodio y cloro en su red cristalina a medida que el agua se evapora.",
    type: "allopoietic",
    explanation: "¡Correcto! No es autopoiético (es un sistema físico inerte). Crece por simple agregación externa regida por termodinámica, no por una red metabólica cerrada con clausura operacional."
  },
  {
    title: "Virus Biológico (Ej. SARS-CoV-2)",
    icon: "🧬",
    desc: "Material genético encapsulado en una cápside proteica que no tiene metabolismo propio y requiere infectar una célula viva para multiplicarse.",
    type: "allopoietic",
    explanation: "¡Correcto! Para Maturana y Varela, los virus NO son autopoiéticos de manera independiente: carecen de metabolismo propio y clausura operacional; son 'parásitos moleculares' alopoiéticos en sí mismos."
  }
];

class OntologyGame {
  constructor() {
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.streakEl = document.getElementById('onto-streak');
    this.scoreEl = document.getElementById('onto-score');
    this.cardContainer = document.getElementById('onto-card-target');
    this.feedbackEl = document.getElementById('onto-feedback');
    this.renderCard();
  }

  renderCard() {
    if (this.currentIndex >= ontologyCards.length) {
      this.cardContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">🏆</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--accent-bio-light);">¡Desafío Ontológico Completado!</h3>
          <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">Puntaje final: <strong>${this.score} / ${ontologyCards.length * 10}</strong></p>
          <button class="btn btn-primary" onclick="window.ontologyGame.restart()">Reiniciar Desafío</button>
        </div>
      `;
      this.feedbackEl.style.display = 'none';
      return;
    }

    const card = ontologyCards[this.currentIndex];
    this.cardContainer.innerHTML = `
      <div class="swipe-card">
        <div class="swipe-card-icon">${card.icon}</div>
        <div class="swipe-card-title">${card.title}</div>
        <div class="swipe-card-desc">${card.desc}</div>
        <div style="margin-top: 1rem; font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
          Caso ${this.currentIndex + 1} de ${ontologyCards.length}
        </div>
      </div>
    `;
    this.feedbackEl.style.display = 'none';
  }

  checkAnswer(choice) {
    if (this.currentIndex >= ontologyCards.length) return;
    const current = ontologyCards[this.currentIndex];
    const isCorrect = (choice === current.type);

    if (isCorrect) {
      this.score += 10;
      this.streak += 1;
      this.feedbackEl.className = 'exercise-feedback feedback-success show';
      this.feedbackEl.innerHTML = `<strong>✨ ¡Exacto!</strong> ${current.explanation}`;
    } else {
      this.streak = 0;
      this.feedbackEl.className = 'exercise-feedback feedback-error show';
      this.feedbackEl.innerHTML = `<strong>⚠️ Incorrecto.</strong> ${current.explanation}`;
    }

    if (this.scoreEl) this.scoreEl.innerText = this.score;
    if (this.streakEl) this.streakEl.innerText = this.streak;

    setTimeout(() => {
      this.currentIndex++;
      this.renderCard();
    }, 2800);
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
// JUEGO 3: SIMULADOR DE ACOPLAMIENTO ESTRUCTURAL
// ==========================================
const couplingScenarios = [
  {
    perturbation: "Alza Térmica Severa en el Entorno",
    context: "La temperatura del medio acuoso circundante asciende bruscamente 12°C por radiación solar, acelerando la agitación cinética y amenazando con desnaturalizar enzimas.",
    options: [
      {
        text: "Obedecer pasivamente la instrucción térmica exterior y cambiar de forma sin regulación.",
        correct: false,
        feedback: "Falso paradigma mecanicista. Para Maturana, el medio NO instruye al sistema vivo; solo lo perturba."
      },
      {
        text: "Gatillar la expresión de proteínas de choque térmico (Hsp) según la estructura interna de la célula, estabilizando la membrana sin perder la clausura operacional.",
        correct: true,
        feedback: "¡Brillante! El cambio es determinado por la estructura propia del sistema frente a la perturbación (Determinismo Estructural y Acoplamiento)."
      },
      {
        text: "Cerrar completamente el intercambio de materia y energía con el entorno indefinidamente.",
        correct: false,
        feedback: "Error letal. Un sistema vivo es termodinámicamente abierto; cerrarse al flujo de nutrientes provoca muerte por entropía."
      }
    ]
  },
  {
    perturbation: "Ataque Masivo de Denegación de Servicio (DDoS) en un Sistema de Software Autónomo",
    context: "En un clúster de microservicios con diseño autopoiético (Kubernetes con control loops), una avalancha de 100,000 solicitudes por segundo satura los gateways de red.",
    options: [
      {
        text: "El firewall deja pasar todo el tráfico porque 'la red externa manda'.",
        correct: false,
        feedback: "Incorrecto. Se perdería la integridad y propósito del sistema de información."
      },
      {
        text: "Los pods activan réplicas automáticas y filtros de descarte basados en sus reglas internas de autocuración (self-healing), adaptando su estructura para mantener el servicio activo.",
        correct: true,
        feedback: "¡Excelente! Los bucles de reconciliación interna reconfiguran el estado del sistema preservando su identidad operativa ante la perturbación."
      },
      {
        text: "Apagar los servidores permanentemente para proteger la base de datos.",
        correct: false,
        feedback: "Eso equivale a la muerte del sistema. Se destruye la función operativa en lugar de acoplarse dinámicamente."
      }
    ]
  },
  {
    perturbation: "Escasez Súbita de Nutrientes Glucídicos en el Medio",
    context: "La fuente principal de carbono se agota en el caldo de cultivo donde vive una colonia bacteriana.",
    options: [
      {
        text: "Modificar sus rutas metabólicas internas para activar enzimas lipolíticas y catabolismo secundario, manteniendo la producción continua de ATP y pared celular.",
        correct: true,
        feedback: "¡Correcto! El sistema mantiene su clausura operacional reorganizando su metabolismo interno sin desintegrarse."
      },
      {
        text: "Transformarse instantáneamente en un mineral inerte.",
        correct: false,
        feedback: "Imposible ontológicamente: la vida no puede simplemente convertirse en roca y revertir cuando quiera."
      },
      {
        text: "Esperar a que el medio ambiente le inyecte un manual de instrucciones genéticas.",
        correct: false,
        feedback: "Concepto erróneo: la información biológica no entra empaquetada como órdenes del medio; la estructura celular responde desde su propia ontología."
      }
    ]
  }
];

class CouplingGame {
  constructor() {
    this.stageIndex = 0;
    this.container = document.getElementById('coupling-game-target');
    this.render();
  }

  render() {
    if (!this.container) return;
    if (this.stageIndex >= couplingScenarios.length) {
      this.container.innerHTML = `
        <div class="scenario-box" style="text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🧬</div>
          <h3 style="color: var(--accent-bio-light); margin-bottom: 0.5rem;">¡Dominio de Acoplamiento Estructural Logrado!</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
            Has comprendido con éxito que los sistemas vivos determinan sus cambios desde su propia estructura interna y nunca son gobernados pasivamente por el entorno.
          </p>
          <button class="btn btn-primary" onclick="window.couplingGame.restart()">Reiniciar Aventura</button>
        </div>
      `;
      return;
    }

    const item = couplingScenarios[this.stageIndex];
    let optionsHtml = '';
    item.options.forEach((opt, idx) => {
      optionsHtml += `
        <button class="decision-btn" onclick="window.couplingGame.chooseOption(${idx})">
          <span style="font-weight: 700; color: var(--accent-bio-light); margin-right: 0.5rem;">Opción ${String.fromCharCode(65 + idx)}:</span>
          ${opt.text}
        </button>
      `;
    });

    this.container.innerHTML = `
      <div class="scenario-box">
        <div class="scenario-header">
          <span class="badge badge-purple">Desafío ${this.stageIndex + 1} de ${couplingScenarios.length}</span>
          <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">Acoplamiento y Deriva Ontogénica</span>
        </div>
        <h4 class="scenario-title" style="color: var(--accent-bio-light);">${item.perturbation}</h4>
        <p style="color: var(--text-secondary); margin: 0.75rem 0 1.25rem;">${item.context}</p>
        <div class="decision-options">
          ${optionsHtml}
        </div>
        <div id="coupling-feedback-${this.stageIndex}" class="exercise-feedback"></div>
      </div>
    `;
  }

  chooseOption(optIndex) {
    const item = couplingScenarios[this.stageIndex];
    const opt = item.options[optIndex];
    const fbEl = document.getElementById(`coupling-feedback-${this.stageIndex}`);
    if (!fbEl) return;

    if (opt.correct) {
      fbEl.className = 'exercise-feedback feedback-success show';
      fbEl.innerHTML = `<strong>✨ ¡Acoplamiento Exitoso!</strong> ${opt.feedback}`;
      setTimeout(() => {
        this.stageIndex++;
        this.render();
      }, 2500);
    } else {
      fbEl.className = 'exercise-feedback feedback-error show';
      fbEl.innerHTML = `<strong>⚠️ Desacoplamiento / Riesgo Ontológico:</strong> ${opt.feedback}`;
    }
  }

  restart() {
    this.stageIndex = 0;
    this.render();
  }
}

// Inicialización de Juegos
document.addEventListener('DOMContentLoaded', () => {
  window.ontologyGame = new OntologyGame();
  window.couplingGame = new CouplingGame();

  // Cambio de pestañas entre juegos
  const tabBtns = document.querySelectorAll('.games-tab-nav .tab-btn');
  const gamePanels = document.querySelectorAll('.game-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      tabBtns.forEach(b => b.classList.remove('active'));
      gamePanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      // Si se activa el canvas, reajustar tamaño
      if (targetId === 'game-biolab' && window.bioLabSimulator) {
        window.bioLabSimulator.resizeCanvas();
      }
    });
  });
});
