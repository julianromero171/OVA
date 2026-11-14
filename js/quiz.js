/**
 * SISTEMA DE EVALUACIÓN Y CERTIFICACIÓN ACADÉMICA INTERACTIVA
 * Asignatura: Teoría General de Sistemas (TGS) - Universidad Simón Bolívar
 * Autor: Romero Herrera Julian Esteban
 */

const quizQuestions = [
  {
    q: "¿Cuál es la tesis central postulada por Humberto Maturana y Francisco Varela respecto a la definición de los seres vivos?",
    options: [
      "La vida se define por la capacidad de replicar ADN y moverse en el espacio físico.",
      "Los seres vivos son redes de producciones moleculares que se producen continuamente a sí mismas (autopoiesis).",
      "Los seres vivos son máquinas lineales que transforman entradas en salidas sin retroalimentación interna.",
      "La vida es una propiedad exclusiva de los sistemas que poseen conciencia reflexiva y lenguaje."
    ],
    correct: 1,
    justification: "Maturana y Varela definieron la autopoiesis como la condición necesaria y suficiente de la vida: una red de procesos de producción de componentes que regenera la propia red y define sus bordes espaciales."
  },
  {
    q: "¿Qué significa el concepto de 'Clausura Operacional' en un sistema autopoiético?",
    options: [
      "Que el sistema no intercambia energía ni materia con el medio exterior, siendo térmicamente aislado.",
      "Que los resultados de sus procesos internos son las mismas operaciones y componentes que mantienen la red activa.",
      "Que el sistema no puede interactuar con ningún otro sistema del entorno.",
      "Que las decisiones del sistema son programadas por un agente inteligente externo."
    ],
    correct: 1,
    justification: "La clausura operacional se refiere a la circularidad recursiva de su organización interna: las operaciones del sistema generan los componentes que posibilitan esas mismas operaciones, aunque sea termodinámicamente abierto al flujo de energía."
  },
  {
    q: "¿Cuál es la diferencia fundamental entre un sistema autopoiético y un sistema alopoiético?",
    options: [
      "El sistema autopoiético produce componentes distintos de sí mismo, mientras el alopoiético se produce a sí mismo.",
      "El sistema autopoiético produce su propia organización y existencia como fin en sí mismo; el alopoiético produce algo externo a él.",
      "Los sistemas alopoiéticos son exclusivamente biológicos y los autopoiéticos son mecánicos.",
      "No existe ninguna diferencia; ambos términos son sinónimos acuñados por Ludwig von Bertalanffy."
    ],
    correct: 1,
    justification: "Alopoiesis (del griego 'allo' = otro) implica que el producto del sistema es diferente de sí mismo (ej. una fábrica produciendo autos). La autopoiesis tiene como producto su propia realización continua."
  },
  {
    q: "Según el principio de 'Determinismo Estructural', ¿cómo reacciona un sistema vivo ante una perturbación ambiental?",
    options: [
      "El medio ambiente determina e instruye exactamente el cambio interno que el sistema debe ejecutar.",
      "El medio ambiente sólo gatilla o desencadena un cambio, pero es la propia estructura interna del sistema la que especifica dicho cambio.",
      "El sistema ignora por completo cualquier fenómeno externo gracias a su membrana rígida.",
      "El sistema altera aleatoriamente su genética sin ninguna correlación con su estructura previa."
    ],
    correct: 1,
    justification: "Para Maturana y Varela no existe la 'instrucción' desde el medio. El entorno gatilla perturbaciones, pero las transiciones de estado están totalmente especificadas por la estructura del sistema en ese instante."
  },
  {
    q: "¿Cuál es el rol de la membrana celular en la autopoiesis de primer orden?",
    options: [
      "Es una pared inerte externa añadida al final del ciclo vital por fuerzas físicas externas.",
      "Es al mismo tiempo el producto de las reacciones químicas internas y la condición espacial que posibilita esas mismas reacciones.",
      "Es una barrera impermeable que impide por completo el intercambio de sustratos con el entorno.",
      "Es únicamente un sensor pasivo sin participación metabólica."
    ],
    correct: 1,
    justification: "La membrana no es solo un contenedor; es sintetizada activamente por la red molecular interna y, a la vez, retiene los componentes para que la red no se disipe. Esta paradoja productiva es la esencia de la autopoiesis."
  },
  {
    q: "¿Qué ocurre cuando dos o más sistemas autopoiéticos interactúan de manera recurrente a lo largo del tiempo?",
    options: [
      "Se produce una fusión celular inmediata donde desaparecen las identidades previas.",
      "Se establece un proceso de 'Acoplamiento Estructural', donde sufren cambios estructurales congruentes sin perder su organización.",
      "Uno de los sistemas destruye obligatoriamente la clausura operacional del otro.",
      "Se detiene el metabolismo de ambos debido a interferencias cibernéticas."
    ],
    correct: 1,
    justification: "El acoplamiento estructural describe la historia de perturbaciones mutuas congruentes entre sistemas o entre un sistema y su medio, permitiendo la adaptación evolutiva u ontogénica sin desintegración."
  },
  {
    q: "¿Cómo clasifica Niklas Luhmann los sistemas sociales bajo el prisma de la autopoiesis?",
    options: [
      "Como agregaciones mecánicas de personas de carne y hueso unidas por contratos legales.",
      "Como sistemas autopoiéticos de tercer orden cuyo elemento autorreproductivo básico son las comunicaciones.",
      "Como sistemas puramente alopoiéticos creados por computadoras centrales.",
      "Como redes energéticas basadas exclusivamente en el intercambio monetario físico."
    ],
    correct: 1,
    justification: "El sociólogo Niklas Luhmann extendió la teoría proponiendo que las sociedades son sistemas autopoiéticos donde las comunicaciones (y no los seres biológicos individuales) producen recursivamente nuevas comunicaciones."
  },
  {
    q: "En el contexto de la Ingeniería de Sistemas y la Computación, ¿cómo se aplica la autopoiesis?",
    options: [
      "En sistemas de computación autocurativos (Self-healing systems) que detectan anomalías y regeneran automáticamente sus servicios para preservar su identidad operativa.",
      "En el uso de cables de fibra óptica más resistentes a perturbaciones climáticas.",
      "En la instalación de antivirus convencionales basados en firmas estáticas de malware.",
      "En la programación secuencial estructurada sin bucles ni recursividad."
    ],
    correct: 0,
    justification: "Arquitecturas como Kubernetes, microservicios resilientes y agentes autónomos implementan bucles de reconciliación homeostática y autogeneración de componentes inspirados en la autopoiesis biológica."
  },
  {
    q: "¿Por qué un modelo de Inteligencia Artificial generativa actual (como GPT o Claude) NO es considerado un sistema autopoiético por la TGS estricta?",
    options: [
      "Porque no tiene una pantalla física para mostrar sus salidas.",
      "Porque no regenera por sí mismo el hardware, la infraestructura energética ni el código que sustenta su proceso.",
      "Porque procesa números en lugar de palabras poéticas.",
      "Porque las IAs ya superaron a los sistemas vivos en todos los órdenes cibernéticos."
    ],
    correct: 1,
    justification: "Los modelos de IA dependen completamente de servidores, ingenieros, electricidad y hardware fabricados externamente. Son sistemas computacionales altamente sofisticados pero funcionalmente alopoiéticos."
  },
  {
    q: "¿Qué implica la muerte o destrucción de un sistema vivo en términos de la teoría de Maturana y Varela?",
    options: [
      "La pérdida irreversible de la clausura operacional y la consiguiente desintegración de su organización autopoiética.",
      "La detención momentánea del pulso eléctrico por menos de cinco segundos.",
      "Un cambio leve en el medio ambiente que el sistema no quiso observar.",
      "El paso obligatorio a un sistema alopoiético de reciclaje."
    ],
    correct: 0,
    justification: "Para la teoría de la autopoiesis, la vida y la organización autopoiética son la misma cosa. Cuando se pierde la clausura de la red de producción de componentes, el sistema vivo se desintegra ontológicamente: sobreviene la muerte."
  }
];

