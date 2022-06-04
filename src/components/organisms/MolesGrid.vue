<template>
  <div id="main_content" class="flex h-full" style="max-height: 100%;">
    <div
      class="grid gap-4 self-end mx-auto"
      :class="['grid-cols-' + grid.xs]"
      :style="{ height: gridSquareSize, width: gridSquareSize }"
    >
      <div v-for="index in grid.size" :key="`single-mole-${index}`">
        <single-mole />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
} from 'vue';
import SingleMole from '../molecules/SingleMole.vue';
import { getLevelDef, getLevel } from '@/logic/useLevel';

export default defineComponent({
  components: { SingleMole },
  name: 'MolesGrid',
  setup() {
    const gridSquareSize = ref('0px');

    const setGridSquareSize = (): void => {
      gridSquareSize.value = ((): string => {
        const mainContentDiv = document.querySelector('#main_content');
        const height = mainContentDiv?.clientHeight || 0;
        const width = mainContentDiv?.clientWidth || 0;

        return `${height < width ? height : width}px`;
      })();
    };

    onMounted(() => {
      setGridSquareSize();
      window.addEventListener('resize', setGridSquareSize);
    });

    return { grid: getLevelDef(getLevel()), gridSquareSize };
  },
});
</script>
