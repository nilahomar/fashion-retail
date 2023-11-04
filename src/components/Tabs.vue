<template>
    <div class="">
        <ul class="flex gap-3 flex-nowrap mb-4">
            <li class="cursor-pointer pb-1 border-neutral-800 bg-transparent uppercase font-bold" :class="{
                '': tab.hash !== activeTabHash,
                'border-b-2': tab.hash === activeTabHash,
            }" v-for="tab in tabs" :key="tab.title" @click="activeTabHash = tab.hash">
                {{ tab.title }}
            </li>
        </ul>
        <slot />
    </div>
</template>
  
<script setup lang="ts">
import { ref, provide } from 'vue';

interface Tab {
    title: string
    hash: string
}

const activeTabHash = ref('');
const tabs = ref<Tab[]>([]);

provide('addTab', (tab: Tab) => {
    const count = tabs.value.push(tab);

    if (count === 1) {
        activeTabHash.value = tab.hash;
    }
});
provide('activeTabHash', activeTabHash);
</script>
  