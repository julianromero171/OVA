# Objeto Virtual de Aprendizaje (OVA): Autopoiesis y Sistemas Vivos
### Humberto Maturana y Francisco Varela · Tema 22
**Universidad Simón Bolívar** · Facultad de Ingenierías · Ingeniería de Sistemas  
**Asignatura:** Teoría General de Sistemas (TGS) · Periodo 2026-2  
**Estudiante Responsable:** ROMERO HERRERA JULIAN ESTEBAN  

---

## 📋 1. Descripción del Proyecto

El presente **Objeto Virtual de Aprendizaje (OVA)** es una plataforma web didáctica, interactiva, accesible y de alta fidelidad orientada a la enseñanza y divulgación del concepto de **Autopoiesis y Sistemas Vivos**, propuesto originalmente por los científicos chilenos **Humberto Maturana Romesín** y **Francisco Varela García** a principios de los años 70.

El proyecto aborda cómo los seres vivos se definen ontológicamente a partir de su **organización y clausura operacional** en contraposición a las máquinas alopoiéticas tradicionales, y cómo estos principios se traducen en la ingeniería de sistemas contemporánea (sistemas de computación autocurativos *Self-healing*, microservicios resilientes, ciberseguridad adaptativa y sistemas multiagente autónomos).

---

## 🎯 2. Objetivos del Proyecto

### Objetivo General
Diseñar e implementar un Objeto Virtual de Aprendizaje (OVA) funcional, accesible y didáctico que permita comprender, simular y enseñar el modelo de autopoiesis, clausura operacional y acoplamiento estructural formulado por Humberto Maturana y Francisco Varela, vinculándolo con la Teoría General de Sistemas y la Ingeniería de Sistemas.

### Objetivos Específicos
1. **Investigar y sintetizar el marco conceptual** de la autopoiesis a partir de fuentes académicas confiables (Maturana, Varela, Luhmann, Von Bertalanffy).
2. **Aplicar principios de diseño instruccional y UX/UI**, garantizando una navegación intuitiva, adaptabilidad móvil (responsive) y accesibilidad (contraste, modo oscuro/claro, escala tipográfica y síntesis de voz Web Speech API).
3. **Desarrollar contenidos interactivos y gamificación**:
   - **Juego 1 (Bio-Lab Simulador):** Simulación física en Canvas 2D de una célula autopoiética con membrana elástica deformable, metabolitos y degradación entrópica en tiempo real.
   - **Juego 2 (Desafío Ontológico):** Juego de clasificación rápida de sistemas autopoiéticos vs. alopoiéticos con retroalimentación inmediata.
   - **Juego 3 (Aventura de Acoplamiento Estructural):** Simulador de toma de decisiones frente a perturbaciones del medio basadas en determinismo estructural.
4. **Evaluar el aprendizaje** a través de un quiz automatizado de 10 reactivos y la emisión en vivo de un certificado de suficiencia académica oficial emitido por la Universidad Simón Bolívar.
5. **Documentar y publicar la OVA** en plataformas públicas (GitHub Pages, Netlify o Vercel), facilitando la integración con la OVA final (Tema 24).

---

## 🧩 3. Estructura de Contenidos y Módulos de la OVA

| Módulo | Elemento Obligatorio | Descripción |
| :--- | :--- | :--- |
| **01** | Contextualización y Justificación | Origen del concepto, crítica al reduccionismo y su impacto en la ingeniería moderna. |
| **02** | Explicación Teórica y Epistemología | Biografía de Maturana y Varela; Clausura Operacional, Membrana Dinámica, Acoplamiento y Determinismo Estructural. |
| **03** | Comparativa Sistémica | Matriz comparativa detallada: Autopoiesis vs. Alopoiesis. |
| **04** | Ejemplos en Casos Reales | Célula biológica, clústeres de Kubernetes (*Self-healing*), sistemas sociales según Niklas Luhmann. |
| **05** | Ejercicios con Retroalimentación | 3 casos de análisis crítico con retroalimentación inmediata y explicaciones pedagógicas. |
| **06** | Gamificación y Laboratorio | 3 juegos interactivos: Simulador en Canvas Bio-Lab, Desafío Ontológico y Aventura de Acoplamiento. |
| **07** | Videoteca Curada | Conferencias curadas de Maturana, Varela y explicaciones audiovisuales de la TGS con guías de observación. |
| **08** | Evaluación y Certificado | Quiz interactivo de 10 preguntas con puntaje automático y generador de certificado descargable/imprimible en PDF. |
| **09** | Ficha Técnica Oficial | Modal emergente con opción de descarga directa en PDF para entrega académica. |
| **10** | Créditos y Bibliografía | Créditos autorales, declaración ética de uso de IA y referencias completas en formato APA 7ma edición. |

