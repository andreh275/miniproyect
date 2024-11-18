<template>
  <div class="home-container">
    <h1>Bienvenido al Home</h1>

    <!-- Solo muestra el enlace si el usuario está autenticado -->
    <div v-if="isAuthenticated">
      <router-link to="/tabla-inventario" class="home-link">Ver Tabla Inventario</router-link>
    </div>

    <!-- Nuevo botón de cerrar sesión -->
    <button @click="logout" class="logout-button">Cerrar sesión</button>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore'; // Importamos el store

export default {
  computed: {
    // Verifica si el usuario está autenticado
    isAuthenticated() {
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    },
  },
  methods: {
    logout() {
      const authStore = useAuthStore();
      authStore.logout(); // Llamamos al logout del store

      // Limpiar almacenamiento local (si es necesario)
      localStorage.removeItem('token'); // Si usas un token en el almacenamiento local, lo eliminamos.

      // Redirigir a la página de login
      this.$router.push('/'); // Usa '/' para redirigir al login
    },
  },
  mounted() {
    // Si el usuario ya está autenticado, redirigirlo automáticamente a la tabla de inventario
    if (this.isAuthenticated) {
      this.$router.push('/tabla-inventario');
    }
  },
};
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
}

.home-link {
  text-decoration: none;
  font-size: 1.2rem;
  color: #2196F3;
  border: 2px solid #2196F3;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.home-link:hover {
  background-color: #2196F3;
  color: white;
}

.logout-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #FF5722;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
}

.logout-button:hover {
  background-color: #E64A19;
}
</style>
