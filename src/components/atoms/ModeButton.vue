<template>
  <div
    :class="[className]"
    class="mode-btn text-center my-3 border-2 rounded text-xl p-3 font-bold
          hover:text-stone-700 hover:bg-stone-300 hover:border-stone-300"
    tabindex="0"
    role="button"
    @click="setMode()"
    @keypress.e="setMode()"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { useMode } from '@/logic/mode';
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
      (): string => (props.mode === useMode().get()
        ? `bg-${props.color} border-${props.color} hover:bg-${props.color}-300 text-stone-700`
        : 'text-stone-300 border-stone-300'),
    );

    const setMode = (): void => {
      useMode().set(props.mode);
    };

    return {
      className,
      setMode,
    };
  },
});
</script>
