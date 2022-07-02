<template>
  <div
    :class="[className]"
    class="level-btn text-center my-3 border-2 rounded text-xl p-3 font-bold
          hover:text-stone-700 hover:bg-stone-300 hover:border-stone-300"
    tabindex="0"
    role="button"
    @click="setLevel()"
    @keypress.e="setLevel()"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { useLevel } from '@/logic/level';
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
      (): string => (props.level === useLevel().get()
        ? `bg-${props.color} border-${props.color} hover:bg-${props.color}-300 text-stone-700`
        : 'text-stone-300 border-stone-300'),
    );

    const setLevel = (): void => {
      useLevel().set(props.level);
    };

    return {
      className,
      setLevel,
    };
  },
});
</script>
