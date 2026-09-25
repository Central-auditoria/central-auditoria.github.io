RELATÓRIO DE PERDAS — V1.8

Alterações desta versão:
- Botão Minha conta para todos os usuários.
- Auditor pode alterar a própria senha e nome.
- Botão Administração visível apenas para admin.
- Admin pode criar usuários, alterar nome/perfil e excluir usuários.
- Admin pode excluir relatórios pela lista Todos os relatórios.
- Exclusão de relatório exige confirmação explícita.
- Auditor continua vendo somente os próprios relatórios.
- Relatórios finalizados continuam somente leitura.

IMPORTANTE:
1. Substitua o index.html do módulo Relatório de Perdas.
2. Execute o arquivo SQL incluído no Supabase SQL Editor.
3. A criação/exclusão de usuários usa as Edge Functions existentes:
   - create-admin-user
   - delete-admin-user
   Se essas funções ainda não estiverem implantadas no projeto Supabase, a Administração de usuários não conseguirá criar/excluir contas até que elas sejam implantadas.
