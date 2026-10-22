# Devin POC

Testar se o Devin, acionado por ticket do Jira, consegue substituir a esteira caseira de IA
do squad Totem (Decathlon), com GitHub Actions e revisão humana como guardrails.

Fluxo testado: **ticket no Jira → Devin abre PR → GitHub Actions confere → Diego aprova → merge.**

## Rodar o app

```sh
npm install
npm run dev     # http://localhost:5173
npm run check   # lint + typecheck + teste + build (o mesmo que o CI roda)
```

O app é de propósito mínimo: um título e um contador. Cada ticket do teste muda algo visível nele.

## Docs, nesta ordem

1. [Contexto e decisão](docs/01-contexto-e-decisao.md): de onde veio, por que POC e não troca direta.
2. [Pesquisa das ferramentas](docs/02-pesquisa-ferramentas.md): Google, Devin, Copilot, Cursor, Codex, Claude, com fontes.
3. [Setup](docs/03-setup.md): GitHub, Jira Free, Devin, integração, proteção da `main`.
4. [Roteiro de teste](docs/04-roteiro-de-teste.md): os tickets, o que medir, status atual.
5. [Guardrails](docs/05-guardrails.md): cada proteção e onde ela mora.
6. [Levar pra Decathlon](docs/06-levar-pra-decathlon.md): o que copiar pro repo real se der certo.
