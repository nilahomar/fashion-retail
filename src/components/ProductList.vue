<script setup lang="ts">
import { markRaw } from "vue";
import { useModal } from "../composables/useModal";
import Product from "../components/Product.vue";
import ProductModal from "../components/Modal.vue";
import { currentPrice, product, generated } from "../composables/productModal";

type IProduct = any;

const modal = useModal();

const showProductModal = (productId: number) => {
  generated(productId);
  modal.component.value = markRaw(ProductModal);
  modal.showModal();
};

defineProps({
  products: {
    type: Array as () => IProduct[],
  },
});
</script>

<template>
  <div
    class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
  >
    <Product
      v-for="product in products"
      :key="product.id"
      :product="product"
      @click="showProductModal(product.id)"
    />
  </div>
  <Teleport to="body">
    <Transition>
      <component
        :product="product"
        :currentPrice="currentPrice"
        :is="modal.component.value"
        v-if="modal.show.value"
        @close="modal.hideModal"
      />
    </Transition>
  </Teleport>
</template>
