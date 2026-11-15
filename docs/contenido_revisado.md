# Contenido revisado del OVA — "Autopoiesis y sistemas vivos (Maturana y Varela)"

> Autor del OVA: ROMERO HERRERA JULIÁN ESTEBAN · Teoría General de Sistemas (TGS) · Ingeniería de Sistemas · Periodo 2026-2 · Tema N° 22
> Archivo de contenido académico para integrar en `index.html`, `js/games.js` y `js/quiz.js`. Las citas siguen APA 7 en español ("y" en lugar de "&"). Todas las citas en el texto tienen su entrada en `docs/referencias_apa.md`.

## 0. Notas para `web` (cómo usar este archivo)

- Se conservan TODAS las secciones, ejercicios, juegos y preguntas del quiz; solo se reescribe la redacción y se corrigen errores.
- Cada bloque indica el elemento HTML donde va (por id de sección y tipo de elemento). Donde dice **Cita:** va en la caja `.academic-citation` (o equivalente) como texto: `Fuente: (Autor, año)`.
- **Se eliminaron los números de página no verificados** ("p. 68", "p. 33", "Cap. 5"). No se usan citas textuales largas; el texto es paráfrasis propia.
- Título exacto del OVA (en `<title>`, h1, certificado, footer, ficha): **Autopoiesis y sistemas vivos (Maturana y Varela)**
- Sugerencia de `<title>`: `Autopoiesis y sistemas vivos (Maturana y Varela) | OVA TGS 2026-2`
- Sugerencia de `<meta name="description">`: `OVA interactivo sobre la autopoiesis y los sistemas vivos según Humberto Maturana y Francisco Varela. Teoría General de Sistemas, Ingeniería de Sistemas, periodo 2026-2.`
- En el quiz, ejercicios y juego 3 **se reordenaron las opciones** para que la respuesta correcta no sea siempre la "B" (ver índices `correct`).
- No mencionar ninguna universidad (las reglas no nombran una). La "constancia" del quiz no es un certificado oficial: usar "Constancia de culminación (formativa, no oficial)".

### Correcciones factuales principales (resumen)
1. Kubernetes **no** está "inspirado en la autopoiesis": su documentación explica los controladores con la analogía del termostato (bucle de control) (Kubernetes Authors, s. f.). Se presenta como **analogía cibernética**, y se aclara que un clúster es alopoiético.
2. La distinción autopoiesis/alopoiesis es de **Maturana y Varela (1973)**, no "de la TGS".
3. "Autopoiesis de 3er orden (Luhmann)" era incorrecto: Maturana y Varela (1984) hablan de **unidades de tercer orden** (fenómenos sociales entre organismos); la tesis de que la sociedad es autopoiética por sus comunicaciones es **de Luhmann (1984/1998)** y es debatida; Maturana y Varela no la adoptaron (Mingers, 2002).
4. Varela no fue "Director CNRS": fue **director de investigación del CNRS** (cargo de investigador) en el laboratorio LENA, París.
5. Maturana: Premio Nacional de **Ciencias Naturales** de Chile (1994).
6. La frase entre comillas atribuida a Maturana ("Todo lo dicho es dicho por un observador…") no tenía fuente/página verificada: se reemplaza por paráfrasis citada (Maturana y Varela, 1980).
7. La cita "parásitos moleculares" atribuida a Maturana y Varela sobre los virus no está verificada: se elimina.
8. Bertalanffy no reducía los sistemas a "entrada → proceso → salida": describía a los organismos como **sistemas abiertos** en estado estacionario (Bertalanffy, 1968). Se corrigió el contraste.
9. Célula: la síntesis de fosfolípidos no ocurre "a través del ciclo de Krebs"; se corrigió la descripción bioquímica.
10. "Enjambre de hormigas = autopoiético" es discutible (Maturana y Varela no afirman que una colonia sea autopoiética): la tarjeta pasa a "Hormiga obrera (un individuo)".

---

## 1. `#inicio` — Portada (hero)

- **Subtítulo (hero-subtitle):** OBJETO VIRTUAL DE APRENDIZAJE · TEMA 22
- **h1:** Autopoiesis y sistemas vivos (Maturana y Varela)
- **Descripción (hero-description):**
  ¿Qué hace que una bacteria esté viva y un reloj no? Los biólogos chilenos **Humberto Maturana** y **Francisco Varela** respondieron con una idea sencilla y profunda: un ser vivo es un sistema que se fabrica continuamente a sí mismo y que traza su propio límite con el entorno. A esa organización la llamaron *autopoiesis* (Maturana y Varela, 1973).
- **Botones:** 🔬 Explorar laboratorio y juegos · 📖 Iniciar ruta conceptual · 🎯 Quiz y constancia
- **Badges:** Asignatura: Teoría General de Sistemas · Programa: Ingeniería de Sistemas · Autor: Romero Herrera Julián Esteban · Periodo: 2026-2
- **Textos del SVG:** "RED DE PRODUCCIÓN" / "METABOLISMO" / "MEMBRANA (PRODUCIDA POR LA RED)"

---

## 2. `#contexto` — 01 · Contextualización y justificación

- **section-tag:** 01 · CONTEXTO Y PERTINENCIA
- **h2:** Contextualización y justificación
- **section-description:** Por qué una teoría nacida en la biología chilena de los años setenta sigue siendo útil para pensar los sistemas, incluidos los que diseña un ingeniero de sistemas.

