<template>
  <div
    v-show="isVisible"
    id="game_over"
    class="absolute top-0 left-0 h-full w-full z-50"
  >
    <div
      class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
      w-1/2 py-5 text-center rounded-3xl drop-shadow-xl bg-red-800 text-stone-300"
    >
      <div class="text-5xl">
        Game Over
      </div>
      <div class="text-xl">
        Loading scores...
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useLife } from '@/logic/life';

export default defineComponent({
  name: 'GameOver',
  emits: ['game-over'],
  setup(_, { emit }) {
    const isVisible = ref(false);
    const router = useRouter();

    watch(() => useLife().get(), (val: number) => {
      if (val <= 0) {
        emit('game-over');
        isVisible.value = true;
        window.setTimeout(() => {
          router.push('/scores');
        }, 5000);
      }
    });

    return { isVisible };
  },
});
</script>