class QuizManager {
  constructor() {
    this.currentQ = 0;
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
    const qData = quizQuestions[this.currentQ];
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
        optDiv.className = `quiz-answer-opt ${this.userAnswers[this.currentQ] === idx ? 'selected' : ''}`;
        optDiv.innerHTML = `
          <div style="width: 26px; height: 26px; border-radius: 50%; border: 2px solid var(--accent-bio-light); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 800; color: var(--accent-bio-light);">
            ${String.fromCharCode(65 + idx)}
          </div>
          <div style="flex-grow: 1;">${optText}</div>
        `;
        optDiv.addEventListener('click', () => {
          this.userAnswers[this.currentQ] = idx;
          this.renderQuestion();
        });
        this.qOptionsEl.appendChild(optDiv);
      });
    }

    // Botones
    if (this.btnPrev) this.btnPrev.disabled = (this.currentQ === 0);
    if (this.btnNext) {
      this.btnNext.innerText = (this.currentQ === quizQuestions.length - 1) ? 'Finalizar Evaluación ➔' : 'Siguiente Pregunta ➔';
    }
  }

  finishQuiz() {
    let correctCount = 0;
    quizQuestions.forEach((q, idx) => {
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
      if (scoreScale) scoreScale.innerText = `${correctCount}/${quizQuestions.length} correctas (${grade100}%)`;

      // Detalle pedagógico
      if (summaryList) {
        let summaryHtml = '<div style="margin-top: 2rem; text-align: left;">';
        summaryHtml += '<h4 style="margin-bottom: 1rem; color: var(--accent-bio-light);">Desglose de Respuestas y Justificación Epistemológica:</h4>';
        
        quizQuestions.forEach((q, idx) => {
          const isRight = (this.userAnswers[idx] === q.correct);
          summaryHtml += `
            <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-bottom: 0.75rem; border-left: 4px solid ${isRight ? 'var(--accent-bio)' : 'var(--accent-danger)'};">
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.35rem;">
                ${idx + 1}. ${q.q}
              </div>
              <div style="font-size: 0.85rem; color: ${isRight ? '#34d399' : '#f87171'};">
                ${isRight ? '✅ Respuesta correcta' : '❌ Respuesta incorrecta'}
              </div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
                <em>Justificación:</em> ${q.justification}
              </div>
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
  const name = (studentNameInput && studentNameInput.value.trim()) ? studentNameInput.value.trim() : 'JULIAN ESTEBAN ROMERO HERRERA';
  
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
