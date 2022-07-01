<template>
  <app-logo />
  <page-title>
    Score Board
  </page-title>
  <div
    v-for="score in scores"
    :key="`score-row-${score.index}`"
    class="flex text-3xl border-b-2 border-b-stone300 py-4"
  >
    <span
      class="mr-4"
      v-text="`${score.index}.`"
    />
    <span
      class="grow"
      v-text="score.userName"
    />
    <span v-text="score.score" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import AppLogo from '@/components/atoms/AppLogo.vue';
import PageTitle from '@/components/atoms/PageTitle.vue';
import { getName } from '@/logic/player';
import { getScore } from '@/logic/score';

export default defineComponent({
  name: 'ScoresView',
  components: {
    AppLogo,
    PageTitle,
  },
  setup() {
    const scores = reactive([
      {
        index: 1,
        userName: getName(),
        score: getScore(),
      },
    ]);

    return { scores };
  },
});
</script>
