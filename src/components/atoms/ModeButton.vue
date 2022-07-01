<template>
  <div
    :class="[mode === getMode() ? className : 'text-stone-300 border-stone-300']"
    class="text-center my-3 border-2 rounded text-xl p-3 font-bold
          hover:text-stone-700 hover:bg-stone-300 hover:border-stone-300"
    tabindex="0"
    role="button"
    @click="setMode(mode)"
    @keypress.e="setMode(mode)"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { getMode, setMode } from '@/logic/mode';
import { GameMode } from '@/types/index';

export default defineComponent({
  name: 'LevelButton',
  props: {
    mode: {
      type: String as PropType<GameMode>,
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
      getMode,
      setMode,
    };
  },
});
</script>
