<template>
  <div class="text-left" v-show="isActive">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, ref, onBeforeMount, watch } from "vue";

const addTab = inject("addTab") as (tab: {
  title: string;
  hash: string;
}) => void;
const activeTabHash = inject("activeTabHash") as any;

const props = defineProps(["title"]);

const hash = ref("");
const isActive = ref(false);

onBeforeMount(() => {
  hash.value = `#${props.title.toLowerCase().replace(/ /g, "-")}`;

  addTab({
    title: props.title,
    hash: hash.value,
  });
});

watch(activeTabHash, () => {
  isActive.value = activeTabHash.value === hash.value;
});
</script>
