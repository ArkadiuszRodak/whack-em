<template>
  <div
    id="whack_em_app"
    :style="bgImg"
    class="min-h-screen bg-gradient-to-b from-sky-900 to-slate-900 text-stone-300"
  >
    <div class="container min-h-screen flex flex-col">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  setup() {
    const bgImg = computed(() => "background-image: url('/img/bg.jpg')");

    return { bgImg };
  },
});
</script>

<style>
body {
  background: linear-gradient(315deg, rgba(24,24,24,1) 50%, rgba(52,79,130,1) 100%);
}

#whack_em_app {
  font-family: 'Roboto Slab', Courier, monospace;
  cursor: crosshair;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
