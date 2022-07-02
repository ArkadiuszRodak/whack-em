<template>
  <app-logo />
  <div class="grow flex flex-col">
    <nav>
      <router-link
        id="game_btn"
        class="block text-center my-3 border-2 border-stone-300 rounded text-xl p-3 font-bold
          text-stone-300 hover:bg-stone-300 hover:text-stone-700"
        :to="gameUrl"
      >
        PLAY
      </router-link>
      <router-link
        id="scores_btn"
        class="block text-center my-3 border-2 border-stone-300 rounded text-xl p-3 font-bold
          text-stone-300 hover:bg-stone-300 hover:text-stone-700"
        to="/scores"
      >
        SCORE BOARD
      </router-link>
      <router-link
        id="options_btn"
        class="block text-center my-3 border-2 border-stone-300 rounded text-xl p-3 font-bold
          text-stone-300 hover:bg-stone-300 hover:text-stone-700"
        to="/options"
      >
        OPTIONS
      </router-link>
      <router-link
        id="about_btn"
        class="block text-center my-3 border-2 border-stone-300 rounded text-xl p-3 font-bold
          text-stone-300 hover:bg-stone-300 hover:text-stone-700"
        to="/about"
      >
        ABOUT
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePlayer } from '@/logic/player';
import { useScore } from '@/logic/score';
import { useLife } from '@/logic/life';
import AppLogo from '@/components/atoms/AppLogo.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    AppLogo,
  },
  setup() {
    useScore().reset();
    useLife().reset();

    const gameUrl = computed(() => (usePlayer().isSet() ? '/game' : '/options'));

    return { gameUrl };
  },
});
</script>
