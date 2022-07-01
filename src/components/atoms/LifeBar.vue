<template>
  <div>
    <div class="text-2xl mb-2">
      Life
    </div>
    <div class="flex justify-between">
      <template
        v-for="(lifeBar) in lifeBars"
        :key="`life-bar-${lifeBar}`"
      >
        <div
          :class="[getLife() >= lifeBar + 1 ? 'bg-red-500' : 'bg-stone-500']"
          class="h-8 w-10 inline-block rounded ml-1"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { lifeAtStart, getLife } from '@/logic/life';

export default defineComponent({
  name: 'LifeBar',
  setup() {
    const lifeBars = Array.from({ length: lifeAtStart }, (_, i) => i).reverse();

    return { lifeBars, getLife };
  },
});
</script>
