import { ref } from 'vue'

export const products = ref([]);

// Fetch products from API
export function created() {
    fetch('http://localhost:2000/products')
      .then((res) => res.json())
      .then((productsResponse) => {
        products.value = productsResponse;
      });
};
