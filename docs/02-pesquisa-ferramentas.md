# Pesquisa das ferramentas (SPDBR-5963)

Apurado em 22/10/2026. Cada item foi conferido na fonte. O ticket pedia olhar Google primeiro.

## Google

- **Jules**: o mais parecido com o Devin (VM, issue do GitHub → PR). Saiu do beta em 06/08/2025.
  Plano básico: 15 tarefas por dia. Planos pagos **só para contas @gmail.com**, sem Workspace.
  · [limites](https://jules.google/docs/usage-limits) · [changelog](https://jules.google/docs/changelog/2025-08-06)
- **Gemini Code Assist**: sem venda nova desde 09/10/2026; substituto é o Antigravity no Gemini Enterprise.
  Modo agente ainda em Preview. · [sunset](https://docs.cloud.google.com/gemini/docs/codeassist/sunset)
- **Gemini CLI**: sem login com conta pessoal desde 18/06/2026.
  · [deprecação](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals)
- **Antigravity**: aposta atual do Google, GA, grátis individual, empresa a partir de US$30/pessoa/mês.
  Não achamos acionamento Jira → PR pronto. · [pricing](https://www.antigravity.google/pricing)
- **Firebase Studio**: cadastro fechado desde 22/06/2026, encerra em 22/03/2027.
  · [release notes](https://firebase.google.com/support/release-notes/firebase-studio)

**Conclusão Google:** hoje não tem opção de empresa que pegue ticket do Jira e devolva PR.

## Fora do Google

| Ferramenta | Jira → PR | Exige | Preço (por pessoa/mês) |
|---|---|---|---|
| **Devin** | atribuir, `@Devin` ou label `devin` | Rovo **ou** conta de serviço no Jira | não confirmado |
| **Copilot coding agent** | atribuir, `@GitHub Copilot`, automação | Jira Cloud com Rovo | US$19 Business / US$39 Enterprise |
| **Cursor Cloud Agents** | atribuir ou `@Cursor` | Rovo + plano Teams | a partir de US$30 |
| **Codex Cloud** | não (só GitHub, GitLab, Slack, Linear) | - | US$20 anual / US$25 mensal |
| **Claude Code** | via MCP, sem acionamento nativo | - | US$20 anual / US$25 mensal (Team) |

Fontes: [Devin Jira](https://docs.devin.ai/integrations/jira) · [Copilot Jira](https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-jira)
· [Copilot planos](https://docs.github.com/en/copilot/get-started/plans) · [Cursor Jira](https://prod.cursor.com/docs/integrations/jira)
· [Cursor pricing](https://cursor.com/pricing) · [Codex cloud](https://learn.chatgpt.com/docs/cloud)
· [Codex pricing](https://learn.chatgpt.com/docs/pricing) · [Claude pricing](https://claude.com/pricing)

**Por que o Devin na POC:** é o único que aciona pelo Jira **sem depender do Rovo** (opção conta de serviço),
o que deixa testar com Jira Free.

## Derrubado na conferência

- Template "Jira ticket to PR" do Devin: a página citada dava 404 (a integração existe, por outra página).
- Preços do Devin (Pro US$20, Max US$200, Teams US$80 + US$40): nenhuma página oficial mostra.
  A doc fala em planos "Core, Team, Enterprise"; blogs divergem.

## Em aberto

- Plano Free do Devin inclui a integração Jira? Só criando a conta.
- Rovo no Jira da Decathlon: admin do Jira confirma.
- Contrato Google Cloud / Gemini Enterprise da Decathlon: TI confirma.
