import type { TypeId } from "../schema";

export const typeIntroductions: Record<TypeId, string> = {
  1: "Trata de hacer lo que considera correcto. Tal vez reconoces ese cuidado en la atención al detalle y en lo duro que es consigo.",
  2: "Nota lo que necesitan los demás y le gusta ayudar. A veces las necesidades propias esperan.",
  3: "Se mueve para sacar las cosas y llegar a resultados. Descansar sin sentir que debería estar produciendo puede costarle.",
  4: "Valora la expresión personal y busca sentido en lo que vive. Puede compararse y sentir que le falta algo.",
  5: "Le gusta comprender antes de actuar y valora su espacio. Puede retirarse cuando siente que le piden de más.",
  6: "Busca confianza y suele anticipar lo que puede salir mal. A veces sigue buscando garantías antes de decidir.",
  7: "Se entusiasma con las posibilidades y las experiencias nuevas. Puede querer cambiar de tema o de plan cuando algo se pone difícil.",
  8: "Valora la autonomía y enfrenta lo que considera injusto. Mostrar que necesita ayuda puede ser difícil.",
  9: "Busca acuerdo y considera distintos puntos de vista. Puede posponer lo que quiere para evitar un conflicto.",
};

export const homeFaq = [
  { question: "¿El test de eneagrama es gratis?", answer: "Sí. Puedes hacer el test y leer tu resultado sin pagar." },
  { question: "¿Hay que poner el correo para hacer el test de eneagrama?", answer: "Sí, para hacer el test y abrir tu cuenta. Recibes un código de acceso, sin crear una contraseña. Los perfiles de los tipos y las páginas de estudio se pueden leer sin entrar." },
  { question: "¿Puedo pausar el test de eneagrama y seguir después?", answer: "Sí, en este mismo navegador. Las respuestas en curso se quedan ahí. Si borras los datos del navegador o cambias de dispositivo, ese avance puede no estar." },
  { question: "¿El test de eneagrama dice quién soy?", answer: "El resultado muestra qué tipos sumaron más puntos en tus respuestas. No describe todo de ti y no es un diagnóstico. Compara los perfiles con situaciones reales de tu vida." },
  { question: "¿Qué hago si me identifico con más de un tipo del eneagrama?", answer: "Puedes reconocer rasgos en distintas descripciones. Compara las motivaciones y fíjate cuáles aparecen en situaciones que se repiten en tu vida." },
  { question: "¿El mentor del eneagrama es una persona?", answer: "No. Es una IA que puede mirar tu último resultado y los materiales de este sitio para conversar contigo. Puede equivocarse y no reemplaza un acompañamiento profesional." },
];

