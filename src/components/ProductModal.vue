<script lang="ts">
import { defineComponent } from 'vue'

// Render individual product

export default defineComponent({
  name: 'ProductModal',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
})
</script>

<template>
  <div class="w-full max-w-sm mx-auto overflow-hidden relative">
    <div>
      <img class="object-cover object-top flex shrink-0 w-full h-72 xl:h-80" :src="product.variations[0]?.gallery[0]?.src + '?bg=rgb(239,239,239)&qlt=default&fmt=auto&w=648'
        " :alt="product.variations[0]?.gallery[0]?.alt" />
      <div class="inline-flex flex-col gap-4 items-start absolute bottom-2 left-0">
        <span class="p-1 bg-white text-xs font-medium" :class="{ 'bg-green-700 text-red': badge.type === 'SUSTAINABLE' }"
          v-for="badge in product.badges" :key="badge.type">
          {{ badge.type }}
        </span>
      </div>
    </div>
    <h6 class="text-sm opacity-60">{{ product.brandB2CLogo?.title }}</h6>
    <h4 class="text-lg">{{ product.shortDescription }}</h4>
    <p class="font-bold">{{ product.variations[0]?.price?.regular }}</p>
  </div>
</template>
