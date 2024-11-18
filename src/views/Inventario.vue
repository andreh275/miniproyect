<template>
  <div class="card">
    <h3>Bienvenido al Inventario</h3>
    <p>Aquí puedes agregar y editar productos en el inventario.</p>
    <button @click="goToInventario">Ver Inventario</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToInventario() {
      this.$router.push('/inventario');
    }
  }
}
</script>

<style scoped>
.card {
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
}
button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
