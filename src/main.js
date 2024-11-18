import { createApp } from 'vue'; 
import App from './App.vue';
import router from './routes';  // Asegúrate de que las rutas están bien configuradas
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';  // Importa los iconos de Quasar
import iconSet from 'quasar/icon-set/material-icons';  // Set de iconos de material
import { createPinia } from 'pinia';  // Asegúrate de que Pinia está instalado

const app = createApp(App);

// Crear una instancia de Pinia
const pinia = createPinia();

app.use(router);
app.use(pinia);


// Usar Quasar y configurar los iconos
app.use(Quasar, {
  plugins: {},  // Si necesitas algún plugin, agrégalo aquí
  iconSet: iconSet,  // Establecer el set de iconos de material
});

// Montar la aplicación en el div con id 'app'
app.mount('#app');
const cors = require('cors');
app.use(cors());

