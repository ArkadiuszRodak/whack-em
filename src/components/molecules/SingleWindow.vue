<template>
  <div
    class="h-full w-full max-h-full max-w-full text-center relative"
    @click="whack"
    @keyup.enter="whack"
  >
    <div
      :style="[modelValue ? randomImage : '']"
      class="absolute inset-0 h-full w-full bg-no-repeat bg-center bg-contain"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  ref,
  computed,
} from 'vue';
import { incrementScore } from '@/logic/useScore';
import { decrementLife } from '@/logic/useLife';
import { getMode } from '@/logic/useMode';

export default defineComponent({
  name: 'SingleWindow',
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
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const randomImageId = ref(1);
    const randomImage = computed(
      () => `background-image: url('/img/${getMode()}/${randomImageId.value}.png')`,
    );

    let timer: number;

    const whack = () => {
      if (props.modelValue) {
        incrementScore();
        clearTimeout(timer);
        emit('update:modelValue', false);
      }
    };

    watch(
      () => props.modelValue,
      (val: boolean) => {
        if (val) {
          timer = setTimeout(() => {
            decrementLife();
            emit('update:modelValue', false);
          }, props.visibilityTime);
        }
      },
    );

    return { randomImage, whack };
  },
});
</script>
