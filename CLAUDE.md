# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

POC: o Devin pega ticket do Jira, abre PR aqui, e o GitHub Actions + revisão humana garantem o fluxo.
Nasceu do ticket SPDBR-5963 (Decathlon, squad Totem). Aqui usamos contas pessoais do Diego.

Leia antes de continuar: `README.md` e `docs/` na ordem numerada. Regras de agente: `AGENTS.md`.
Estado atual e próximo passo: `docs/04-roteiro-de-teste.md`, seção "Status".

## Comandos

- `npm run dev`: app em http://localhost:5173
- `npm run check`: lint (oxlint) + typecheck + teste (Vitest/jsdom) + build, igual ao CI
- Um teste só: `npx vitest run src/App.test.tsx -t "<nome do teste>"`

## O que não é óbvio

- O app (`src/App.tsx`) é mínimo de propósito: os tickets do roteiro mudam algo visível nele. Não "melhore" sem ticket.
- O CI (`.github/workflows/ci.yml`, job `guardrails`) reprova PR cujo título não siga `CHAVE-123 - Descrição`, e também PR que mexa em `.github/`, `AGENTS.md`, `CLAUDE.md`, `docs/` ou `package*.json` sem a label `allow-protected`. Isso vale inclusive para este arquivo.
