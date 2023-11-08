<script setup lang="ts">
import { products, created } from "../composables/productsModal";
import ProductList from "../components/ProductList.vue";

created();

</script>

// Render the productList

<template>
  <main>
    <ProductList :products="products" />
  </main>
</template>
