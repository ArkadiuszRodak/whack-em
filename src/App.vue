<template>
<div
  id="whack_em_app"
  class="min-h-screen bg-gradient-to-b from-stone-600 to-gray-800 text-stone-300"
>
  <div class="container flex flex-col">
      <div id="logotype" class="text-center text-6xl font-bold pt-10 pb-10">
        Whack'em!
      </div>
    <div class="grow">
      <router-view />
    </div>
  </div>
</div>
</template>

<style>
#whack_em_app {
  font-family: 'Roboto Slab', Courier, monospace;
  cursor: crosshair;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
