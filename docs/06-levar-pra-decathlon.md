# Levar pra Decathlon (se a POC passar)

Antes de dar o repo `squad-totem-ultimate` pro Devin:

1. **Tirar `apps/app/.env` do git** e cadastrar as variáveis no EAS (já feito na branch `chore/expo-cng-plugins`, que não entrou na `main`).
2. **Reescrever o `AGENTS.md`**: o atual aponta pros `ai-flows` velhos e pro `apps/client` que não existe. Usar este repo como modelo, mais as regras do totem (só Android, tudo é produção, proibido cartão/vínculo de loja/especialista, analytics é contrato).
3. **Criar o CI**: lint e typecheck têm erros antigos, então o gate é "não piorar" (`lint:scope`, `typecheck:scope`) até zerar. Jest precisa do preset novo (`@react-native/jest-preset`).
4. **Proteção da `main`** na org `dktunited`: PR obrigatório, CODEOWNERS do Tech Lead, checks obrigatórios. Lembrar que o projeto é ligado ao Lovable (nada de force push).
5. **Confirmar acionamento do Jira**: Rovo ativo no Jira da Decathlon, ou permissão pra conta de serviço.
6. **Plano do Devin** com a TI/compras.
7. **Esteira** (`apps/back` + `apps/board`): congelar; apagar só depois de um ciclo real com o Devin.

O que continua humano: conferir no tablet. Tudo no totem é produção (VTEX, Pix cria pedido, cartão manda cobrança pra maquininha).
