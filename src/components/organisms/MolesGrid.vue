<template>
  <div class="grid grid-cols-3">
    <div v-for="y in Array(calculatedGrid.ys).keys()" :key="`y${y}`">
      <div v-for="x in Array(calculatedGrid.xs).keys()" :key="`x${x}`">
        <span v-text="`${y} ${x}`" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MolesGrid',
  setup() {
    const calculateGrid = (): { xs: number; ys: number } => ({
      xs: 3,
      ys: 3,
    });
    const calculatedGrid = calculateGrid();

    return { calculatedGrid };
  },
});
</script>
