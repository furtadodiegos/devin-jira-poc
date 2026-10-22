# Contexto e decisão

Levantado em 22/10/2026 no repo `squad-totem-ultimate` (Decathlon Brasil, app de quiosque Android).

## A esteira que existe hoje

Um quadro próprio (`apps/board`, Next.js) e um servidor (`apps/back`, NestJS + SQLite) que chama o Codex:

1. Alguém cria a tarefa no quadro (título, pedido, prints, HTML de referência).
2. O back usa o Codex pra escrever a especificação (`spec.md`).
3. Outro agente programa direto no código do app, na máquina.
4. O back roda lint, typecheck e build.
5. O card volta pra coluna **CR - Tech Lead**: uma pessoa aprova ou pede ajuste (o ajuste volta pro agente).
6. Aprovado, o card vai pra **Waiting Release**. Não há commit, push nem PR automático: publicar é manual.

O `apps/back` é exclusivo dessa esteira. Não é clone da VTEX e nem o app nem o `react-native-app` usam ele.

## O que pesou na decisão

- **A esteira está parada desde 17/08/2026.** Último commit em `apps/back`/`apps/board` nessa data; as 18
  specs são de agosto. Todo o trabalho depois (Pix, pagamento, "Ajustes de QA" 1 a 15) foi direto na `main`.
- **O repo não tem CI.** Não existe `.github/`. Lint e typecheck já falham hoje (11 e 17 erros em 07/10).
- **O `AGENTS.md` de lá travaria o Devin.** Aponta pros `ai-flows` (desatualizados), cita `apps/client`
  (não existe mais) e manda parar em conflito. O Devin lê o `AGENTS.md` sozinho antes de codar.
- **O `apps/app/.env` está versionado na `main`**, com a chave do Amplitude. Dar o repo pro Devin entrega isso a terceiro.

## Caminhos que foram considerados

- **A: trocar direto e apagar a esteira.** Ganha menos código; custa decidir sem prova. Difícil de voltar.
- **B: POC do Devin com a esteira congelada.** Monta CI, proteção da `main` e `AGENTS.md` novo, testa com
  3 a 5 tickets. Reversível, e a montagem serve pra qualquer caminho. ← **escolhido**
- **C: manter a esteira e só criar o CI.** Custo zero de ferramenta; mantém 200 KB de código parado.

**Mudo de ideia se:** o Jira da Decathlon não tiver Rovo nem permitir conta de serviço, ou se menos da
metade dos PRs da POC sair aproveitável.

## Por que este repo e não o da Decathlon

Contas e repo pessoais do Diego, app mínimo. O Devin não vê código, `.env` nem histórico da Decathlon.
