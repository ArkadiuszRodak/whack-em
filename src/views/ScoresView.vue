<template>
  <app-logo />
  <page-title>
    Score Board
  </page-title>
  <template v-if="scores.length">
    <div
      v-for="(score, index) in scores"
      :key="`score-row-${index}`"
      class="flex items-baseline border-b-2 border-stone-300 py-4"
    >
      <div
        class="text-xl mr-4"
        v-text="`${index + 1}.`"
      />

      <div class="text-3xl mr-4 grow">
        {{ score.player }}
        <span
          class="ml-4 text-xl hidden sm:inline-block"
          v-text="score.date"
        />
      </div>
      <div
        class="text-3xl"
        v-text="score.score"
      />
    </div>
  </template>
  <div
    v-else
    class="mx-auto p-4 text-3xl border-t-2 border-b-2 border-stone-300"
  >
    No scores yet. Play a game!
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { format } from 'date-fns';
import { usePlayer } from '@/logic/player';
import { useScore } from '@/logic/score';
import AppLogo from '@/components/atoms/AppLogo.vue';
import PageTitle from '@/components/atoms/PageTitle.vue';
import { Score } from '@/types';

export default defineComponent({
  name: 'ScoresView',
  components: {
    AppLogo,
    PageTitle,
  },
  setup() {
    const scores = localStorage.getItem('scores')
      ? JSON.parse(localStorage.getItem('scores') as string)
      : [];

    if (useScore().get()) {
      const currentScore: Score = {
        player: usePlayer().get(),
        score: useScore().get(),
        date: format(new Date(), 'yyyy-MM-dd HH:mm'),
      };

      useScore().reset();

      scores.push(currentScore);
      scores.sort((a: Score, b: Score): number => b.score - a.score);
      scores.slice(0, 10);

      localStorage.setItem('scores', JSON.stringify(scores));
    }

    return { scores };
  },
});
</script>
