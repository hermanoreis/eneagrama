# Glossário EN / ES / FR

Fonte de verdade para nomes, slugs e tom. O instrumento em pt-BR não se reescreve; as outras línguas **adaptam** as 135 frases com o mesmo `id` e `type` 1–9.

Chinês simplificado (`zh-Hans`) é onda 2 — ver `docs/i18n.md`. Não entra neste PR.

## Idiomas desta leva

| Código | Público | Variedade | `html lang` | OG locale |
|--------|---------|-----------|-------------|-----------|
| `pt-BR` | `/` (sem prefixo) | Português do Brasil | `pt-BR` | `pt_BR` |
| `en` | `/en` | Inglês concreto, voz do Hermano, nomes Riso–Hudson | `en` | `en_US` |
| `es` | `/es` | Espanhol **neutro latino-americano** (não espanhol da Espanha) | `es` | `es_419` |
| `fr` | `/fr` | Vocabulário de busca do Ennéagramme (Palmer / Ichazo) | `fr` | `fr_FR` |

## Conceitos

| Conceito | pt-BR | en | es | fr |
|----------|-------|----|----|-----|
| Tipo | tipo | type | tipo | type |
| Asa | asa | wing | ala | aile |
| Empate | empate | tie | empate | égalité |
| Tríade / centro | tríade | triad | tríada | triade |
| Mentor | mentor | mentor | mentor | mentor |
| Flecha | flecha | arrow | flecha | flèche |
| Variante instintiva | variante | instinctual variant | variante instintiva | variante instinctive |
| Teste | teste | test | test | test |
| Resultado | resultado | result | resultado | résultat |

`4w5` permanece em todos os idiomas.

## Nomes 1–9

O nome em destaque na UI é o da tradição de busca da língua. O alias aparece como subtítulo.

| # | pt-BR | alias pt-BR | en (Riso–Hudson) | alias en | es (LATAM) | alias es | fr (Ennéagramme) | alias fr |
|---|-------|-------------|------------------|----------|------------|----------|------------------|----------|
| 1 | Perfeccionista | O Reformador | Reformer | The Perfectionist | Perfeccionista | El Reformador | Perfectionniste | Le Réformateur |
| 2 | Doador | O Ajudador | Helper | The Giver | Ayudador | El Dador | Altruiste | L’Auxiliaire |
| 3 | Executivo | O Empreendedor | Achiever | The Performer | Triunfador | El Ejecutor | Battant | Le Performer |
| 4 | Individualista | O Romântico | Individualist | The Romantic | Individualista | El Romántico | Individualiste | Le Romantique |
| 5 | Observador | O Investigador | Investigator | The Observer | Observador | El Investigador | Observateur | L’Investigateur |
| 6 | Leal | O Cético | Loyalist | The Skeptic | Leal | El Escéptico | Loyaliste | Le Sceptique |
| 7 | Entusiasta | O Epicurista | Enthusiast | The Epicure | Entusiasta | El Epicúreo | Épicurien | L’Enthusiast |
| 8 | Desafiador | O Patrão | Challenger | The Boss | Desafiador | El Jefe | Protecteur | Le Challenger |
| 9 | Mediador | O Pacificador | Peacemaker | The Mediator | Pacificador | El Mediador | Médiateur | Le Pacificateur |

Centros (chaves internas permanecem `instinto` / `sentimento` / `pensamento`):

| chave | pt-BR | en | es | fr |
|-------|-------|----|----|-----|
| instinto | Centro do instinto | Body center | Centro del instinto | Centre de l’instinct |
| sentimento | Centro do sentimento | Heart center | Centro del sentimiento | Centre de l’émotion |
| pensamento | Centro do pensamento | Head center | Centro del pensamiento | Centre du mental |

## Slugs públicos

IDs numéricos dos tipos não mudam: `/en/types/4`.

| Rota | pt-BR | en | es | fr |
|------|-------|----|----|-----|
| home | `/` | `/en` | `/es` | `/fr` |
| tipos | `/tipos` | `/en/types` | `/es/tipos` | `/fr/types` |
| tipo | `/tipos/[id]` | `/en/types/[id]` | `/es/tipos/[id]` | `/fr/types/[id]` |
| mapa | `/mapa` | `/en/map` | `/es/mapa` | `/fr/carte` |
| síntese | `/sintese` | `/en/synthesis` | `/es/sintesis` | `/fr/synthese` |
| biblioteca | `/biblioteca` | `/en/library` | `/es/biblioteca` | `/fr/bibliotheque` |
| leituras | `/biblioteca/leituras` | `/en/library/readings` | `/es/biblioteca/lecturas` | `/fr/bibliotheque/lectures` |
| workbook | `/biblioteca/workbook` | `/en/library/workbook` | `/es/biblioteca/workbook` | `/fr/bibliotheque/cahier` |
| resumão | `/biblioteca/resumao` | `/en/library/overview` | `/es/biblioteca/resumen` | `/fr/bibliotheque/resume` |
| sobre o teste | `/sobre-o-teste` | `/en/about-the-test` | `/es/sobre-el-test` | `/fr/a-propos-du-test` |
| entrar | `/entrar` | `/en/sign-in` | `/es/entrar` | `/fr/connexion` |
| conta | `/conta` | `/en/account` | `/es/cuenta` | `/fr/compte` |
| teste | `/teste` | `/en/test` | `/es/test` | `/fr/test` |
| resultado | `/teste/resultado` | `/en/test/result` | `/es/test/resultado` | `/fr/test/resultat` |
| mentor | `/mentor` | `/en/mentor` | `/es/mentor` | `/fr/mentor` |

Rotas internas do App Router (após rewrite) usam os slugs pt-BR: `/[locale]/tipos`, `/[locale]/teste`, etc.

## Tom

- **en:** frases curtas, concretas, sem jargão de coaching. Sem travessão. “Nobody is a type: you are in a type.”
- **es:** neutro LATAM (`ustedes` só quando o PT usa plural de tratamento; no teste, `tú` evitado — preferir `tú`? LATAM web tests often use *tú*. Neutral LATAM marketing often uses *tú* in Mexico/Andes and *vos* in Rioplatense. Default: **tú**, without Spain-only vocabulary (*ordenador*, *vosotros*, *coger* in the Iberian sense).)
- **fr:** Ennéagramme, pas « ennéagram ». Tutoiement no teste (como o PT). Vocabulário Palmer/Ichazo quando for o que se busca.

## O que não se traduz

- Chaves de `localStorage` (`eneagrama-respostas-v1`) e cookie de locale (`eneagrama-locale`).
- Pasta Drive / PDFs originais: listar como português ou omitir.
- Nomes próprios (Hermano Reis) e a marca **Eneagrama** no logo; em EN/FR o produto nas meta tags pode dizer Enneagram / Ennéagramme no título de busca.
