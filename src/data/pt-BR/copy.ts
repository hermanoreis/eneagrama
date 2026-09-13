import type { TypeId } from "../schema";

export const typeIntroductions: Record<TypeId, string> = {
  1: "Procura fazer o que considera certo. Pode reconhecer esse cuidado na atenção aos detalhes e na cobrança consigo.",
  2: "Percebe o que os outros precisam e gosta de ajudar. Às vezes, deixa as próprias necessidades para depois.",
  3: "Se mobiliza para realizar e alcançar resultados. Pode ter dificuldade para descansar sem sentir que deveria estar produzindo.",
  4: "Valoriza a expressão pessoal e busca sentido no que vive. Pode se comparar e sentir que falta algo em si.",
  5: "Gosta de compreender antes de agir e valoriza seu espaço. Pode se afastar quando sente que estão exigindo demais.",
  6: "Busca confiança e costuma antecipar o que pode dar errado. Às vezes, continua procurando garantias antes de decidir.",
  7: "Se anima com possibilidades e novas experiências. Pode querer mudar de assunto ou de plano quando algo fica difícil.",
  8: "Valoriza a autonomia e enfrenta o que considera injusto. Pode ter dificuldade para mostrar que precisa de ajuda.",
  9: "Procura acordo e considera diferentes pontos de vista. Pode adiar o que quer para evitar um conflito.",
};

export const homeFaq = [
  { question: "O teste e o resultado são gratuitos?", answer: "Sim. Você pode fazer o teste e consultar seu resultado sem pagar." },
  { question: "Preciso entrar com e-mail?", answer: "Sim, para fazer o teste e acessar sua conta. Você recebe um código de acesso, sem criar uma senha. Os perfis e os materiais de estudo podem ser lidos sem entrar." },
  { question: "Posso parar e continuar depois?", answer: "Sim, neste mesmo navegador. As respostas em andamento ficam guardadas nele. Se você apagar os dados do navegador ou mudar de aparelho, esse progresso pode não estar disponível." },
  { question: "O teste mostra quem eu sou?", answer: "O resultado mostra quais tipos tiveram mais pontos nas suas respostas. Ele não descreve tudo sobre você e não é um diagnóstico. Compare os perfis com situações reais da sua vida." },
  { question: "E se eu me identificar com mais de um tipo?", answer: "Você pode reconhecer características de diferentes descrições. Compare as motivações apresentadas e observe quais fazem sentido em situações que se repetem na sua vida." },
  { question: "O mentor é uma pessoa?", answer: "Não. É uma IA que pode consultar seu último resultado e os materiais do site para conversar com você. Ela pode errar e não substitui acompanhamento profissional." },
];

