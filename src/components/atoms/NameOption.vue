<template>
  <div class="flex justify-between my-3">
    <label
      for="name"
      class="grow"
    >
      <input
        id="name"
        v-model="name"
        type="text"
        class="text-2xl py-2 w-full h-full bg-transparent border-b-2 border-stone-300 outline-none
          hover:border-sky-300 active:border-sky-300 hover:text-sky-300 active:text-sky-300"
        @input="setName(name)"
      >
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getName, setName } from '@/logic/useUserName';

export default defineComponent({
  name: 'NameOption',
  setup() {
    const name = ref(getName());

    return { setName, name };
  },
});
</script>
