<template>
  <div id="whack_em_app" class="container h-screen text-stone-800">
    <div id="logotype" class="text-center text-6xl font-bold pt-10 pb-10">Whack'Em!</div>
    <hr class="border-t-2 border-stone-800 pb-10" />
    <router-view />
  </div>
</template>

<style>
#whack_em_app {
  font-family: 'Roboto Slab', Courier, monospace;
}
</style>
