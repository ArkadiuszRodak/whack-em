<template>
  <div class="flex items-center justify-between mb-10">
    <div class="text-5xl" v-text="title" />
    <router-link
      v-if="isBackBtnVisible"
      class="text-center border-2 border-stone-800 rounded text-xl font-bold py-2 px-4"
      to="/"
    >
      BACK
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const title = ref('');
    const isBackBtnVisible = ref(false);

    watch(() => route.name, (v) => { title.value = v as string; });
    watch(() => route.path, (v) => { isBackBtnVisible.value = v !== '/'; });

    return { title, isBackBtnVisible };
  },
});
</script>
