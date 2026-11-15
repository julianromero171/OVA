/**
 * Evaluación interactiva y constancia formativa · Autopoiesis y sistemas vivos (Maturana y Varela)
 * Asignatura: Teoría General de Sistemas (TGS) - TGS 2026-2
 * Autor: Romero Herrera Julián Esteban · Preguntas revisadas en docs/contenido_revisado.md
 */

const quizQuestions = [
  {
    q: "¿Cuál es la tesis central de Maturana y Varela sobre qué define a un ser vivo?",
    options: [
      "La capacidad de replicar ADN y desplazarse en el espacio.",
      "Ser una máquina lineal que transforma entradas en salidas sin retroalimentación.",
      "Ser una red de procesos moleculares que se produce continuamente a sí misma (autopoiesis).",
      "Poseer conciencia reflexiva y lenguaje."
    ],
    correct: 2,
    justification: "Para Maturana y Varela, la autopoiesis basta para caracterizar la organización de lo vivo: una red de procesos que produce los componentes que la regeneran y que define su propio límite (Maturana y Varela, 1973)."
  },
  {
    q: "¿Qué significa \"clausura operacional\" en un sistema autopoiético?",
    options: [
      "Que los resultados de sus procesos son los mismos componentes y operaciones que mantienen activa la red.",
      "Que el sistema no intercambia materia ni energía con el exterior.",
      "Que el sistema no puede interactuar con ningún otro sistema.",
      "Que un agente externo programa las decisiones del sistema."
    ],
    correct: 0,
    justification: "La clausura se refiere a la circularidad de la organización: las operaciones producen los componentes que hacen posibles esas mismas operaciones, aunque el sistema siga abierto a la materia y la energía (Varela, 1979)."
  },
  {
    q: "¿Cuál es la diferencia fundamental entre un sistema autopoiético y uno alopoiético?",
    options: [
      "El autopoiético produce cosas distintas de sí; el alopoiético se produce a sí mismo.",
      "Los alopoiéticos son solo biológicos y los autopoiéticos solo mecánicos.",
      "No hay diferencia: son sinónimos acuñados por Ludwig von Bertalanffy.",
      "El autopoiético produce sus propios componentes y su continuidad; el alopoiético produce algo distinto de sí mismo."
    ],
    correct: 3,
    justification: "Állos significa \"otro\": un sistema alopoiético (como una fábrica de autos) produce algo diferente de sí; el autopoiético se produce a sí mismo (Maturana y Varela, 1973)."
  },
  {
    q: "Según el determinismo estructural, ¿cómo responde un ser vivo a una perturbación del medio?",
    options: [
      "El medio especifica exactamente el cambio que el sistema debe realizar.",
      "El medio solo desencadena el cambio; la estructura del sistema determina cuál será.",
      "El sistema ignora todo lo externo gracias a una membrana rígida.",
      "El sistema cambia al azar, sin relación con su estructura previa."
    ],
    correct: 1,
    justification: "Para Maturana y Varela no hay \"instrucción\" desde el medio: el entorno perturba, pero los cambios posibles los especifica la estructura del sistema en ese momento (Maturana y Varela, 1984)."
  },
  {
    q: "¿Qué papel cumple la membrana en una célula, según la autopoiesis?",
    options: [
      "Es una pared inerte añadida desde afuera por fuerzas físicas.",
      "Es una barrera impermeable que impide todo intercambio con el entorno.",
      "Es a la vez producto de la red metabólica interna y condición para que esa red no se disperse.",
      "Es solo un sensor pasivo sin participación en el metabolismo."
    ],
    correct: 2,
    justification: "La red interna fabrica la membrana y la membrana mantiene unida a la red: esa circularidad caracteriza a la unidad autopoiética (Varela et al., 1974)."
  },
  {
    q: "¿Qué ocurre cuando dos sistemas (o un sistema y su medio) interactúan de forma recurrente durante mucho tiempo?",
    options: [
      "Se da un acoplamiento estructural: ambos cambian de manera congruente sin perder su organización.",
      "Se fusionan de inmediato y desaparecen sus identidades.",
      "Uno destruye obligatoriamente la clausura del otro.",
      "El metabolismo de ambos se detiene por interferencia."
    ],
    correct: 0,
    justification: "El acoplamiento estructural es la historia de perturbaciones mutuas que produce cambios congruentes, sin que los sistemas se desintegren (Maturana y Varela, 1984)."
  },
  {
    q: "¿Cómo entiende Niklas Luhmann a los sistemas sociales?",
    options: [
      "Como sumas de personas unidas por contratos.",
      "Como sistemas alopoiéticos creados por computadoras.",
      "Como redes de intercambio monetario exclusivamente.",
      "Como sistemas autopoiéticos cuyos elementos son comunicaciones, no personas."
    ],
    correct: 3,
    justification: "Luhmann (1984/1998) trasladó la autopoiesis a la sociología: las comunicaciones producen nuevas comunicaciones. Es una extensión debatida que Maturana y Varela no adoptaron (Mingers, 2002)."
  },
  {
    q: "En Ingeniería de Sistemas, ¿cuál es un uso legítimo del concepto de autopoiesis?",
    options: [
      "Elegir cables de fibra óptica más resistentes al clima.",
      "Servir como analogía para diseñar sistemas autorreparables que detectan fallas y restituyen sus servicios.",
      "Instalar antivirus basados en firmas estáticas.",
      "Programar de forma secuencial, sin bucles ni recursividad."
    ],
    correct: 1,
    justification: "Los sistemas autorreparables (por ejemplo, los controladores de Kubernetes) usan bucles de control que recuerdan la autoconservación de lo vivo. Es una analogía: esos sistemas no producen sus propios componentes y siguen siendo alopoiéticos (Kubernetes Authors, s. f.; Maturana y Varela, 1973)."
  },
  {
    q: "¿Por qué un modelo de IA generativa actual no es autopoiético en sentido estricto?",
    options: [
      "Porque no tiene una pantalla propia para mostrar sus respuestas.",
      "Porque procesa números en lugar de palabras.",
      "Porque no produce por sí mismo el hardware, la energía ni el código que lo sostienen.",
      "Porque ya superó a los sistemas vivos en todos los aspectos."
    ],
    correct: 2,
    justification: "Un modelo de IA depende de servidores, electricidad, datos y personas externas. Es un sistema muy sofisticado, pero alopoiético (Maturana y Varela, 1973)."
  },
  {
    q: "¿Qué es la muerte de un ser vivo según la teoría de la autopoiesis?",
    options: [
      "La pérdida irreversible de la organización autopoiética: la red deja de producirse a sí misma y el sistema se desintegra.",
      "Una pausa de menos de cinco segundos en la actividad eléctrica.",
      "Un cambio leve del medio que el sistema no percibió.",
      "El paso obligatorio a un sistema alopoiético de reciclaje."
    ],
    correct: 0,
    justification: "Para Maturana y Varela, estar vivo es realizar la autopoiesis; cuando se pierde esa organización, el sistema deja de ser una unidad viva (Maturana y Varela, 1984)."
  }
];

