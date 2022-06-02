<template>
  <div class="grid">
    <img alt="Vue logo" src="./assets/logo.png" class="justify-self-center" />
    <moles-grid />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MolesGrid from '@/components/organisms/MolesGrid.vue';

export default defineComponent({
  name: 'WhackEm',
  components: {
    MolesGrid,
  },
});
</script>
