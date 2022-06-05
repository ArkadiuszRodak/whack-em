<template>
  <div class="flex flex-col h-full">
    <div class="flex justify-between">
      <life-bar />
      <score-counter />
    </div>
    <div class="grow pb-10">
      <moles-grid />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MolesGrid from '@/components/organisms/MolesGrid.vue';
import ScoreCounter from '@/components/atoms/ScoreCounter.vue';

export default defineComponent({
  name: 'GameView',
  components: {
    MolesGrid,
    ScoreCounter,
  },
});
</script>