**Tarjeta 1 — ¿Qué es estar vivo?**
Las definiciones clásicas de la vida suelen ser listas de rasgos: crecer, reproducirse, moverse, responder a estímulos. El problema es que hay casos que no encajan: una mula es estéril y sin embargo está viva, mientras que un cristal crece y no lo está. A comienzos de la década de 1970, Humberto Maturana y Francisco Varela propusieron cambiar la pregunta: en lugar de enumerar propiedades, describir **la organización** que comparten todos los seres vivos. Su respuesta fue la autopoiesis, que consideraron condición necesaria y suficiente para caracterizar la organización de lo vivo (Maturana y Varela, 1973, 1980).

**Tarjeta 2 — Del sistema abierto al cierre organizacional**
Ludwig von Bertalanffy mostró que los organismos son **sistemas abiertos**: intercambian materia y energía con su medio y se sostienen en un estado estacionario lejos del equilibrio (Bertalanffy, 1968). Maturana y Varela aceptan esa apertura, pero subrayan otro rasgo: lo que la célula produce no sale como un "producto" hacia afuera, sino que regresa a reconstruir a la propia célula. Lo vivo es abierto en lo material y energético, pero **cerrado en su organización** (Varela, 1979).

**Tarjeta 3 — Pertinencia para la Ingeniería de Sistemas**
La autopoiesis no es una técnica de software, pero ofrece un vocabulario preciso para analizar sistemas complejos: distinguir organización de estructura, entender por qué el entorno solo "perturba" a un sistema y reconocer cuándo un sistema conserva su identidad. Por eso se usa como **analogía** al estudiar sistemas autorreparables (*self-healing*), arquitecturas con bucles de control y organizaciones; siempre recordando que esos sistemas técnicos no se producen a sí mismos y, en sentido estricto, son alopoiéticos (Maturana y Varela, 1973; Kubernetes Authors, s. f.).

---

## 3. `#teoria` — 02 · Explicación conceptual y teórica

- **section-tag:** 02 · MARCO TEÓRICO
- **h2:** Fundamentos conceptuales de la autopoiesis
- **section-description:** La palabra combina el griego *autós* ("sí mismo") y *poíesis* ("producción, creación"): literalmente, *producción de sí mismo*. Maturana relató que el término surgió hacia 1971–1972, a partir de una conversación con el filósofo José María Bulnes sobre la diferencia entre *praxis* y *poiesis* (Maturana y Varela, 1980).

> Nota para `web`: el dato del origen del término está narrado por Maturana en la introducción de *Autopoiesis and Cognition* (1980); no se indica página porque no se verificó.

### Fichas de los autores

**Humberto Maturana Romesín (1928–2021)**
- *theorist-title:* Biólogo y epistemólogo chileno · Premio Nacional de Ciencias Naturales de Chile (1994)
- *Texto:* Se formó en Chile, Inglaterra y Estados Unidos (doctorado en Harvard) y participó en el célebre estudio sobre la percepción visual de la rana publicado en 1959 (Lettvin et al., 1959). Desde la biología llegó a una teoría del conocimiento: lo que un ser vivo puede conocer depende de su propia estructura, y toda descripción es hecha por un observador, que también es un ser vivo (Maturana y Varela, 1980). Más tarde distinguió entre una "objetividad sin paréntesis", que pretende acceso a una realidad independiente, y una "objetividad entre paréntesis", que reconoce el papel del observador (Maturana, 1997).

**Francisco Varela García (1946–2001)**
- *theorist-title:* Biólogo, neurocientífico y filósofo chileno · Director de investigación del CNRS (Francia)
- *Texto:* Alumno de Maturana y doctor en biología por Harvard. Junto con Maturana y Ricardo Uribe publicó en 1974 la primera caracterización formal de la autopoiesis en inglés, acompañada de un modelo computacional mínimo de una "célula" que mantiene su frontera (Varela et al., 1974). Desarrolló la idea de **autonomía biológica** y de cierre organizacional (Varela, 1979) y, años después, el enfoque **enactivo** de la cognición, según el cual conocer es hacer emerger un mundo a través de la acción corporal (Varela et al., 1991).

### Organización y estructura (párrafo introductorio a la cuadrícula de conceptos — NUEVO, breve)
Para Maturana y Varela, la **organización** es el conjunto de relaciones que deben mantenerse para que un sistema siga siendo lo que es (por ejemplo, "ser una célula"); la **estructura** son los componentes y relaciones concretos que realizan esa organización aquí y ahora. La estructura cambia todo el tiempo (las moléculas se renuevan); la organización autopoiética se conserva mientras el ser vive (Maturana y Varela, 1984).

### Cuadrícula de conceptos clave

**1. Clausura operacional** — badge: Núcleo
Las operaciones de un sistema vivo se encadenan con otras operaciones del mismo sistema: los procesos producen componentes que, a su vez, participan en los procesos que los produjeron. Ningún agente externo dirige esa red. Clausura no significa aislamiento: la célula sigue tomando nutrientes y liberando desechos; lo cerrado es la organización, no el flujo de materia (Maturana y Varela, 1973; Varela, 1979).
**Cita:** Fuente: (Maturana y Varela, 1973; Varela, 1979)

**2. Límite dinámico / membrana** — badge: Frontera
Un muro de ladrillo lo levantan obreros desde afuera. La membrana celular, en cambio, la fabrica la propia red metabólica que ella misma contiene: sin la red no hay membrana, y sin la membrana los componentes de la red se dispersarían. Esta circularidad entre producir el límite y ser contenido por él es el rasgo que Varela, Maturana y Uribe usaron para caracterizar una unidad autopoiética (Varela et al., 1974).
**Cita:** Fuente: (Varela et al., 1974; Maturana y Varela, 1984)

