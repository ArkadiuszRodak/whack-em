<template>
  <div class="flex justify-between mb-5 border-b-2 border-stone-300 py-2">
    <span class="text-3xl mr-1">Life</span>
    <div>
      <template v-for="(lifeBar) in lifeBars" :key="`life-bar-${lifeBar}`">
        <div
          :class="[getLife() >= lifeBar + 1 ? 'bg-red-500' : 'bg-stone-500']"
          class="life-bar inline-block rounded ml-1"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.life-bar {
  width: 1rem;
  height: 2rem;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { lifeAtStart, getLife } from '@/logic/useLife';

export default defineComponent({
  name: 'LifeBar',
  setup() {
    const lifeBars = Array.from({ length: lifeAtStart }, (_, i) => i).reverse();

    return { lifeBars, getLife };
  },
});
</script>
