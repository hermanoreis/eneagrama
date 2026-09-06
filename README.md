# Eneagrama

App no espírito do 16Personalities: landing sobre os nove tipos, teste com conta e resultado salvo.

## O que tem

- Landing com vida pessoal, vida profissional e os nove tipos
- Login sem senha via **Better Auth** (código de 6 dígitos no e-mail)
- Área logada (`/conta`) com último resultado e histórico
- Mentor-coach (`/mentor`) via OpenRouter, com o tipo e o ranking da pessoa
- Teste de 135 afirmativas da pasta de estudo
- Biblioteca com os arquivos originais do Drive

## Desenvolvimento

```bash
cp .env.example .env.local
# preencha DATABASE_URL, BETTER_AUTH_SECRET e BETTER_AUTH_URL
npm install
npx auth@latest migrate
npm run dev
```

Sem `RESEND_API_KEY`, o código aparece na tela de login (modo desenvolvimento). Em produção, configure Resend:

```
RESEND_API_KEY=
RESEND_FROM=Eneagrama <voce@seu-dominio>
```

## Deploy

Repositório previsto: `https://github.com/hermanoreis/eneagrama`. Depois do push, o projeto Vercel `eneagrama` no time `hermanoreis-projects` publica em cada commit da `main`.

Variáveis no painel da Vercel:

```
DATABASE_URL
BETTER_AUTH_SECRET
BETTER_AUTH_URL=https://<domínio-de-produção>
RESEND_API_KEY
RESEND_FROM
OPENROUTER_API_KEY
OPENROUTER_MODEL
```

Sem Resend, o código de login só aparece em desenvolvimento.

## Rotas

- `/` landing
- `/entrar` código por e-mail
- `/conta` resultados salvos
- `/mentor` coach de Eneagrama (requer login; OpenRouter)
- `/teste` questionário (requer login)
- `/tipos` e `/tipos/1`–`9` perfis públicos
