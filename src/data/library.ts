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
    note: "Medo, desejo, asas, vocações e práticas de cada tipo.",
    href: "/tipos",
  },
  {
    slug: "teste",
    kind: "teste",
    title: "As 135 afirmativas",
    note: "O instrumento da pasta, agora no teste do site.",
    href: "/teste",
  },
  {
    slug: "sintese",
    kind: "sintese",
    title: "Síntese de perfis e liderança",
    note: "Pontos fortes, o que desenvolver e o paradigma de cada tipo.",
    href: "/sintese",
  },
  {
    slug: "mapa",
    kind: "estudo",
    title: "O mapa",
    note: "Tríades, variantes instintivas, níveis, asas e flechas.",
    href: "/mapa",
  },
  {
    slug: "workbook",
    kind: "estudo",
    title: "Workbook",
    note: "Caderno de trabalho: olhar para dentro, os nove P e um plano mínimo.",
    href: "/biblioteca/workbook",
  },
  {
    slug: "resumao",
    kind: "estudo",
    title: "Resumão",
    note: "Compilação curta da trilha de ensino, para reler o essencial.",
    href: "/biblioteca/resumao",
  },
  {
    slug: "leituras",
    kind: "leitura",
    title: "Palmer, Riso e Hudson",
    note: "O que cada obra contribui para este mapa, sem o volume na tela.",
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
