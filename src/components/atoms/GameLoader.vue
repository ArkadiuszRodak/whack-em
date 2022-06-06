<template>
  <div
    v-show="isVisible"
    class="absolute top-0 left-0 h-full w-full rounded-full opacity-90 game-overlay"
  >
    <span
      v-text="counter"
      class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        text-9xl text-stone-300"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'GameLoader',
  setup(_, { emit }) {
    const isVisible = ref(true);
    const counter = ref(6);
    let timer: number;

    const countdown = () => {
      counter.value -= 1;

      if (counter.value <= 0) {
        isVisible.value = false;
        emit('play');
        clearTimeout(timer);
      } else {
        timer = setTimeout(countdown, 1000);
      }
    };

    countdown();

    return { isVisible, counter };
  },
});
</script>
