<template>
  <div id="main_content" class="flex h-full">
    <div
      class="grid gap-4 self-end mb-10"
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
  PropType,
  onMounted,
  ref,
} from 'vue';
import { GameLevel } from '@/types';
import SingleMole from '../atoms/SingleMole.vue';
import { getLevelDef } from '@/logic/useLevel';

export default defineComponent({
  components: { SingleMole },
  name: 'MolesGrid',
  props: {
    level: {
      type: Number as PropType<GameLevel>,
      required: true,
    },
  },
  setup(props) {
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

    return { grid: getLevelDef(props.level), gridSquareSize };
  },
});
</script>
