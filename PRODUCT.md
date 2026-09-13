# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pessoa adulta que abre o site para se entender — em casa, no amor e no trabalho — e completa um teste de cerca de 15 minutos. A primeira língua é o português do Brasil; inglês, espanhol latino-americano e francês existem para as mesmas perguntas na língua de quem busca. Times e coaches podem usar o mapa depois; o produto é feito primeiro para quem faz o teste.

## Product Purpose

Dar um retrato claro de como a pessoa pensa, sente e age, nos nove tipos do Eneagrama, e deixar esse retrato salvo para reler e conversar. Sucesso é a pessoa reconhecer o próprio mapa (medo, desejo, práticas, liderança) sem se reduzir a um rótulo, e voltar quando quiser.

## Positioning

Um espaço gratuito para explorar o Eneagrama, comparar as respostas com os nove tipos e levar essa reflexão para o dia a dia. Em português do Brasil em `/`; em inglês, espanhol e francês nos prefixos `/en`, `/es`, `/fr`. Apresentar o que a pessoa consegue fazer: comparar descrições, observar hábitos e experimentar práticas. Detalhes de autenticação e pontuação entram quando ajudam a executar uma tarefa.

## Operating Context

Fluxo: entrar com e-mail (código de 6 dígitos, sem senha) → responder 135 frases (nove páginas, com quinze afirmativas por tipo distribuídas pelo questionário, escala nunca–sempre) → ler o tipo, a asa e o ranking → voltar em `/conta` → conversar com o mentor. Perfis públicos em `/tipos`, o mapa em `/mapa`, síntese de liderança em `/sintese`, estudo na biblioteca (páginas nativas). Uso em tela de telefone ou computador, sozinho, entre reuniões ou à noite — não é sessão clínica.

## Capabilities and Constraints

- Landing, tipos 1–9, mapa (tríades, asas, flechas, variantes, níveis), síntese, teste, conta, mentor e biblioteca nativa.
- Teste e mentor exigem login. Em produção o código só vai por e-mail (Resend). Sem `OPENROUTER_API_KEY` o mentor não conversa.
- Idiomas desta leva: português do Brasil (padrão, sem prefixo), inglês, espanhol neutro latino-americano, francês. Chinês simplificado (`zh-Hans`) fica para uma onda posterior — ver `docs/i18n.md`. Glossário de nomes e slugs: `docs/i18n-glossary.md`.
- As 135 afirmativas em `src/data/pt-BR/questions.ts` são o instrumento em português; não reescrever nem resumir o enunciado. Bancos `en` / `es` / `fr` **adaptam** as frases (equivalente cultural, não calque) com o mesmo `id` e `type` 1–9.
- Nomes, cores e textos dos tipos vêm da pasta de ensino e dos pacotes `src/data/{locale}/`; não inventar outro sistema de tipos. Em inglês valem os nomes Riso–Hudson (Reformer, Helper, Achiever…).
- O resultado é um ponto de partida, não um diagnóstico. Não diagnosticar patologia, não substituir terapia, não ranquear tipos.
- Não fabricar depoimentos, clientes, validação científica ou preços. Não acrescentar chinês (nem CJK/Baidu) nesta leva.

## Brand Commitments

- Nome do produto: **Eneagrama**.
- Voz: calor, clareza, sem jargão vazio. Em pt-BR: “Ninguém é um tipo: a pessoa está um tipo.” Em cada língua, a mesma ideia — concreta, sem coaching.
- Nomes dos tipos em pt-BR (não trocar): Perfeccionista, Doador, Executivo, Individualista, Observador, Leal, Entusiasta, Desafiador, Mediador. EN/ES/FR seguem o glossário.
- Rodapé e mentor já comprometem: mapa, não sentença; nenhum tipo é melhor que outro.

## Evidence on Hand

- Perfis e máximas: `src/data/{locale}/types.ts` (pt-BR a partir da pasta de ensino)
- Instrumento: `src/data/pt-BR/questions.ts` e adaptações em `src/data/{locale}/questions.ts` (135 afirmativas, mesmos ids)
- Biblioteca e pasta de ensino: `src/data/library.ts`, `src/data/{locale}/map.ts`. A pasta Drive original permanece em português; páginas nativas da biblioteca são localizadas. Sem redirecionar o visitante ao Drive.
- Não há depoimentos, cases, press ou fotos de pessoas reais no repositório. Trabalho futuro não inventa essas provas.

## Product Principles

- Explicar o cálculo e os limites do questionário. Não sugerir validação científica nem superioridade sobre outros testes sem evidência.
- Entender-se é o trabalho; o tipo é mapa e defesa, não identidade fechada.
- Conservar o texto de ensino; não suavizar, clinicar nem virar entretenimento vazio.
- As respostas em andamento ficam no navegador. Resultados completos são salvos na conta; empates são preservados na apresentação e no mentor. O mentor é uma IA, identificada como tal.
- Falar como conversa, no idioma da sessão, específico para o tipo e para o que a pessoa trouxe.