---

## 🛠️ 4. Tecnologías y Arquitectura de Software

- **Frontend Estructural:** HTML5 Semántico con estándares de accesibilidad WAI-ARIA.
- **Estilos y Maquetación:** CSS3 puro con variables CSS personalizadas, Glassmorphism, animaciones orgánicas fluidas, media queries responsive y soporte de impresión PDF (`@media print`).
- **Lógica e Interactividad:** JavaScript moderno (ES6+) modular y sin librerías externas pesadas para un rendimiento ultra rápido.
- **Motor Gráfico:** HTML5 Canvas 2D API para física de partículas y simulación de deformación elástica de membranas biológicas.
- **Audio Procedural:** Web Audio API para generación de pulsos y sonidos reactivos sin archivos de audio externos.
- **Accesibilidad:** Web Speech API para lectura en voz alta interactiva.
- **Tipografías:** Google Fonts (*Plus Jakarta Sans* y *JetBrains Mono*).

---

## 🚀 5. Instrucciones de Despliegue y Ejecución Local

### Ejecución Local Rápida
1. Clonar el repositorio o descomprimir el archivo `.zip`:
   ```bash
   git clone https://github.com/usuario/ova-autopoiesis.git
   cd ova-autopoiesis
   ```
2. Abrir directamente el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari o Brave). No requiere instalación de servidores pesados ni bases de datos.

### Despliegue en GitHub Pages
1. Subir los archivos al repositorio en la rama `main`.
2. Ir a **Settings ➔ Pages**.
3. En **Branch**, seleccionar `main` y la carpeta `/ (root)`. Guardar.
4. En cuestión de minutos la OVA estará publicada en:  
   `https://<tu-usuario>.github.io/<nombre-del-repo>/`

---

## 🗣️ 6. Guía Rápida para la Sustentación Oral (20%)

Para defender exitosamente el proyecto ante el docente y compañeros:
1. **Definición Clave:** Explicar que un sistema es autopoiético si la red de transformaciones moleculares produce los mismos componentes que regeneran la red y definen su borde espacial (la membrana).
2. **Diferencia con Alopoiesis:** Demostrar que una fábrica o un robot ensamblador es alopoiético porque el producto de sus procesos es un objeto ajeno a sí mismo.
3. **Clausura Operacional vs Apertura Termodinámica:** Explicar que la célula es abierta a la energía y materia (consume nutrientes del medio), pero cerrada en su lógica operacional interna.
4. **Demostración en Vivo:**
   - Abrir el simulador **Bio-Lab**, inyectar sustrato y aumentar la entropía para mostrar cómo la membrana lucha por auto-repararse antes de la lisis.
   - Mostrar el ejercicio interactivo y explicar el concepto de **Determinismo Estructural**.
   - Completar el quiz y generar el certificado oficial en vivo.

---

## 📚 7. Referencias Bibliográficas (APA 7ma Edición)

- Maturana, H. R., & Varela, F. J. (1973/1980). *Autopoiesis and Cognition: The Realization of the Living*. Boston Studies in the Philosophy of Science, Vol. 42. D. Reidel Publishing Company.
- Maturana, H. R., & Varela, F. J. (1984). *El Árbol del Conocimiento: Las bases biológicas del entendimiento humano*. Editorial Universitaria.
- Maturana, H. R. (1997). *La objetividad: Un argumento para obligar*. Dolmen Ediciones.
- Varela, F. J. (1979). *Principles of Biological Autonomy*. North Holland, New York.
- Luhmann, N. (1998). *Sistemas sociales: Lineamientos para una teoría general*. Editorial Anthropos / Universidad Iberoamericana.
- Von Bertalanffy, L. (1968). *General System Theory: Foundations, Development, Applications*. George Braziller.
