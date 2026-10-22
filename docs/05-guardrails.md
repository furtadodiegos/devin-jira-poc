# Guardrails

| Proteção | Onde mora | Status |
|---|---|---|
| Lint, typecheck, teste e build obrigatórios | `.github/workflows/ci.yml` job `check` + ruleset | CI pronto; ruleset no setup |
| Título do PR com chave do Jira (`POC-1 - …`) | `ci.yml` job `guardrails` | pronto |
| Arquivos protegidos (`.github/`, `AGENTS.md`, `CLAUDE.md`, `docs/`, `package*.json`) só com label `allow-protected` | `ci.yml` job `guardrails` | pronto |
| Merge só com aprovação humana do dono | `.github/CODEOWNERS` + ruleset | CODEOWNERS pronto; ruleset no setup |
| Sem push direto nem force push na `main` | ruleset | no setup |
| Regras de escopo, branch, PR e "ticket ambíguo = pergunta" | `AGENTS.md` (o Devin lê sozinho) | pronto |
| Devin só enxerga este repo | permissão do GitHub App do Devin | no setup |
| Teto de gasto | limite de ACUs no Devin | no setup |
| Segredo fora do repo | `AGENTS.md` + não há `.env` aqui | pronto |

O que o CI **não** pega: mudança visual errada. Isso é a revisão humana, rodando `npm run dev` na branch do PR.

Referências: [riscos e mitigações do Copilot agent](https://docs.github.com/en/enterprise-cloud%40latest/copilot/concepts/security-governance-and-network-settings/risks-and-mitigations)
· [configurações de segurança do Antigravity](https://docs.cloud.google.com/gemini/enterprise/docs/ai-developer-tools-settings)
· [Devin e AGENTS.md](https://docs.devin.ai/onboard-devin/agents-md)
