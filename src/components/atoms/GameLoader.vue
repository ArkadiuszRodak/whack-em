<template>
  <div v-show="isVisible" class="absolute top-0 left-0 h-full w-full z-50">
    <div
      :class="{
        'bg-red-800': counter >= 3,
        'bg-yellow-800': counter === 2,
        'bg-emerald-800': counter === 1,
      }"
      class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold
        w-1/2 py-5 text-center rounded-3xl drop-shadow-xl text-stone-300"
    >
      <span v-text="counter" class="text-9xl"/>
    </div>
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
