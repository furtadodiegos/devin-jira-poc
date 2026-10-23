# AGENTS.md

Regras para qualquer agente (Devin, Claude, Codex) que mexer neste repositório.

## Escopo

- O ticket do Jira é o escopo. Nada entra sem o ticket pedir.
- Ticket ambíguo: comente a dúvida no ticket e pare. Não adivinhe.
- Um ticket = uma branch = um PR.

## Proibido sem o ticket pedir explicitamente

- Mexer em `.github/`, `AGENTS.md`, `CLAUDE.md` ou `docs/`.
- Adicionar, remover ou atualizar dependência (`package.json`, `package-lock.json`).
- Colocar segredo, token ou chave em código, commit, log ou PR.
- Push na `main`, force push, reescrever histórico.

O CI bloqueia o PR que tocar nesses arquivos sem a label `allow-protected`.

## Como entregar

1. Branch: `devin/<CHAVE>-<resumo-curto>` (ex.: `devin/POC-3-botao-reset`), criada a partir da `preview`.
   O PR vai sempre para a `preview`. Nunca abra PR para a `main`: `preview` → `main` é feito por humano.
2. Toda mudança de comportamento vem com teste em `src/*.test.tsx`.
3. Antes de abrir o PR, rode `npm run check` (lint, typecheck, teste e build). Só abra PR com tudo verde.
4. Título do PR: `<CHAVE> - <descrição em português>` (ex.: `POC-3 - Botão de resetar contador`).
5. Corpo do PR em português, no template: problema, como resolvemos, como testar.
6. Comente o link do PR no ticket.

## Stack

React 19 + Vite + TypeScript. Teste com Vitest + Testing Library. Lint com oxlint.
