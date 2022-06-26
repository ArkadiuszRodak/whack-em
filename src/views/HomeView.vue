<template>
  <div class="container min-h-screen flex flex-col">
    <app-logo />
    <div class="grow flex flex-col">
      <page-title>
        Menu
      </page-title>
      <nav>
        <router-link
          class="block text-center my-3 border-2 border-sky-300 rounded text-xl p-3 font-bold
          text-sky-300 hover:bg-sky-300 hover:text-stone-700"
          :to="isUserNameSet() ? '/game' : '/options'"
        >
          PLAY
        </router-link>
        <router-link
          class="block text-center my-3 border-2 border-amber-300 rounded text-xl p-3 font-bold
            text-amber-300 hover:bg-amber-300 hover:text-stone-700"
          to="/options"
        >
          OPTIONS
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { isUserNameSet } from '@/logic/useUserName';
import PageTitle from '@/components/atoms/PageTitle.vue';
import AppLogo from '@/components/atoms/AppLogo.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    PageTitle,
    AppLogo,
  },
  setup() {
    return { isUserNameSet };
  },
});
</script>
