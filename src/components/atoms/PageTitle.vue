<template>
  <div class="flex items-center justify-between pb-10">
    <div
      id="page_title"
      class="text-5xl"
    >
      <slot />
    </div>
    <router-link
      v-if="isBackBtnVisible"
      id="back_btn"
      class="text-center border-2 border-stone-300 rounded text-xl font-bold py-2 px-4 ml-4
          hover:bg-stone-300 hover:text-stone-700"
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
    const isBackBtnVisible = computed((): boolean => useRoute().path !== '/');

    return { isBackBtnVisible };
  },
});
</script>
