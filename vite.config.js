import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    // Configuración de Quasar
    quasar({
      sassVariables: 'src/quasar-variables.sass', // Si tienes un archivo de variables SASS
    }),
  ],

  // Configuración adicional para Vite (si es necesario)
  resolve: {
    alias: {
      '@': '/src', // Alias para facilitar las importaciones desde la raíz del proyecto
    },
  },

  // Otras configuraciones de Vite pueden ir aquí si es necesario
});
