# Passo a passo: do zero ao primeiro merge

Fluxo: ticket no Jira → label `devin` → Devin abre PR → CI verde → Diego aprova → merge na `main`.

Todos os passos são do Diego. Cada um diz **o que fazer** → *o que aparece quando deu certo*.

## O que você precisa

| Terceiro | Conta | Plano | Custo | Permissão que dá |
|---|---|---|---|---|
| GitHub | `furtadodiegos` (já existe) | Free (repo público) | 0 | Devin só no repo `devin-jira-poc` |
| Atlassian (Jira) | site novo do Diego | Jira Free (até 10 usuários) | 0 | conta de serviço: ver projeto `POC`, comentar, linkar issue |
| Devin | conta em app.devin.ai | Free; Pro se o Free não tiver Jira | 0 ou US$20/mês | lê e escreve no repo, comenta no Jira |

## 1. GitHub

O repo já existe e é público: <https://github.com/furtadodiegos/devin-jira-poc>.

1. **Criar a label:** `gh label create allow-protected --color B60205 --description "Libera PR que mexe em arquivo protegido"`
   → *Issues → Labels mostra `allow-protected`.*
2. **Proteger a `main`:** seguir o [passo 2 do setup](03-setup.md#2-proteção-da-main), sem marcar checks ainda
   (eles só aparecem depois do primeiro PR, no passo 5).
   → *Settings → Rules → Rulesets lista a regra da `main` como Active.*

## 2. Jira

1. **Criar o site** em <https://www.atlassian.com/software/jira/free>.
   → *Você entra no Jira com o seu site `<nome>.atlassian.net`.*
2. **Criar projeto Kanban** com chave `POC`, colunas To Do → In Progress → In Review → Done.
   → *O quadro `POC` aparece com as 4 colunas.*
3. **Criar a label `devin`:** abrir qualquer ticket de teste, campo Labels, digitar `devin` e confirmar.
   → *A label `devin` aparece como sugestão ao digitar num ticket novo.*

## 3. Devin

1. **Criar conta** em <https://app.devin.ai> no plano Free.
   → *Você vê o painel do Devin.*
   > **Se travar:** se em Settings → Connections não aparecer **Jira** no Free, assinar o Pro (US$20/mês).
   > Uso além da cota é cobrado à parte: confira o limite de uso antes do primeiro ticket.
2. **Conectar o GitHub:** Settings → Connections → GitHub → Add Connection → conta `furtadodiegos` →
   **Select repositories** → só `devin-jira-poc`.
   → *A conexão GitHub aparece como ativa com 1 repositório.*
3. **Preparar o ambiente:** iniciar uma sessão e pedir "Set up your environment for this repo".
   Aprovar os cards com instalar `npm ci` e verificar `npm run check`.
   → *A sessão termina com o snapshot criado e `npm run check` verde.*

O Devin lê o `AGENTS.md` sozinho antes de codar. Não precisa configurar nada.

## 4. Ligar Jira e Devin (conta de serviço, sem Rovo)

1. **Devin:** Settings → Connections → Jira → Connect account → "Connect with an admin account", logar com a sua conta do Jira.
   → *A conexão Jira aparece com o seu site.*
2. **Atlassian:** <https://admin.atlassian.com> → Directory → Service accounts → criar a conta e dar acesso ao Jira.
   → *A conta aparece na lista de Service accounts.*
3. **Credencial:** na conta criada → Create credentials → OAuth 2.0 → escopos `read:me`, `read:jira-user`,
   `read:jira-work`, `write:jira-work` → Create. Copiar client ID e secret agora: não dá pra ver de novo.
   → *A tela mostra client ID e client secret.*
4. **Permissão no projeto `POC`:** a conta precisa ver o projeto, comentar e linkar issue.
   → *A conta aparece em Project settings → People do `POC`.*
5. **Devin:** Settings → Connections → Jira → menu da conexão → "Add service-account credentials" → colar ID e secret.
   → *A conexão mostra a conta de serviço vinculada.*

> **Se travar:** se em admin.atlassian.com não aparecer **Service accounts** ou **OAuth 2.0** (a Atlassian
> dá 5 contas grátis, mas cita Guard Standard/Enterprise e exige "centralized user management"):
> plano B é instalar o app [Devin for Jira](https://marketplace.atlassian.com/4162823004) e, no Jira,
> Settings → Apps → Devin → Connect to Devin → Link site (o link expira em 15 min). Essa opção exige
> Devin **Core, Team ou Enterprise**. Se nenhuma das duas der, anotar "precisa de plano pago" na seção
> Status do [roteiro](04-roteiro-de-teste.md) e parar.

## 5. Primeiro ticket (POC-1)

1. **Criar o ticket** no projeto `POC` com o texto: Trocar o título da página para "Devin POC funcionando".
   Pôr a label `devin`.
   → *O Devin comenta "Devin is working on your request" com o link da sessão.*
2. **Esperar o PR.**
   → *No GitHub aparece um PR com título `POC-1 - …` e branch `devin/POC-1-…`.*
3. **Marcar os checks obrigatórios:** no ruleset da `main`, Require status checks → adicionar `check` e `guardrails`.
   → *Os dois aparecem como Required no PR.*
4. **Conferir o CI.**
   → *`check` e `guardrails` verdes no PR.*
5. **Conferir na tela:** `gh pr checkout <número> && npm install && npm run dev`, abrir <http://localhost:5173>.
   → *O título mostra "Devin POC funcionando".*
6. **Aprovar e fazer merge:** Files changed → Review changes → Approve → Merge pull request.
   → *O PR fica Merged e a `main` mostra o título novo.*
7. **Conferir o Jira.**
   → *O ticket POC-1 tem o link do PR (remote link e comentário).*

Pronto: anotar tempo, CI de primeira e ACUs na tabela do [roteiro](04-roteiro-de-teste.md).

## Fontes

[Devin: Jira](https://docs.devin.ai/integrations/jira) ·
[Devin: GitHub](https://docs.devin.ai/integrations/gh) ·
[Devin: ambiente](https://docs.devin.ai/onboard-devin/environment) ·
[Devin: AGENTS.md](https://docs.devin.ai/onboard-devin/agents-md) ·
[Devin: preços](https://devin.ai/pricing) ·
[Atlassian: contas de serviço](https://support.atlassian.com/user-management/docs/understand-service-accounts/) ·
[Atlassian: credencial OAuth 2.0](https://support.atlassian.com/user-management/docs/create-oauth-2-0-credential-for-service-accounts/)