class QuizManager {
  constructor() {
    this.currentQ = 0;
    this.questions = QuizManager.shuffleQuestions(quizQuestions);
    this.userAnswers = new Array(quizQuestions.length).fill(null);
    this.score = 0;
    this.startTime = Date.now();

    this.qNumEl = document.getElementById('quiz-q-num');
    this.qTextEl = document.getElementById('quiz-q-text');
    this.qOptionsEl = document.getElementById('quiz-options-container');
    this.progressFill = document.getElementById('quiz-progress-fill');
    this.progressText = document.getElementById('quiz-progress-text');
    this.btnPrev = document.getElementById('btn-quiz-prev');
    this.btnNext = document.getElementById('btn-quiz-next');
    this.resultsCard = document.getElementById('quiz-results-card');
    this.questionCard = document.getElementById('quiz-question-card');

    this.renderQuestion();
    this.setupEvents();
  }

  // Baraja el orden de las opciones de cada pregunta para que la posición
  // de la respuesta correcta no sea predecible.
  static shuffleQuestions(source) {
    return source.map(q => {
      const order = q.options.map((_, i) => i);
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      return { ...q, options: order.map(i => q.options[i]), correct: order.indexOf(q.correct) };
    });
  }

  setupEvents() {
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => {
        if (this.currentQ > 0) {
          this.currentQ--;
          this.renderQuestion();
        }
      });
    }

    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => {
        if (this.userAnswers[this.currentQ] === null) {
          alert('Por favor selecciona una respuesta para continuar.');
          return;
        }

        if (this.currentQ < quizQuestions.length - 1) {
          this.currentQ++;
          this.renderQuestion();
        } else {
          this.finishQuiz();
        }
      });
    }
  }

  renderQuestion() {
    const qData = this.questions[this.currentQ];
    if (this.qNumEl) this.qNumEl.innerText = `PREGUNTA ${this.currentQ + 1} DE ${quizQuestions.length}`;
    if (this.qTextEl) this.qTextEl.innerText = qData.q;
    if (this.progressText) this.progressText.innerText = `${this.currentQ + 1} / ${quizQuestions.length}`;
    
    const pct = ((this.currentQ + 1) / quizQuestions.length) * 100;
    if (this.progressFill) this.progressFill.style.width = `${pct}%`;

    // Render opciones
    if (this.qOptionsEl) {
      this.qOptionsEl.innerHTML = '';
      qData.options.forEach((optText, idx) => {
        const optDiv = document.createElement('div');
        const isSel = this.userAnswers[this.currentQ] === idx;
        optDiv.className = `quiz-answer-opt ${isSel ? 'selected' : ''}`;
        optDiv.setAttribute('role', 'radio');
        optDiv.setAttribute('aria-checked', String(isSel));
        optDiv.tabIndex = 0;
        optDiv.innerHTML = `
          <span class="quiz-letter">${String.fromCharCode(65 + idx)}</span>
          <span class="quiz-opt-text">${optText}</span>
        `;
        const choose = () => {
          this.userAnswers[this.currentQ] = idx;
          this.renderQuestion();
          const sel = this.qOptionsEl.querySelector('.selected');
          if (sel) sel.focus();
        };
        optDiv.addEventListener('click', choose);
        optDiv.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(); }
        });
        this.qOptionsEl.appendChild(optDiv);
      });
    }

    // Botones
    if (this.btnPrev) this.btnPrev.disabled = (this.currentQ === 0);
    if (this.btnNext) {
      this.btnNext.innerText = (this.currentQ === quizQuestions.length - 1) ? 'Finalizar evaluación →' : 'Siguiente →';
    }
  }

  finishQuiz() {
    let correctCount = 0;
    this.questions.forEach((q, idx) => {
      if (this.userAnswers[idx] === q.correct) {
        correctCount++;
      }
    });

    const grade100 = Math.round((correctCount / quizQuestions.length) * 100);
    const grade5 = ((correctCount / quizQuestions.length) * 5.0).toFixed(1);

    if (this.questionCard) this.questionCard.style.display = 'none';
    if (this.resultsCard) {
      this.resultsCard.style.display = 'block';
      const scoreVal = document.getElementById('quiz-score-val');
      const scoreScale = document.getElementById('quiz-score-scale');
      const summaryList = document.getElementById('quiz-summary-feedback');

      if (scoreVal) scoreVal.innerText = `${grade5}`;
      const circle = document.querySelector('.quiz-score-circle');
      if (circle) circle.style.background = `conic-gradient(var(--teal-deep) ${grade100 * 3.6}deg, var(--paper-tint) 0deg)`;
      if (scoreScale) scoreScale.innerText = `${correctCount}/${quizQuestions.length} correctas (${grade100}%)`;

      // Detalle pedagógico
      if (summaryList) {
        let summaryHtml = '<div class="quiz-summary">';
        summaryHtml += '<h4>Desglose de respuestas y justificación</h4>';
        this.questions.forEach((q, idx) => {
          const isRight = (this.userAnswers[idx] === q.correct);
          summaryHtml += `
            <div class="summary-item ${isRight ? '' : 'wrong'}">
              <div class="summary-q">${idx + 1}. ${q.q}</div>
              <div class="summary-status">${isRight ? '✔ Respuesta correcta' : '✘ Respuesta incorrecta'}</div>
              <div class="summary-just"><em>Justificación:</em> ${q.justification}</div>
            </div>
          `;
        });
        summaryHtml += '</div>';
        summaryList.innerHTML = summaryHtml;
      }

      // Actualizar datos en el certificado
      const certGrade = document.getElementById('cert-grade-display');
      const certDate = document.getElementById('cert-date-display');
      if (certGrade) certGrade.innerText = `${grade5} / 5.0 (${grade100}%)`;
      if (certDate) {
        const today = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
        certDate.innerText = today;
      }
    }
  }

  restart() {
    this.currentQ = 0;
    this.questions = QuizManager.shuffleQuestions(quizQuestions);
    this.userAnswers = new Array(quizQuestions.length).fill(null);
    if (this.questionCard) this.questionCard.style.display = 'block';
    if (this.resultsCard) this.resultsCard.style.display = 'none';
    this.renderQuestion();
  }
}

// Generador de Certificado
function generateCertificate() {
  const studentNameInput = document.getElementById('cert-student-input');
  const certNameDisplay = document.getElementById('cert-name-target');
  const name = (studentNameInput && studentNameInput.value.trim()) ? studentNameInput.value.trim() : 'JULIÁN ESTEBAN ROMERO HERRERA';
  
  if (certNameDisplay) {
    certNameDisplay.innerText = name.toUpperCase();
  }

  const certModal = document.getElementById('modal-certificate');
  if (certModal) {
    certModal.classList.add('active');
  }
}

function printCertificate() {
  window.print();
}

document.addEventListener('DOMContentLoaded', () => {
  window.quizManager = new QuizManager();

  const btnCert = document.getElementById('btn-generate-cert');
  if (btnCert) {
    btnCert.addEventListener('click', generateCertificate);
  }

  const btnPrintCert = document.getElementById('btn-print-certificate');
  if (btnPrintCert) {
    btnPrintCert.addEventListener('click', printCertificate);
  }

  const btnRestart = document.getElementById('btn-restart-quiz');
  if (btnRestart) {
    btnRestart.addEventListener('click', () => window.quizManager.restart());
  }
});
