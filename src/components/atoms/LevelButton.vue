<template>
  <div
    @click="setLevel(level)"
    @keypress.e="setLevel(level)"
    :class="[level === getLevel() ? className : 'text-stone-300 border-stone-300']"
    class="text-center my-3 border-2 rounded text-xl p-3 font-bold"
    tabindex="0"
    role="button"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { getLevel, setLevel } from '@/logic/useLevel';
import { GameLevel } from '@/types/index';

export default defineComponent({
  name: 'LevelButton',
  props: {
    level: {
      type: Number as PropType<GameLevel>,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const className = computed(
      () => `bg-${props.color} border-${props.color} hover:bg-${props.color}-300 text-stone-700`,
    );

    return {
      className,
      getLevel,
      setLevel,
      GameLevel,
    };
  },
});
</script>
