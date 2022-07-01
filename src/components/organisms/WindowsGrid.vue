<template>
  <div
    class="grow w-full h-full grid gap-4 self-end mx-auto p-4 bg-red-900 border-l-8 border-red-800"
    :class="['grid-cols-' + grid.xs]"
  >
    <div
      v-for="index in grid.size"
      :key="`single-window-${index}`"
      class="border-4 border-stone-800 rounded-t-2xl border-b-stone-500 overflow-hidden flex"
    >
      <div
        class="broken-glass w-100 h-100 grow"
        style="background-image: url('/img/glass.jpg')"
      >
        <single-window v-model="grid.indexes[index - 1]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  watch,
} from 'vue';
import { getLevelDef, getLevel } from '@/logic/level';
import { clearLife, resetLife } from '@/logic/life';
import { resetScore } from '@/logic/score';
import SingleWindow from '@/components/molecules/SingleWindow.vue';
import { Grid } from '@/types';

export default defineComponent({
  name: 'WindowsGrid',
  components: {
    SingleWindow,

  },
  setup() {
    const interval = ref(1000);
    let intervalTimer: number;
    const counter = ref(0);

    const levelDef = getLevelDef(getLevel());

    const grid = reactive<Grid>({
      ...levelDef,
      // generate object of indexes with bool value
      indexes: Array.from({ length: levelDef.size }, (_, i) => i)
        .reduce((o, key) => ({ ...o, [key]: false }), {}),
    });

    const play = (): void => {
      intervalTimer = setInterval(() => {
        counter.value += 1;
        grid.indexes[Math.floor(Math.random() * grid.size)] = true;
      }, interval.value);
    };

    const gameOver = (): void => {
      clearInterval(intervalTimer);
    };

    // increase difficulty by speeding up
    watch(counter, (val: number): void => {
      if (interval.value >= 20 && val && val % 10 === 0) {
        interval.value -= 10;
        clearInterval(intervalTimer);
        play();
      }
      if (interval.value < 20) {
        clearLife();
        gameOver();
      }
    });

    resetScore();
    resetLife();

    return {
      grid,
      play,
      gameOver,
    };
  },
});
</script>

<style scoped>
.broken-glass {
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
