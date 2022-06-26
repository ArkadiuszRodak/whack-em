<template>
  <page-title>
    Score Board
  </page-title>
  <span class="text-7xl">Score board here...</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from '@/components/atoms/PageTitle.vue';

export default defineComponent({
  name: 'ScoresView',
  components: { PageTitle },
});
</script>
