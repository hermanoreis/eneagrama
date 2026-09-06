import { folderUrl } from "./types";

export type DriveFile = {
  id: string;
  name: string;
  kind: "perfil" | "teste" | "sintese" | "estudo" | "livro" | "midia";
  note: string;
  size: string;
};

export const folder = {
  url: folderUrl,
  title: "Eneagrama",
};

export const files: DriveFile[] = [
  {
    id: "1gLggUx06O731pN8oNTF7-DFwzt18pBCd",
    name: "Perfil 1 — Perfeccionista",
    kind: "perfil",
    note: "Documento de ensino com medo, desejo, asas, vocações e práticas.",
    size: "72 KB",
  },
  {
    id: "1WPqUneOLI9mAYhSYlpBjMD_uhfygh4Z4",
    name: "Perfil 2 — Doador",
    kind: "perfil",
    note: "Foco relacional, asas Servidor e Anfitrião, desenvolvimento.",
    size: "74 KB",
  },
  {
    id: "14Ii5EeQP793kjYFRy9pfNX_vBSaevvOU",
    name: "Perfil 3 — Executivo",
    kind: "perfil",
    note: "Imagem, resultado e o risco de confundir sucesso com identidade.",
    size: "70 KB",
  },
  {
    id: "1BDN0hM1mmX8L-nxB3GesOu2FscWWSZTI",
    name: "Perfil 4 — Individualista",
    kind: "perfil",
    note: "Autenticidade, falta e busca de sentido.",
    size: "77 KB",
  },
  {
    id: "1s663jlLIvUo3PXBJxCvt-IVTqZ2xx2S7",
    name: "Perfil 5 — Observador",
    kind: "perfil",
    note: "Retirada, expertise e economia de energia.",
    size: "84 KB",
  },
  {
    id: "1bLAyomAxWMDUbmeO2Hdu_J-HFe00neqH",
    name: "Perfil 6 — Leal",
    kind: "perfil",
    note: "Segurança, autoridade e coragem.",
    size: "75 KB",
  },
  {
    id: "1CQH9l47BrPBC2gSTh6aaweZlurfewQ8d",
    name: "Perfil 7 — Entusiasta",
    kind: "perfil",
    note: "Possibilidades, fuga da dor e sobriedade.",
    size: "68 KB",
  },
  {
    id: "1wXqQW2bcP_OnOb-De7Fvcq75XGD6Ylpl",
    name: "Perfil 8 — Desafiador",
    kind: "perfil",
    note: "Força, proteção e misericórdia.",
    size: "74 KB",
  },
  {
    id: "1uQaYYypncErGSTvLx0kBQc0bCUYBNtdk",
    name: "Perfil 9 — Mediador",
    kind: "perfil",
    note: "Harmonia, adormecimento e ação.",
    size: "74 KB",
  },
  {
    id: "1ZEknIqXkgsWoWmBt8ipPsPb-kQf9YS8J",
    name: "Modelo — Teste Eneagrama",
    kind: "teste",
    note: "135 afirmativas, escala de 1 a 5 e soma por tipo.",
    size: "52 KB",
  },
  {
    id: "1DfzMMB8icHNpHFf1bYF_g9HCw0WB1U0J",
    name: "Síntese de perfis e paradigmas",
    kind: "sintese",
    note: "Pontos fortes, aspectos a desenvolver e liderança de cada tipo.",
    size: "98 KB",
  },
  {
    id: "1q6RbqaCgx_eNecvQISvsKsLx9dt6pxb1",
    name: "Síntese de perfis (Word)",
    kind: "sintese",
    note: "Mesma matriz em documento editável.",
    size: "68 KB",
  },
  {
    id: "1BUnPnLVtMiZ4gykMJ2vTf_uNz5XCJzJY",
    name: "Workbook Eneagrama",
    kind: "estudo",
    note: "Caderno de trabalho e exercícios.",
    size: "541 KB",
  },
  {
    id: "1s28kxpEFN1HXvTgNxmXFDdHhk2JnDmNh",
    name: "Resumão Eneagrama",
    kind: "estudo",
    note: "Compilação de 48 páginas para estudo.",
    size: "1,2 MB",
  },
  {
    id: "1ILqU-zqrPCmyq8HymubhMe2pu5k3v2Dx",
    name: "Slides Eneagrama — completo",
    kind: "estudo",
    note: "395 slides da trilha completa.",
    size: "4,6 MB",
  },
  {
    id: "1X0LypoXlu-dDaN1pPDJuual48m5RSVEJ",
    name: "A sabedoria do Eneagrama",
    kind: "livro",
    note: "Referência da pasta para leitura estendida.",
    size: "18,1 MB",
  },
  {
    id: "1sTHgWfZ6bI5a9rvFQclejZGbbmBMArIv",
    name: "O Eneagrama — Helen Palmer",
    kind: "livro",
    note: "Referência citada nos materiais de perfil.",
    size: "2,3 MB",
  },
  {
    id: "1JoiZC3_XnX52Apr-G3inp9YGTadhhAGP",
    name: "Talk — Dia Mundial da Criatividade",
    kind: "midia",
    note: "Pasta com imagens, logo e gravação da talk.",
    size: "pasta",
  },
];

export const kindLabel: Record<DriveFile["kind"], string> = {
  perfil: "Perfil",
  teste: "Teste",
  sintese: "Síntese",
  estudo: "Estudo",
  livro: "Livro",
  midia: "Mídia",
};

export function viewUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/view`;
}

export function folderViewUrl(id: string) {
  return `https://drive.google.com/drive/folders/${id}`;
}
