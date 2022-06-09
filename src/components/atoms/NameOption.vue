<template>
  <div class="flex justify-between my-3">
    <label for="name" class="grow">
      <input
        v-model="name"
        @input="setName(name)"
        id="name"
        type="text"
        class="text-2xl py-2 w-full h-full bg-transparent border-b-2 border-stone-800 outline-none
          hover:border-sky-800 active:border-sky-800 hover:text-sky-800 active:text-sky-800"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getName, setName } from '@/logic/useName';

export default defineComponent({
  name: 'NameOption',
  setup() {
    const name = ref(getName());

    return { setName, name };
  },
});
</script>
