<template>
  <game-loader @play="play()" />
  <game-over @game-over="gameOver()" />
  <div
    class="grow w-full h-full grid gap-4 self-end mx-auto p-4 bg-red-900 border-l-8 border-red-800"
    :class="['grid-cols-' + grid.xs]"
  >
    <div
      v-for="index in grid.size"
      :key="`single-window-${index}`"
      class="building-window border-4 border-stone-800 rounded-t-2xl border-b-stone-500"
    >
      <single-window v-model="grid.indexes[index - 1]" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
} from 'vue';
import { getLevelDef, getLevel } from '@/logic/useLevel';
import { resetLife } from '@/logic/useLife';
import { resetScore } from '@/logic/useScore';
import SingleWindow from '@/components/molecules/SingleWindow.vue';
import GameLoader from '@/components/atoms/GameLoader.vue';
import GameOver from '@/components/atoms/GameOver.vue';
import { Grid } from '@/types';

export default defineComponent({
  name: 'WindowsGrid',
  components: {
    SingleWindow,
    GameLoader,
    GameOver,
  },
  setup() {
    let intervalTimer: number;

    const levelDef = getLevelDef(getLevel());

    const grid = reactive<Grid>({
      ...levelDef,
      // generate object of indexes with bool value
      indexes: Array.from({ length: levelDef.size }, (_, i) => i)
        .reduce((o, key) => ({ ...o, [key]: false }), {}),
    });

    const play = (): void => {
      // wait another second after game loader closes
      setTimeout(() => {
        intervalTimer = setInterval(() => {
          grid.indexes[Math.floor(Math.random() * grid.size)] = true;
        }, 1000);
      }, 1000);
    };

    const gameOver = (): void => {
      clearInterval(intervalTimer);
    };

    onMounted(() => {
      resetScore();
      resetLife();
    });

    return { grid, play, gameOver };
  },
});
</script>
