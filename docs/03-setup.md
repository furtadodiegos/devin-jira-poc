# Setup

Roteiro completo, com o que ver em cada tela: [07-passo-a-passo.md](07-passo-a-passo.md).

Tudo com contas pessoais do Diego. Cada passo diz quem faz.

## 1. GitHub (Diego)

Repo **público**: <https://github.com/furtadodiegos/devin-jira-poc> (já criado). Falta a label:

```sh
gh label create allow-protected --color B60205 --description "Libera PR que mexe em arquivo protegido"
```

## 2. Proteção da `main` (Diego)

O repo é público porque proteção de branch em repo privado exige GitHub Pro.

Em Settings → Rules → Rulesets → New branch ruleset, alvo `main`:

- Restrict deletions e Block force pushes
- Require a pull request before merging: 1 aprovação, **Require review from Code Owners**
- Require status checks to pass: `check` e `guardrails` (aparecem depois do primeiro PR rodar o CI)

O `CODEOWNERS` põe o Diego como dono de tudo. Como o PR é do Devin, o Diego pode aprovar.

## 3. Jira Free (Diego)

1. Criar site em <https://www.atlassian.com/software/jira/free> (até 10 usuários, sem Rovo).
2. Projeto Kanban com chave **`POC`**.
3. Colunas: To Do → In Progress → In Review → Done.

## 4. Devin (Diego)

1. Criar conta em <https://app.devin.ai>.
2. Conectar o GitHub dando acesso **só** ao repo `devin-jira-poc`.
3. Limite de gasto: definir o menor teto de uso (ACUs) disponível.
4. Ambiente do repo: setup `npm ci`, verificação `npm run check`.
5. Conferir em Settings → Connections se o **Jira** aparece no plano. Se não aparecer, a POC para aqui
   e a decisão vira "precisa de plano pago" (anotar em [04-roteiro-de-teste.md](04-roteiro-de-teste.md)).

## 5. Jira ↔ Devin (Diego)

Usar a opção **conta de serviço** (não precisa de Rovo). Doc: <https://docs.devin.ai/integrations/jira>

1. No Jira, criar um usuário `devin-bot` (ocupa 1 das 10 vagas do Free).
2. No Devin, Settings → Connections → Jira → Connect, com esse usuário.
3. Criar a label `devin` no projeto `POC` (ela precisa existir antes de ser usada).
4. Acionamento: atribuir o ticket ao `devin-bot`, pôr a label `devin` ou citar o `devin-bot` num comentário.
5. Quando abre PR, o Devin põe o link como remote link e como comentário no ticket.

## 6. Teste de fumaça

Ticket `POC-1` do [roteiro](04-roteiro-de-teste.md). Se virar PR com CI verde, o setup está pronto.
