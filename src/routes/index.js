import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/authStore';  // Importamos el store
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import HomeClientes from '../views/HomeClientes.vue';
import Inventario from '../views/Inventario.vue';
import TablaInventario from '../views/TablaInventario.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated) {
        if (authStore.user?.type === 'cliente') {
          next('/home-clientes');
        } else if (authStore.user?.type === 'proveedor') {
          next(); // Continua a la página de home para proveedores
        } else {
          next('/'); // Si el tipo no es válido, va a login
        }
      } else {
        next('/'); // Si no está autenticado, redirige a login
      }
    },
  },
  {
    path: '/home-clientes',
    name: 'home-clientes',
    component: HomeClientes,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated && authStore.user?.type === 'cliente') {
        next(); // Si es cliente, permite el acceso
      } else {
        next('/'); // Si no es cliente o no está autenticado, redirige al login
      }
    },
  },
  {
    path: '/inventario',
    name: 'inventario',
    component: Inventario,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated) {
        next();
      } else {
        next('/'); // Redirige al login si no está autenticado
      }
    },
  },
  {
    path: '/tabla-inventario',
    name: 'tabla-inventario',
    component: TablaInventario,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated) {
        next();
      } else {
        next('/'); // Redirige al login si no está autenticado
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Redirigir al login si el usuario no está autenticado
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated && to.name !== 'login') {
    // Si no está autenticado y no está intentando acceder a login, lo redirige al login
    next('/');
  } else {
    next(); // Si está autenticado o va a la página de login, continúa con la navegación
  }
});

export default router;