**3. Acoplamiento estructural** — badge: Interacción
Cuando un sistema y su medio (u otro sistema) interactúan de forma recurrente, ambos van cambiando de manera congruente, sin que ninguno pierda su organización. El medio no le "entrega instrucciones" al ser vivo: actúa como fuente de **perturbaciones** a las que el sistema responde según lo que su estructura permite. La historia de esos cambios es la ontogenia del ser vivo (Maturana y Varela, 1984).
**Cita:** Fuente: (Maturana y Varela, 1984)

**4. Determinismo estructural** — badge: Causalidad
Lo que ocurre en un ser vivo frente a una interacción lo determina su estructura en ese momento; el agente externo solo **desencadena** el cambio. Ejemplo: la misma palabra pronunciada en voz alta provoca reacciones distintas en una persona, en un perro y en una planta, porque cada estructura especifica qué puede pasarle (Maturana y Varela, 1984).
**Cita:** Fuente: (Maturana y Varela, 1984)

### Órdenes de unidades (antes "Órdenes sistémicos de la autopoiesis")
- **h3:** Unidades de primer, segundo y tercer orden

**Primer orden: la célula** (🧪)
Bacterias, arqueas, levaduras y protozoos: es el caso donde la autopoiesis se observa directamente, en el espacio molecular. Maturana y Varela (1984) llaman a la célula unidad autopoiética de primer orden.

**Segundo orden: organismos pluricelulares** (🐬)
Plantas, animales y hongos multicelulares surgen del acoplamiento estrecho entre muchas células. Su existencia depende de la autopoiesis de esas células; los autores tratan con cautela si el organismo completo es autopoiético en el mismo sentido estricto que la célula (Maturana y Varela, 1984).

**Tercer orden: fenómenos sociales** (🌐)
Cuando organismos se acoplan entre sí de forma recurrente (una colonia de insectos, una familia, una comunidad humana) aparecen unidades de tercer orden y los fenómenos sociales (Maturana y Varela, 1984). Aparte, el sociólogo Niklas Luhmann propuso que los sistemas sociales son autopoiéticos porque sus comunicaciones producen nuevas comunicaciones (Luhmann, 1984/1998); esta extensión es debatida y no fue adoptada por Maturana y Varela (Mingers, 2002).

---

## 4. `#comparativa` — 03 · Autopoiesis vs. alopoiesis

- **section-tag:** 03 · MODELADO SISTÉMICO
- **h2:** Autopoiesis vs. alopoiesis
- **section-description:** Maturana y Varela distinguieron entre los sistemas cuya actividad produce al propio sistema (autopoiéticos) y los sistemas cuya actividad produce algo distinto de ellos mismos (alopoiéticos, del griego *állos*, "otro") (Maturana y Varela, 1973).

| Criterio | Sistema autopoiético (seres vivos) | Sistema alopoiético (máquinas, fábricas) |
|---|---|---|
| **Producto de su operación** | **Autorreferido:** lo que produce son sus propios componentes y, con ellos, su propia continuidad. | **Heterorreferido:** produce algo diferente de sí (bienes, datos, servicios). |
| **Origen del límite** | El límite (p. ej., la membrana) lo produce la misma red que delimita. | El límite (carcasa, chasis, perímetro de red) lo define un diseñador externo. |
| **Ante perturbaciones** | Compensa los cambios según su estructura mientras conserva su organización; si no puede, muere. | No se repara a sí mismo: requiere mantenimiento, repuestos o reglas de recuperación diseñadas desde afuera. |
| **Cierre** | Cerrado en su organización, abierto a materia y energía. | Su organización la especifica un agente externo (planos, código, operarios). |
| **Ejemplos** | Bacterias, células de un guayacán, un hongo, un ser humano. | Línea de ensamblaje automotriz, servidor HTTP, reloj, microprocesador. |

Fuente de la tabla: elaboración propia a partir de Maturana y Varela (1973) y Varela (1979).

---

## 5. `#casos` — 04 · Casos reales

- **section-tag:** 04 · CASOS REALES
- **h2:** La autopoiesis y sus analogías en casos reales
- **section-description:** Un caso biológico donde la autopoiesis ocurre literalmente y dos casos (tecnológico y social) donde el concepto se usa como analogía o como extensión teórica.

**Caso 1 — La célula biológica** (badge: Biología)
Una célula toma glucosa del medio. Al degradarla obtiene energía (ATP) y moléculas precursoras con las que, entre muchas otras cosas, fabrica los fosfolípidos y proteínas que renuevan su membrana. Esa membrana, a su vez, mantiene juntos a las enzimas y metabolitos que hicieron posible su síntesis. Si la red metabólica se interrumpe de forma sostenida, la membrana deja de renovarse, pierde su integridad y la célula se desintegra: termina su autopoiesis (Varela et al., 1974; Maturana y Varela, 1984).
*Pie:* Autopoiesis en sentido estricto (primer orden)

**Caso 2 — Kubernetes y sistemas autorreparables** (badge: Ingeniería de software)
Kubernetes, un orquestador de contenedores, funciona con **controladores**: bucles que comparan el estado deseado (por ejemplo, "tres réplicas activas") con el estado actual y actúan para acercarlos. Su documentación los explica con la analogía de un termostato (Kubernetes Authors, s. f.). Si un contenedor falla, el controlador crea otro y el servicio continúa. Esto **se parece** a la autoconservación de lo vivo y es útil para explicar el concepto, pero no es autopoiesis: el clúster no fabrica sus servidores, ni su código, ni las imágenes de sus contenedores; todo eso lo producen personas y otras máquinas. Es un sistema alopoiético con bucles de control, una idea más cercana a la cibernética y la homeostasis (Maturana y Varela, 1973).
*Pie:* Analogía cibernética (no es autopoiesis)

