<template>
  <moles-grid :level="getLevel()" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MolesGrid from '@/components/organisms/MolesGrid.vue';
import { getLevel } from '@/logic/useLevel';

export default defineComponent({
  name: 'GameView',
  components: {
    MolesGrid,
  },
  setup() {
    return { getLevel };
  },
});
</script>