export const typeFaqs: Record<TypeId, { question: string; answer: string }[]> = {
  1: [
    { question: "¿Qué es el tipo 1 del eneagrama?", answer: "El tipo 1, el Perfeccionista (el Reformador), se organiza alrededor de hacer lo correcto. Idealista y metódico, lidera por la calidad y puede volverse un crítico duro de sí y de los demás cuando el mundo no llega al estándar." },
    { question: "¿Qué teme y qué quiere el tipo 1 del eneagrama?", answer: "El miedo habitual es ser malo, corrupto o culpable. El deseo es ser bueno, equilibrado e íntegro. La sanación, en esta enseñanza, es aceptarte a ti y a los demás como son." },
    { question: "¿Cuáles son las alas del tipo 1 del eneagrama?", answer: "Los vecinos en el círculo colorean al tipo 1. Un 1w9 (el Idealista) es más ponderado y prefiere trabajar solo. Un 1w2 (el Abogado) mezcla ideales con empatía y es más social, y más exaltado cuando se frustra." },
  ],
  2: [
    { question: "¿Qué es el tipo 2 del eneagrama?", answer: "El tipo 2, el Ayudador (el Dador), se organiza alrededor de ser necesario y amado. Empático y generoso, ve primero la necesidad de los demás y puede perder libertad intentando ser insustituible." },
    { question: "¿Qué teme y qué quiere el tipo 2 del eneagrama?", answer: "El miedo habitual es no ser amado ni necesario. El deseo es sentirse amado y querido. Sanar incluye recibir, no solo dar, y notar las necesidades propias." },
    { question: "¿Qué es un ala del tipo 2 del eneagrama?", answer: "Un 2w1 (el Servidor) es más sobrio y puede descuidar la salud mientras alivia el sufrimiento. Un 2w3 (el Anfitrión) es más encantador y está más orientado a mostrar lo que puede ofrecer." },
  ],
  3: [
    { question: "¿Qué es el tipo 3 del eneagrama?", answer: "El tipo 3, el Triunfador (el Ejecutor), se organiza alrededor del éxito y la imagen. Adaptable y orientado al resultado, puede confundir el desempeño con quien es." },
    { question: "¿Qué teme y qué quiere el tipo 3 del eneagrama?", answer: "El miedo habitual es no ser valorado por lo que logra. El deseo es sentirse valorado, querido y aceptado. Sanar incluye bajar el ritmo y separar la imagen del yo real." },
    { question: "¿Qué es un ala del tipo 3 del eneagrama?", answer: "Un 3w2 (el Promotor) es más relacional. Un 3w4 (el Profesional) cuida más el estilo y puede oscilar entre el brillo público y el vacío privado." },
  ],
  4: [
    { question: "¿Qué es el tipo 4 del eneagrama?", answer: "El tipo 4, el Individualista (el Romántico), se organiza alrededor de la identidad y el sentido. Expresivo e intenso, puede perderse en la comparación y en lo que siente que le falta." },
    { question: "¿Qué teme y qué quiere el tipo 4 del eneagrama?", answer: "El miedo habitual es no tener identidad ni sentido propios. El deseo es encontrarse y ser fiel a las necesidades emocionales. Sanar es habitar el presente sin definirte por la falta." },
    { question: "¿Tipo 4 ala 5 o ala 3 del eneagrama?", answer: "Un 4w3 (el Aristócrata) une estética y ambición y quiere que se lo vea. Un 4w5 (el Bohemio) es más reservado y analítico, y puede aislarse en lo único que es. El test informa el vecino con más puntos; no demuestra cómo viven en ti esas influencias." },
  ],
  5: [
    { question: "¿Qué es el tipo 5 del eneagrama?", answer: "El tipo 5, el Observador (el Investigador), se organiza alrededor de comprender y conservar energía. Analítico e independiente, puede retirarse tanto que la vida ocurre detrás del vidrio." },
    { question: "¿Qué teme y qué quiere el tipo 5 del eneagrama?", answer: "El miedo habitual es ser invadido, vaciado o incompetente. El deseo es ser capaz, comprender y guardar energía. Sanar incluye entrar al mundo y compartir lo que sabes." },
    { question: "¿Qué es un ala del tipo 5 del eneagrama?", answer: "Un 5w4 (el Iconoclasta) es más estético e intenso. Un 5w6 (el Solucionador) es más leal a sistemas de competencia y usa el conocimiento para anticipar el riesgo." },
  ],
  6: [
    { question: "¿Qué es el tipo 6 del eneagrama?", answer: "El tipo 6, el Leal (el Escéptico), se organiza alrededor del apoyo y la seguridad. Responsable y estratégico, anticipa lo que puede salir mal y puede oscilar entre la cautela y el coraje contrafóbico." },
    { question: "¿Qué teme y qué quiere el tipo 6 del eneagrama?", answer: "El miedo habitual es no tener apoyo ni orientación. El deseo es encontrar apoyo y seguridad. La sanación, en esta enseñanza, es relajarte y vivir en el presente." },
    { question: "¿Qué es un ala del tipo 6 del eneagrama?", answer: "Un 6w5 (el Defensor) busca seguridad en sistemas de conocimiento y puede ser más solitario. Un 6w7 (el Camarada) es más social y usa el humor y el movimiento para aliviar la ansiedad." },
  ],
  7: [
    { question: "¿Qué es el tipo 7 del eneagrama?", answer: "El tipo 7, el Entusiasta (el Epicúreo), se organiza alrededor de la posibilidad y de evitar el dolor. Curioso y rápido, puede dejar lo difícil saltando al siguiente plan." },
    { question: "¿Qué teme y qué quiere el tipo 7 del eneagrama?", answer: "El miedo habitual es el dolor y la privación. El deseo es ser feliz, satisfecho, realizado. Sanar incluye quedarte con el interior en vez de coleccionar superficies." },
    { question: "¿Qué es un ala del tipo 7 del eneagrama?", answer: "Un 7w6 (el Animador) es más relacional. Un 7w8 (el Realista) es más estratégico y orientado al resultado material." },
  ],
  8: [
    { question: "¿Qué es el tipo 8 del eneagrama?", answer: "El tipo 8, el Desafiador (el Jefe), se organiza alrededor de protegerse y de no ser controlado. Directo y contundente, puede no notar el impacto de esa fuerza en los demás." },
    { question: "¿Qué teme y qué quiere el tipo 8 del eneagrama?", answer: "El miedo habitual es ser herido, controlado o invadido. El deseo es protegerse y marcar el rumbo de su propia vida. Sanar incluye vulnerabilidad y perdón." },
    { question: "¿Qué es un ala del tipo 8 del eneagrama?", answer: "Un 8w7 (el Independiente) es más abiertamente provocador. Un 8w9 (el Oso) es más protector, menos explosivo; la terquedad puede reemplazar el ataque." },
  ],
  9: [
    { question: "¿Qué es el tipo 9 del eneagrama?", answer: "El tipo 9, el Pacificador (el Mediador), se organiza alrededor de la paz interior y de no mover el barco. Inclusivo y estable, puede posponer las propias prioridades para mantener la armonía." },
    { question: "¿Qué teme y qué quiere el tipo 9 del eneagrama?", answer: "El miedo habitual es la pérdida, la separación, la aniquilación. El deseo es el equilibrio interior y la paz mental. Sanar es despertar y tomar la iniciativa." },
    { question: "¿Qué es un ala del tipo 9 del eneagrama?", answer: "Un 9w8 (el Consejero) trae más fuerza y límite. Un 9w1 (el Soñador) busca la armonía por lo correcto, no solo por el confort." },
  ],
};

export const howToTest = {
  name: "Cómo hacer este test de eneagrama gratis",
  steps: [
    { name: "Entra con tu correo", text: "Recibes un código de seis dígitos. No hay contraseña que crear." },
    { name: "Responde 135 frases", text: "Quince ítems se relacionan con cada tipo, mezclados en el cuestionario. Usa la escala de nunca a siempre, pensando en hábitos que se repiten." },
    { name: "Lee el resultado como un punto de partida", text: "Un puntaje más alto significa más acuerdo con esas frases, no una probabilidad de que “seas” un tipo. Los empates quedan a la vista. No es un diagnóstico." },
  ],
};
