<template>
  <div
    v-show="isVisible"
    class="absolute top-0 left-0 h-full w-full rounded-full opacity-90 game-overlay"
  >
    <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
      text-6xl text-stone-300 text-center">
      Game Over
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { getLife } from '@/logic/useLife';

export default defineComponent({
  name: 'GameOver',
  setup(_, { emit }) {
    const isVisible = ref(false);

    watch(
      () => getLife(),
      (val: number) => {
        if (val <= 0) {
          emit('game-over');
          isVisible.value = true;
        }
      },
    );

    return { isVisible };
  },
});
</script>
