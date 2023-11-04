import { ref } from 'vue'

export const product = ref(Object);
export const currentPrice = ref("");

export function generated(productId: number) {
    fetch(`http://localhost:2000/products/${productId}`)
      .then((res) => res.json())
      .then((productResponse) => {
        product.value = productResponse;
        currentPrice.value = productResponse.prices[0]?.regular + " " + productResponse.prices[0]?.currencyCode;
      });
};
