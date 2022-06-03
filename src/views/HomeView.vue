<template>
  <nav>
    <router-link
      class="block text-center my-3 border-2 border-sky-800 rounded text-xl p-3 font-bold
      text-sky-800"
      to="/game"
    >
      PLAY
    </router-link>
    <router-link
      class="block text-center my-3 border-2 border-amber-800 rounded text-xl p-3 font-bold
      text-amber-800"
      to="/options"
    >
      OPTIONS
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>
