<template>
  <div
    @click="whack"
    @keyup.enter="whack"
    :class="[modelValue ? 'bg-red-400' : 'bg-stone-400']"
    class="h-full rounded-full text-center"
  />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { incrementScore } from '@/logic/useScore';

export default defineComponent({
  name: 'SingleMole',
  props: {
    visibilityTime: {
      type: Number,
      default: 1000,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const whack = () => {
      if (props.modelValue) {
        incrementScore();
        emit('update:modelValue', false);
      }
    };

    watch(
      () => props.modelValue,
      (val: boolean) => {
        if (val) {
          setTimeout(() => {
            emit('update:modelValue', false);
          }, props.visibilityTime);
        }
      },
    );

    return { whack };
  },
});
</script>
