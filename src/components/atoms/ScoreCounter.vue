<template>
  <div>
    <div class="text-2xl text-right mb-2">
      Score
    </div>
    <div
      class="score-container text-3xl text-right"
      v-text="score"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useScore } from '@/logic/score';

export default defineComponent({
  name: 'ScoreCounter',
  setup() {
    const score = computed(() => useScore().get());

    return { score };
  },
});
</script>
