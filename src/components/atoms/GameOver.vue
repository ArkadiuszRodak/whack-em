<template>
  <div  v-show="isVisible" class="absolute top-0 left-0 h-full w-full">
    <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
      w-1/2 py-5 text-center rounded-3xl drop-shadow-xl bg-red-800 text-stone-300">
      <span class="text-7xl">Game Over</span>
    </div>
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
