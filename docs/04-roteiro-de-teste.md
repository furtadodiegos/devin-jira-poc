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

## Status

- 22/10/2026: repo montado (app, CI, guardrails, `AGENTS.md`, docs). `npm run check` verde local.
- **Próximo passo:** Diego faz o [setup](03-setup.md) passos 1 a 5 e roda o POC-1.
