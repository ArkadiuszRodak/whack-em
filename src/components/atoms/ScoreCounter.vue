<template>
  <div class="flex justify-between mb-5 border-b-2 border-stone-800 py-2">
    <span class="text-3xl mr-2">Score</span>
    <span v-text="getScore()" class="text-3xl" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getScore } from '@/logic/useScore';

export default defineComponent({
  name: 'ScoreCounter',
  setup() {
    return { getScore };
  },
});
</script>
