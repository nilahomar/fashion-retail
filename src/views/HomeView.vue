<script setup lang="ts">
import { ref } from 'vue'
import { products, created } from "../composables/productsModal";
import ProductList from "../components/ProductList.vue";

created();

</script>

<template>
  <main>
    <ProductList :products="products" />
  </main>
</template>
