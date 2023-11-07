<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex justify-between m-4">
    <header class="lg:flex max-h-screen pr-20 leading-8 font-medium">Shirts & Polos</header>
    <img src="./assets/images/shopping-bag-black.png" alt="">
  </div>

  <div class="w-full border-t" />

  <RouterView />
</template>
