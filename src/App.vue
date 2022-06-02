<template>
  <div class="container h-screen">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto" />
    <moles-grid :level="level" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MolesGrid from '@/components/organisms/MolesGrid.vue';
import { GameLevel } from './types';

export default defineComponent({
  name: 'WhackEm',
  components: {
    MolesGrid,
  },
  setup() {
    const level = GameLevel.Normal;

    return { level };
  },
});
</script>
