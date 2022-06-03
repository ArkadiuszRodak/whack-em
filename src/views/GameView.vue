<template>
  <page-title title="Lets Play" />
  <moles-grid :level="getLevel()" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from '@/components/atoms/PageTitle.vue';
import MolesGrid from '@/components/organisms/MolesGrid.vue';
import { getLevel } from '@/logic/useLevel';

export default defineComponent({
  name: 'GameView',
  components: {
    PageTitle,
    MolesGrid,
  },
  setup() {
    return { getLevel };
  },
});
</script>
