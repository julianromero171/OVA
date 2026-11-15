# Autopoiesis y sistemas vivos (Maturana y Varela)

**Objeto Virtual de Aprendizaje (OVA) · Tema N° 22**

Teoría General de Sistemas (TGS) · Ingeniería de Sistemas · Periodo 2026-2
Autor: **Romero Herrera Julián Esteban** · Modalidad individual

| Recurso | Enlace |
| :-- | :-- |
| OVA publicada (GitHub Pages) | https://github.com/julianromero171/OVA |
| Repositorio |(https://github.com/julianromero171/OVA.git) |
| Ficha técnica (PDF) | [`docs/Ficha_Tecnica_OVA_Autopoiesis.pdf`](docs/Ficha_Tecnica_OVA_Autopoiesis.pdf) |
| Ficha técnica (Markdown) | [`FICHA_TECNICA.md`](FICHA_TECNICA.md) |

---

## Contenido

1. [Descripción](#1-descripción)
2. [Objetivos](#2-objetivos)
3. [Lineamientos del proyecto y cómo se cumplen](#3-lineamientos-del-proyecto-y-cómo-se-cumplen)
4. [Criterios de evaluación](#4-criterios-de-evaluación)
5. [Funcionalidades](#5-funcionalidades)
6. [Tecnologías y herramientas](#6-tecnologías-y-herramientas)
7. [Estructura del proyecto](#7-estructura-del-proyecto)
8. [Ejecución local y publicación](#8-ejecución-local-y-publicación)
9. [Actividades externas (Wordwall y Educaplay)](#9-actividades-externas-wordwall-y-educaplay)
10. [Accesibilidad](#10-accesibilidad)
11. [Créditos](#11-créditos)
12. [Declaración de uso de inteligencia artificial](#12-declaración-de-uso-de-inteligencia-artificial)
13. [Licencia](#13-licencia)
14. [Referencias](#14-referencias)

---

## 1. Descripción

Este OVA es un sitio web educativo (HTML, CSS y JavaScript) que explica qué distingue a un sistema vivo según Humberto Maturana y Francisco Varela: la **autopoiesis**, es decir, la organización de una red de procesos que produce los mismos componentes que la constituyen y que delimita su propia frontera. El recorrido parte del contexto histórico de la teoría, desarrolla sus conceptos centrales (organización y estructura, clausura operacional, acoplamiento estructural, determinismo estructural, autopoiesis frente a alopoiesis), los relaciona con la Teoría General de Sistemas y con ejemplos de la ingeniería de sistemas, y termina con práctica y evaluación: ejercicios con retroalimentación, cinco juegos, tres videos curados y un quiz con puntaje automático.

Fechas clave del proyecto:

| Actividad | Fecha |
| :-- | :-- |
| Envío del enlace al estudiante integrador (tema 24, Acosta Contreras Elibardo) | 17/11/2026 |
| Entrega final por la plataforma institucional | 17/11/2026 |
| Sustentación oral | 24/11/2026 |

## 2. Objetivos

**Objetivo general.** Diseñar e implementar un Objeto Virtual de Aprendizaje (OVA) funcional, accesible y didáctico que permita comprender y enseñar la teoría de la autopoiesis y los sistemas vivos de Maturana y Varela como tema específico de la Teoría General de Sistemas.

**Objetivos específicos.**

1. Investigar y sintetizar el marco conceptual de la autopoiesis a partir de fuentes académicas confiables, citadas en APA 7.
2. Aplicar principios de diseño instruccional y de experiencia de usuario en la construcción del OVA.
3. Desarrollar contenidos interactivos (juegos, ejercicios y quiz) que fomenten el aprendizaje activo.
4. Publicar y socializar el OVA en una plataforma web pública (GitHub Pages).
5. Sustentar oralmente el proyecto, demostrando dominio del tema y del código.

## 3. Lineamientos del proyecto y cómo se cumplen

| # | Elemento obligatorio | Implementación en el OVA | Sección (`id`) |
| :-: | :-- | :-- | :-- |
| 01 | Contextualización y justificación | Origen de la teoría en Chile a comienzos de la década de 1970, el problema de definir lo vivo y su pertinencia para la TGS y la ingeniería. | `#contexto` |
| 02 | Explicación teórica con referencias | Autores, autopoiesis, organización y estructura, membrana, clausura operacional, acoplamiento y determinismo estructural, con citas APA 7. | `#teoria`, `#comparativa` |
| 03 | Ejemplos aplicados a casos reales | La célula; sistemas informáticos de autorreparación (como analogía); los sistemas sociales según Luhmann. | `#casos` |
| 04 | Ejercicios con retroalimentación | Casos de análisis con retroalimentación inmediata y explicada para cada opción. | `#ejercicios` |
| 05 | Juegos interactivos (2 a 5) | 5 juegos: Bio-Lab, Desafío ontológico, Aventura de acoplamiento, Wordwall y Educaplay. | `#laboratorio` |
| 06 | Videos (propios o curados) | 3 videos curados de YouTube, incrustados, con preguntas guía. | `#videoteca` |
| 07 | Quiz con puntaje automático | 10 preguntas, nota automática de 0.0 a 5.0 y justificación de cada respuesta. | `#evaluacion` |
| 08 | Diseño visual con estilo propio | Identidad visual creada por el autor en Canva (azul marino, formas onduladas granuladas azul/turquesa, tarjetas blancas, titulares en mayúscula) y animaciones. | Todo el sitio |
| 09 | Navegación clara y responsive | Menú fijo, menú móvil, barra de progreso y diseño adaptable. | Todo el sitio |
| 10 | Página de créditos | Autoría, herramientas, declaración de IA y referencias APA 7. | `#creditos` |

## 4. Criterios de evaluación

| Criterio | Peso | Evidencia |
| :-- | :-: | :-- |
| Profundidad conceptual | 25 % | Módulos de contexto, teoría y comparación con referencias académicas. |
| Interactividad | 20 % | 5 juegos, ejercicios con retroalimentación y quiz con puntaje automático. |
| Diseño visual y creatividad | 15 % | Identidad propia, animaciones y coherencia visual en todo el OVA. |
| Funcionalidad y navegación | 15 % | Publicado en GitHub Pages, sin errores, navegación intuitiva y responsive. |
| Documentación | 5 % | Este README, la ficha técnica en PDF, créditos y referencias. |
| Sustentación oral | 20 % | Dominio del tema y del código (24/11/2026). |

## 5. Funcionalidades

- **Módulos de contenido:** inicio, contextualización, teoría, comparativa autopoiesis vs. alopoiesis, casos reales, ejercicios, laboratorio de juegos, videoteca, evaluación y créditos.
- **Juego 1 · Bio-Lab:** simulador en Canvas 2D de una célula que mantiene su membrana mientras recibe sustrato y sufre degradación.
- **Juego 2 · Desafío ontológico:** clasificar sistemas como autopoiéticos o alopoiéticos con retroalimentación inmediata.
- **Juego 3 · Aventura de acoplamiento:** decisiones ante perturbaciones del medio según el determinismo estructural.
- **Juegos 4 y 5 · Wordwall y Educaplay:** actividades externas creadas por el autor e incrustadas en el sitio.
- **Ejercicios** con retroalimentación por opción y **quiz** de 10 preguntas con nota automática.
- **Videoteca** con tres videos incrustados de YouTube.
- **Lectura en voz alta** (Web Speech API) y efectos de sonido generados con Web Audio API.

## 6. Tecnologías y herramientas

| Categoría | Herramientas |
| :-- | :-- |
| Desarrollo web | HTML5 semántico, CSS3 (variables, animaciones, *media queries*), JavaScript ES6 sin *frameworks* |
| APIs del navegador | Canvas 2D (simulador), Web Audio (sonidos), Web Speech (lectura en voz alta) |
| Diseño visual | Canva (guía de estilo del autor), Google Fonts: Montserrat y Outfit |
| Juegos y actividades | JavaScript propio, Wordwall, Educaplay |
| Videos | YouTube (videos curados, incrustados) |
| Versionado y publicación | Git, GitHub, GitHub Pages |
| Citación | Normas APA 7; organización de referencias según Varón Castañeda (2017) sobre gestores bibliográficos (Zotero, Mendeley) |
| Asistente de IA | Google Antigravity (ver [sección 12](#12-declaración-de-uso-de-inteligencia-artificial)) |

## 7. Estructura del proyecto

```
OVA/
├── index.html                      # Página única del OVA (todas las secciones)
├── css/
│   └── styles.css                  # Identidad visual, animaciones y diseño responsive
├── js/
│   ├── app.js                      # Navegación, menú móvil, progreso, accesibilidad, ejercicios
│   ├── simulator.js                # Juego 1: simulador Bio-Lab (Canvas 2D)
│   ├── games.js                    # Juegos 2 y 3
│   ├── quiz.js                     # Quiz con puntaje automático
│   └── external.js                 # Juegos 4 y 5: configuración EXTERNAL_ACTIVITIES (Wordwall/Educaplay)
├── docs/
│   ├── ficha_tecnica.html          # Fuente de la ficha técnica
│   ├── Ficha_Tecnica_OVA_Autopoiesis.pdf
│   ├── contenido_revisado.md       # Contenido académico revisado con citas
│   └── referencias_apa.md          # Lista de referencias APA 7
├── FICHA_TECNICA.md                # Versión resumida de la ficha técnica
├── README.md
└── .nojekyll                       # Publica el sitio tal cual en GitHub Pages
```

## 8. Ejecución local y publicación

### Ejecución local

```bash
git clone https://github.com/julianromero171/OVA.git
cd OVA
```

Abra `index.html` en un navegador moderno (Chrome, Edge o Firefox). No requiere instalación, servidor ni base de datos. Para que los videos de YouTube y las actividades externas se carguen sin restricciones, se recomienda servir la carpeta con un servidor local, por ejemplo:

```bash
python -m http.server 8000
# luego abrir http://localhost:8000
```

### Publicación en GitHub Pages

1. Suba los cambios a la rama `main` (`git add .`, `git commit -m "..."`, `git push`).
2. En el repositorio, vaya a **Settings → Pages**.
3. En **Build and deployment → Source** elija *Deploy from a branch*, rama `main`, carpeta `/ (root)` y guarde.
4. En uno o dos minutos el OVA queda disponible en https://julianromero171.github.io/OVA/

## 9. Actividades externas (Wordwall y Educaplay)

Los juegos 4 y 5 se cargan desde el objeto `EXTERNAL_ACTIVITIES`, al inicio de [`js/external.js`](js/external.js):

```js
const EXTERNAL_ACTIVITIES = {
  wordwall:  { embed: '', url: '' },
  educaplay: { embed: '', url: '' }
};
```

- `embed`: dirección del `iframe` que entrega la plataforma (por ejemplo `https://wordwall.net/embed/ID`). También se acepta una cadena de texto simple en lugar del objeto; en ese caso se usa como `embed` y como `url`.
- `url`: enlace público de la actividad (se muestra como alternativa para abrirla en otra pestaña).

Pasos:

1. Cree la actividad en [Wordwall](https://wordwall.net/) (por ejemplo, *Unir parejas* concepto–definición) y en [Educaplay](https://www.educaplay.com/) (por ejemplo, *Crucigrama* o *Relacionar*). El contenido sugerido está en [`docs/contenido_revisado.md`](docs/contenido_revisado.md), sección «Actividades externas».
2. En cada plataforma use **Compartir → Insertar / Embed** y copie únicamente el valor `src="..."` del código `<iframe>`.
3. Péguelo en `embed` y el enlace público en `url`; guarde, haga `commit` y `push`.
4. Mientras los campos estén vacíos, el OVA muestra el aviso «Actividad en preparación» en lugar del juego.

## 10. Accesibilidad

- HTML semántico y atributos ARIA en la navegación y los controles interactivos.
- Navegación por teclado y foco visible.
- Alto contraste entre texto oscuro y tarjetas blancas, y entre texto blanco y fondo azul marino.
- Lectura en voz alta del contenido (Web Speech API).
- Diseño responsive para teléfonos, tabletas y escritorio.
- Las animaciones respetan la preferencia del sistema `prefers-reduced-motion`.

## 11. Créditos

- **Autoría, contenido, diseño y desarrollo:** Romero Herrera Julián Esteban.
- **Teoría:** Humberto Maturana y Francisco Varela; los demás autores se citan en las [referencias](#14-referencias).
- **Videos:** pertenecen a sus respectivos canales y autores; se incrustan desde YouTube con fines educativos y sin modificación.
- **Tipografías:** Montserrat y Outfit, de Google Fonts (SIL Open Font License 1.1).
- **Actividades externas:** creadas por el autor en Wordwall y Educaplay.
- **Diseño visual:** guía de estilo creada por el autor en Canva.

## 12. Declaración de uso de inteligencia artificial

De acuerdo con el numeral 8 de las orientaciones del proyecto, se declara que se utilizó **Google Antigravity**, un entorno de desarrollo con agentes de inteligencia artificial, como apoyo para generar y depurar código, proponer redacciones y revisar el formato de las referencias. El diseño visual parte de una guía de estilo creada por el autor en Canva. Todo el contenido fue revisado, contrastado con las fuentes citadas y ajustado por el autor, quien asume la responsabilidad de su exactitud y puede explicarlo y defenderlo en la sustentación.

## 13. Licencia

© 2026 Romero Herrera Julián Esteban. El código fuente de este repositorio se comparte con fines académicos; puede consultarse y reutilizarse citando al autor. Los textos y videos de terceros conservan los derechos de sus autores y se usan con fines educativos, debidamente referenciados.

## 14. Referencias

Lista en formato APA 7.ª edición, en orden alfabético. La versión completa y mantenida está en [`docs/referencias_apa.md`](docs/referencias_apa.md).

<!--REFS-->
Bertalanffy, L. von. (1968). *General system theory: Foundations, development, applications*. George Braziller.

Canal13C. (2025, 9 de enero). *La entrevista al académico Humberto Maturana que inspiró a Mon Laferte | La Belleza de Pensar* [Video]. YouTube. https://www.youtube.com/watch?v=19uV8wKpkZw

Google. (2026). *Google Antigravity* [Plataforma de desarrollo de software con agentes de inteligencia artificial]. https://antigravity.google/

humanista. (2010, 10 de julio). *Francisco Varela (Neurobiologo) - La Belleza-Del-Pensar-2001* [Video]. YouTube. https://www.youtube.com/watch?v=3-VydyPdhhg

Kubernetes Authors. (s. f.). *Controllers*. Kubernetes Documentation. Recuperado el 15 de noviembre de 2026, de https://kubernetes.io/docs/concepts/architecture/controller/

Lettvin, J. Y., Maturana, H. R., McCulloch, W. S., y Pitts, W. H. (1959). What the frog's eye tells the frog's brain. *Proceedings of the IRE, 47*(11), 1940–1951. https://doi.org/10.1109/JRPROC.1959.287207

Luhmann, N. (1998). *Sistemas sociales: Lineamientos para una teoría general* (S. Pappe y B. Erker, Trads.; 2.ª ed.). Anthropos; Universidad Iberoamericana; CEJA. (Trabajo original publicado en 1984)

Maturana, H. (1997). *La objetividad: Un argumento para obligar*. Dolmen.

Maturana, H. R., y Varela, F. J. (1973). *De máquinas y seres vivos: Una teoría sobre la organización biológica*. Editorial Universitaria.

Maturana, H. R., y Varela, F. J. (1980). *Autopoiesis and cognition: The realization of the living* (Boston Studies in the Philosophy of Science, Vol. 42). D. Reidel. https://doi.org/10.1007/978-94-009-8947-4

Maturana, H. R., y Varela, F. J. (1984). *El árbol del conocimiento: Las bases biológicas del entendimiento humano*. Editorial Universitaria.

McAdoo, T. (2023, 7 de abril). *How to cite ChatGPT*. APA Style Blog. https://apastyle.apa.org/blog/how-to-cite-chatgpt

Mingers, J. (2002). Can social systems be autopoietic? Assessing Luhmann's social theory. *The Sociological Review, 50*(2), 278–299. https://doi.org/10.1111/1467-954X.00367

Puerto de Ideas. (2023, 29 de noviembre). *Seres vivos como máquinas. Maturana, Varela y el impacto de la autopoiesis - Juan Carlos Letelier* [Video]. YouTube. https://www.youtube.com/watch?v=8TbqdtgmNZc

Varela, F. J. (1979). *Principles of biological autonomy*. North Holland.

Varela, F. G., Maturana, H. R., y Uribe, R. (1974). Autopoiesis: The organization of living systems, its characterization and a model. *BioSystems, 5*(4), 187–196. https://doi.org/10.1016/0303-2647(74)90031-8

Varela, F. J., Thompson, E., y Rosch, E. (1991). *The embodied mind: Cognitive science and human experience*. MIT Press. https://doi.org/10.7551/mitpress/6730.001.0001

Varón Castañeda, C. M. (2017). *Gestores bibliográficos: Recomendaciones para su aprovechamiento en la academia*. Journals & Authors. https://doi.org/10.25012/isbn.9789585623309
<!--/REFS-->
