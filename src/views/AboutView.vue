<template>
  <app-logo />
  <page-title>
    About
  </page-title>
  <p class="text-xl mb-4">
    Simple Whack A Mole like game written in Vue 3, Typescript and Tailwind CSS.
    <br>It's a project made for fun and to practice frontend technologies.
    <br>It can be played on desktops or mobile devices.
  </p>
  <p class="mb-4">
    <span class="text-xl">How to play</span>
    <br>Set your player name in options and play.
    <br>Shoot building windows when a character appears to get a point.
    <br>If you miss, you loose a life.
    <br>Game is over when you loose all lives.
  </p>
  <p class="mb-4">
    <span class="text-xl">Options</span>
    <br>In options menu you can also adjust difficulty level.
    <br>Building has more windows to shoot if you choose harder level.
    <br>There is also an option to select characters appearing in building windows.
  </p>
  <a
    class="my-4 text-3xl"
    href="https://github.com/ArkadiuszRodak"
  >
    https://github.com/ArkadiuszRodak
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLogo from '@/components/atoms/AppLogo.vue';
import PageTitle from '@/components/atoms/PageTitle.vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    AppLogo,
    PageTitle,
  },
});
</script>