**Caso 3 — Organizaciones e instituciones** (badge: Sociología)
Niklas Luhmann sostuvo que los sistemas sociales —el derecho, la economía, una organización— están hechos de comunicaciones que se enlazan con otras comunicaciones (Luhmann, 1984/1998). En el sistema jurídico, por ejemplo, una demanda da lugar a una sentencia, la sentencia a una apelación y las decisiones acumuladas a jurisprudencia; cada comunicación jurídica remite a comunicaciones jurídicas previas, y así el sistema se distingue de su entorno. Esta lectura es una extensión de la autopoiesis fuera de la biología y sigue siendo objeto de debate (Mingers, 2002).
*Pie:* Extensión sociológica (Luhmann)

---

## 6. `#ejercicios` — 05 · Ejercicios con retroalimentación

- **section-tag:** 05 · APRENDIZAJE ACTIVO
- **h2:** Ejercicios de análisis sistémico con retroalimentación
- **section-description:** Analiza cada situación, elige una opción y lee la retroalimentación inmediata.

### Ejercicio 1 — Clasificación (respuesta correcta: **C**)
**Pregunta:** Un equipo de mecatrónica construye un brazo robótico industrial capaz de tomar piezas de aluminio y soldar con ellas otro brazo robótico idéntico. Desde la teoría de Maturana y Varela, ¿es un sistema autopoiético?
- **A)** Sí, porque se replica y crea una copia funcional de su propia estructura. — *data-correct="false"* — Feedback: Error frecuente: replicarse no es lo mismo que producirse a sí mismo. El robot usa piezas fabricadas por otros y no renueva sus propios componentes desgastados mientras trabaja.
- **B)** Sí, siempre que su microprocesador ejecute algoritmos genéticos de autoaprendizaje. — *false* — Feedback: Incorrecto. El software, por sofisticado que sea, no hace que un sistema produzca sus propios componentes.
- **C)** No: es una máquina alopoiética; produce un objeto distinto de sí misma y no regenera su propio desgaste. — *true* — Feedback: ¡Correcto! El resultado de su operación es otro artefacto, no la renovación de sus propios componentes. Además, su organización la definió un diseñador externo (Maturana y Varela, 1973).

### Ejercicio 2 — Acoplamiento y perturbación (respuesta correcta: **A**)
**Pregunta:** Un servidor de comercio electrónico pierde gran parte de su ancho de banda por el corte accidental de un cable submarino de fibra óptica. El sistema activa una red de distribución de contenidos (CDN) y comprime las imágenes para seguir operando. ¿Qué principio se evidencia?
- **A)** Determinismo estructural: el corte solo desencadenó una perturbación; la configuración del sistema determinó cómo compensarla. — *true* — Feedback: ¡Exacto! El cable roto no "dijo" qué hacer. La respuesta estaba especificada por las reglas que ya existían en el sistema. (Ojo: el servidor no es autopoiético; aquí usamos el principio como analogía.)
- **B)** Instrucción del entorno: la fibra rota le indicó al servidor cómo comprimir las imágenes. — *false* — Feedback: Falso. El entorno no envió instrucciones; la compresión fue una regla interna activada por la falta de ancho de banda.
- **C)** Aislamiento total: el servidor se desconectó de su entorno físico. — *false* — Feedback: Incorrecto. Si se aislara, perdería a sus usuarios; el sistema siguió interactuando con el medio y ajustó su funcionamiento.

### Ejercicio 3 — Límites y clausura (respuesta correcta: **B**)
**Pregunta:** En un hospital universitario, leído como sistema social desde la propuesta de Luhmann, ¿qué representa mejor su "frontera" operativa?
- **A)** Las rejas de seguridad y las paredes del edificio. — *false* — Feedback: Los muros son un límite físico, no el límite de las operaciones y comunicaciones del sistema.
- **B)** Los protocolos de admisión, triaje y ética clínica que deciden qué interacciones cuentan como atención en salud. — *true* — Feedback: ¡Muy bien! En la lectura de Luhmann (1984/1998), el límite de un sistema social no es de cemento: lo definen las comunicaciones y decisiones que el sistema reconoce como propias.
- **C)** El parqueadero de ambulancias en la entrada de urgencias. — *false* — Feedback: Las ambulancias son medios de transporte que conectan con el entorno, no el límite operativo del sistema.

---

## 7. `#laboratorio` — 06 · Juegos interactivos

- **section-tag:** 06 · JUEGOS Y SIMULACIÓN
- **h2:** Laboratorio virtual de aprendizaje activo
- **section-description:** Tres juegos propios y dos actividades en plataformas externas (Wordwall y Educaplay) para practicar los conceptos de la autopoiesis.
- **Pestañas:** 🔬 Juego 1: Bio-Lab · ⚡ Juego 2: Desafío ontológico · 🧭 Juego 3: Aventura de acoplamiento · 🧩 Juego 4: Wordwall · 🔤 Juego 5: Educaplay

### Juego 1 — Bio-Lab (textos)
- Etiquetas: Estado del sistema · Integridad de la membrana · Tasa metabólica · Clausura operacional (Mantenida / Perdida)
- Sliders: Flujo de nutrientes · Degradación externa · Permeabilidad de la membrana
- Botones: 💉 Inyectar nutrientes · ⚡ Perturbar el entorno · 🔄 Reiniciar célula · 🔇 Sonido
- **Principio observable:** La membrana (verde) se rehace constantemente con partículas producidas dentro de la célula. Si la degradación supera lo que el metabolismo alcanza a reponer, la membrana se rompe y la autopoiesis termina. *Modelo didáctico simplificado; no es una simulación bioquímica real.*

