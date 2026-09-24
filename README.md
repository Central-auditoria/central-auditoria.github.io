# Central de Auditoria Nissei

Base visual e autenticação inicial da Central de Auditoria.

## Endereço

https://central-auditoria.github.io/

## Princípios

- preservar versões funcionais dos módulos existentes;
- integrar módulos individualmente;
- manter histórico e snapshots;
- autenticação e permissões via Supabase;
- não colocar chaves privadas do Supabase no frontend.


## Autenticação

A entrada da Central usa Supabase Auth e valida o perfil `admin` ou `auditor` na tabela `profiles`, seguindo a lógica de autenticação da versão-base do Pré-Balanço.
