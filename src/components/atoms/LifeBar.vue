<template>
  <div class="flex justify-between mb-5">
    <span class="text-3xl">Life</span>
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