### Juego 2 — Desafío ontológico (`ontologyCards` en js/games.js)
Mantener las 8 tarjetas, con estos textos:

1. **Bacteria *Escherichia coli*** 🦠 — type: `autopoietic`
   desc: Organismo unicelular que toma glucosa del medio y con ella fabrica sus propios lípidos, proteínas, ribosomas y pared celular.
   explanation: Es autopoiética (unidad de primer orden): su red metabólica produce los componentes que renuevan la membrana que la delimita.
2. **Gigafábrica automatizada de vehículos eléctricos** 🏭 — `allopoietic`
   desc: Planta con robots que transforman aluminio, baterías y chips en automóviles terminados.
   explanation: Es alopoiética: su producto (los autos) es distinto de ella misma y no fabrica sus propios robots ni su edificio.
3. **Modelo de lenguaje (IA generativa)** 🤖 — `allopoietic`
   desc: Red neuronal artificial que genera texto a partir de parámetros obtenidos en un entrenamiento hecho por personas y servidores externos.
   explanation: Es alopoiético: produce texto, pero no produce el hardware, la energía ni el código que lo sostienen.
4. **Hormiga obrera (un individuo de la colonia)** 🐜 — `autopoietic`  *(antes "Enjambre de hormigas")*
   desc: Insecto pluricelular que se alimenta, renueva sus tejidos y coopera con otras hormigas para sostener la colonia.
   explanation: Es un ser vivo: sus células son autopoiéticas y el organismo depende de ellas (unidad de segundo orden). La colonia completa es una unidad de tercer orden; Maturana y Varela no afirman que sea autopoiética en sí misma.
5. **Reloj mecánico de péndulo** ⏱️ — `allopoietic`
   desc: Mecanismo de engranajes y resortes que usa la oscilación de un péndulo para marcar intervalos regulares.
   explanation: Es alopoiético: no fabrica sus engranajes ni su lubricante, y su función (marcar la hora) tiene sentido para un observador externo.
6. **Neurona humana** 🧠 — `autopoietic`
   desc: Célula con axón y dendritas que conduce impulsos eléctricos y sintetiza neurotransmisores y lípidos de membrana.
   explanation: Es autopoiética: como toda célula, renueva continuamente sus proteínas, canales iónicos y membrana.
7. **Cristal de sal en crecimiento** 💎 — `allopoietic`
   desc: Estructura mineral que añade iones de sodio y cloro a su red cristalina a medida que el agua se evapora.
   explanation: No es autopoiético: crece por acumulación de material desde afuera, sin una red de procesos que produzca sus propios componentes. *(Nota: un cristal tampoco es una máquina diseñada; para el juego se agrupa en "no autopoiético".)*
8. **Virus (p. ej., SARS-CoV-2)** 🧬 — `allopoietic`
   desc: Material genético dentro de una cápside de proteínas; no tiene metabolismo propio y solo se multiplica dentro de una célula viva.
   explanation: No es autopoiético por sí mismo: no tiene metabolismo ni produce sus componentes; es la célula infectada la que fabrica nuevos virus.

> Sugerencia para `web`: renombrar el botón "🏭 Es Alopoiético" a "🏭 No es autopoiético" o dejarlo y añadir debajo la nota "(incluye sistemas no vivos como cristales)".

### Juego 3 — Aventura de acoplamiento (`couplingScenarios`)
- Rótulo de cabecera: "Acoplamiento estructural y ontogenia"

**Escenario 1 — Aumento brusco de temperatura** (correcta: **B**)
context: La temperatura del agua donde vive una célula sube de golpe 12 °C; las proteínas corren riesgo de desnaturalizarse.
- A) Obedecer la "orden" del calor y cambiar de forma sin ninguna regulación. — false — Feedback: Visión mecanicista. Para Maturana y Varela, el medio no instruye al ser vivo: solo lo perturba.
- B) Producir proteínas de choque térmico según su propia estructura, protegiendo sus proteínas sin perder su organización. — true — Feedback: ¡Bien! La perturbación desencadena el cambio, pero lo especifica la estructura de la célula (determinismo estructural).
- C) Cerrar por completo el intercambio de materia y energía con el entorno. — false — Feedback: Error fatal: un ser vivo es abierto a materia y energía; si se aísla, no puede sostener su metabolismo.

**Escenario 2 — Ataque de denegación de servicio (DDoS)** (correcta: **C**)  *(se reordenó)*
context: Un clúster de microservicios orquestado con Kubernetes (que usa bucles de control) recibe de repente 100 000 solicitudes por segundo que saturan la entrada de red.
- A) Dejar pasar todo el tráfico porque "lo externo manda". — false — Feedback: Incorrecto: el sistema perdería su función. El entorno perturba, no dicta.
- B) Apagar los servidores de forma permanente para proteger la base de datos. — false — Feedback: Eso equivale a la "muerte" del servicio: se destruye la función en lugar de compensar la perturbación.
- C) Escalar réplicas y aplicar filtros de tráfico según reglas internas ya configuradas, para mantener el servicio. — true — Feedback: ¡Correcto! Los bucles de control reconfiguran el sistema según reglas propias. Recuerda: es una analogía; el clúster no es autopoiético porque no produce sus propios componentes.

