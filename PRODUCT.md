# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pessoa adulta, falante de português do Brasil, que abre o site para se entender — em casa, no amor e no trabalho — e completa um teste de cerca de 15 minutos. Times e coaches podem usar o mapa depois; o produto é feito primeiro para quem faz o teste.

## Product Purpose

Dar um retrato claro de como a pessoa pensa, sente e age, nos nove tipos do Eneagrama, e deixar esse retrato salvo para reler e conversar. Sucesso é a pessoa reconhecer o próprio mapa (medo, desejo, práticas, liderança) sem se reduzir a um rótulo, e voltar quando quiser.

## Positioning

O retrato sai das 135 afirmativas da pasta de estudo, com ranking salvo na conta, e um mentor-coach que conversa a partir desse ranking. Um quiz genérico de Eneagrama, ou um 16Personalities, não pode afirmar esse instrumento, esse arquivo pessoal, nem esse mentor ligado ao resultado.

## Operating Context

Fluxo: entrar com e-mail (código de 6 dígitos, sem senha) → responder 135 frases (nove seções, quinze por tipo, escala nunca–sempre) → ler o tipo, a asa e o ranking → voltar em `/conta` → conversar com o mentor. Perfis públicos em `/tipos`, o mapa em `/mapa`, síntese de liderança em `/sintese`, estudo na biblioteca (páginas nativas). Uso em tela de telefone ou computador, sozinho, entre reuniões ou à noite — não é sessão clínica.

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

- O instrumento da pasta é a autoridade do retrato, não um quiz genérico da internet.
- Entender-se é o trabalho; o tipo é mapa e defesa, não identidade fechada.
- Conservar o texto de ensino; não suavizar, clinicar nem virar entretenimento vazio.
- Voltar depois importa tanto quanto terminar o teste: conta, ranking e mentor são o mesmo retrato.
- Falar como conversa, em português, específico para o tipo e para o que a pessoa trouxe.
