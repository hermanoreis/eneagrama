# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pessoa adulta, falante de português do Brasil, que abre o site para se entender — em casa, no amor e no trabalho — e completa um teste de cerca de 15 minutos. Times e coaches podem usar o mapa depois; o produto é feito primeiro para quem faz o teste.

## Product Purpose

Dar um retrato claro de como a pessoa pensa, sente e age, nos nove tipos do Eneagrama, e deixar esse retrato salvo para reler e conversar. Sucesso é a pessoa reconhecer o próprio mapa (medo, desejo, práticas, liderança) sem se reduzir a um rótulo, e voltar quando quiser.

## Positioning

Um espaço gratuito, em português, para explorar o Eneagrama, comparar suas respostas com os nove tipos e levar essa reflexão para situações do dia a dia. Apresentar o que a pessoa consegue fazer: comparar descrições, observar hábitos e experimentar práticas. Detalhes de autenticação e pontuação entram quando ajudam a executar uma tarefa.

## Operating Context

Fluxo: entrar com e-mail (código de 6 dígitos, sem senha) → responder 135 frases (nove páginas, com quinze afirmativas por tipo distribuídas pelo questionário, escala nunca–sempre) → ler o tipo, a asa e o ranking → voltar em `/conta` → conversar com o mentor. Perfis públicos em `/tipos`, o mapa em `/mapa`, síntese de liderança em `/sintese`, estudo na biblioteca (páginas nativas). Uso em tela de telefone ou computador, sozinho, entre reuniões ou à noite — não é sessão clínica.

## Capabilities and Constraints

- Landing, tipos 1–9, mapa (tríades, asas, flechas, variantes, níveis), síntese, teste, conta, mentor e biblioteca nativa.
- Teste e mentor exigem login. Em produção o código só vai por e-mail (Resend). Sem `OPENROUTER_API_KEY` o mentor não conversa.
- Idioma: apenas português do Brasil, até alguém pedir outro.
- As 135 afirmativas em `src/data/questions.ts` são o instrumento; não reescrever nem resumir o enunciado.
- Nomes, cores e textos dos tipos vêm da pasta de ensino (`src/data/types.ts` e a biblioteca Drive); não inventar outro sistema de tipos.
- O resultado é um ponto de partida, não um diagnóstico. Não diagnosticar patologia, não substituir terapia, não ranquear tipos.
- Não fabricar depoimentos, clientes, validação científica, preços ou idiomas extras.

## Brand Commitments

- Nome do produto: **Eneagrama**.
- Voz: português do Brasil, calor, clareza, sem jargão vazio. “Ninguém é um tipo: a pessoa está um tipo.”
- Nomes dos tipos (não trocar): Perfeccionista, Doador, Executivo, Individualista, Observador, Leal, Entusiasta, Desafiador, Mediador.
- Rodapé e mentor já comprometem: mapa, não sentença; nenhum tipo é melhor que outro.

## Evidence on Hand

- Perfis e máximas: `src/data/types.ts`
- Instrumento: `src/data/questions.ts` (135 afirmativas)
- Biblioteca e pasta de ensino: `src/data/library.ts`, `src/data/map.ts`. A pasta Drive original permanece como fonte, sem redirecionar o visitante.
- Não há depoimentos, cases, press ou fotos de pessoas reais no repositório. Trabalho futuro não inventa essas provas.

## Product Principles

- Explicar o cálculo e os limites do questionário. Não sugerir validação científica nem superioridade sobre outros testes sem evidência.
- Entender-se é o trabalho; o tipo é mapa e defesa, não identidade fechada.
- Conservar o texto de ensino; não suavizar, clinicar nem virar entretenimento vazio.
- As respostas em andamento ficam no navegador. Resultados completos são salvos na conta; empates são preservados na apresentação e no mentor. O mentor é uma IA, identificada como tal.
- Falar como conversa, em português, específico para o tipo e para o que a pessoa trouxe.
