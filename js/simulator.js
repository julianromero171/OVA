/**
 * SIMULADOR BIO-LAB: CÉLULA AUTOPOIÉTICA (MATURANA & VARELA)
 * Asignatura: Teoría General de Sistemas - TGS 2026-2
 * Autor: Julian Esteban Romero Herrera
 * Modela: Clausura Operacional, Metabolismo Interno, Membrana Dinámica y Entropía
 */

class AutopoieticCellSimulator {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    // Dimensiones y escalado de Canvas
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Parámetros de Estado Sistémico
    this.isRunning = true;
    this.isAlive = true;
    this.substrateRate = 35;       // Concentración de sustrato disponible
    this.entropyRate = 22;         // Tasa de descomposición entrópica de la membrana
    this.permeability = 50;        // Permeabilidad selectiva
    
    // Variables de dinámica celular
    this.membraneIntegrity = 100;  // 0% a 100%
    this.internalSubstrate = 40;
    this.internalProducts = 30;
    this.metabolicRate = 0;
    this.timeAlive = 0;

    // Estructura de la Membrana Deformable (Polígono elástico cerrado)
    this.membraneNodeCount = 28;
    this.cellRadius = 110;
    this.center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
    this.membraneNodes = [];
    this.initMembrane();

    // Partículas del Sistema (Sustrato exterior e interior, enzimas, metabolitos)
    this.particles = [];
    this.maxParticles = 65;
    this.initParticles();

    // Sonido Web Audio API (opcional)
    this.soundEnabled = false;
    this.audioCtx = null;

