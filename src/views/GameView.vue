<template>
  <div class="flex flex-col max-h-screen h-screen overflow-hidden justify-between">
    <div class="flex flex-col">
      <page-title class="mt-10">
        Whack'em!
      </page-title>
      <div class="grid grid-cols-2 gap-4 pb-10">
        <life-bar />
        <score-counter />
      </div>
    </div>
    <div
      class="grow flex flex-col"
      style="max-height: 100vw;"
    >
      <div class="bg-stone-700 h-5 rounded-t-full overflow-hidden border-l-8 border-stone-600" />
      <div class="flex grow relative">
        <game-loader @play="windowsGridRef.play()" />
        <game-over @game-over="windowsGridRef.gameOver()" />
        <windows-grid ref="windowsGridRef" />
      </div>
      <div class="flex flex-row">
        <div class="grow building-wall h-16 border-l-8 border-stone-600" />
        <div
          class="black w-20 h-16 border-t-8 border-t-stone-700 border-r-8 border-r-stone-500
                border-l-8 border-l-stone-800"
        />
        <div class="grow building-wall h-16" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LifeBar from '@/components/atoms/LifeBar.vue';
import PageTitle from '@/components/atoms/PageTitle.vue';
import ScoreCounter from '@/components/atoms/ScoreCounter.vue';
import GameLoader from '@/components/molecules/GameLoader.vue';
import GameOver from '@/components/molecules/GameOver.vue';
import WindowsGrid from '@/components/organisms/WindowsGrid.vue';

export default defineComponent({
  name: 'GameView',
  components: {
    GameLoader,
    GameOver,
    LifeBar,
    ScoreCounter,
    WindowsGrid,
    PageTitle,
  },
  setup() {
    const windowsGridRef = ref();

    return { windowsGridRef };
  },
});
</script>

<style scoped>
.building-wall {
  background-color: #44403C;
  opacity: 1;
  background-image: linear-gradient(0deg, #302d29 50%, #44403C 50%);
  background-size: 10px 10px;
}
</style>
