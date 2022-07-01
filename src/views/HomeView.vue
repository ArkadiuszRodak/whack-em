<template>
  <app-logo />
  <div class="grow flex flex-col">
    <nav>
      <router-link
        class="block text-center my-3 border-2 border-stone-300 rounded text-xl p-3 font-bold
          text-stone-300 hover:bg-stone-300 hover:text-stone-700"
        :to="isUserNameSet() ? '/game' : '/options'"
      >
        PLAY
      </router-link>
      <router-link
        class="block text-center my-3 border-2 border-stone-300 rounded text-xl p-3 font-bold
          text-stone-300 hover:bg-stone-300 hover:text-stone-700"
        to="/scores"
      >
        SCORE BOARD
      </router-link>
      <router-link
        class="block text-center my-3 border-2 border-stone-300 rounded text-xl p-3 font-bold
          text-stone-300 hover:bg-stone-300 hover:text-stone-700"
        to="/options"
      >
        OPTIONS
      </router-link>
      <router-link
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
import { defineComponent } from 'vue';
import { isUserNameSet } from '@/logic/player';
import { resetScore } from '@/logic/score';
import { resetLife } from '@/logic/life';
import AppLogo from '@/components/atoms/AppLogo.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    AppLogo,
  },
  setup() {
    resetScore();
    resetLife();

    return { isUserNameSet };
  },
});
</script>
