<template>
  <game-loader @play="play()" />
  <game-over @game-over="gameOver()" />
  <div
    id="main_content"
    class="grow max-h-full w-full"
  >
    <div
      class="grid gap-4 self-end mx-auto"
      :class="['grid-cols-' + grid.xs]"
      :style="{ height: grid.squareSize, width: grid.squareSize }"
    >
      <div
        v-for="index in grid.size"
        :key="`single-window-${index}`"
      >
        <single-window v-model="grid.indexes[index - 1]" />
      </div>
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
  components: { SingleWindow, GameLoader, GameOver },
  setup() {
    let mainContentElement: HTMLElement | null;
    let intervalTimer: number;

    const levelDef = getLevelDef(getLevel());

    const grid = reactive<Grid>({
      ...levelDef,
      squareSize: '0px',
      // generate object of indexes with bool value
      indexes: Array.from({ length: levelDef.size }, (_, i) => i)
        .reduce((o, key) => ({ ...o, [key]: false }), {}),
    });

    // calculates responsive square size to fill the screen with grid
    const setGridSize = (): void => {
      if (!mainContentElement) {
        mainContentElement = document.querySelector('#main_content');
        if (!mainContentElement) {
          throw new Error('Page not loaded properly. Content not found.');
        }
      }
      grid.squareSize = ((): string => {
        const width = mainContentElement?.clientWidth || 0;
        const height = mainContentElement?.clientHeight || 0;
        return `${height < width ? height : width}px`;
      })();
    };

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
      setGridSize();
      window.addEventListener('resize', setGridSize);
    });

    return { grid, play, gameOver };
  },
});
</script>
