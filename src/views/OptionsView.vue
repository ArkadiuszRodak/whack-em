<template>
  <div class="flex items-baseline">
    <div class="text-3xl text-center mr-4">LEVEL</div>
    <hr class="grow border-stone-800 border-t-2" />
  </div>
  <level-button :level="GameLevel.Easy" :color="'sky-800'">Easy</level-button>
  <level-button :level="GameLevel.Normal" :color="'emerald-800'">Normal</level-button>
  <level-button :level="GameLevel.Expert" :color="'red-800'">Expert</level-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LevelButton from '@/components/atoms/LevelButton.vue';
import { GameLevel } from '@/types';

export default defineComponent({
  name: 'OptionsView',
  components: { LevelButton },
  setup() {
    return { GameLevel };
  },
});
</script>
