<template>
  <div
    id="whack_em_app"
    :style="bgImg"
    class="min-h-screen bg-gradient-to-b from-sky-900 to-slate-900 text-stone-300"
  >
    <div class="container min-h-screen flex flex-col">
      <div class="grow flex flex-col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const bgImg = computed(() => (useRoute().path === '/game'
      ? "background-image: url('/img/bg.png')"
      : ''));

    return { bgImg };
  },
});
</script>

<style>
body {
  background: linear-gradient(315deg, rgba(24,24,24,1) 50%, rgba(52,79,130,1) 100%);
}

#whack_em_app {
  font-family: 'Roboto Slab', Courier, monospace;
  cursor: crosshair;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
}
</style>
