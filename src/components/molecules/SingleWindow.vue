<template>
  <div
    class="h-full w-full max-h-full max-w-full text-center relative"
    @click="whack"
    @keyup.enter="whack"
  >
    <transition name="slide-fade">
      <div
        v-show="modelValue"
        :style="[randomImg]"
        class="absolute inset-0 h-full w-full bg-no-repeat bg-bottom bg-contain"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  ref,
  computed,
} from 'vue';
import { useScore } from '@/logic/score';
import { useLife } from '@/logic/life';
import { useMode } from '@/logic/mode';

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
    let timer: number;
    const randomImgId = ref(1);
    const whacked = ref(false);
    const randomImg = computed(
      () => (whacked.value
        ? "background-image: url('/img/whack.png')"
        : `background-image: url('/img/${useMode().get()}/${randomImgId.value}.png')`),
    );

    const whack = () => {
      if (props.modelValue) {
        whacked.value = true;
        useScore().increment();
        emit('update:modelValue', false);
        window.setTimeout(() => {
          whacked.value = false;
          clearTimeout(timer);
        }, 100);
      }
    };

    watch(() => props.modelValue, (val: boolean) => {
      if (val) {
        randomImgId.value = Math.floor(Math.random() * 5 + 1);
        timer = window.setTimeout(() => {
          useLife().decrement();
          emit('update:modelValue', false);
        }, props.visibilityTime);
      }
    });

    return { randomImg, whack };
  },
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.05s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.05s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
