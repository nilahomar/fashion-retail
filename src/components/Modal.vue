<script lang="ts">
import Tabs from "./Tabs.vue";
import Tab from "./Tab.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ModalViewer",
  components: {
    Tabs,
    Tab,
  },
  data(): object {
    return {
      currentPriceLocal: this.currentPrice,
      currentSizeLocal: this.currentSize,
      currentColorLocal: this.currentColor,
      currentImageSrc: "",
      // slides: this.product,
      currentIndex: 0,
      selectedSizeLocalIndex: null,
      selectedColorLocalIndex: null,
    };
  },
  methods: {

    close() {
      this.$emit("close");
    },
    onClickOfColor(index: number) {
      this.currentPriceLocal =
        this.product.prices[index].regular +
        " " +
        this.product.prices[index].currencyCode;
      this.currentColorLocal = this.product.colors[index].label + "";
      this.goToSlide(index);
      this.selectedColorLocalIndex = index;
      this.reInitializeColorAndSize();
    },
    onClickOfSize(index: number) {
      this.currentSizeLocal = this.product.sizes[index].label + "";
      this.selectedSizeLocalIndex = index;
      this.reInitializeColorAndSize();
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    reInitializeColorAndSize() {
      this.currentImageSrc = this.product.gallery[this.currentIndex].src;
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.onClickOfColor(0);
    }, 10);
  },

  props: {
    product: {
      required: true,
      type: Object,
    },
    currentPrice: {
      type: String,
    },
    currentSize: {
      type: String,
    },
    currentColor: {
      type: String,
    },
  },
});

</script>

<template>
  <div class="fixed z-10 inset-0 bg-black bg-opacity-50">
    <div class="flex flex-col items-center justify-center mt-24 relative">
      <div class="bg-white text-black shadow-xl w-8/12" role="dialog" aria-modal="true">
        <button class="flex ml-auto right-4 top-2" @click="close">X</button>
        <div class="overflow-y-auto max-h-[70vh]">
          <div class="flex gap-4 w-full p-6">
            <div class="w-1/2">
              <div class="carousel">
                <div class="slide" v-for="(item, index) in this.product.gallery" :key="index"
                  v-show="index === currentIndex">
                  <img :src="item.src" :alt="item.alt" :title="item.title" />
                </div>
                <div class="controls">
                  <span class="circle" v-for="(item, index) in this.product.gallery" :key="index"
                    @click="goToSlide(index)" :class="{ active: index === currentIndex }"></span>
                </div>
              </div>
            </div>

            <div class="w-1/2 text-left">
              <div class="p-2">
                <p class="font-bold mb-2">{{ product.name }}</p>
                <h1 class="mb-4">{{ product.category }}</h1>
                <div class="flex justify-between items-center">
                  <p class="mb-2 font-bold uppercase">{{ currentPriceLocal }}</p>
                  <img src="../assets/images/s-oliver-logo.png" alt="logo" class="w-10">
                </div>
              </div>

              <div class="w-full border-t" />
              <div class="p-2 group">
                <p class="mb-2">
                  Color: <span class="font-bold">{{ currentColorLocal }}</span>
                </p>
                <div class="flex gap-2" id="colors">
                  <button class="item border border-gray-100 hover:border-black rounded-full w-10 h-10 overflow-hidden"
                    v-for="(color, index) in product.colors" :key="color.value"
                    :class="{ 'focus-custom': index === selectedColorLocalIndex }" @click="onClickOfColor(index)">
                    <img class="w-full h-full object-contain object-center" v-bind:src="color.swatchImagesLinks.flat" />
                  </button>
                </div>
              </div>

              <div class="w-full border-b" />

              <div class="p-2 group">
                <p class="mb-2">
                  Size: <span class="font-bold"> {{ currentSizeLocal }}</span>
                </p>
                <div class="item flex gap-2 flex-wrap text-center text-xs " id="sizes">
                  <button class="border border-gray-100 hover:border-black w-10 py-1 px-2 bg-gray-100 rounded-xl"
                    v-for="(size, index) in product.sizes" :key="size.value"
                    :class="{ 'focus-custom': index === selectedSizeLocalIndex }" @click="onClickOfSize(index)">
                    {{ size.label }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-neutral-100 w-full text-left p-6 text-xs flex">
            <div class="flex-1 w-64">
              <Tabs>
                <Tab title="Details">
                  <div>
                    <p class="font-bold mb-2">Product Details</p>
                    <div v-html="product.description" />
                  </div>
                </Tab>
                <Tab title="Fit">
                  <p class="font-bold">Fit</p>
                  <div v-html="product.fitDescription" />
                </Tab>
                <Tab title="Material & Care instructions">
                  <div class="flex justify-between mb-4 max-w-md">
                    <div v-html="product.materialDescription" />
                  </div>
                  <div class="w-full border-t" />
                  <div class="mt-4">
                    <p class="font-bold mb-2">Care instructions</p>
                    <div class="flex justify-between max-w-md">
                      <div v-html="product.careInstructions" />
                    </div>
                  </div>
                </Tab>
                <Tab title="Sustainability">
                  <div v-html="product.sustainabilityInstructions" />
                </Tab>
              </Tabs>
            </div>

            <div>
              <img :src="currentImageSrc"
                class="flex-1 w-36 hover:scale-125 transition-all duration-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div class="bg-white p-2">
          <button type="button"
            class="flex ml-auto cursor-pointer border border-transparent px-8 py-2 bg-black text-base font-medium text-white focus:outline-none gap-6">
            Add to cart

            <img src="../assets/images/shopping-bag.png" alt="cart-icon">
          </button>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

/* .slide {
  display: none;
} */

.slide img {
  width: 100%;
  height: auto;
}

.controls {
  text-align: center;
  margin-top: 10px;
}

.circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #888;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.circle.active {
  background-color: #333;
}

.focus-custom {
  outline: 1px solid black;
}
</style>