**Escenario 3 — Escasez de glucosa** (correcta: **A**)
context: Se agota la principal fuente de carbono en el medio de cultivo de una colonia de bacterias.
- A) Cambiar sus rutas metabólicas para usar otras fuentes de carbono y seguir produciendo energía y componentes. — true — Feedback: ¡Correcto! Reorganiza su metabolismo sin perder su organización autopoiética.
- B) Convertirse instantáneamente en un mineral inerte. — false — Feedback: Imposible: un ser vivo no puede transformarse en roca y luego volver a vivir.
- C) Esperar a que el medio le envíe un "manual de instrucciones" genético. — false — Feedback: Concepto erróneo: el medio no envía instrucciones; la respuesta depende de la estructura de la bacteria.

- Mensaje final: ¡Lo lograste! Comprendiste que un sistema vivo responde a su entorno según su propia estructura: el medio desencadena, pero no determina.
- Retroalimentación positiva: "✨ ¡Acoplamiento logrado!" · negativa: "⚠️ Revisa tu elección:"

### Juegos 4 y 5 — Actividades externas
Ver sección **"Actividades externas"** al final (contenido para Wordwall y Educaplay). Textos de las tarjetas:
- **Wordwall — Unir parejas: conceptos de la autopoiesis.** Relaciona cada concepto con su definición. Actividad creada por el autor del OVA en Wordwall.
- **Educaplay — Crucigrama de la autopoiesis.** Resuelve el crucigrama con los términos clave de la teoría. Actividad creada por el autor del OVA en Educaplay.
- Placeholder: "Actividad en preparación".

---

## 8. `#videoteca` — 07 · Videos curados

- **section-tag:** 07 · RECURSOS MULTIMEDIA
- **h2:** Videoteca curada
- **section-description:** Entrevistas a los autores y una conferencia sobre la historia de la autopoiesis, con una pauta de observación para cada video. Los videos pertenecen a sus respectivos titulares y se incrustan desde YouTube.

**Video 1** — ID `19uV8wKpkZw`
- Etiqueta: Entrevista · La belleza de pensar
- h4: Humberto Maturana en «La belleza de pensar»
- Texto: Entrevista de Cristián Warnken a Humberto Maturana en el programa cultural chileno *La belleza de pensar*. Maturana conversa sobre la biología del conocer, el lenguaje y las emociones en la convivencia humana.
- 🎯 Pauta de observación: ¿Qué papel le da Maturana al observador y a la biología de quien conoce? Relaciónalo con el determinismo estructural visto en la sección de teoría.
- Cita APA: Canal13C. (2025, 9 de enero). *La entrevista al académico Humberto Maturana que inspiró a Mon Laferte | La Belleza de Pensar* [Video]. YouTube. https://www.youtube.com/watch?v=19uV8wKpkZw

**Video 2** — ID `3-VydyPdhhg`
- Etiqueta: Entrevista · La belleza de pensar (2001)
- h4: Francisco Varela en «La belleza de pensar»
- Texto: Entrevista a Francisco Varela en el mismo programa (2001). Varela habla de la mente, la experiencia y la relación entre la biología y el conocer.
- 🎯 Pauta de observación: ¿Cómo vincula Varela la autonomía de los seres vivos con su manera de conocer el mundo (enacción)? Usa la distinción entre organización (lo que se conserva) y estructura (lo que cambia).
- Cita APA: humanista. (2010, 10 de julio). *Francisco Varela (Neurobiologo) - La Belleza-Del-Pensar-2001* [Video]. YouTube. https://www.youtube.com/watch?v=3-VydyPdhhg

**Video 3** — ID `8TbqdtgmNZc`
- Etiqueta: Conferencia · Puerto de Ideas
- h4: Juan Carlos Letelier: «Seres vivos como máquinas»
- Texto: Conferencia del biólogo Juan Carlos Letelier sobre cómo Maturana y Varela llegaron a la idea de autopoiesis y sobre su impacto en la biología y la teoría de sistemas.
- 🎯 Pauta de observación: Compara el esquema entrada → proceso → salida de una máquina alopoiética con la circularidad productiva de la célula que describe el conferencista.
- Cita APA: Puerto de Ideas. (2023, 29 de noviembre). *Seres vivos como máquinas. Maturana, Varela y el impacto de la autopoiesis - Juan Carlos Letelier* [Video]. YouTube. https://www.youtube.com/watch?v=8TbqdtgmNZc

> Nota: datos de canal, título y fecha verificados directamente en YouTube (15/11/2026). El video 2 fue subido por un canal particular ("humanista"), no por la televisora original; se cita tal como aparece en YouTube.

---

## 9. `#evaluacion` — 08 · Quiz (js/quiz.js)

- **section-tag:** 08 · EVALUACIÓN
- **h2:** Evaluación interactiva
- **section-description:** Responde 10 preguntas sobre la teoría de Maturana y Varela. El puntaje se calcula automáticamente (escala de 0,0 a 5,0) y puedes descargar una constancia formativa.
- Título resultados: "Desglose de respuestas y justificación"
- Constancia: "Constancia de culminación (formativa, no oficial)" · texto: "Completó los módulos teóricos, los juegos y la evaluación formativa del OVA con una calificación de:"

`quizQuestions` (las opciones ya están en el orden final; `correct` es el índice 0-based):

**1.** ¿Cuál es la tesis central de Maturana y Varela sobre qué define a un ser vivo?
- A. La capacidad de replicar ADN y desplazarse en el espacio.
- B. Ser una máquina lineal que transforma entradas en salidas sin retroalimentación.
- C. Ser una red de procesos moleculares que se produce continuamente a sí misma (autopoiesis).
- D. Poseer conciencia reflexiva y lenguaje.
- correct: **2** · justification: Para Maturana y Varela, la autopoiesis basta para caracterizar la organización de lo vivo: una red de procesos que produce los componentes que la regeneran y que define su propio límite (Maturana y Varela, 1973).

