// stores/authStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    users: [
      { username: 'admin', password: '1234', type: 'proveedor' },
      { username: 'adminCliente', password: '1234', type: 'cliente' },
    ],
    errorMessage: null,
  }),

  actions: {
    // Método de login
    login(credentials) {
      const user = this.users.find(
        (u) => u.username === credentials.username && u.password === credentials.password
      );
      
      if (user) {
        // Si el usuario existe, guardamos el estado
        this.isAuthenticated = true;
        this.user = user;
        this.errorMessage = null;

        // Guardar datos del usuario en localStorage para persistir la sesión
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        // Si las credenciales son incorrectas
        this.errorMessage = 'Credenciales inválidas';
        this.isAuthenticated = false;
        this.user = null;

        // Limpiar localStorage si hay sesión anterior
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
      }
    },

    // Método de logout
    logout() {
      console.log('Logout ejecutado');
      this.isAuthenticated = false;
      this.user = null;
      this.errorMessage = null;

      // Limpiar localStorage al cerrar sesión
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    },

    // Método para verificar si el usuario está autenticado al cargar la aplicación
    checkAuthStatus() {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      if (isAuthenticated) {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        this.isAuthenticated = true;
        this.user = storedUser;
      } else {
        this.isAuthenticated = false;
        this.user = null;
      }
    },
  },

  // Llamar al método de verificación de autenticación cuando se carga el store
  persist: true,
});
