<template>
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
import { defineComponent, onMounted, reactive } from 'vue';
import SingleMole from '../molecules/SingleMole.vue';
import { getLevelDef, getLevel } from '@/logic/useLevel';
import { Grid } from '@/types';
import { resetScore } from '@/logic/useScore';

export default defineComponent({
  name: 'MolesGrid',
  components: { SingleMole },
  setup() {
    const levelDef = getLevelDef(getLevel());
    const grid = reactive<Grid>({
      ...levelDef,
      squareSize: '0px',
      // generate object of indexes with bool value
      indexes: Array.from({ length: levelDef.size }, (_, i) => i)
        .reduce((o, key) => ({ ...o, [key]: false }), {}),
    });

    // calculates responsive square size to fill the screen with grid
    const setGridSquareSize = (): void => {
      grid.squareSize = ((): string => {
        const mainContentDiv = document.querySelector('#main_content');
        const height = mainContentDiv?.clientHeight || 0;
        const width = mainContentDiv?.clientWidth || 0;

        return `${height < width ? height : width}px`;
      })();
    };

    const play = (): void => {
      resetScore();
      setInterval(() => {
        grid.indexes[Math.floor(Math.random() * grid.size)] = true;
      }, 1000);
    };

    onMounted(() => {
      setGridSquareSize();
      window.addEventListener('resize', setGridSquareSize);
      play();
    });

    return { grid };
  },
});
</script>