export const typeFaqs: Record<TypeId, { question: string; answer: string }[]> = {
  1: [
    { question: "O que é o tipo 1 do Eneagrama?", answer: "O tipo 1, Perfeccionista, organiza-se em torno de fazer o que é certo. Idealista e metódico, lidera pela qualidade e pode virar crítico de si e dos outros quando o mundo não alcança o padrão." },
    { question: "O que o tipo 1 teme e deseja?", answer: "O medo comum é ser mau, corrupto ou falível. O desejo é ser bom, equilibrado e íntegro. A cura, nessa abordagem, é aceitar a si e aos outros como são." },
    { question: "O que é uma asa do tipo 1?", answer: "Os vizinhos no círculo coloram o tipo 1. 1w9 (Idealista) é mais ponderado e prefere trabalhar só. 1w2 (Advogado) mistura ideais com empatia e é mais sociável." },
  ],
  2: [
    { question: "O que é o tipo 2 do Eneagrama?", answer: "O tipo 2, Doador, organiza-se em torno de ser necessário e amado. Empático e generoso, vê a necessidade alheia primeiro e pode perder liberdade tentando ser insubstituível." },
    { question: "O que o tipo 2 teme e deseja?", answer: "O medo comum é não ser amado ou necessário. O desejo é sentir-se amado e querido. A cura inclui receber, não só dar." },
    { question: "O que é uma asa do tipo 2?", answer: "2w1 (Servidor) é mais sóbrio. 2w3 (Anfitrião) é mais encantador e voltado a mostrar o que pode oferecer." },
  ],
  3: [
    { question: "O que é o tipo 3 do Eneagrama?", answer: "O tipo 3, Executivo, organiza-se em torno de sucesso e imagem. Adaptável e orientado a resultado, pode confundir a performance com quem é." },
    { question: "O que o tipo 3 teme e deseja?", answer: "O medo comum é não ser valorizado pelas realizações. O desejo é sentir-se valorizado. A cura inclui desacelerar e separar imagem do eu real." },
    { question: "O que é uma asa do tipo 3?", answer: "3w2 (Promotor) é mais relacional. 3w4 (Profissional) é mais consciente da imagem e pode oscilar entre brilho público e vazio privado." },
  ],
  4: [
    { question: "O que é o tipo 4 do Eneagrama?", answer: "O tipo 4, Individualista, organiza-se em torno de identidade e sentido. Expressivo e intenso, pode se perder na comparação e no que falta." },
    { question: "O que o tipo 4 teme e deseja?", answer: "O medo comum é não ter identidade própria. O desejo é encontrar a si mesmo e ser fiel às necessidades emocionais." },
    { question: "Qual a diferença entre 4w5 e 4w3?", answer: "4w3 (Aristocrata) une estética e ambição. 4w5 (Boêmio) é mais reservado e analítico. O teste indica o vizinho com mais pontos; não prova como essas influências vivem em você." },
  ],
  5: [
    { question: "O que é o tipo 5 do Eneagrama?", answer: "O tipo 5, Observador, organiza-se em torno de compreender e preservar energia. Analítico e independente, pode se retirar tanto que a vida acontece atrás do vidro." },
    { question: "O que o tipo 5 teme e deseja?", answer: "O medo comum é ser invadido, esvaziado ou incompetente. O desejo é ser capaz, compreender e preservar energia." },
    { question: "O que é uma asa do tipo 5?", answer: "5w4 (Iconoclasta) é mais estético e intenso. 5w6 (Solucionador) é mais leal a sistemas de competência." },
  ],
  6: [
    { question: "O que é o tipo 6 do Eneagrama?", answer: "O tipo 6, Leal, organiza-se em torno de apoio e segurança. Responsável e estratégico, antecipa o que pode dar errado." },
    { question: "O que o tipo 6 teme e deseja?", answer: "O medo comum é não contar com apoio. O desejo é encontrar apoio e segurança. A cura, nessa abordagem, é relaxar e viver o presente." },
    { question: "O que é uma asa do tipo 6?", answer: "6w5 (Defensor) busca segurança em sistemas de conhecimento. 6w7 (Camarada) é mais sociável e usa humor para aliviar a ansiedade." },
  ],
  7: [
    { question: "O que é o tipo 7 do Eneagrama?", answer: "O tipo 7, Entusiasta, organiza-se em torno de possibilidade e de evitar a dor. Curioso e rápido, pode sair da dificuldade pulando para o próximo plano." },
    { question: "O que o tipo 7 teme e deseja?", answer: "O medo comum é sofrer dores e privações. O desejo é ser feliz e realizar-se." },
    { question: "O que é uma asa do tipo 7?", answer: "7w6 (Animador) é mais relacional. 7w8 (Realista) é mais estratégico e voltado a resultado material." },
  ],
  8: [
    { question: "O que é o tipo 8 do Eneagrama?", answer: "O tipo 8, Desafiador, organiza-se em torno de proteção e de não ser controlado. Direto e de grande força, pode não notar o impacto dessa força nos outros." },
    { question: "O que o tipo 8 teme e deseja?", answer: "O medo comum é ser magoado, controlado ou invadido. O desejo é proteger-se e determinar o curso da própria vida." },
    { question: "O que é uma asa do tipo 8?", answer: "8w7 (Independente) é mais provocador. 8w9 (Urso) é mais protetor e menos explosivo." },
  ],
  9: [
    { question: "O que é o tipo 9 do Eneagrama?", answer: "O tipo 9, Mediador, organiza-se em torno da paz interior e de não tremer o barco. Inclusivo e estável, pode adiar as próprias prioridades para manter a harmonia." },
    { question: "O que o tipo 9 teme e deseja?", answer: "O medo comum é perda, separação, aniquilação. O desejo é equilíbrio interior e paz de espírito." },
    { question: "O que é uma asa do tipo 9?", answer: "9w8 (Conselheiro) traz mais força e fronteira. 9w1 (Sonhador) busca harmonia pelo certo, não só pelo conforto." },
  ],
};

export const howToTest = {
  name: "Como fazer este teste gratuito de Eneagrama",
  steps: [
    { name: "Entre com e-mail", text: "Você recebe um código de 6 dígitos. Não precisa criar senha." },
    { name: "Responda 135 afirmativas", text: "Quinze itens se relacionam a cada tipo, misturados no questionário. Use a escala de nunca a sempre, pensando em hábitos que se repetem." },
    { name: "Leia o resultado como ponto de partida", text: "Pontuação mais alta significa mais concordância com aquelas frases, não uma probabilidade de você “ser” um tipo. Empates permanecem visíveis. Não é um diagnóstico." },
  ],
};
