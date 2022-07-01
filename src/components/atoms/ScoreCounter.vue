<template>
  <div>
    <div class="text-2xl text-right mb-2">
      Score
    </div>
    <div
      class="text-3xl text-right"
      v-text="getScore()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getScore } from '@/logic/score';

export default defineComponent({
  name: 'ScoreCounter',
  setup() {
    return { getScore };
  },
});
</script>