    // Loop
    this.lastTime = performance.now();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height || 480;
    if (this.center) {
      this.center.x = this.canvas.width / 2;
      this.center.y = this.canvas.height / 2;
    }
  }

  initMembrane() {
    this.membraneNodes = [];
    for (let i = 0; i < this.membraneNodeCount; i++) {
      const angle = (i / this.membraneNodeCount) * Math.PI * 2;
      this.membraneNodes.push({
        baseAngle: angle,
        angle: angle,
        currentRadius: this.cellRadius,
        targetRadius: this.cellRadius,
        velocity: 0,
        health: 1.0, // Salud del segmento de membrana
        colorShift: 0
      });
    }
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      const isInside = Math.random() < 0.45;
      const dist = isInside ? (Math.random() * (this.cellRadius - 20)) : (this.cellRadius + 30 + Math.random() * 150);
      const angle = Math.random() * Math.PI * 2;
      
      this.particles.push({
        x: this.center.x + Math.cos(angle) * dist,
        y: this.center.y + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        type: isInside ? (Math.random() < 0.6 ? 'protein' : 'substrate') : 'substrate',
        size: Math.random() * 2.5 + 2.5,
        pulse: Math.random() * Math.PI
      });
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    if (this.soundEnabled && !this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    return this.soundEnabled;
  }

  playBiopulseSound(freq = 240, duration = 0.08) {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      // Ignorar fallos de audio policy
    }
  }

  injectSubstrate(amount = 25) {
    if (!this.isAlive) return;
    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = this.cellRadius + 40 + Math.random() * 90;
      this.particles.push({
        x: this.center.x + Math.cos(angle) * dist,
        y: this.center.y + Math.sin(angle) * dist,
        vx: (this.center.x - (this.center.x + Math.cos(angle) * dist)) * 0.008 + (Math.random() - 0.5),
        vy: (this.center.y - (this.center.y + Math.sin(angle) * dist)) * 0.008 + (Math.random() - 0.5),
        type: 'substrate',
        size: 3.5,
        pulse: 0
      });
    }
    this.playBiopulseSound(440, 0.12);
  }

  triggerPerturbation() {
    if (!this.isAlive) return;
    // Perturbación del medio: agitación caótica y degradación de membrana momentánea
    this.membraneIntegrity = Math.max(10, this.membraneIntegrity - 30);
    this.membraneNodes.forEach(node => {
      node.velocity += (Math.random() - 0.5) * 18;
      node.health = Math.max(0.2, node.health - 0.35);
    });
    this.playBiopulseSound(130, 0.25);
  }

  reset() {
    this.isAlive = true;
    this.isRunning = true;
    this.membraneIntegrity = 100;
    this.internalSubstrate = 40;
    this.internalProducts = 30;
    this.timeAlive = 0;
    this.initMembrane();
    this.initParticles();
    this.updateUIStatus();
  }

  update(dt) {
    if (!this.isRunning) return;

    this.timeAlive += dt;

    if (this.isAlive) {
      // 1. Metabolismo: Ingesta de sustrato exterior hacia el interior según permeabilidad
      const intakeRate = (this.substrateRate / 100) * (this.permeability / 100) * 1.5;
      this.internalSubstrate = Math.min(100, this.internalSubstrate + intakeRate * dt * 8);

      // 2. Proceso de Síntesis: Sustrato -> Proteínas / Componentes regeneradores
      const conversion = Math.min(this.internalSubstrate, 12 * dt);
      this.internalSubstrate -= conversion;
      this.internalProducts += conversion * 0.9;

      // 3. Tasa Metabólica Activa
      this.metabolicRate = Math.min(100, conversion * 18);

      // 4. Regeneración Autopoiética: Las proteínas reparan y producen la membrana
      const repairRate = (this.internalProducts / 100) * 14 * dt;
      this.internalProducts = Math.max(0, this.internalProducts - (repairRate * 1.2));

      // 5. Entropía degradativa del entorno
      const entropyLoss = (this.entropyRate / 100) * 12 * dt;
      this.membraneIntegrity = Math.max(0, Math.min(100, this.membraneIntegrity + repairRate - entropyLoss));

      // Verificar Clausura Operacional
      if (this.membraneIntegrity <= 5) {
        this.isAlive = false;
        this.playBiopulseSound(90, 0.5);
      }
    } else {
      // Célula lisiada: dispersión del contenido
      this.metabolicRate = 0;
      this.internalProducts = Math.max(0, this.internalProducts - 8 * dt);
      this.internalSubstrate = Math.max(0, this.internalSubstrate - 8 * dt);
    }

    // Actualización de nodos de la membrana elástica
    const now = performance.now() * 0.002;
    this.membraneNodes.forEach((node, idx) => {
      // Oscilación armónica orgánica
      const breath = Math.sin(now + idx * 0.4) * (this.isAlive ? 6 : 2);
      const target = (this.isAlive ? this.cellRadius : this.cellRadius * 1.4) + breath;
      
      // Física elástica de resortes
      const force = (target - node.currentRadius) * 0.08;
      node.velocity += force;
      node.velocity *= 0.85; // amortiguamiento
      node.currentRadius += node.velocity;

      // Salud del nodo dependiente de la integridad general
      node.health = Math.min(1, Math.max(0.1, this.membraneIntegrity / 100 + (Math.sin(now * 2 + idx) * 0.1)));
    });

    // Actualización de partículas
    this.particles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;

      // Distancia al centro celular
      const dx = p.x - this.center.x;
      const dy = p.y - this.center.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (this.isAlive) {
        // Interacción con la membrana semipermeable
        if (p.type === 'substrate' && dist > this.cellRadius - 10 && dist < this.cellRadius + 20) {
          // Probabilidad de cruzar al interior dependiente de la permeabilidad
          if (Math.random() < (this.permeability / 100) * 0.04) {
            p.vx *= 0.95;
            p.vy *= 0.95;
          }
        }

        // Si es proteína interna, rebota en la membrana para mantenerse dentro (clausura)
        if (p.type === 'protein') {
          if (dist > this.cellRadius - 15) {
            const angle = Math.atan2(dy, dx);
            p.x = this.center.x + Math.cos(angle) * (this.cellRadius - 16);
            p.y = this.center.y + Math.sin(angle) * (this.cellRadius - 16);
            p.vx = -p.vx * 0.7;
            p.vy = -p.vy * 0.7;
          }
        }
      }

      // Límites del canvas
      if (p.x < 10 || p.x > this.canvas.width - 10) p.vx *= -1;
      if (p.y < 10 || p.y > this.canvas.height - 10) p.vy *= -1;
    });

    // Control de límite de partículas
    if (this.particles.length > 90) {
      this.particles.splice(0, 10);
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Fondo estético con microrejilla cibernética
    this.drawGrid();

    // Dibujar Halo Celular y Clausura Operacional
    if (this.isAlive) {
      const gradient = this.ctx.createRadialGradient(
        this.center.x, this.center.y, 10,
        this.center.x, this.center.y, this.cellRadius * 1.5
      );
      gradient.addColorStop(0, 'rgba(94, 200, 192, 0.20)');
      gradient.addColorStop(0.6, 'rgba(58, 69, 181, 0.12)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(this.center.x, this.center.y, this.cellRadius * 1.5, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Dibujar Partículas
    this.particles.forEach(p => {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      if (p.type === 'substrate') {
        this.ctx.fillStyle = '#5ec8c0'; // Aguamarina: sustrato
        this.ctx.shadowColor = '#5ec8c0';
        this.ctx.shadowBlur = 6;
      } else if (p.type === 'protein') {
        this.ctx.fillStyle = '#8e98ff'; // Lavanda: proteína/componente interno
        this.ctx.shadowColor = '#8e98ff';
        this.ctx.shadowBlur = 8;
      } else {
        this.ctx.fillStyle = '#f59e0b'; // Ámbar
        this.ctx.shadowBlur = 0;
      }
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    });

    // Dibujar la Membrana Deformable Auto-producida
    this.drawMembrane();

    // Núcleo Metabólico / Red Catalítica
    this.drawMetabolicCore();
  }

  drawGrid() {
    this.ctx.strokeStyle = 'rgba(120, 132, 240, 0.10)';
    this.ctx.lineWidth = 1;
    const step = 40;
    for (let x = 0; x < this.canvas.width; x += step) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvas.height);
      this.ctx.stroke();
    }
    for (let y = 0; y < this.canvas.height; y += step) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.canvas.width, y);
      this.ctx.stroke();
    }
  }

  drawMembrane() {
    if (this.membraneNodes.length < 3) return;

    this.ctx.save();
    this.ctx.beginPath();

    // Interpolación suave entre nodos de la membrana con curvas Bézier
    const firstPoint = this.getNodeCoords(0);
    this.ctx.moveTo(firstPoint.x, firstPoint.y);

    for (let i = 0; i < this.membraneNodes.length; i++) {
      const nextIdx = (i + 1) % this.membraneNodes.length;
      const curr = this.getNodeCoords(i);
      const next = this.getNodeCoords(nextIdx);
      const midX = (curr.x + next.x) / 2;
      const midY = (curr.y + next.y) / 2;
      this.ctx.quadraticCurveTo(curr.x, curr.y, midX, midY);
    }
    this.ctx.closePath();

    // Relleno citoplasmático
    if (this.isAlive) {
      this.ctx.fillStyle = 'rgba(94, 200, 192, 0.10)';
    } else {
      this.ctx.fillStyle = 'rgba(239, 68, 68, 0.06)';
    }
    this.ctx.fill();

    // Borde de la Bicapa Lipídica / Membrana Autopoiética
    if (this.isAlive) {
      this.ctx.strokeStyle = `rgba(94, 200, 192, ${Math.max(0.3, this.membraneIntegrity / 100)})`;
      this.ctx.lineWidth = Math.max(2, (this.membraneIntegrity / 100) * 6);
      this.ctx.shadowColor = '#5ec8c0';
      this.ctx.shadowBlur = 15;
    } else {
      this.ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
      this.ctx.lineWidth = 2;
      this.ctx.setLineDash([6, 6]); // Membrana rota / lisis
      this.ctx.shadowBlur = 0;
    }
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.ctx.restore();

    // Dibujar unidades estructurales (liposomas en los nodos)
    this.membraneNodes.forEach((node, i) => {
      const coords = this.getNodeCoords(i);
      this.ctx.beginPath();
      this.ctx.arc(coords.x, coords.y, this.isAlive ? 4.5 : 2.5, 0, Math.PI * 2);
      this.ctx.fillStyle = this.isAlive ? '#e2fbf8' : '#f87171';
      this.ctx.fill();
    });
  }

  getNodeCoords(index) {
    const node = this.membraneNodes[index];
    return {
      x: this.center.x + Math.cos(node.angle) * node.currentRadius,
      y: this.center.y + Math.sin(node.angle) * node.currentRadius
    };
  }

  drawMetabolicCore() {
    if (!this.isAlive) return;

    // Núcleo dinámico de transformación molecular
    const corePulse = Math.sin(performance.now() * 0.005) * 5;
    this.ctx.beginPath();
    this.ctx.arc(this.center.x, this.center.y, 22 + corePulse, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(142, 152, 255, 0.28)';
    this.ctx.fill();

    this.ctx.strokeStyle = '#8e98ff';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Texto central
    this.ctx.font = 'bold 10px Montserrat, sans-serif';
    this.ctx.fillStyle = '#dfe2ff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('RED CATALÍTICA', this.center.x, this.center.y + 4);
  }

  animate(timestamp) {
    const dt = Math.min((timestamp - this.lastTime) / 1000, 0.1);
    this.lastTime = timestamp;

    this.update(dt);
    this.draw();
    this.updateUIStatus();

    requestAnimationFrame(this.animate);
  }

  updateUIStatus() {
    const healthEl = document.getElementById('stat-membrane-health');
    const statusEl = document.getElementById('stat-system-status');
    const rateEl = document.getElementById('stat-metabolic-rate');
    const closureEl = document.getElementById('stat-operational-closure');

    if (healthEl) healthEl.innerText = `${Math.round(this.membraneIntegrity)}%`;
    if (rateEl) rateEl.innerText = `${Math.round(this.metabolicRate)} flux/s`;
    
    if (statusEl) {
      if (this.isAlive) {
        statusEl.innerHTML = '<span style="color: #5ec8c0;">● VIVO (Autopoiético)</span>';
      } else {
        statusEl.innerHTML = '<span style="color: #f87171;">✖ COLAPSO (Lisis/Entropía)</span>';
      }
    }

    if (closureEl) {
      if (this.isAlive && this.membraneIntegrity > 30) {
        closureEl.innerHTML = '<span style="color: #5ec8c0;">Mantenida</span>';
      } else if (this.isAlive) {
        closureEl.innerHTML = '<span style="color: #f59e0b;">Crítica</span>';
      } else {
        closureEl.innerHTML = '<span style="color: #ef4444;">Perdida</span>';
      }
    }
  }
}

