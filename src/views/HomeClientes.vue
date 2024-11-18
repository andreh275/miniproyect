<template>
    <div class="home-clientes-container">
      <div class="header">
        <h1>Bienvenido, Cliente</h1>
        <p>Explora nuestros productos disponibles y disfruta de recomendaciones personalizadas.</p>
      </div>
  
      <div class="products-section">
        <h2>Productos Disponibles</h2>
        <div class="products-grid">
          <div v-for="product in products" :key="product.id" class="product-card">
            <img :src="product.image" :alt="product.name" class="product-image" />
            <div class="product-details">
              <h3>{{ product.name }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <p class="product-price">$ {{ product.price }}</p>
              <button @click="addToCart(product)">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
  
      <div class="recommendations-section">
        <h2>Recomendaciones</h2>
        <div class="recommendations-list">
          <div v-for="recommendation in recommendations" :key="recommendation.id" class="recommendation-item">
            <h3>{{ recommendation.title }}</h3>
            <p>{{ recommendation.details }}</p>
          </div>
        </div>
      </div>
  
      <div class="footer">
        <p>&copy; 2024, Tu Empresa</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomeClientes",
    data() {
      return {
        // Simulando productos disponibles (esto podría provenir de una API)
        products: [
          {
            id: 1,
            name: "Producto 1",
            description: "Descripción del producto 1",
            price: 100,
            image: "https://via.placeholder.com/150"
          },
          {
            id: 2,
            name: "Producto 2",
            description: "Descripción del producto 2",
            price: 200,
            image: "https://via.placeholder.com/150"
          },
          {
            id: 3,
            name: "Producto 3",
            description: "Descripción del producto 3",
            price: 300,
            image: "https://via.placeholder.com/150"
          }
        ],
        // Recomendaciones personalizadas para el cliente (esto también podría venir de una API)
        recommendations: [
          { id: 1, title: "Recomendación 1", details: "Detalles de la recomendación 1" },
          { id: 2, title: "Recomendación 2", details: "Detalles de la recomendación 2" },
          { id: 3, title: "Recomendación 3", details: "Detalles de la recomendación 3" }
        ]
      };
    },
    methods: {
      addToCart(product) {
        alert(`Agregaste "${product.name}" al carrito de compras`);
        // Aquí puedes agregar la lógica para agregar el producto al carrito de compras
      }
    }
  };
  </script>
  
  <style scoped>
  .home-clientes-container {
    padding: 20px;
    background-color: #f4f4f4;
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .header h1 {
    font-size: 2rem;
    color: #333;
  }
  
  .header p {
    color: #666;
    font-size: 1rem;
  }
  
  .products-section, .recommendations-section {
    margin-top: 40px;
  }
  
  .products-section h2, .recommendations-section h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .product-details h3 {
    font-size: 1.2rem;
    color: #333;
  }
  
  .product-details p {
    color: #666;
    font-size: 0.9rem;
  }
  
  .product-price {
    font-size: 1.2rem;
    color: #2196f3;
    margin: 10px 0;
  }
  
  button {
    padding: 10px 20px;
    background-color: #2196f3;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #1976d2;
  }
  
  .recommendations-list {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .recommendation-item {
    margin-bottom: 20px;
  }
  
  .recommendation-item h3 {
    font-size: 1.2rem;
    color: #333;
  }
  
  .recommendation-item p {
    color: #666;
    font-size: 1rem;
  }
  
  .footer {
    text-align: center;
    margin-top: 40px;
    color: #888;
    font-size: 0.9rem;
  }
  </style>
  