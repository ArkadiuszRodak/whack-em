<template>
  <nav>
    <router-link
      class="block text-center my-3 border-2 border-sky-800 rounded text-xl p-3 font-bold
      text-sky-800 hover:bg-sky-800 hover:text-stone-300"
      :to="isNameSet() ? '/game' : '/options'"
    >
      PLAY
    </router-link>
    <router-link
      class="block text-center my-3 border-2 border-amber-800 rounded text-xl p-3 font-bold
      text-amber-800 hover:bg-amber-800 hover:text-stone-300"
      to="/options"
    >
      OPTIONS
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { isNameSet } from '@/logic/useName';

export default defineComponent({
  name: 'HomeView',
  setup() {
    return { isNameSet };
  },
});
</script>
