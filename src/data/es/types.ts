import type { CenterCopy, EnneaType, TypeId } from "../schema";

export type { EnneaType, TypeId };

export const centers: Record<"instinto" | "sentimento" | "pensamento", CenterCopy> = {
  instinto: {
    label: "Centro del instinto",
    types: [8, 9, 1],
    text: "Cuerpo, acción y cómo se sostiene la energía. La cuestión de fondo es la ira: cómo sale, se contiene o se duerme.",
  },
  sentimento: {
    label: "Centro del sentimiento",
    types: [2, 3, 4],
    text: "Imagen, afecto y valor. La cuestión de fondo es la vergüenza: cómo se arma un yo que merezca amor.",
  },
  pensamento: {
    label: "Centro del pensamiento",
    types: [5, 6, 7],
    text: "Mente, seguridad y posibilidades. La cuestión de fondo es el miedo: cómo se anticipa, se evita o se disuelve el peligro.",
  },
};

export const types: EnneaType[] = [
  {
    id: 1,
    name: "Perfeccionista",
    alias: "El Reformador",
    center: "instinto",
    color: "#c45c3e",
    ink: "#5c2418",
    fear: "Ser malo, corrupto o culpable.",
    desire: "Ser bueno, equilibrado e íntegro.",
    innerMessage: "Vas por un buen camino si haces lo que es correcto.",
    essence: "Perfección",
    healing: "Aceptarte a ti y a los demás como son.",
    summary:
      "Idealista, exigente, metódico. Lidera con el ejemplo y con la calidad, y puede volverse crítico interno (y externo) cuando el mundo no llega al estándar.",
    personality:
      "Personas de principios. Con criterio, ponderadas, realistas, con sentido de misión. Ponen las ideas en práctica con paciencia, método, persistencia y cuidado del detalle. Organizadas y meticulosas, pueden resbalar hacia la crítica y el perfeccionismo. El crítico interno golpea el valor propio, crea tensión y soledad. Se dirigen con juicio y convicción. Tienen don para el trabajo en equipo, la colaboración y la persuasión.",
    focus:
      "Hace las cosas del modo correcto para escapar de la acusación y la culpa. Sigue al crítico interno y a la crítica de afuera. Se compara con los demás para ocupar el terreno moralmente más alto.",
    motivators: ["Reglas y referentes claros", "Orden en el entorno", "Procesos largos sin reloj en la espalda", "Trabajo de apoyo con orientación"],
    strengths: ["Liderar con el ejemplo", "Foco en la calidad", "Búsqueda de la excelencia", "Organización", "Coherencia y honestidad", "Sentido práctico"],
    develop: ["Reactividad y exceso de crítica", "Ponerse a la defensiva cuando lo critican", "Poca conciencia de la ira más honda", "Control y terquedad", "Impaciencia con los detalles ajenos"],
    alert:
      "En el esfuerzo por acertar siempre, toma todos los problemas. Cree que los demás nunca van a llegar a un resultado tan bueno. Se obsesiona con corregir y controlar: serio, tenso, con el peso del mundo encima.",
    vocations: ["Educación y formación", "Personas y trabajo de calidad", "Organización, método, contabilidad", "Derecho, ingeniería, administración"],
    practices: [
      "Nota al crítico interno 30 segundos cada hora y déjalo pasar.",
      "Pasa la atención de “hacerlo mal” a notar la diferencia.",
      "Agenda placeres y trátalos como innegociables.",
      "Pregunta si un error de verdad es grave.",
      "Comete a propósito errores inofensivos y mira qué pasa.",
    ],
    wings: [
      { id: 9, name: "El Idealista", text: "Más ponderado, sabio y civil. Prefiere trabajar solo." },
      { id: 2, name: "El Abogado", text: "Mezcla ideales con empatía. Más persuasivo, activo y social, y más exaltado cuando se frustra." },
    ],
    leadership: "El trabajo de un líder es fijar metas claras y ayudar a que la gente alcance la mayor calidad que pueda.",
    excelBlurb: "Crítico, cuestionador, perfeccionista, metódico. Exige mucho de sí y de los demás. Algunos moralizan y dictan las reglas. Cuando fallan, la frustración puede volverse agresiva.",
  },
  {
    id: 2,
    name: "Ayudador",
    alias: "El Dador",
    center: "sentimento",
    color: "#d36b7a",
    ink: "#6a2430",
    fear: "No ser amado ni necesario.",
    desire: "Sentirse amado y querido.",
    innerMessage: "Vas por un buen camino si te aman y eres indispensable.",
    essence: "Amor",
    healing: "Reconocer tus propias necesidades y recibir, no solo dar.",
    summary:
      "Empático, servicial, generoso. Ve la necesidad del otro antes que la propia, y puede perder libertad intentando ser insustituible.",
    personality:
      "Los atrae el trabajo que implica relación y conversación. Se dedican a ser útiles, con una generosidad que no tiene techo a la vista. Le dan tiempo a los amigos y les cuesta decir que no. De tanto hacer por los demás, se exceden y descuidan la salud y lo que ellos necesitan. Expresivos, habladores, sociables, a veces de más. El deseo de fondo es sentirse amado.",
    focus:
      "Atención en las necesidades y los deseos de los demás, sobre todo de las personas importantes. Actúa según lo que el otro podría sentir o hacer. La vanidad pide ser superada para que haya más espacio para un foco propio.",
    motivators: ["Trabajo entre personas", "Reconocimiento sincero", "Un rol de apoyo o de mentoría", "Espacios cálidos y relacionales"],
    strengths: ["Vínculos fuertes", "Empatía", "Generosidad y ganas de ayudar", "Optimismo", "Ve las necesidades ajenas", "Puede motivar a otros"],
    develop: ["Le cuesta decir que no", "Ira cuando no lo reconocen", "No conoce sus propias necesidades", "Énfasis excesivo en las relaciones", "Hace de más y espera un retorno sin admitirlo"],
    alert:
      "La identidad se fusiona con lo que hace por los demás. Cansancio, cuenta silenciosa y la sensación de que lo usan aparecen cuando el reconocimiento no llega.",
    vocations: ["Psicología, coaching, cuidado", "Educación y desarrollo de personas", "Hospitalidad y ventas relacionales", "Filantropía y trabajo comunitario"],
    practices: [
      "Practica el no sin una justificación larga.",
      "Separa el amor de la aprobación y la atención.",
      "Guarda tiempo que sea solo tuyo, sin utilidad.",
      "Pregunta: ¿esto es para la otra persona, o para que yo siga haciendo falta?",
      "Nombra un objetivo personal antes de hacer algo por alguien.",
    ],
    wings: [
      { id: 1, name: "El Servidor", text: "Un deseo fuerte de aliviar el sufrimiento. Más sobrio y severo consigo: puede ser autocrítico y descuidar la salud." },
      { id: 3, name: "El Anfitrión", text: "Encantador, hablador, adaptable. Le gusta recibir. Menos serio, más orientado a mostrar lo que puede ofrecer." },
    ],
    leadership: "El trabajo de un líder es ver las fortalezas y los huecos del equipo, motivar a la gente y facilitar que se llegue a la meta.",
    excelBlurb: "Solícito, afectuoso, con necesidad de agradar. Cree que tiene mucho que dar y le gusta que se note. Algunos pierden libertad intentando satisfacer a todos.",
  },
  {
    id: 3,
    name: "Triunfador",
    alias: "El Ejecutor",
    center: "sentimento",
    color: "#d4a017",
    ink: "#5a4308",
    fear: "No ser valorado por lo que logra.",
    desire: "Sentirse valorado, querido y aceptado.",
    innerMessage: "Vas por un buen camino si triunfas y los demás te respetan.",
    essence: "Esperanza / valor verdadero",
    healing: "Separar la imagen del yo real, y bajar el ritmo.",
    summary:
      "Orientado al resultado, adaptable, carismático. Hace que la vida parezca un proyecto de éxito, y puede confundir la imagen con quien es.",
    personality:
      "Los mueve el éxito. Seguros, atractivos, encantadores, pueden orientarse por el estatus y el progreso. Ambiciosos, competentes, listos para actuar, se preocupan por la imagen y por lo que piensan los demás. La confianza, el empuje y la persuasión arrastran a un equipo. El riesgo es el exceso de trabajo, la competitividad y el agotamiento. Compiten en el trabajo, en casa, en las relaciones. Temen la intimidad que mostraría fragilidad.",
    focus:
      "Atención en el desempeño, la meta y la imagen que van a leer los demás. Multiplica canales de trabajo y acelera cuando aparece la inseguridad.",
    motivators: ["Metas visibles y medibles", "Reconocimiento de resultados", "Un ambiente competitivo y rápido", "Libertad para ajustar la conducta hasta ganar"],
    strengths: ["Orientación al éxito", "Alta energía", "Lee lo que la gente quiere", "Sale de los problemas", "Empresa y confianza", "Consigue resultados"],
    develop: ["Competitividad extrema", "Poco acceso al sentimiento", "Impaciencia con la emoción ajena", "Creer que la imagen es el yo", "Poco tiempo para las relaciones personales"],
    alert:
      "Acelera, apila tareas y desaparece de la intimidad. El cansancio se ignora. “¿Qué importa de verdad?” se esconde detrás del próximo resultado.",
    vocations: ["Liderazgo comercial y político", "Emprendimiento y publicidad", "Proyectos y ventas", "Comunicación y marcas"],
    practices: [
      "Baja el ritmo y desengánchate del desempeño.",
      "Nota los sentimientos y el cansancio del cuerpo.",
      "Pregunta: ¿el referente es la imagen, o el yo real?",
      "Valora la empatía tanto como el estatus.",
      "Haz espacio para una mirada hacia adentro.",
    ],
    wings: [
      { id: 2, name: "El Promotor", text: "Más relacional y encantador. Usa el magnetismo personal para conseguir cooperación y visibilidad." },
      { id: 4, name: "El Profesional", text: "Más consciente de la imagen refinada y del estilo. Puede oscilar entre el brillo público y el vacío privado." },
    ],
    leadership: "El trabajo de un líder es crear un espacio donde puedan ocurrir resultados, con metas claras y estructura.",
    excelBlurb: "Atado al éxito, prioriza la imagen. Competitivo, le gusta ganar. Cuidado con la vanidad. Tiende a liderar.",
  },
  {
    id: 4,
    name: "Individualista",
    alias: "El Romántico",
    center: "sentimento",
    color: "#7a5ea7",
    ink: "#2f2150",
    fear: "No tener identidad ni sentido propios.",
    desire: "Encontrarse y ser fiel a las necesidades emocionales.",
    innerMessage: "Vas por un buen camino si eres auténtico y singular.",
    essence: "Origen / identidad esencial",
    healing: "Habitar el presente sin definirte por lo que falta.",
    summary:
      "Intuitivo, expresivo, en busca de sentido. Siente la vida en alta definición, y puede perderse en la intensidad, la comparación y la falta.",
    personality:
      "Inconforme con el presente, atado al pasado o soñando el futuro. Sensible, creativo, hacia adentro. Busca sentido en las relaciones y en la expresión. Puede volverse dramático, temperamental y crítico, de sí y de los demás. La sensación de que los otros son más felices y de que todo le cuesta más alimenta el mito de la falta. La autenticidad es el tesoro y la trampa.",
    focus:
      "Atención en lo que está ausente, en lo que sería más verdadero, bello o hondo. Compara la vida interior con cómo se ven los demás.",
    motivators: ["Trabajo con sentido y estética", "Control creativo", "Relaciones hondas, no superficiales", "Espacio para la expresión emocional"],
    strengths: ["Inspiración y creatividad", "Introspección", "Expresividad e intuición", "Compasión", "Búsqueda de la excelencia", "Sentido a través de las relaciones"],
    develop: ["Intensidad y drama", "Genio vivo", "El tedio llega fácil", "Culpa y dificultad con la crítica", "Reserva y crítica extrema a los demás"],
    alert:
      "Cuando lo critican o lo malentienden, se retira y se pone de mal humor. La identidad se apoya en lo que falta. La vida ordinaria se ve demasiado pobre.",
    vocations: ["Artes, escritura, diseño", "Música y dirección creativa", "Terapia y trabajo social", "Marcas con identidad fuerte"],
    practices: [
      "Trae la atención de lo que falta a lo que está aquí.",
      "Termina lo ordinario antes de ir detrás de lo extraordinario.",
      "Separa el sentimiento de la identidad.",
      "Acepta lo común sin perder profundidad.",
      "Usa la creatividad al servicio de algo fuera de ti.",
    ],
    wings: [
      { id: 3, name: "El Aristócrata", text: "Más orientado a sacar las cosas y a que se lo vea. Une estética y ambición." },
      { id: 5, name: "El Bohemio", text: "Más reservado y analítico. Profundiza la interioridad y puede aislarse en lo único que es." },
    ],
    leadership: "El trabajo de un líder es armar organizaciones que den sentido y propósito, para que la gente quiera hacer un trabajo excelente.",
    excelBlurb: "Ve el sufrimiento como una postura frente al mundo. Inconforme con el presente. Algunos se vuelven trágicos porque siempre piensan que los demás son más felices.",
  },
  {
    id: 5,
    name: "Observador",
    alias: "El Investigador",
    center: "pensamento",
    color: "#5b7c6e",
    ink: "#1d332c",
    fear: "Ser invadido, vaciado o incompetente.",
    desire: "Ser capaz, comprender y conservar energía.",
    innerMessage: "Vas por un buen camino si comprendes y puedes sostenerte por tu cuenta.",
    essence: "Omnisciencia / claridad",
    healing: "Entrar al mundo y compartir lo que sabes.",
    summary:
      "Analítico, juicioso, independiente. Comprende a fondo, y puede retirarse tanto que la vida ocurre detrás del vidrio.",
    personality:
      "Cuidadoso; no actúa sin pensar. Observa de lejos para conocer el terreno. Reservado, receloso de las demandas ajenas, puede dejar el sentimiento de lado y vivir una vida solitaria. Excelente en una crisis porque planea y se especializa. La mente quiere el mapa completo antes del paso. La autonomía se vuelve muro.",
    focus:
      "Atención en datos, sistemas y la reserva de energía. Reduce el contacto para no quedar drenado.",
    motivators: ["Tiempo a solas para pensar", "Problemas complejos y especialidad", "Poca invasión emocional", "Control del propio ritmo"],
    strengths: ["Análisis y objetividad", "Sistematizar", "Planificación detallada", "Excelencia en una crisis", "Persistencia", "Especialización"],
    develop: ["Distancia", "Independencia excesiva", "No decir lo que piensa", "Subestimar las relaciones", "No intercambiar información", "Terquedad y crítica"],
    alert:
      "Cuando está inseguro, se pone distante y frío. La vida se vuelve un archivo. La gente siente que necesita una cita para existir.",
    vocations: ["Investigación, ciencia, tecnología", "Estrategia y análisis", "Arquitectura de sistemas", "Escritura técnica y consultoría especializada"],
    practices: [
      "Comparte un pensamiento antes de que esté “listo”.",
      "Quédate en el cuerpo y en la conversación un poco más allá de lo cómodo.",
      "Trata la energía como renovable, no solo como escasa.",
      "Nombra los sentimientos con la misma precisión que los conceptos.",
      "Pide y ofrece ayuda en una dosis pequeña y concreta.",
    ],
    wings: [
      { id: 4, name: "El Iconoclasta", text: "Más estético y emocionalmente intenso. Une análisis y singularidad." },
      { id: 6, name: "El Solucionador", text: "Más leal a sistemas y grupos de competencia. Usa el conocimiento para anticipar el riesgo." },
    ],
    leadership: "El trabajo de un líder es desarrollar la organización con investigación, deliberación y planificación, para que las partes encajen en una misión compartida.",
    excelBlurb: "No hace nada sin pensarlo. Observa de lejos, teme el riesgo, es reservado y puede vivir una vida solitaria. Brilla como investigador y especialista.",
  },
  {
    id: 6,
    name: "Leal",
    alias: "El Escéptico",
    center: "pensamento",
    color: "#6b7d3a",
    ink: "#2c3414",
    fear: "No tener apoyo ni orientación.",
    desire: "Encontrar apoyo y seguridad.",
    innerMessage: "Vas por un buen camino si haces lo que se espera de ti.",
    essence: "Coraje",
    healing: "Relajarte y vivir en el presente.",
    summary:
      "Responsable, leal, estratégico. Anticipa lo que puede salir mal, y oscila entre la cautela extrema y el coraje contrafóbico.",
    personality:
      "Buscan piso firme en un mundo que leen como peligroso y poco confiable. Recurren a personas y sistemas para orientarse y, al mismo tiempo, desconfían de la autoridad. No les gustan demasiadas opciones. Se sienten más seguros con reglas y rutinas. Fuertes en procedimientos, análisis e investigación. La mente charla con escenarios. Pueden ser los más fieles, o poner a prueba el vínculo hasta cansarlo.",
    focus:
      "Atención en amenazas, ambigüedad y la lealtad del grupo. Proyecta pensamientos en los demás y ensaya lo peor para prepararse.",
    motivators: ["Roles y reglas claros", "Un equipo de confianza", "Anticipar problemas", "Autoridad que se ganó la confianza"],
    strengths: ["Responsabilidad y cooperación", "Pensamiento estratégico", "Mente aguda", "Perseverancia", "Anticipar problemas", "Lealtad al equipo"],
    develop: ["Preocupación crónica", "Aversión a la ambigüedad", "Parálisis por análisis", "Demasiada cautela o demasiado riesgo", "Sumisión o desconfianza extrema"],
    alert:
      "La ansiedad se vuelve apellido. O se somete de más, o desafía de más. La decisión se congela mientras la mente corre desastres.",
    vocations: ["Derecho, auditoría, riesgo", "Seguridad y operaciones", "Investigación social y crítica", "Crisis y cumplimiento normativo"],
    practices: [
      "Separa la intuición de la proyección.",
      "Actúa un día como actuaría una persona de fe.",
      "Nota el poder que les das a otros y retoma la autoridad.",
      "Saborea los éxitos en vez de solo cazar el próximo hueco.",
      "Revisa los miedos con personas de verdad."
    ],
    wings: [
      { id: 5, name: "El Defensor", text: "Busca seguridad en sistemas de creencia y conocimiento. Más solitario, escéptico y reactivo cuando se siente amenazado." },
      { id: 7, name: "El Camarada", text: "Más social y aventurero. Usa el humor y el movimiento para aliviar la ansiedad." },
    ],
    leadership: "El trabajo de un líder es resolver problemas creando un espacio donde cada persona se sienta parte de la solución.",
    excelBlurb: "Imagina el resultado de las acciones y a veces ve primero el lado flaco. Busca seguridad. En una crisis, quiere resolver ya. Fuerte en derecho, crítica y ciencias sociales.",
  },
  {
    id: 7,
    name: "Entusiasta",
    alias: "El Epicúreo",
    center: "pensamento",
    color: "#e08a2a",
    ink: "#5a3208",
    fear: "El dolor y la privación.",
    desire: "Ser feliz, satisfecho, realizado.",
    innerMessage: "Vas por un buen camino si consigues lo que necesitas.",
    essence: "Sobriedad",
    healing: "Explorar el interior y quedarte.",
    summary:
      "Curioso, rápido, contagioso. Convierte la vida en una secuencia de posibilidades, y deja el dolor saltando a lo siguiente.",
    personality:
      "Audaz, vivo, con una determinación alegre. Productivo, práctico, juguetón. La caza de sensaciones nuevas le impide terminar lo que empezó. Comunica con vigor, improvisa, delega lo operativo para quedarse con el panorama. Inclinado al análisis general, no al detalle. El optimismo es real y también una estrategia contra el tedio y el dolor.",
    focus:
      "Atención en lo estimulante, lo futuro y lo múltiple. La mente salta. Los límites se sienten como cárcel.",
    motivators: ["Variedad y novedad", "Proyectos con un arranque emocionante", "Libertad de calendario", "Gente interesante e ideas nuevas"],
    strengths: ["Imaginación y creatividad", "Entusiasmo y curiosidad", "Una presencia que atrapa", "Varias tareas a la vez y mente rápida", "Manejar datos desconectados"],
    develop: ["Impulsividad y dispersión", "Evitar situaciones dolorosas", "Empatía desigual", "Reactividad a la crítica", "Desprecio por la rutina", "Racionalizar lo negativo"],
    alert:
      "El calendario se llena para que no crezca el pasto. Los compromisos se adelgazan. El dolor se reformula como chiste o como plan B.",
    vocations: ["Innovación, producto, contenido", "Artes, escenario, producción", "Viaje, hospitalidad, educación vivencial", "Estrategia de oportunidades"],
    practices: [
      "Medita en un solo punto hasta que la mente baje de velocidad.",
      "Lleva una sola cosa hasta el final.",
      "Suelta opciones: menos puede ser más.",
      "Quédate con el tedio, el límite y el conflicto en vez de irte.",
      "Revisa al final del día el hambre de emoción.",
    ],
    wings: [
      { id: 6, name: "El Animador", text: "Más relacional y productivo. Oscila entre las ganas de arriesgar y el miedo a perder lo que ya tiene." },
      { id: 8, name: "El Realista", text: "Une velocidad e ímpetu. Más estratégico, práctico, orientado al poder y al resultado material." },
    ],
    leadership: "El trabajo de un líder es entusiasmar a la gente y ponerla a crear para que la organización tome oportunidades reales.",
    excelBlurb: "Le gusta disfrutar la vida. El trabajo puede parecer un mal necesario para el placer y la libertad. Encantador; lidera de forma amistosa, un poco disfrazada.",
  },
  {
    id: 8,
    name: "Desafiador",
    alias: "El Jefe",
    center: "instinto",
    color: "#2b2b2b",
    ink: "#111111",
    fear: "Ser herido, controlado o invadido.",
    desire: "Protegerse y marcar el rumbo de la propia vida.",
    innerMessage: "Vas por un buen camino si eres fuerte y puedes dominar la situación.",
    essence: "Misericordia",
    healing: "Trabajar el perdón y la vulnerabilidad.",
    summary:
      "Directo, protector, con un apetito grande de vida. Mueve el mundo a la fuerza, y puede no notar el impacto de esa fuerza en los demás.",
    personality:
      "Firme, asertivo, seguro de sí. Fuerte y dominante, también orgulloso, protector y decidido. Controla el entorno y puede intimidar. La intimidad se le hace difícil. En el autodominio usa la fuerza para mejorar la vida de los demás: heroico, magnánimo. No esquiva el riesgo ni la responsabilidad. La comunicación es directa, rápida, sin rodeos. No soporta que lo controlen.",
    focus:
      "Atención en el poder, la justicia y quién manda. Detecta la debilidad, en la sala y en sí, y se mueve para que no lo atrapen.",
    motivators: ["Autonomía y mando", "Desafíos grandes", "Gente competente cerca", "Un resultado visible e inmediato"],
    strengths: ["Franqueza y estrategia", "Salir de los obstáculos", "Empuje y protección", "Sacar proyectos adelante", "Apoyar el éxito de otros", "Confianza en sí"],
    develop: ["Control y exigencia", "Impaciencia con la gente más lenta", "Desprecio por la debilidad", "Esperar demasiado de sí y de los demás", "Sentirse usado cuando el otro no entrega"],
    alert:
      "Estallidos monumentales de ira. Exceso, dominio y la tesis de que la debilidad invita problemas. El otro desaparece u obedece, y la intimidad desaparece con él.",
    vocations: ["Construir y negociar", "Liderazgo operativo", "Defensa de una causa", "Invención y recuperar empresas"],
    practices: [
      "Una vez por hora, revisa el impulso de actuar y respira.",
      "Pregunta a los demás si estás siendo excesivo.",
      "Defiende lo ordinario, lo suave, lo moderado.",
      "Posterga la gratificación y permite la vulnerabilidad.",
      "Busca que ganen los dos en vez de ganar.",
    ],
    wings: [
      { id: 7, name: "El Independiente", text: "Carismático, competitivo, quiere dejar marca. Poca paciencia con la ineficiencia. Más abiertamente provocador." },
      { id: 9, name: "El Oso", text: "Une fuerza y calma aparente. Más protector, menos explosivo: la terquedad reemplaza el ataque." },
    ],
    leadership: "El trabajo de un líder es mover la organización con decisión, poner gente capaz en los roles correctos y dar autonomía a quien es competente.",
    excelBlurb: "Vive con intensidad, le gusta el poder y pelea por lo que ve como justo. No soporta depender ni parecer débil. Hace sus propias reglas.",
  },
  {
    id: 9,
    name: "Pacificador",
    alias: "El Mediador",
    center: "instinto",
    color: "#8a9a4a",
    ink: "#2f3616",
    fear: "Pérdida, separación, aniquilación.",
    desire: "Mantener el equilibrio interior y la paz mental.",
    innerMessage: "Vas a estar bien si las personas a tu alrededor también lo están.",
    essence: "Acción",
    healing: "Despertar y tomar la iniciativa.",
    summary:
      "Diplomático, estable, inclusivo. Sostiene la armonía del grupo, y puede dormir las propias prioridades para que el barco no se mueva.",
    personality:
      "Pacificadores, fáciles de convivir, constantes, receptivos. Ceden demasiado para mantener la paz. Minimizan la fricción; los problemas crecen de la pasividad y la terquedad. Incansables para juntar gente y aclarar malentendidos. En la cima del Eneagrama recogen rasgos de los otros tipos. Afirmarse asusta. Compensan un instinto dormido con imaginación. Arreglan muchas tareas y olvidan lo esencial. Pueden estar activos por fuera y dormidos por dentro.",
    focus:
      "Atención en el entorno y en las agendas ajenas. La prioridad propia queda en segundo lugar. Sustitutos (comida, pantallas, rutina) ocupan el lugar de la voluntad.",
    motivators: ["Un espacio armonioso y estructurado", "Relaciones que duran", "Un ritmo sin prisa agresiva", "Pertenecer sin ser el centro del conflicto"],
    strengths: ["Diplomacia y calidez", "Inclusión y cooperación", "Relaciones que duran", "Paciencia", "Apoyo a los demás", "Una vista amplia desde lo operativo"],
    develop: ["Evitar el conflicto", "No decir lo que piensa", "Olvidar las prioridades", "Procrastinación e indecisión", "Poca energía aparente", "Pasivo-agresivo bajo presión"],
    alert:
      "Acepta para no discutir. La ira se vuelve terquedad silenciosa. Se acaba el día y lo que le importaba no se hizo.",
    vocations: ["Mediación, diplomacia, trabajo con personas", "Facilitación y acompañamiento de equipos", "Operaciones e integración", "Cuidado y comunidad"],
    practices: [
      "Cada día, nombra lo que te importa y revisa si lo hiciste.",
      "Usa la resistencia y la terquedad como brújula de lo que abandonaste.",
      "Haz planes con fecha y con límite.",
      "Toma postura en asuntos reales.",
      "Nota el tirón hacia los sustitutos y quédate con el objetivo.",
    ],
    wings: [
      { id: 8, name: "El Consejero", text: "Más asertivo y corporal. La paz viene con una dosis de fuerza y de límite." },
      { id: 1, name: "El Soñador", text: "Más de principios y de orden. Busca la armonía por lo correcto, no solo por el confort." },
    ],
    leadership: "El trabajo de un líder es ayudar a cumplir una misión compartida creando un lugar de trabajo estructurado y armonioso.",
    excelBlurb: "Parece acomodaticio, no le gusta que lo molesten. Satisface a los demás para mantener la paz. Acepta para no discutir. Buen oyente y negociador.",
  },
];

export const typeById = Object.fromEntries(types.map((t) => [t.id, t])) as Record<TypeId, EnneaType>;

export const concepts = [
  "Hay nueve tipos. Cada persona se identifica con uno.",
  "Ningún tipo es mejor que otro.",
  "El tipo no cambia: cambiamos nosotros.",
  "Tenemos rasgos de todos, pero la mirada de nuestro tipo es la que manda.",
  "La pasión y la fijación cuentan más que el comportamiento típico.",
  "El tipo es una defensa y un estado de conciencia más estrecho.",
  "No somos un tipo: estamos en un tipo.",
  "Observar a los demás lleva a comprender, sin estereotipar, juzgar ni justificar.",
];

export const folderUrl =
  "https://drive.google.com/drive/folders/1Ngk8ATY1oZ06MNPf3Myiy6_2da4vZoGj";
