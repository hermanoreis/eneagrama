export type TypeId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type EnneaType = {
  id: TypeId;
  name: string;
  alias: string;
  center: "instinto" | "sentimento" | "pensamento";
  color: string;
  ink: string;
  fear: string;
  desire: string;
  innerMessage: string;
  essence: string;
  healing: string;
  summary: string;
  personality: string;
  focus: string;
  motivators: string[];
  strengths: string[];
  develop: string[];
  alert: string;
  vocations: string[];
  practices: string[];
  wings: { id: TypeId; name: string; text: string }[];
  leadership: string;
  excelBlurb: string;
};

export const centers = {
  instinto: {
    label: "Centro do instinto",
    types: [8, 9, 1] as TypeId[],
    text: "Corpo, ação e controle da energia. A questão de fundo é raiva — como ela é expressa, contida ou adormecida.",
  },
  sentimento: {
    label: "Centro do sentimento",
    types: [2, 3, 4] as TypeId[],
    text: "Imagem, afeto e valor. A questão de fundo é a vergonha — como se constrói um eu que mereça amor.",
  },
  pensamento: {
    label: "Centro do pensamento",
    types: [5, 6, 7] as TypeId[],
    text: "Mente, segurança e possibilidades. A questão de fundo é o medo — como se antecipa, evita ou dissolve o perigo.",
  },
} as const;

