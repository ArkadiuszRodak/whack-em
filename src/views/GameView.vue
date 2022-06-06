<template>
  <div class="flex flex-col h-full">
    <div class="md:flex md:justify-between">
      <life-bar />
      <score-counter />
    </div>
    <div class="grow mb-10 relative">
      <moles-grid />
    </div>
  </div>
</template>

<style>
.game-overlay {
  background: radial-gradient(
    circle at 50% 50%,
    rgb(0, 0, 0) 0%,
    rgba(0, 188, 212, 0) 66%
  );
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import MolesGrid from '@/components/organisms/MolesGrid.vue';
import LifeBar from '@/components/atoms/LifeBar.vue';
import ScoreCounter from '@/components/atoms/ScoreCounter.vue';

export default defineComponent({
  name: 'GameView',
  components: {
    LifeBar,
    ScoreCounter,
    MolesGrid,
  },
});
</script>
