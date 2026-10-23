# Backlog

## Criar o harness do Claude no projeto

Um harness só, versionado no repo, usado pelo dev (Claude Code) e pelo Devin.

- `CLAUDE.md` e `AGENTS.md`: o Devin já lê os dois sozinho. [doc](https://docs.devin.ai/onboard-devin/knowledge-onboarding.md)
- Skills em `.claude/skills/<nome>/SKILL.md`: o Devin também lê essa pasta. [doc](https://docs.devin.ai/product-guides/skills.md)
- Hooks: no Claude Code travam; no Devin cloud são "best effort". Trava de verdade fica no CI. [doc](https://docs.devin.ai/product-guides/plugins.md)
- Pronto quando: a mesma skill dispara no Claude Code e numa sessão do Devin, e as regras não se repetem entre `CLAUDE.md` e `AGENTS.md`.

## Configurar o painel do Devin (Settings)

Plano pessoal. Nome exato de campo marcado quando não confirmado na doc.

1. Usage & Limits → teto por sessão (ex.: US$2–3), pra sessão travada não comer o crédito todo (nome do campo não confirmado). [doc](https://docs.devin.ai/admin/billing/self-serve.md)
2. Usage & Limits → auto-reload desligado. Sem crédito, tudo para; ligado, cobra o cartão sozinho. [doc](https://docs.devin.ai/admin/billing/self-serve.md)
3. Teto da org não existe no plano pessoal (só Enterprise). O teto real é o saldo + item 1. [doc](https://docs.devin.ai/admin/billing/enterprise.md)
4. Label `devin` nativa não tem teto por sessão. Pra ter: Automation com ACU limit, fila ligada e 1 execução por vez. [doc](https://docs.devin.ai/product-guides/automations.md)
5. Review → Repositories: não inscrever o repo, ou só "On PR creation". Auto-review a cada push gasta de novo. [doc](https://docs.devin.ai/work-with-devin/devin-review.md)
6. Review → limite por PR (ex.: US$1). Vazio = sem limite. [doc](https://docs.devin.ai/work-with-devin/devin-review.md)
7. Review → Auto-fix desligado: ligado, a sessão acorda e gasta pra corrigir o que o Review apontou. [doc](https://docs.devin.ai/work-with-devin/devin-review.md)
8. Devin → Pull requests → Responding to bots: manter "No bots", senão entra em loop com o CI. [doc](https://docs.devin.ai/product-guides/bot-comment-settings.md)
9. Preferences → Devin Review → Review trigger: "Manual". Vale pra qualquer PR seu e anula o item 5 se estiver em auto. [doc](https://docs.devin.ai/work-with-devin/devin-review.md)
10. Notifications: ligar "terminou" e "precisa de você", com push no celular (nome dos switches não confirmado). [doc](https://docs.devin.ai/release-notes/2026.md)
11. Devin → Pull requests → Open PRs as: "Devin". [doc](https://docs.devin.ai/integrations/gh.md)
12. Environment → Snapshots: nada a ligar. Refaz sozinho ao salvar e a cada ~24h; secret novo exige rebuild. [doc](https://docs.devin.ai/onboard-devin/environment/blueprints.md)
13. Sessão ociosa dorme em 30 min (5 em Lite); não dá pra mudar no plano pessoal. Cancelar o ticket no Jira põe a sessão pra dormir. [doc](https://docs.devin.ai/admin/billing/usage.md)
14. Custo por sessão: menu ⋯ da sessão → Session insights. Gasto do mês em Usage & Limits. [doc](https://docs.devin.ai/product-guides/session-insights.md)

## Avaliar: Obsidian online via MCP para o Devin

Só se o conhecimento for de vários repos (ex.: regras da Decathlon inteira). Do projeto, fica no repo.

- Confirmar antes: MCP funciona em sessão aberta pelo Jira?
- Risco: nota pessoal exposta a terceiro, e texto da nota vira instrução pro Devin sem revisão.

## Estudar: otimizar o Devin (playbooks, harness, modelos)

Levantado em 22/10/2026, só na doc oficial. Item sem fonte confirmada está marcado.

### Playbooks
- Estrutura: Overview → What's Needed From User → Procedure (um passo por linha, imperativo) → Specifications (o que deve ser verdade no fim) → Advice → Forbidden Actions. [doc](https://docs.devin.ai/product-guides/creating-playbooks.md)
- No Jira, cada playbook vira uma label (a tela de Connections → Jira diz isso). Em Automation, referência por `@playbook-nome` no prompt. [doc](https://docs.devin.ai/product-guides/using-playbooks.md)
- Não existe `!plan` pronto. Pra "planejar antes de codar", criar um playbook nosso (base: o prompt "Quick PR"). [doc](https://docs.devin.ai/get-started/first-run.md)
- Iterar: rodar o mesmo playbook em 2+ sessões e mover pro playbook tudo que precisou ser dito no chat.

### Harness: o que vai onde
- `AGENTS.md`: só os primeiros 16 KiB entram. Crítico no topo. [doc](https://docs.devin.ai/onboard-devin/agents-md.md)
- Skills (`.agents/skills/<nome>/SKILL.md`; também lê `.claude/`): procedimento repetível do repo. Uma ativa por vez. [doc](https://docs.devin.ai/product-guides/skills.md)
- Knowledge está **deprecated** e migra sozinho pra Skills. Não criar novo. [doc](https://docs.devin.ai/onboard-devin/knowledge-onboarding.md)
- Rules (Customize → Rules): convenção entre repos. Hooks no cloud são "best effort", não servem de trava. [doc](https://docs.devin.ai/product-guides/plugins.md)
- Memória é pessoal e **sessões de automation não leem nem gravam** memória. Não contar com ela no fluxo do Jira. [doc](https://docs.devin.ai/product-guides/memory.md)
- DeepWiki: `.devin/wiki.json` direciona o que é gerado. [doc](https://docs.devin.ai/work-with-devin/deepwiki.md)

### Modelos e custo
- Lite: tarefa simples e bem escopada. Normal: padrão. Ultra: a mais difícil, a mais cara. Fusion: modelo forte planeja, barato executa. SWE-2: grátis no Pro. [doc](https://docs.devin.ai/get-started/first-run.md) · [Fusion](https://docs.devin.ai/cli/fusion.md)
- Fixar nível por ticket do Jira: **não confirmado**. Jira, Automation e API não têm campo de nível; só o Slack (`!lite`, `!ultra`). [doc](https://docs.devin.ai/integrations/slack.md)
- Teto de gasto: ACU limit por Automation e limite da org. [doc](https://docs.devin.ai/admin/billing/usage.md)
- Session Insights mostra ACU por sessão e sugere prompt melhor. "Muitas mensagens, pouco ACU" = ticket mal escrito. [doc](https://docs.devin.ai/product-guides/session-insights.md)

### Fluxo Jira → PR
- Trocar o gatilho nativo (label `devin`) por Automation com gatilho do Jira: ganha teto de ACU, filtro por projeto/status, limite de execuções e um filtro que descarta ticket mal escrito. [doc](https://docs.devin.ai/product-guides/automations.md)
- Devin Review: `/devin review` no PR, regras em `REVIEW.md`, "Auto-fix" faz a sessão corrigir sozinha. [doc](https://docs.devin.ai/work-with-devin/devin-review.md)
- `devin_pr_template.md`: template de PR só pro Devin. [doc](https://docs.devin.ai/integrations/pr-templates.md)

### Segurança
- Security profile: lista de rede permitida, git só leitura ou completo, tirar o token do `gh`. [doc](https://docs.devin.ai/product-guides/security-profiles.md)
- Segredo: guardar em Secrets do Devin, nunca em blueprint ou `.env` commitado. [doc](https://docs.devin.ai/product-guides/secrets.md)
- Gatilho do GitHub em repo público vem desligado (risco de prompt injection). Manter assim. [doc](https://docs.devin.ai/product-guides/automations.md)

### Só testando responde
1. Sessão aberta pela label `devin` nasce em qual nível (Lite, Normal, Ultra)?
2. `@playbook` no prompt de uma Automation do Jira anexa o playbook de fato?
3. "Auto-fix" do Devin Review corrige antes da revisão humana? Quanto ACU custa?
4. Security profile sem o token `gh` ainda deixa o Devin abrir PR pra `preview`?
5. Skill com ferramentas restritas reduz o escopo do Devin num ticket de verdade?
