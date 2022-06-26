<template>
  <div class="flex items-center justify-between mb-10">
    <div class="text-5xl">
      <slot/>
    </div>
    <router-link
      v-if="isBackBtnVisible"
      class="text-center border-2 border-stone-300 rounded text-xl font-bold py-2 px-4
      hover:bg-stone-500"
      to="/"
    >
      BACK
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const isBackBtnVisible = computed(() => useRoute().name !== 'menu');

    return { isBackBtnVisible };
  },
});
</script>
