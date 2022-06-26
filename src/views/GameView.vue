<template>
  <div class="container max-h-screen h-screen flex flex-col overflow-hidden">
    <page-title class="mt-10">
      Whack'em!
    </page-title>
    <div class="flex flex-row">
      <div
        style="min-width: 2%; max-width: 2%;"
        class="bg-stone-600"
      />
      <div class="grow h-5 bg-stone-700" />
    </div>
    <div class="flex flex-row">
      <div
        style="min-width: 2%; max-width: 2%;"
        class="bg-red-800"
      />
      <div class="grow grid gap-4 p-4 grid-cols-2 bg-red-900">
        <div class="bg-sky-900 border-4 border-stone-900 p-4">
          <life-bar />
        </div>
        <div class="bg-sky-900 border-4 border-stone-900 p-4">
          <score-counter />
        </div>
      </div>
    </div>
    <div class="flex grow relative overflow-hidden">
      <windows-grid />
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
