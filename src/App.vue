<template>
  <div
    id="whack_em_app"
    style="background-image: url('/img/bg.jpg')"
    class="min-h-screen bg-gradient-to-b from-sky-900 to-slate-900 text-stone-300"
  >
    <div class="container min-h-screen flex flex-col">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

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
</style>