**2.** ¿Qué significa "clausura operacional" en un sistema autopoiético?
- A. Que los resultados de sus procesos son los mismos componentes y operaciones que mantienen activa la red.
- B. Que el sistema no intercambia materia ni energía con el exterior.
- C. Que el sistema no puede interactuar con ningún otro sistema.
- D. Que un agente externo programa las decisiones del sistema.
- correct: **0** · justification: La clausura se refiere a la circularidad de la organización: las operaciones producen los componentes que hacen posibles esas mismas operaciones, aunque el sistema siga abierto a la materia y la energía (Varela, 1979).

**3.** ¿Cuál es la diferencia fundamental entre un sistema autopoiético y uno alopoiético?
- A. El autopoiético produce cosas distintas de sí; el alopoiético se produce a sí mismo.
- B. Los alopoiéticos son solo biológicos y los autopoiéticos solo mecánicos.
- C. No hay diferencia: son sinónimos acuñados por Ludwig von Bertalanffy.
- D. El autopoiético produce sus propios componentes y su continuidad; el alopoiético produce algo distinto de sí mismo.
- correct: **3** · justification: *Állos* significa "otro": un sistema alopoiético (como una fábrica de autos) produce algo diferente de sí; el autopoiético se produce a sí mismo (Maturana y Varela, 1973).

**4.** Según el determinismo estructural, ¿cómo responde un ser vivo a una perturbación del medio?
- A. El medio especifica exactamente el cambio que el sistema debe realizar.
- B. El medio solo desencadena el cambio; la estructura del sistema determina cuál será.
- C. El sistema ignora todo lo externo gracias a una membrana rígida.
- D. El sistema cambia al azar, sin relación con su estructura previa.
- correct: **1** · justification: Para Maturana y Varela no hay "instrucción" desde el medio: el entorno perturba, pero los cambios posibles los especifica la estructura del sistema en ese momento (Maturana y Varela, 1984).

**5.** ¿Qué papel cumple la membrana en una célula, según la autopoiesis?
- A. Es una pared inerte añadida desde afuera por fuerzas físicas.
- B. Es una barrera impermeable que impide todo intercambio con el entorno.
- C. Es a la vez producto de la red metabólica interna y condición para que esa red no se disperse.
- D. Es solo un sensor pasivo sin participación en el metabolismo.
- correct: **2** · justification: La red interna fabrica la membrana y la membrana mantiene unida a la red: esa circularidad caracteriza a la unidad autopoiética (Varela et al., 1974).

**6.** ¿Qué ocurre cuando dos sistemas (o un sistema y su medio) interactúan de forma recurrente durante mucho tiempo?
- A. Se da un acoplamiento estructural: ambos cambian de manera congruente sin perder su organización.
- B. Se fusionan de inmediato y desaparecen sus identidades.
- C. Uno destruye obligatoriamente la clausura del otro.
- D. El metabolismo de ambos se detiene por interferencia.
- correct: **0** · justification: El acoplamiento estructural es la historia de perturbaciones mutuas que produce cambios congruentes, sin que los sistemas se desintegren (Maturana y Varela, 1984).

**7.** ¿Cómo entiende Niklas Luhmann a los sistemas sociales?
- A. Como sumas de personas unidas por contratos.
- B. Como sistemas alopoiéticos creados por computadoras.
- C. Como redes de intercambio monetario exclusivamente.
- D. Como sistemas autopoiéticos cuyos elementos son comunicaciones, no personas.
- correct: **3** · justification: Luhmann (1984/1998) trasladó la autopoiesis a la sociología: las comunicaciones producen nuevas comunicaciones. Es una extensión debatida que Maturana y Varela no adoptaron (Mingers, 2002).

**8.** En Ingeniería de Sistemas, ¿cuál es un uso legítimo del concepto de autopoiesis?
- A. Elegir cables de fibra óptica más resistentes al clima.
- B. Servir como analogía para diseñar sistemas autorreparables que detectan fallas y restituyen sus servicios.
- C. Instalar antivirus basados en firmas estáticas.
- D. Programar de forma secuencial, sin bucles ni recursividad.
- correct: **1** · justification: Los sistemas autorreparables (por ejemplo, los controladores de Kubernetes) usan bucles de control que recuerdan la autoconservación de lo vivo. Es una analogía: esos sistemas no producen sus propios componentes y siguen siendo alopoiéticos (Kubernetes Authors, s. f.; Maturana y Varela, 1973).

**9.** ¿Por qué un modelo de IA generativa actual no es autopoiético en sentido estricto?
- A. Porque no tiene una pantalla propia para mostrar sus respuestas.
- B. Porque procesa números en lugar de palabras.
- C. Porque no produce por sí mismo el hardware, la energía ni el código que lo sostienen.
- D. Porque ya superó a los sistemas vivos en todos los aspectos.
- correct: **2** · justification: Un modelo de IA depende de servidores, electricidad, datos y personas externas. Es un sistema muy sofisticado, pero alopoiético (Maturana y Varela, 1973).

**10.** ¿Qué es la muerte de un ser vivo según la teoría de la autopoiesis?
- A. La pérdida irreversible de la organización autopoiética: la red deja de producirse a sí misma y el sistema se desintegra.
- B. Una pausa de menos de cinco segundos en la actividad eléctrica.
- C. Un cambio leve del medio que el sistema no percibió.
- D. El paso obligatorio a un sistema alopoiético de reciclaje.
- correct: **0** · justification: Para Maturana y Varela, estar vivo es realizar la autopoiesis; cuando se pierde esa organización, el sistema deja de ser una unidad viva (Maturana y Varela, 1984).