// Inicializar cuando el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('biolab-canvas');
  if (canvas) {
    window.bioLabSimulator = new AutopoieticCellSimulator('biolab-canvas');

    // Conectar Sliders
    const substrateSlider = document.getElementById('slider-substrate');
    const entropySlider = document.getElementById('slider-entropy');
    const permeabilitySlider = document.getElementById('slider-permeability');

    if (substrateSlider) {
      substrateSlider.addEventListener('input', (e) => {
        window.bioLabSimulator.substrateRate = parseFloat(e.target.value);
        document.getElementById('val-substrate').innerText = e.target.value;
      });
    }

    if (entropySlider) {
      entropySlider.addEventListener('input', (e) => {
        window.bioLabSimulator.entropyRate = parseFloat(e.target.value);
        document.getElementById('val-entropy').innerText = e.target.value;
      });
    }

    if (permeabilitySlider) {
      permeabilitySlider.addEventListener('input', (e) => {
        window.bioLabSimulator.permeability = parseFloat(e.target.value);
        document.getElementById('val-permeability').innerText = e.target.value;
      });
    }

    // Botones de acción
    const btnInject = document.getElementById('btn-inject-nutrient');
    if (btnInject) {
      btnInject.addEventListener('click', () => window.bioLabSimulator.injectSubstrate());
    }

    const btnPerturb = document.getElementById('btn-perturb-cell');
    if (btnPerturb) {
      btnPerturb.addEventListener('click', () => window.bioLabSimulator.triggerPerturbation());
    }

    const btnReset = document.getElementById('btn-reset-biolab');
    if (btnReset) {
      btnReset.addEventListener('click', () => window.bioLabSimulator.reset());
    }

    const btnSound = document.getElementById('btn-sound-toggle');
    if (btnSound) {
      btnSound.addEventListener('click', () => {
        const isSound = window.bioLabSimulator.toggleSound();
        btnSound.innerText = isSound ? '🔊 Sonido: ON' : '🔇 Sonido: OFF';
      });
    }
  }
});
