<template>
  <div class="flex justify-between mb-5 border-b-2 border-stone-800 py-2">
    <span class="text-3xl mr-2">Life</span>
    <span v-text="getLife()" class="text-3xl" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getLife } from '@/logic/useLife';

export default defineComponent({
  name: 'LifeBar',
  setup() {
    return { getLife };
  },
});
</script>