Distribución de respuestas correctas: A ×3, B ×2, C ×3, D ×2.

---

## 10. `#creditos` — Créditos

- **Columna 1 — Información académica:** Programa de Ingeniería de Sistemas · Asignatura: Teoría General de Sistemas (TGS) · Periodo académico 2026-2 · Proyecto final OVA (modalidad individual) · Tema 22: Autopoiesis y sistemas vivos (Maturana y Varela).
- **Columna 2 — Autoría:** Autor: ROMERO HERRERA JULIÁN ESTEBAN. Contenidos, selección de fuentes, diseño visual (basado en diapositivas propias elaboradas en Canva), juegos y evaluación: autoría del estudiante.
- **Declaración de uso de inteligencia artificial:**
  En la elaboración de este OVA se utilizó la herramienta de inteligencia artificial Google Antigravity (Google, 2026) como apoyo para generar y depurar código HTML, CSS y JavaScript, revisar la redacción y verificar referencias bibliográficas. Todo el contenido fue revisado, ajustado y validado por el autor, quien comprende y puede explicar tanto los textos como el código. Los textos teóricos son paráfrasis propias de las fuentes citadas. La IA se cita siguiendo la orientación de APA para herramientas de IA generativa (McAdoo, 2023).
- **Normalización de referencias:** Las referencias siguen APA 7.ª edición en español, de acuerdo con las recomendaciones de Varón Castañeda (2017) para unificar el estilo y completar los datos (DOI o URL).
- **Recursos de terceros:** Videos incrustados desde YouTube (propiedad de sus canales: Canal13C, humanista, Puerto de Ideas). Tipografías Montserrat y Outfit (Google Fonts, licencia SIL Open Font License 1.1). Actividades externas creadas por el autor en Wordwall y Educaplay.
- **Referencias:** pegar la lista completa de `docs/referencias_apa.md` (sangría francesa).
- **Licencia (footer-bottom):** © 2026 · Julián Esteban Romero Herrera · Contenido original del OVA bajo licencia CC BY-NC-SA 4.0. Los videos, tipografías y plataformas externas conservan las licencias de sus titulares.

---

## 11. Actividades externas (para que el estudiante las cree)

### 11.1 Wordwall — plantilla "Unir parejas" (*Match up*)
- **Título:** Autopoiesis: une cada concepto con su definición
- **Instrucciones:** Arrastra cada concepto hasta la definición que le corresponde.
- **Pares (8):**

| # | Concepto | Definición |
|---|---|---|
| 1 | Autopoiesis | Red de procesos que produce los componentes que la regeneran y que traza su propio límite. |
| 2 | Alopoiesis | Organización cuyo resultado es algo distinto del propio sistema, como una fábrica que produce autos. |
| 3 | Clausura operacional | Las operaciones del sistema solo se enlazan con operaciones del mismo sistema, aunque intercambie materia y energía. |
| 4 | Acoplamiento estructural | Historia de interacciones recurrentes en la que sistema y medio cambian de forma congruente. |
| 5 | Determinismo estructural | Lo que le pasa al sistema lo especifica su estructura; el medio solo lo desencadena. |
| 6 | Perturbación | Evento del entorno que gatilla cambios en el sistema sin dictar cuáles. |
| 7 | Organización | Relaciones que deben conservarse para que el sistema siga siendo de su clase. |
| 8 | Estructura | Componentes y relaciones concretos que realizan la organización en un momento dado y que pueden cambiar. |

- **Configuración sugerida:** temporizador 2:00, orden aleatorio, mostrar respuestas al final. Publicar como **pública** y copiar el código de inserción (`https://wordwall.net/embed/...`) en `EXTERNAL_ACTIVITIES.wordwall.embed` de `js/external.js`, y la URL pública en `.url`.

### 11.2 Educaplay — plantilla "Crucigrama"
- **Título:** Crucigrama de la autopoiesis
- **Instrucciones:** Completa el crucigrama con los términos de la teoría de Maturana y Varela (sin tildes ni espacios).
- **Palabras y pistas (8):**

| # | Respuesta | Pista |
|---|---|---|
| 1 | AUTOPOIESIS | Organización de los seres vivos: se producen a sí mismos. |
| 2 | MEMBRANA | Límite de la célula, fabricado por la misma red que encierra. |
| 3 | PERTURBACION | Lo que el medio provoca en un ser vivo: desencadena, pero no instruye. |
| 4 | ONTOGENIA | Historia de cambios estructurales de un ser vivo sin que pierda su organización. |
| 5 | MATURANA | Biólogo chileno (1928–2021), coautor de *De máquinas y seres vivos*. |
| 6 | VARELA | Biólogo chileno (1946–2001), desarrolló el enfoque enactivo de la cognición. |
| 7 | LUHMANN | Sociólogo alemán que llevó la autopoiesis a los sistemas sociales. |
| 8 | ALOPOIESIS | Organización de un sistema que produce algo distinto de sí mismo. |

- **Configuración sugerida:** sin límite de intentos, mostrar solución al terminar. Publicar y copiar el iframe (`https://www.educaplay.com/game/.../`) en `EXTERNAL_ACTIVITIES.educaplay.embed` y la URL en `.url`.

> Fuentes de las definiciones: elaboración propia a partir de Maturana y Varela (1973, 1984), Varela et al. (1974) y Luhmann (1984/1998).
