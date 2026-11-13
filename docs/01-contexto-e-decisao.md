# Contexto e decisão

## De onde veio

Um time com uma esteira caseira de IA: quadro próprio de tarefas e um servidor que chama um agente de código.
O agente escrevia a especificação, programava na máquina e rodava lint, typecheck e build; uma pessoa aprovava
no quadro. Não havia commit, push nem PR automático, nem CI. A esteira tinha parado e o trabalho voltou a ser manual.

A pergunta: um agente acionado pelo Jira, abrindo PR com CI e revisão humana como travas, substitui isso?

## Caminhos considerados

- **A: trocar direto e apagar a esteira.** Ganha menos código; custa decidir sem prova. Difícil de voltar.
- **B: POC do agente com a esteira congelada.** Monta CI, proteção da branch principal e `AGENTS.md`, testa com
  3 a 5 tickets. Reversível, e a montagem serve pra qualquer caminho. ← **escolhido**
- **C: manter a esteira e só criar o CI.** Custo zero de ferramenta; mantém código parado.

**Mudo de ideia se:** o Jira não permitir acionar o agente (Rovo ou conta de serviço), ou se menos da
metade dos PRs da POC sair aproveitável.

## Por que um repo à parte

Contas e repo pessoais do Diego, app mínimo. Nenhum agente vê código, segredo ou histórico de terceiros.