export const types: EnneaType[] = [
  {
    id: 1,
    name: "Perfeccionista",
    alias: "O Reformador",
    center: "instinto",
    color: "#c45c3e",
    ink: "#5c2418",
    fear: "Ser mau, corrupto ou falível.",
    desire: "Ser bom, equilibrado e íntegro.",
    innerMessage: "Você estará num bom caminho se fizer o que é certo.",
    essence: "A perfeição",
    healing: "Aceitar a si e aos outros como são.",
    summary:
      "Idealista, criterioso e metódico. Lidera pelo exemplo e pela qualidade — e pode virar crítico interno (e externo) quando o mundo não alcança o padrão.",
    personality:
      "Pessoas idealistas, seguidoras de princípios. São criteriosas, ponderadas, realistas e nobres. Dedicam-se a atividades que coloquem em prática suas ideias, com paciência, método, persistência e esmero nos detalhes. Organizadas e meticulosas, podem escorregar para a crítica e o perfeccionismo. O crítico interno afeta a autoestima, gera tensão e solidão. Sentem ter uma missão a cumprir e usam julgamento e convicções para dirigir a si mesmas. Têm talento para equipe, colaboração e persuasão.",
    focus:
      "Faz as coisas do jeito certo para escapar da acusação e da culpa. Presta atenção ao crítico interno e à crítica externa. Compara-se com os outros para ocupar a posição moralmente superior.",
    motivators: [
      "Regras e referenciais claros",
      "Estrutura e ordem no ambiente",
      "Processos longos sem pressão de tempo",
      "Atividades de apoio com orientação",
    ],
    strengths: [
      "Liderar pelo exemplo",
      "Foco na qualidade",
      "Busca da perfeição",
      "Organização",
      "Coerência e honestidade",
      "Percepção e senso prático",
    ],
    develop: [
      "Reatividade e crítica excessiva",
      "Defesa quando é criticado",
      "Pouca consciência da raiva profunda",
      "Controle e teimosia",
      "Impaciência com detalhes alheios",
    ],
    alert:
      "Na tentativa de sempre acertar, assume resolver todos os problemas. Acha que os outros nunca chegarão a um resultado tão bom. Fica obcecado pela correção e pelo controle, sério, tenso, com o peso do mundo nas costas.",
    vocations: [
      "Educação e instrução",
      "Recursos humanos e qualidade",
      "Organização e método, contabilidade",
      "Direito, engenharia e administração",
    ],
    practices: [
      "Notar o crítico interno por 30 segundos a cada hora e deixá-lo ir.",
      "Mudar a atenção do “fazer errado” para reconhecer diferenças.",
      "Agendar prazeres e torná-los invioláveis.",
      "Perguntar se um erro realmente é grave.",
      "Cometer, de propósito, erros inofensivos e observar o efeito.",
    ],
    wings: [
      {
        id: 9,
        name: "O Idealista",
        text: "Mais ponderado, sábio e civilizado. Prefere ficar só e trabalhar por conta própria.",
      },
      {
        id: 2,
        name: "O Advogado",
        text: "Mistura ideais com empatia. Mais persuasivo, ativo e sociável — e mais exaltado quando frustrado.",
      },
    ],
    leadership:
      "A função de um líder é estabelecer metas claras e incentivar os outros a alcançarem a qualidade máxima.",
    excelBlurb:
      "Crítico, questionador, perfeccionista e metódico. Exige de si e dos outros. Alguns tendem a ser moralistas e a ditar as regras. Quando falham, podem se frustrar e manifestar agressividade.",
  },
  {
    id: 2,
    name: "Doador",
    alias: "O Ajudador",
    center: "sentimento",
    color: "#d36b7a",
    ink: "#6a2430",
    fear: "Não ser amado ou necessário.",
    desire: "Sentir-se amado e querido.",
    innerMessage: "Você estará num bom caminho se for amado e indispensável.",
    essence: "O amor",
    healing: "Reconhecer as próprias necessidades e receber, não só dar.",
    summary:
      "Empático, prestativo e generoso. Enxerga a necessidade alheia antes da própria — e pode perder a liberdade tentando ser insubstituível.",
    personality:
      "Gostam de atividades que envolvam relacionamento e comunicação. Dedicam-se a ser úteis e a beneficiar pessoas, com generosidade sem limites. Devotam tempo a amigos e têm dificuldade de dizer não. De tanto fazer pelo outro, excedem-se e negligenciam saúde e necessidades próprias. Expressivos, falantes e sociáveis, às vezes em excesso. O desejo fundamental é sentir-se amado.",
    focus:
      "Atenção nas necessidades e desejos das outras pessoas, sobretudo das mais importantes. Age conforme o que o outro pode sentir ou reagir. A vaidade pede para ser superada em favor de um foco mais próprio.",
    motivators: [
      "Trabalho em meio a pessoas",
      "Reconhecimento sincero",
      "Papel de apoio e mentoria",
      "Ambientes calorosos e relacionais",
    ],
    strengths: [
      "Excelentes relacionamentos",
      "Empatia",
      "Generosidade e prestatividade",
      "Otimismo",
      "Percebe necessidades alheias",
      "Capaz de motivar os outros",
    ],
    develop: [
      "Dificuldade de dizer não",
      "Raiva quando não é reconhecido",
      "Desconhece as próprias necessidades",
      "Ênfase exagerada nas relações",
      "Faz demais e espera em troca sem admitir",
    ],
    alert:
      "A identidade se funde com o que faz pelos outros. Cansaço, cobrança velada e a sensação de ser usado aparecem quando o reconhecimento não chega.",
    vocations: [
      "Psicologia, coaching e cuidado",
      "Educação e desenvolvimento humano",
      "Hospitalidade e vendas relacionais",
      "Filantropia e trabalho comunitário",
    ],
    practices: [
      "Praticar o não sem justificativa longa.",
      "Separar amor de aprovação e atenção.",
      "Reservar tempo só consigo, sem ser útil.",
      "Perguntar: isso é para o outro ou para eu ser necessário?",
      "Reconhecer missão e visão pessoais antes de fazer pelo outro.",
    ],
    wings: [
      {
        id: 1,
        name: "O Servidor",
        text: "Forte desejo de aliviar o sofrimento. Mais sóbrio e severo consigo — pode ser autocrítico e negligenciar a saúde.",
      },
      {
        id: 3,
        name: "O Anfitrião",
        text: "Encantador, falante e adaptável. Gosta de receber. Menos sério, mais voltado a mostrar o que é capaz de oferecer.",
      },
    ],
    leadership:
      "A função de um líder é avaliar pontos fortes e fracos da equipe, motivá-la e facilitar a realização das metas.",
    excelBlurb:
      "Solícito, amoroso e com necessidade de agradar. Acredita que tem muito a dar e gosta que isso seja reconhecido. Alguns perdem a liberdade tentando satisfazer os outros.",
  },
  {
    id: 3,
    name: "Executivo",
    alias: "O Empreendedor",
    center: "sentimento",
    color: "#d4a017",
    ink: "#5a4308",
    fear: "Não ser valorizado pelas realizações.",
    desire: "Sentir-se valorizado, desejado e aceito.",
    innerMessage:
      "Você estará num bom caminho se for bem-sucedido e respeitado pelos outros.",
    essence: "A esperança / o valor verdadeiro",
    healing: "Separar imagem de eu real e desacelerar.",
    summary:
      "Orientado a resultado, adaptável e carismático. Faz a vida parecer um projeto de sucesso — e pode confundir a imagem com quem é.",
    personality:
      "Movidas pelo sucesso. Seguras, atraentes e encantadoras, podem se orientar por status e progresso. Ambiciosas, competentes e prontas a agir, preocupam-se com a imagem e com o que os outros pensam. Autoconfiança, determinação e persuasão motivam a equipe. O risco é a paixão excessiva pelo trabalho, a competitividade e o esgotamento. Competem em emprego, casa, relacionamentos. Temem a intimidade para não mostrar fragilidade.",
    focus:
      "Atenção no desempenho, na meta e na imagem que será lida pelos outros. Multiplica canais de tarefa e acelera quando a insegurança aparece.",
    motivators: [
      "Metas visíveis e mensuráveis",
      "Reconhecimento de resultado",
      "Ambiente competitivo e ágil",
      "Liberdade para ajustar o comportamento até vencer",
    ],
    strengths: [
      "Orientação para o sucesso",
      "Alto astral",
      "Leitura do que as pessoas querem",
      "Superação de problemas",
      "Empreendedorismo e confiança",
      "Obtenção de resultados",
    ],
    develop: [
      "Competitividade extrema",
      "Pouco acesso aos sentimentos",
      "Impaciência com o emocional alheio",
      "Acreditar que a imagem é o eu",
      "Tempo restrito para relações pessoais",
    ],
    alert:
      "Acelera, multiplica tarefas e some da intimidade. O cansaço é ignorado. A pergunta “o que realmente importa?” some atrás do próximo resultado.",
    vocations: [
      "Liderança comercial e política",
      "Empreendedorismo e publicidade",
      "Gestão de projetos e vendas",
      "Comunicação e marcas",
    ],
    practices: [
      "Reduzir o ritmo e desconectar do desempenho.",
      "Notar sentimentos e cansaço físico.",
      "Perguntar: o referencial é a imagem ou o eu real?",
      "Valorizar empatia tanto quanto status.",
      "Trabalhar uma perspectiva introspectiva.",
    ],
    wings: [
      {
        id: 2,
        name: "O Promotor",
        text: "Mais relacional e encantador. Usa o magnetismo pessoal para obter cooperação e visibilidade.",
      },
      {
        id: 4,
        name: "O Profissional",
        text: "Mais consciente da imagem refinada e do estilo. Pode oscilar entre brilho público e vazio privado.",
      },
    ],
    leadership:
      "A função de um líder é criar um ambiente propício a resultados, com metas e estrutura claras.",
    excelBlurb:
      "Ligados ao sucesso, priorizam a imagem. São competitivos e gostam de ganhar. Devem cuidar do excesso de vaidade. Tendem a liderar.",
  },
  {
    id: 4,
    name: "Individualista",
    alias: "O Romântico",
    center: "sentimento",
    color: "#7a5ea7",
    ink: "#2f2150",
    fear: "Não ter identidade ou significado próprios.",
    desire: "Encontrar a si mesmo e ser fiel às necessidades emocionais.",
    innerMessage: "Você estará num bom caminho se for autêntico e especial.",
    essence: "A origem / a identidade essencial",
    healing: "Habitar o presente sem se definir pela falta.",
    summary:
      "Intuitivo, expressivo e em busca de sentido. Sente a vida em alta definição — e pode se perder na intensidade, na comparação e no que falta.",
    personality:
      "Inconformado com o presente, ligado ao passado ou sonhando o futuro. Sensível, criativo e introspectivo. Procura sentido nas relações e na expressão. Pode se tornar dramático, temperamental e crítico — de si e dos outros. A impressão de que os outros são mais felizes e de que tudo é mais difícil para si alimenta o mito da falta. A autenticidade é o tesouro e a armadilha.",
    focus:
      "Atenção no que está ausente, no que seria mais verdadeiro, belo ou profundo. Compara a vida interior com a aparência alheia.",
    motivators: [
      "Trabalho com sentido e estética",
      "Controle criativo",
      "Relações profundas, não superficiais",
      "Espaço para expressão emocional",
    ],
    strengths: [
      "Inspiração e criatividade",
      "Introspecção",
      "Expressividade e intuição",
      "Compaixão",
      "Busca de excelência",
      "Sentido por meio das relações",
    ],
    develop: [
      "Intensidade e dramaticidade",
      "Temperamento",
      "Tédio fácil",
      "Culpa e dificuldade com críticas",
      "Reserva e crítica extrema aos outros",
    ],
    alert:
      "Quando criticado ou mal interpretado, retrai-se e fica amuado. A identidade se apoia no que falta. O cotidiano parece pobre demais.",
    vocations: [
      "Artes, escrita e design",
      "Música e direção criativa",
      "Terapia e serviço social",
      "Marcas com forte identidade",
    ],
    practices: [
      "Trazer a atenção do que falta para o que está aqui.",
      "Completar o ordinário antes de buscar o extraordinário.",
      "Separar sentimento de identidade.",
      "Aceitar o comum sem perder a profundidade.",
      "Usar a criatividade a serviço de algo fora do eu.",
    ],
    wings: [
      {
        id: 3,
        name: "O Aristocrata",
        text: "Mais voltado a realizar e a ser visto. Une estética e ambição.",
      },
      {
        id: 5,
        name: "O Bohemio",
        text: "Mais reservado e analítico. Aprofunda a interioridade e pode se isolar na singularidade.",
      },
    ],
    leadership:
      "A função de um líder é criar organizações que deem sentido e propósito, para que as pessoas se motivem a um trabalho excelente.",
    excelBlurb:
      "Enxerga o sofrimento como posição diante do mundo. Inconformado com o presente. Alguns se tornam trágicos porque sempre acham que os outros são mais felizes.",
  },
  {
    id: 5,
    name: "Observador",
    alias: "O Investigador",
    center: "pensamento",
    color: "#5b7c6e",
    ink: "#1d332c",
    fear: "Ser invadido, esvaziado ou incompetente.",
    desire: "Ser capaz, compreender e preservar energia.",
    innerMessage: "Você estará num bom caminho se entender e se bastar.",
    essence: "A onisciência / a clareza",
    healing: "Entrar no mundo e compartilhar o conhecimento.",
    summary:
      "Analítico, criterioso e independente. Compreende em profundidade — e pode se retirar tanto que a vida acontece atrás do vidro.",
    personality:
      "Cuidadoso, não age sem refletir. Observa de longe para saber em que terreno pisa. Reservado, desconfiado das demandas alheias, pode deixar emoções de lado e levar uma vida solitária. Excelente em crise porque planeja e especializa. A mente quer o mapa completo antes do passo. A autonomia vira muralha.",
    focus:
      "Atenção em dados, sistemas e no estoque de energia. Minimiza envolvimento para não ser drenado.",
    motivators: [
      "Tempo sozinho para pensar",
      "Problemas complexos e expertise",
      "Pouca invasão emocional",
      "Controle sobre o próprio ritmo",
    ],
    strengths: [
      "Análise e objetividade",
      "Sistematização",
      "Planejamento detalhado",
      "Excelência em crise",
      "Persistência",
      "Especialização",
    ],
    develop: [
      "Distanciamento",
      "Independência excessiva",
      "Não dizer o que pensa",
      "Subestimar relações",
      "Não trocar informação",
      "Teimosia e crítica",
    ],
    alert:
      "Quando inseguro, fica distante e frio. A vida vira arquivo. As pessoas sentem que precisam marcar hora para existir.",
    vocations: [
      "Pesquisa, ciência e tecnologia",
      "Estratégia e análise",
      "Arquitetura de sistemas",
      "Escrita técnica e consultoria especializada",
    ],
    practices: [
      "Compartilhar um pensamento antes de estar “pronto”.",
      "Permanecer no corpo e na conversa um pouco além do conforto.",
      "Tratar energia como renovável, não só escassa.",
      "Nomear sentimentos com a mesma precisão dos conceitos.",
      "Pedir e oferecer ajuda em dose pequena e concreta.",
    ],
    wings: [
      {
        id: 4,
        name: "O Iconoclasta",
        text: "Mais estético e emocionalmente intenso. Une análise e singularidade.",
      },
      {
        id: 6,
        name: "O Solucionador",
        text: "Mais leal a sistemas e grupos de competência. Usa o saber para antecipar riscos.",
      },
    ],
    leadership:
      "A função de um líder é desenvolver a organização por pesquisa, deliberação e planejamento, para que as partes se encaixem numa missão comum.",
    excelBlurb:
      "Não faz nada sem refletir. Observa de longe, teme riscos, é reservado e pode levar uma vida solitária. Brilha como pesquisador e especialista.",
  },
  {
    id: 6,
    name: "Leal",
    alias: "O Cético",
    center: "pensamento",
    color: "#6b7d3a",
    ink: "#2c3414",
    fear: "Não contar com apoio e orientação.",
    desire: "Encontrar apoio e segurança.",
    innerMessage: "Você estará num bom caminho se fizer o que se espera que faça.",
    essence: "A coragem",
    healing: "Relaxar e viver o presente.",
    summary:
      "Responsável, leal e estratégico. Antecipa o que pode dar errado — e oscila entre cautela extrema e coragem contrafóbica.",
    personality:
      "Buscam um terreno firme num mundo que percebem como perigoso e pouco confiável. Recorrem a pessoas e sistemas para se orientar e, ao mesmo tempo, desconfiam da autoridade. Não gostam de demasiadas opções. Sentem-se mais seguros com regras e rotinas. Ótimos em procedimentos, análise e investigação. A mente tagarela com cenários. Podem ser os mais fiéis — ou testar o vínculo até cansar.",
    focus:
      "Atenção em ameaças, ambiguidades e na lealdade do grupo. Projeta pensamentos nos outros e ensaia o pior para se preparar.",
    motivators: [
      "Clareza de papéis e regras",
      "Equipe confiável",
      "Antecipação de problemas",
      "Autoridade merecedora de confiança",
    ],
    strengths: [
      "Responsabilidade e cooperação",
      "Pensamento estratégico",
      "Intelecto afiado",
      "Perseverança",
      "Antecipação de problemas",
      "Lealdade à equipe",
    ],
    develop: [
      "Preocupação crônica",
      "Aversão a ambiguidades",
      "Paralisia analítica",
      "Excesso de cautela ou de risco",
      "Submissão ou desconfiança extrema",
    ],
    alert:
      "A ansiedade vira sobrenome. Ou se submete demais, ou desafia demais. A decisão trava enquanto a mente simula desastres.",
    vocations: [
      "Direito, auditoria e risco",
      "Segurança e operações",
      "Pesquisa social e crítica",
      "Gestão de crises e compliance",
    ],
    practices: [
      "Distinguir intuição de projeção.",
      "Agir como uma pessoa de fé agiria, por um dia.",
      "Notar o poder atribuído aos outros e reassumir autoridade.",
      "Saborear sucessos em vez de só caçar o próximo furo.",
      "Checar medos com pessoas reais.",
    ],
    wings: [
      {
        id: 5,
        name: "O Defensor",
        text: "Busca segurança em sistemas de crença e conhecimento. Mais solitário, cético e reativo quando ameaçado.",
      },
      {
        id: 7,
        name: "O Camarada",
        text: "Mais sociável e aventureiro. Usa humor e movimento para aliviar a ansiedade.",
      },
    ],
    leadership:
      "A função de um líder é resolver problemas criando um ambiente em que cada pessoa se sinta parte da solução.",
    excelBlurb:
      "Imagina o resultado das ações e às vezes vê o lado negativo. Busca segurança. Em crise, quer resolver logo. Bom em direito, crítica e ciências sociais.",
  },
  {
    id: 7,
    name: "Entusiasta",
    alias: "O Epicurista",
    center: "pensamento",
    color: "#e08a2a",
    ink: "#5a3208",
    fear: "Sofrer dores e privações.",
    desire: "Ser feliz, satisfazer-se, realizar-se.",
    innerMessage: "Você estará num bom caminho se obtiver o que precisa.",
    essence: "A sobriedade",
    healing: "Explorar o interior e permanecer.",
    summary:
      "Curioso, rápido e contagiante. Transforma a vida numa sequência de possibilidades — e foge da dor pulando para a próxima.",
    personality:
      "Arrojadas, vivas, com alegre determinação. Produtivas, práticas, brincalhonas. A busca de novas emoções impede terminar o que começaram. Comunicam com vigor, improvisam, delegam o operacional para ficar com o panorama. Inclinação à análise geral, não ao detalhe. O otimismo é real e também uma estratégia contra o tédio e a dor.",
    focus:
      "Atenção no que é estimulante, futuro e múltiplo. A mente salta. Limites parecem prisão.",
    motivators: [
      "Variedade e novidade",
      "Projetos com começo empolgante",
      "Liberdade de agenda",
      "Pessoas interessantes e ideias novas",
    ],
    strengths: [
      "Imaginação e criatividade",
      "Entusiasmo e curiosidade",
      "Presença cativante",
      "Multitarefa e mente ágil",
      "Lidar com dados desconexos",
    ],
    develop: [
      "Impulsividade e dispersão",
      "Evitar situações dolorosas",
      "Empatia inconstante",
      "Reatividade a críticas",
      "Desprezo pela rotina",
      "Racionalizar o negativo",
    ],
    alert:
      "A agenda enche para a grama não crescer. Compromissos se diluem. A dor é reenquadrada como piada ou plano B.",
    vocations: [
      "Inovação, produto e conteúdo",
      "Artes, palco e produção",
      "Viagem, hospitalidade e educação experiencial",
      "Estratégia de oportunidades",
    ],
    practices: [
      "Meditar num único ponto até a mente desacelerar.",
      "Trabalhar uma coisa até concluir.",
      "Deixar opções de lado: menos pode ser mais.",
      "Aceitar tédio, limite e conflito sem fugir.",
      "Revisar a fome de excitação no fim do dia.",
    ],
    wings: [
      {
        id: 6,
        name: "O Animador",
        text: "Mais relacional e produtivo. Oscila entre o desejo de arriscar e o medo de perder o que tem.",
      },
      {
        id: 8,
        name: "O Realista",
        text: "Une rapidez e ímpeto. Mais estratégico, prático e voltado a poder e resultado material.",
      },
    ],
    leadership:
      "A função de um líder é fazer as pessoas vibrarem e criarem inovações para a organização aproveitar grandes oportunidades.",
    excelBlurb:
      "Gosta de desfrutar a vida. Trabalhar parece um mal necessário para obter prazer e liberdade. Encantador, lidera de forma simpática e disfarçada.",
  },
  {
    id: 8,
    name: "Desafiador",
    alias: "O Patrão",
    center: "instinto",
    color: "#2b2b2b",
    ink: "#111111",
    fear: "Ser magoado, controlado ou invadido.",
    desire: "Proteger-se e determinar o curso da própria vida.",
    innerMessage:
      "Você estará num bom caminho se for forte e conseguir dominar as situações.",
    essence: "A misericórdia",
    healing: "Trabalhar o perdão e a vulnerabilidade.",
    summary:
      "Direto, protetor e de grande apetite vital. Move o mundo pela força — e pode não notar o impacto dessa força nos outros.",
    personality:
      "Firmes, assertivas e seguras. Fortes e dominadoras, também orgulhosas, protetoras e decididas. Controlam o meio e podem intimidar. A intimidade é difícil. No autodomínio, usam a força para melhorar a vida dos outros — heróicas, magnânimas. Não se furtam a risco nem a responsabilidade. Comunicação direta, rápida, sem rodeios. Não suportam ser controlados.",
    focus:
      "Atenção em poder, justiça e quem manda. Detecta fraqueza — na sala e em si — e avança para não ser pego.",
    motivators: [
      "Autonomia e mando",
      "Desafios grandes",
      "Pessoas competentes ao lado",
      "Resultado visível e imediato",
    ],
    strengths: [
      "Direteza e estratégia",
      "Superação de obstáculos",
      "Dinâmica e proteção",
      "Levar projetos adiante",
      "Apoiar o sucesso dos outros",
      "Autoconfiança",
    ],
    develop: [
      "Controle e exigência",
      "Impaciência com quem é mais lento",
      "Desprezo pela fraqueza",
      "Esperar demais de si e dos outros",
      "Sentir-se usado quando o outro não rende",
    ],
    alert:
      "Acessos de raiva monumentais. Excesso, domínio e a tese de que fraqueza convida problema. O outro some ou obedece — e a intimidade some junto.",
    vocations: [
      "Empreender e negociar",
      "Liderança operacional",
      "Advocacia de causas",
      "Invenção e turnaround",
    ],
    practices: [
      "Uma vez por hora, checar o impulso de agir e respirar.",
      "Perguntar aos outros se está sendo excessivo.",
      "Defender o mundano, o suave, o moderado.",
      "Adiar gratificação e permitir vulnerabilidade.",
      "Buscar soluções ganha-ganha em vez de vencer.",
    ],
    wings: [
      {
        id: 7,
        name: "O Independente",
        text: "Carismático, competitivo, quer deixar marca. Pouca paciência com ineficiência. Mais abertamente provocador.",
      },
      {
        id: 9,
        name: "O Urso",
        text: "Une força e calma aparente. Mais protetor e menos explosivo — a teimosia substitui o ataque.",
      },
    ],
    leadership:
      "A função de um líder é fazer a organização progredir com decisão, colocar pessoas capazes nas funções certas e dar autonomia a quem é competente.",
    excelBlurb:
      "Vive intensamente, gosta de poder e luta pelo que considera justo. Não suporta depender nem parecer fraco. Cria as próprias regras.",
  },
  {
    id: 9,
    name: "Mediador",
    alias: "O Pacificador",
    center: "instinto",
    color: "#8a9a4a",
    ink: "#2f3616",
    fear: "Perda, separação, aniquilação.",
    desire: "Manter o equilíbrio interior e a paz de espírito.",
    innerMessage: "Você estará bem se os que o rodeiam também estiverem.",
    essence: "A ação",
    healing: "Acordar e empreender.",
    summary:
      "Diplomático, estável e inclusivo. Sustenta a harmonia do grupo — e pode adormecer as próprias prioridades para não tremer o barco.",
    personality:
      "Pacifistas, de fácil convivência, constantes e receptivas. Cedem longe demais para manter a paz. Minimizam entraves; problemas nascem da passividade e da teimosia. Incansáveis em aproximar pessoas e resolver mal-entendidos. No topo do eneagrama, ecoam traços dos outros tipos. Impor-se apavora. Compensam o instinto adormecido com imaginação. Arranjam muitas tarefas e esquecem o essencial. Podem ser ativos por fora e adormecidos por dentro.",
    focus:
      "Atenção no ambiente e nas agendas alheias. A própria prioridade fica em segundo plano. Substitutos — comida, tela, rotina — ocupam o lugar da vontade.",
    motivators: [
      "Ambiente harmonioso e estruturado",
      "Relações duradouras",
      "Ritmo sem pressa agressiva",
      "Pertencer sem ser o centro do conflito",
    ],
    strengths: [
      "Diplomacia e afabilidade",
      "Inclusão e cooperação",
      "Relações duradouras",
      "Paciência",
      "Apoio aos outros",
      "Visão ampla a partir do operacional",
    ],
    develop: [
      "Evitar conflitos",
      "Não dizer o que pensa",
      "Esquecer prioridades",
      "Procrastinação e indecisão",
      "Pouca energia aparente",
      "Passivo-agressivo sob pressão",
    ],
    alert:
      "Concorda para não discutir. A raiva vira teimosia silenciosa. O dia acaba e o que importava para si não foi feito.",
    vocations: [
      "Mediação, diplomacia e RH",
      "Facilitação e coaching de equipes",
      "Operações e integração",
      "Cuidado e community",
    ],
    practices: [
      "Todo dia, prever o que é importante para si e revisar se fez.",
      "Usar resistência e teimosia como bússola do que foi abandonado.",
      "Criar planos com prazo e limite.",
      "Tomar posição em assuntos reais.",
      "Notar o impulso de ir para substitutos e ficar com a meta.",
    ],
    wings: [
      {
        id: 8,
        name: "O Conselheiro",
        text: "Mais assertivo e corporal. A paz vem com uma dose de força e de fronteira.",
      },
      {
        id: 1,
        name: "O Sonhador",
        text: "Mais principista e ordenado. Busca harmonia pelo certo, não só pelo conforto.",
      },
    ],
    leadership:
      "A função de um líder é ajudar a realizar a missão coletiva, criando um ambiente de trabalho estruturado e harmonioso.",
    excelBlurb:
      "Aparenta acomodação, não gosta de ser perturbado. Satisfaz os outros para ter tranquilidade. Concorda para não discutir. Bom ouvinte e negociador.",
  },
];

export const typeById = Object.fromEntries(types.map((t) => [t.id, t])) as Record<
  TypeId,
  EnneaType
>;

export const concepts = [
  "Existem nove tipos. Cada pessoa se identifica com um.",
  "Nenhum tipo é melhor do que o outro.",
  "O tipo não muda — nós mudamos.",
  "Temos traços de todos, mas a visão de mundo do nosso tipo nos domina.",
  "Paixão e fixação contam mais do que o comportamento típico.",
  "O tipo é uma defesa e um estado de consciência reduzida.",
  "Não somos um tipo: estamos um tipo.",
  "A observação dos outros leva à compreensão — sem estereotipar, julgar ou justificar.",
];

export const folderUrl =
  "https://drive.google.com/drive/folders/1Ngk8ATY1oZ06MNPf3Myiy6_2da4vZoGj";
