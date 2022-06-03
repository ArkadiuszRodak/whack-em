<template>
  <div>
    <page-title title="Options" />

    <div class="flex items-baseline">
      <div class="text-3xl text-center mr-4">LEVEL</div>
      <hr class="grow border-stone-800 border-t-2" />
    </div>
    <div
      role="button"
      tabindex="0"
      class="text-center my-3 border-2 border-sky-800 rounded text-xl p-3 font-bold"
      :class="{
        'bg-sky-800 text-stone-300': getLevel() === GameLevel.Easy,
        'text-sky-800': getLevel() !== GameLevel.Easy,
      }"
      @click="setLevel(GameLevel.Easy)"
      @keypress.e="setLevel(GameLevel.Easy)"
    >
      Easy
    </div>
    <div
      role="button"
      tabindex="0"
      class="text-center my-3 border-2 border-emerald-800 rounded text-xl p-3 font-bold"
      :class="{
        'bg-emerald-800 text-stone-300': getLevel() === GameLevel.Normal,
        'text-emerald-800': getLevel() !== GameLevel.Normal,
      }"
      @click="setLevel(GameLevel.Normal)"
      @keypress.e="setLevel(GameLevel.Normal)"
    >
      Normal
    </div>
    <div
      role="button"
      tabindex="0"
      class="text-center my-3 border-2 border-red-800 rounded text-xl p-3 font-bold"
      :class="{
        'bg-red-800 text-stone-300': getLevel() === GameLevel.Expert,
        'text-red-800': getLevel() !== GameLevel.Expert,
      }"
      @click="setLevel(GameLevel.Expert)"
      @keypress.e="setLevel(GameLevel.Expert)"
    >
      Expert
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getLevel, setLevel } from '@/logic/useLevel';
import { GameLevel } from '@/types';
import PageTitle from '@/components/atoms/PageTitle.vue';

export default defineComponent({
  components: { PageTitle },
  name: 'OptionsView',
  setup() {
    return { getLevel, setLevel, GameLevel };
  },
});
</script>
