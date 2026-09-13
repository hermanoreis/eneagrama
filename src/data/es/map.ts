import { neighborIds, type MapTopic, type TypeArrows, type TypeId, type WingSide } from "../schema";
import { typeById } from "./types";

export { neighborIds };
export type { MapTopic, TypeArrows, WingSide };

export const arrowsByType: Record<TypeId, TypeArrows> = {
  1: {
    growth: 7, growthName: "El Entusiasta feliz",
    growthText: "Prueba otras realidades sin culpa. Menos dogmático, más natural y abierto. Fallar deja de ser el fin del mundo.",
    stress: 4, stressName: "El Atormentado",
    stressText: "El peso del mundo se vuelve fantasía, vergüenza y melancolía. Puede soltar los principios y justificar el exceso.",
  },
  2: {
    growth: 4, growthName: "El Autoconsciente",
    growthText: "Se conecta con sus propios sentimientos sin censurarlos. Ve que el amor no es moneda. Se expresa como único.",
    stress: 8, stressName: "El Calumniador",
    stressText: "Debajo del guante de terciopelo, el puño de hierro. Cobra, calumnia y ataca cuando el otro no reacciona como esperaba.",
  },
  3: {
    growth: 6, growthName: "El Leal cautivador",
    growthText: "Se compromete con personas y principios, suelta la máscara de camaleón y gana autoestima de verdad.",
    stress: 9, stressName: "El Negligente, desarmándose",
    stressText: "Se corta bajo el estrés de ser siempre el mejor. Descuida, deja la escena y se ocupa de lo secundario.",
  },
  4: {
    growth: 1, growthName: "El sabio realista",
    growthText: "Cae al mundo real y busca el modo correcto de hacer las cosas. Deja de esperar un salvador y atiende su propia angustia.",
    stress: 2, stressName: "La Víctima dependiente",
    stressText: "Pone la solución en la otra persona. Se queja, idealiza a quien lo va a salvar y contamina el espacio con la crisis.",
  },
  5: {
    growth: 8, growthName: "El sabio presente",
    growthText: "Se pone asertivo, deja el análisis lento, reclama espacio y pasa del cerebro al cuerpo. Enfrenta el mundo.",
    stress: 7, stressName: "El Aislado fóbico",
    stressText: "El aislamiento no alcanza. Se agita, hace de más, persigue estímulo y nada satisface, incluidos intereses y hábitos raros.",
  },
  6: {
    growth: 9, growthName: "El estable, equilibrado",
    growthText: "Suelta el miedo, confía en sí, se conecta al centro del cuerpo. El pánico se vuelve silencio.",
    stress: 3, stressName: "El Hiperactivo hostil",
    stressText: "Esconde el miedo bajo una máscara hiperactiva. Multiplica compromisos, compite y hostiliza fuerzas ocultas."
  },
  7: {
    growth: 5, growthName: "El Explorador objetivo",
    growthText: "Cultiva la reserva y la observación. Saborea la experiencia en vez de coleccionar superficies.",
    stress: 1, stressName: "El Impaciente implacable",
    stressText: "Cambia la alegría por una seriedad fría. Critica, pierde la paciencia con la incompetencia ajena y busca la falla en todo.",
  },
  8: {
    growth: 2, growthName: "El Altruista desinteresado",
    growthText: "Presta atención a las necesidades de los demás y usa la fuerza para ayudar, de forma leal y amistosa.",
    stress: 5, stressName: "El Paranoico delirante",
    stressText: "Se retira para analizar enemigos y volver con toda la fuerza. “Me voy, pero me llevo a tantos como pueda.”",
  },
  9: {
    growth: 3, growthName: "El seguro de sí",
    growthText: "Reconoce su propio valor, pide tiempo y atención, entra al mundo y se involucra con el presente.",
    stress: 6, stressName: "El Masoquista",
    stressText: "Se vuelve asustado, vacilante y sumiso. Suelta la autosuficiencia y sufre por nada.",
  },
};

