<template>
  <div id="whack_em_app" class="container h-screen text-stone-800 flex flex-col overflow-hidden">
    <div>
      <div id="logotype" class="text-center text-6xl font-bold pt-10 pb-10">Whack'em!</div>
      <hr class="border-t-2 border-stone-800 pb-10" />
    </div>
    <page-title />
    <hr class="border-t-2 border-stone-800 pb-5" />
    <div class="grow">
      <router-view />
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
import PageTitle from '@/components/atoms/PageTitle.vue';

export default defineComponent({
  components: {
    PageTitle,
  },
});
</script>
