// Ponto central da autenticação.
// A integração com Supabase Auth será adicionada depois da definição
// dos perfis, permissões e fluxos de acesso da Central.

window.CentralAuth = {
  isConfigured() {
    return Boolean(
      window.CENTRAL_CONFIG?.supabaseUrl &&
      window.CENTRAL_CONFIG?.supabaseAnonKey
    );
  }
};