export const triads = {
  instinto: {
    id: "instinto" as const,
    label: "Tríada del instinto",
    types: [8, 9, 1] as TypeId[],
    time: "Presente",
    feeling: "Ira",
    seek: "Autonomía",
    concern: "Resistencia y control del entorno",
    problem: "Agresión y represión",
    text: "Cuerpo, fuerza vital, supervivencia. La cuestión de fondo es la ira: cómo sale, desaparece o se vuelve olla a presión.",
    energy: { 8: "Energía hacia afuera, contra el entorno.", 9: "Energía hacia afuera y hacia adentro, ambivalente.", 1: "Energía hacia adentro, contra los impulsos internos." } as Record<number, string>,
    slogan: { 8: "El que puede más, llora menos.", 9: "Despacio se llega lejos.", 1: "El infierno está empedrado de buenas intenciones." } as Record<number, string>,
  },
  sentimento: {
    id: "sentimento" as const,
    label: "Tríada del sentimiento",
    types: [2, 3, 4] as TypeId[],
    time: "Pasado",
    feeling: "Vergüenza",
    seek: "Atención",
    concern: "Amor al yo falso y a la autoimagen",
    problem: "Identidad y hostilidad",
    text: "Quiénes somos, cómo somos. La cuestión de fondo es la vergüenza: cómo se arma un yo que merezca amor.",
    energy: { 2: "Autoimagen presentada hacia afuera, hacia los demás.", 3: "Autoimagen para sí y para los demás.", 4: "Autoimagen hacia adentro, para uno mismo." } as Record<number, string>,
    slogan: { 2: "Es dando como se recibe.", 3: "Los amigos, amigos; los negocios, aparte.", 4: "Desear es mejor que tener." } as Record<number, string>,
  },
  pensamento: {
    id: "pensamento" as const,
    label: "Tríada del pensamiento",
    types: [5, 6, 7] as TypeId[],
    time: "Futuro",
    feeling: "Miedo",
    seek: "Seguridad",
    concern: "Estrategias y convicciones",
    problem: "Inseguridad y ansiedad",
    text: "Soporte interior y orientación. La cuestión de fondo es el miedo: cómo se anticipa, se evita o se disuelve el peligro.",
    energy: { 5: "Huye hacia adentro, miedo al mundo de afuera.", 6: "Huye hacia adentro y hacia afuera, miedo a los dos mundos.", 7: "Huye hacia afuera, miedo al mundo interior." } as Record<number, string>,
    slogan: { 5: "Más vale solo que mal acompañado.", 6: "Más vale prevenir que lamentar.", 7: "Uno es poco; dos es bueno; tres es mejor." } as Record<number, string>,
  },
};

export const otherTriads = [
  { label: "Competencia", types: [1, 3, 5] as TypeId[], text: "Resuelven haciendo bien, por el resultado o por el análisis." },
  { label: "Actitud positiva", types: [2, 7, 9] as TypeId[], text: "Suavizan el conflicto con ayuda, posibilidad o paz." },
  { label: "Reactivos", types: [4, 6, 8] as TypeId[], text: "Responden con intensidad emocional, vigilancia o fuerza." },
  { label: "Complacientes", types: [1, 2, 6] as TypeId[], text: "Se orientan por la otra persona, la regla o la autoridad." },
  { label: "Asertivos", types: [3, 7, 8] as TypeId[], text: "Van primero: meta, placer o impacto." },
  { label: "Retraídos", types: [4, 5, 9] as TypeId[], text: "Se recogen en la interioridad, la mente o el confort." },
];

export const variants = [
  {
    id: "autopreservacao",
    label: "Autopreservación",
    also: "Supervivencia",
    figure: "Madre",
    focus: "Yo / Yo",
    summary: "El instinto de mantenerse vivo fue el más distorsionado en la infancia. Atención en comida, techo, salud, dinero, ritmo y provisión. La crisis aparece cuando no puede proveerse a sí mismo.",
    palmer: "En la lectura de Palmer, la atención se organiza alrededor de la seguridad del organismo. La otra persona entra después de “¿estoy a salvo?”",
  },
  {
    id: "sexual",
    label: "Sexual",
    also: "Relación · sintonía",
    figure: "Hermanos",
    focus: "Yo / Tú",
    summary: "El instinto de vínculo con un otro específico fue el más marcado. Atención en la intensidad, la elección, la atracción y “quién está conmigo”. Pasión, posesividad y entrega viajan juntas.",
    palmer: "Palmer describe este foco como un radar de sintonía: la persona lee el campo entre dos, no la manada ni el depósito.",
  },
  {
    id: "social",
    label: "Social",
    also: "Pertenencia · grupo",
    figure: "Padre",
    focus: "Yo / Nosotros",
    summary: "El instinto de lugar en el grupo fue el más marcado. Atención en la lealtad, la jerarquía, la justicia colectiva y “dónde encajo”. Baja la guardia solo cuando percibe respeto.",
    palmer: "La mirada social lee estatus, pertenencia y el clima de la sala. La pregunta silenciosa es “¿soy uno de nosotros?”",
  },
] as const;

