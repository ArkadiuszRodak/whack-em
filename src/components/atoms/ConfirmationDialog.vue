<template>
  <div v-if="modelValue" class="absolute top-0 left-0 h-full w-full
  text-stone-300 text-center">
    <div
      class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl
        w-1/2 py-5 rounded-3xl drop-shadow-xl bg-sky-800"
    >
      <slot />
      <div
        @click="changeVisibility"
        @keyup.enter="changeVisibility"
        class="inline-block py-2 mt-5 w-3/4 rounded border-2 border-stone-300 hover:bg-sky-700"
        role="button"
        tabindex="0"
      >
        OK
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ConfirmationDialog',
  props: {
    modelValue: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { emit }) {
    const changeVisibility = (): void => {
      emit('update:modelValue', !props.modelValue);
    };

    return { changeVisibility };
  },
});
</script>
