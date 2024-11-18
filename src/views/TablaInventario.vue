<template>
  <div>
    <div v-if="!showTable" class="background-container">
      <!-- Cuadro de contenido con información y botón de categorías -->
      <div class="content-box">
        <h1>Bienvenido a Nuestra Empresa</h1>
        <p>
          Somos una empresa dedicada a brindar productos y servicios de calidad.
          Seleccione una categoría para ver nuestros productos.
        </p>
        <q-btn
          color="primary"
          label="Seleccionar Categoría"
          @click="selectCategory"
        />
      </div>

      <!-- Botón de cerrar sesión en la parte inferior -->
      <button @click="logout" class="logout-button">Cerrar sesión</button>
    </div>

    <!-- Tabla de productos centrada y con estilo mejorado -->
    <div v-else class="table-container">
      <h2 class="table-title">Inventario de Productos - Categoría: {{ selectedCategory }}</h2>
      <q-select
        outlined
        color="primary"
        v-model="selectedCategory"
        :options="categories"
        label="Escoge una categoría"
        @input="loadProducts"
        dense
      />
      <q-table
        flat
        bordered
        class="styled-table"
        :rows="filteredRows"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body-cell-actions="props">
          <q-td align="center" :props="props">
            <q-btn
              icon="edit"
              color="primary"
              label="Editar"
              flat
              @click="editProduct(props.row)"
            />
            <q-btn
              icon="delete"
              color="negative"
              label="Eliminar"
              flat
              @click="deleteProduct(props.row)"
            />
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  data() {
    return {
      showTable: false,
      selectedCategory: null,
      categories: ['Alimentos', 'Electrodomésticos', 'Familiar', '+18'],
      columns: [
        { name: 'user', label: 'Nombre de Usuario', field: 'user', align: 'left' },
        { name: 'name', label: 'Artículo', field: 'name', align: 'left' },
        { name: 'price', label: 'Precio', field: 'price', align: 'right' },
        { name: 'quantity', label: 'Cantidad', field: 'quantity', align: 'right' },
        { name: 'category', label: 'Categoría', field: 'category', align: 'left' },
        { name: 'actions', label: 'Acciones', align: 'center' }
      ],
      rows: [], // Inicialmente vacío, se llenará con los productos cargados del backend
    };
  },
  computed: {
    filteredRows() {
      return this.rows.filter(row => row.category === this.selectedCategory);
    }
  },
  methods: {
    // Método para cargar los productos del backend
    async loadProducts() {
      if (!this.selectedCategory) return;

      try {
        const response = await axios.get(`http://localhost:3000/api/articulos/${this.selectedCategory}`);
        this.rows = response.data.products; // Asumiendo que el backend devuelve productos con la estructura correcta
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    },

    // Seleccionar categoría para mostrar la tabla
    selectCategory() {
      this.showTable = true;
    },

    // Editar producto (aún no implementado)
    editProduct(row) {
      console.log('Editar producto:', row);
    },

    // Eliminar producto (aún no implementado)
    deleteProduct(row) {
      console.log('Eliminar producto:', row);
    },

    // Lógica de cierre de sesión
    logout() {
      // Lógica de cierre de sesión (puedes agregar la lógica según sea necesario)
      console.log('Cerrar sesión');
    }
  },
  mounted() {
    // Llamar a loadProducts cuando la categoría está seleccionada
    if (this.selectedCategory) {
      this.loadProducts();
    }
  }
};
</script>

<style scoped>
.background-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('https://www.bbva.es/content/dam/public-web/bbvaes/images/finanzas-vistazo/ef/empresa/2400x1600/2400x1600-tipos-de-empresas-1.jpg.img.2400.1716191210747.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.content-box {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  max-width: 600px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.logout-button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #FF5722;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #E64A19;
}

.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.table-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.styled-table {
  max-width: 90%;
  margin: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
}

.q-table thead th {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

.q-table tbody tr:hover {
  background-color: #f0f8ff;
}

.q-btn[flat] {
  font-size: 14px;
  margin: 0 5px;
}
</style>
