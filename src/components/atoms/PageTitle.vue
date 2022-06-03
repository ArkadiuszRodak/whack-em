<template>
  <div class="flex items-center justify-between mb-10">
    <div class="text-5xl" v-text="title" />
    <router-link
      class="text-center border-2 border-stone-800 rounded text-xl font-bold py-2 px-4"
      to="/"
    >
      BACK
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
