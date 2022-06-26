<template>
  <div class="container max-h-screen h-screen flex flex-col overflow-hidden">
    <page-title class="mt-10">
      Whack'em!
    </page-title>
    <div class="bg-stone-700 h-5 rounded-t-full overflow-hidden border-l-8 border-stone-600" />
    <div class="grid gap-4 p-4 grid-cols-2 bg-red-900 border-l-8 border-red-800">
      <div class="building-window border-4 border-stone-800 p-4 rounded-t-2xl border-b-stone-500">
        <life-bar />
      </div>
      <div class="building-window border-4 border-stone-800 p-4 rounded-t-2xl border-b-stone-500">
        <score-counter />
      </div>
    </div>
    <windows-grid />
    <div class="flex flex-row">
      <div class="grow building-wall h-16 border-l-8 border-stone-600" />
      <div
        class="black w-20 h-16 border-t-8 border-t-stone-700 border-r-8 border-r-stone-500
              border-l-8 border-l-stone-800"
      />
      <div class="grow building-wall h-16" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WindowsGrid from '@/components/organisms/WindowsGrid.vue';
import LifeBar from '@/components/atoms/LifeBar.vue';
import ScoreCounter from '@/components/atoms/ScoreCounter.vue';
import PageTitle from '@/components/atoms/PageTitle.vue';

export default defineComponent({
  name: 'GameView',
  components: {
    LifeBar,
    ScoreCounter,
    WindowsGrid,
    PageTitle,
  },
});
</script>

<style>
.building-window {
  background: linear-gradient(135deg, rgba(24,24,24,1) 50%, rgba(52,79,130,1) 100%);
}

.building-wall {
  background-color: #44403C;
  opacity: 1;
  background-image: linear-gradient(0deg, #302d29 50%, #44403C 50%);
  background-size: 10px 10px;
}
</style>
