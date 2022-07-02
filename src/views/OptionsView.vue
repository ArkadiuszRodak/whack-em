/* eslint-disable object-curly-newline */
<template>
  <app-logo />
  <div class="grow flex flex-col">
    <page-title>
      Options
    </page-title>
    <confirmation-dialog v-model="isDialogVisible">
      <p>Please set your name first.</p>
    </confirmation-dialog>

    <div class="flex items-baseline">
      <div class="text-3xl text-center mr-4">
        PLAYER NAME
      </div>
    </div>
    <name-option />

    <div class="flex items-baseline mt-5">
      <div class="text-3xl text-center mr-4">
        LEVEL
      </div>
    </div>
    <level-button
      :level="GameLevel.Easy"
      :color="'sky-500'"
    >
      Easy
    </level-button>
    <level-button
      :level="GameLevel.Normal"
      :color="'emerald-500'"
    >
      Normal
    </level-button>
    <level-button
      :level="GameLevel.Expert"
      :color="'red-500'"
    >
      Expert
    </level-button>

    <div class="flex items-baseline mt-5">
      <div class="text-3xl text-center mr-4">
        MODE
      </div>
    </div>
    <mode-button
      :mode="GameMode.Zombies"
      color="slate-500"
    >
      Zombies
    </mode-button>
    <mode-button
      :mode="GameMode.Ghosts"
      color="slate-500"
    >
      Ghosts
    </mode-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePlayer } from '@/logic/player';
import AppLogo from '@/components/atoms/AppLogo.vue';
import PageTitle from '@/components/atoms/PageTitle.vue';
import ConfirmationDialog from '@/components/atoms/ConfirmationDialog.vue';
import NameOption from '@/components/atoms/NameOption.vue';
import LevelButton from '@/components/atoms/LevelButton.vue';
import ModeButton from '@/components/atoms/ModeButton.vue';
import { GameLevel, GameMode } from '@/types';

export default defineComponent({
  name: 'OptionsView',
  components: {
    LevelButton,
    ModeButton,
    NameOption,
    ConfirmationDialog,
    PageTitle,
    AppLogo,
  },
  setup() {
    const isDialogVisible = ref(!usePlayer().isSet());

    return { isDialogVisible, GameLevel, GameMode };
  },
});
</script>
