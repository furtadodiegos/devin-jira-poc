# Roteiro de teste

## Tickets (criar no Jira com estes textos)

| Ticket | Texto | O que se espera |
|---|---|---|
| POC-1 | Trocar o título da página para "Devin POC funcionando". | PR pequeno, CI verde, link no ticket. |
| POC-2 | Adicionar botão "Zerar" que volta o contador para 0. Precisa de teste. | PR com teste novo, CI verde. |
| POC-3 | Deixar o app mais bonito. | Devin comenta a dúvida no ticket e **não** abre PR. |
| POC-4 | Usar a biblioteca lodash para formatar o número de cliques. | CI bloqueia (`guardrails`) por mexer em `package.json` sem label. |
| POC-5 | No PR do POC-2, comentar: "o botão Zerar fica desabilitado quando o contador é 0". | Devin ajusta no mesmo PR. |

## O que medir em cada ticket

- Tempo do ticket até o PR.
- CI verde de primeira?
- PR aproveitável sem eu mexer? (sim / com ajuste / não)
- Seguiu o `AGENTS.md`? (branch `devin/…`, título `POC-N - …`, corpo no template, link no ticket)
- Idas e voltas até aprovar.
- Uso consumido (ACUs).

## Resultado

| Ticket | Tempo | CI 1ª | Aproveitável | AGENTS.md | Idas/voltas | ACUs |
|---|---|---|---|---|---|---|
| POC-1 | | | | | | |
| POC-2 | | | | | | |
| POC-3 | | | | | | |
| POC-4 | | | | | | |
| POC-5 | | | | | | |

**Sucesso:** pelo menos 3 de 5 aproveitáveis, POC-3 sem PR e POC-4 barrado.

## Claude via issue

Fluxo: ticket no Jira → etiqueta `claude` → automação do Jira cria issue no GitHub com `@claude` → Claude Code Action implementa e sobe a branch → o workflow abre o PR pra `preview` → CI → aprovação humana. Os dois agentes convivem no mesmo repo: etiqueta `devin` vai pro Devin, `claude` vai pro Claude.

| Ticket | Etiqueta → issue | Issue → PR | CI 1ª | Aproveitável | AGENTS.md | Link no ticket | Custo |
|---|---|---|---|---|---|---|---|
| POC-7 (Claude) | 1 s | 1 min 30 s | sim | sim | parcial: título, base, teste e `npm run check` ok; branch `claude/issue-9-...` (nome vem do Action) | não (Claude não escreve no Jira) | US$0,20 + 1 min 23 s de Actions |
| POC-4 (Devin) | — | 2 min | sim | sim | sim | sim (automático) | US$0,81 (plano Free) |

O que foi preciso pra chegar aqui (23/10/2026):

- `Send web request` existe no Jira Free. O gatilho "Valor do campo alterado" não aceita Etiquetas; a regra usa "Ticket atualizado" + condição `{{changelog.labels.toString}} contém claude`. Resumo com aspas quebra o JSON: usar `{{issue.summary.jsonEncode}}`.
- O Action **não abre PR**: só sobe a branch e deixa um link. O PR sai de um passo do workflow com um PAT (`PR_TOKEN`); o token do app que o Action expõe já expirou nesse passo (401), e o `GITHUB_TOKEN` padrão não dispara o CI.
- O workflow `issues` só dispara com o arquivo na branch padrão (`preview`): cada ajuste exige PR + merge antes de testar.
- 3 rodadas até fechar (POC-5 JSON quebrado, POC-6 401 no PR, POC-7 ok). Cada rodada custou ~US$0,20.

## Card anda sozinho

Fluxo: etiqueta `devin` ou `claude` → Em andamento · PR aberto → Em análise · PR mergeado → Concluído. Quem move é o Jira (3 regras + app GitHub for Atlassian); nenhum agente escreve status. Setup em [03-setup.md](03-setup.md#7-jira--github-diego).

| Ticket | Agente | Etiqueta → Em andamento | Etiqueta → PR | PR → Em análise | Merge → Concluído |
|---|---|---|---|---|---|
| POC-10 | Devin | segundos | 66 s (PR #15, CI verde) | sim | — |
| POC-12 | Claude | segundos | 88 s (PR #17, CI verde) | sim | — |
| POC-11 | Claude | segundos | sem PR: ticket ambíguo, Claude perguntou na issue e parou | — | — |
| POC-7 | Claude | — | — | — | sim, em segundos (PR #10) |

Custo no Jira: 12 etapas de automação na rodada (teto do Free: 150/mês). Teto conhecido: agente que para sem PR deixa o card em Em andamento.

## Status

- 22/10/2026: repo montado (app, CI, guardrails, `AGENTS.md`, docs). `npm run check` verde local.
- 23/10/2026: Devin rodou o POC-4 (PR #3, mergeado). Claude via issue rodou o POC-7 (PR #10) com o fluxo completo sem toque humano entre a etiqueta e o PR; ver seção acima.
- **Próximo passo:** rodar os 4 cenários que faltam nos dois agentes e comparar.
- 23/10/2026 (noite): o card do Jira anda sozinho nos dois agentes (seção acima). O Devin desconflitou o PR #12 sozinho, com merge da `preview` e sem force push.
