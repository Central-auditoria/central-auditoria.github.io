window.CentralAuth = {
  isConfigured() {
    return Boolean(
      window.CENTRAL_CONFIG?.supabaseUrl &&
      window.CENTRAL_CONFIG?.supabaseAnonKey
    );
  }
};
