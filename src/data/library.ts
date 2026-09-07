export type LibraryItem = {
  slug: string;
  kind: "perfil" | "teste" | "sintese" | "estudo" | "leitura";
  title: string;
  note: string;
  href: string;
};

export const library: LibraryItem[] = [
  {
    slug: "tipos",
    kind: "perfil",
    title: "Os nove perfis",
    note: "Conheça as motivações de cada tipo e compare com situações da sua vida.",
    href: "/tipos",
  },
  {
    slug: "teste",
    kind: "teste",
    title: "Teste de Eneagrama gratuito",
    note: "Responda a 135 afirmativas para começar a explorar seus padrões.",
    href: "/teste",
  },
  {
    slug: "sintese",
    kind: "sintese",
    title: "O Eneagrama no trabalho",
    note: "Observe sua forma de lidar com cobranças, conversas e colaboração.",
    href: "/sintese",
  },
  {
    slug: "mapa",
    kind: "estudo",
    title: "Como o Eneagrama funciona",
    note: "Entenda os conceitos que aparecem nas descrições dos tipos.",
    href: "/mapa",
  },
  {
    slug: "workbook",
    kind: "estudo",
    title: "Exercícios para o dia a dia",
    note: "Escolha uma pergunta e uma prática para experimentar.",
    href: "/biblioteca/workbook",
  },
  {
    slug: "resumao",
    kind: "estudo",
    title: "Resumão",
    note: "Relembre os tipos e encontre caminhos para aprofundar sua leitura.",
    href: "/biblioteca/resumao",
  },
  {
    slug: "leituras",
    kind: "leitura",
    title: "Palmer, Riso e Hudson",
    note: "Conheça os livros citados no site e os temas que abordam.",
    href: "/biblioteca/leituras",
  },
];

export const kindLabel: Record<LibraryItem["kind"], string> = {
  perfil: "Perfil",
  teste: "Teste",
  sintese: "Síntese",
  estudo: "Estudo",
  leitura: "Leitura",
};