export const healthLevels = {
  intro:
    "Los niveles de desarrollo, en la línea de Riso y Hudson (y en el recorte UFRGS/NEH), muestran movimiento dentro del mismo tipo. La persona oscila entre franjas más claras y más estrechas, tendiendo a un equilibrio. No es un ranking entre tipos.",
  bands: [
    {
      id: "saudavel",
      label: "Franja saludable",
      levels: [
        { n: 1, name: "Liberación", text: "Aparece la esencia. El tipo se vuelve instrumento, no prisión." },
        { n: 2, name: "Capacidad", text: "El talento psicológico en uso pleno, con empatía y elección." },
        { n: 3, name: "Valor social", text: "El don del tipo sirve al entorno sin necesitar escenario." },
      ],
    },
    {
      id: "media",
      label: "Franja media",
      levels: [
        { n: 4, name: "Desequilibrio", text: "La identificación con el tipo empieza a endurecerse." },
        { n: 5, name: "Control interpersonal", text: "La otra persona se vuelve pieza de la estrategia del ego." },
        { n: 6, name: "Sobrecompensación", text: "Más de lo mismo: el remedio del tipo se vuelve sobredosis." },
      ],
    },
    {
      id: "nao-saudavel",
      label: "Franja no saludable",
      levels: [
        { n: 7, name: "Violación", text: "Caen los límites. La defensa lastima a quien está cerca, y al yo." },
        { n: 8, name: "Compulsión", text: "El patrón corre solo, con poco acceso a la elección." },
        { n: 9, name: "Destrucción patológica", text: "Colapso de la estructura. Aquí el mapa pide ayuda clínica, no solo estudio." },
      ],
    },
  ],
};

export const whatIsAType = {
  formula:
    "Un tipo + un ala + una variante instintiva (subtipo) + un nivel de desarrollo + el movimiento de integración o desintegración + el humor del día.",
  note: "Ningún tipo es mejor ni peor. La numeración no es un ranking. Cada tipo es único. Nadie es un tipo: la persona está en un tipo.",
};

export const essencePersonality = {
  essence: "Lo que realmente somos en un sentido espiritual. El yo verdadero: pleno, que sana, no fabricado.",
  personality: "Las máscaras que nos ponemos para proteger la esencia. Creencias, miedos, defensas, compensaciones.",
  bridge:
    "Al crecer, creamos una capa entre esencia y personalidad que limita y duerme al yo verdadero. El Eneagrama describe esa capa; no la reemplaza con un diagnóstico.",
};

export function wingsFor(id: TypeId): WingSide[] {
  return typeById[id].wings.map((w) => ({ id: w.id, name: w.name, text: w.text }));
}

export function triadOf(id: TypeId) {
  if (triads.instinto.types.includes(id)) return triads.instinto;
  if (triads.sentimento.types.includes(id)) return triads.sentimento;
  return triads.pensamento;
}

export function serializeMap(topic: MapTopic, tipo?: number) {
  if (topic === "triade") {
    return {
      topic, triads, otherTriads,
      note: "Helen Palmer lee las tríadas como centros de inteligencia (cuerpo, corazón, mente). El recorte UFRGS suma el tiempo (presente, pasado, futuro) y el sentimiento de fondo (ira, vergüenza, miedo).",
    };
  }
  if (topic === "variante") {
    return {
      topic, variants,
      note: "Las personas del mismo tipo difieren en conducta según el instinto más marcado. La esencia del tipo (la motivación) sigue siendo la misma.",
    };
  }
  if (topic === "nivel") {
    return {
      topic, ...healthLevels,
      caution: "El test de 135 frases no mide el nivel. Usa el vocabulario para hablar del movimiento, sin diagnosticar patología.",
    };
  }
  if (topic === "asa") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "Las alas son los vecinos en el círculo. Colorean el tipo; no lo reemplazan. En el test, el ala probable es el vecino con mayor puntaje. Empate: alas equilibradas.",
      forType: id
        ? { type: id, name: typeById[id].name, wings: wingsFor(id) }
        : Object.fromEntries(([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeId[]).map((n) => [n, { name: typeById[n].name, wings: wingsFor(n) }])),
    };
  }
  if (topic === "flecha") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "Las flechas describen movimiento, no destino. La integración (crecimiento) va contra las flechas clásicas del símbolo. La desintegración (estrés) sigue las flechas. Riso y Hudson mapean nueve niveles dentro de cada tipo; las flechas son el desplazamiento hacia el tipo de seguridad o el tipo de estrés.",
      forType: id ? { type: id, name: typeById[id].name, ...arrowsByType[id] } : arrowsByType,
    };
  }
  return { topic: "tipo", whatIsAType, essencePersonality, formulaNote: whatIsAType.formula };
}
