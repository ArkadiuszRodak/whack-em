<template>
  <div class="grid gap-4" :class="grid.className">
    <div v-for="index in grid.size" :key="`single-mole-${index}`">
      {{ index }}
      <single-mole />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { GameLevel, CalculatedGrid } from '@/types';
import SingleMole from '../atoms/SingleMole.vue';

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
    const makeGrid = (level: GameLevel): CalculatedGrid => {
      switch (level) {
        case GameLevel.Easy:
          return {
            size: 4,
            xs: 2,
            ys: 2,
            className: 'grid-cols-2',
          };
        case GameLevel.Expert:
          return {
            size: 16,
            xs: 4,
            ys: 4,
            className: 'grid-cols-4',
          };
        case GameLevel.Normal:
        default:
          return {
            size: 9,
            xs: 3,
            ys: 3,
            className: 'grid-cols-3',
          };
      }
    };

    const grid = makeGrid(props.level);

    return { grid };
  },
});
</script>
