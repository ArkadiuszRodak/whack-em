<template>
  <game-loader @play="play()"/>
  <game-over @game-over="gameOver()" />
  <div id="main_content" class="flex h-full" style="max-height: 100%">
    <div
      class="grid gap-4 self-end mx-auto"
      :class="['grid-cols-' + grid.xs]"
      :style="{ height: grid.squareSize, width: grid.squareSize }"
    >
      <div v-for="index in grid.size" :key="`single-mole-${index}`">
        <single-mole v-model="grid.indexes[index - 1]"/>
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
import GameLoader from '../atoms/GameLoader.vue';
import SingleMole from '../molecules/SingleMole.vue';
import GameOver from '../atoms/GameOver.vue';
import { Grid } from '@/types';

export default defineComponent({
  name: 'MolesGrid',
  components: { SingleMole, GameLoader, GameOver },
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

    const getMainContentElement = () => {
      mainContentElement = document.querySelector('#main_content');
      if (!mainContentElement) {
        throw new Error('Page not loaded properly. Content not found.');
      }
    };

    // calculates responsive square size to fill the screen with grid
    const setGridSize = (): void => {
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
      getMainContentElement();
      setGridSize();
      window.addEventListener('resize', setGridSize);
    });

    return { grid, play, gameOver };
  },
});
</script>
