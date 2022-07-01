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
    <div>
      Modes here: eg. Wild West, Politico, Scary
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { isUserNameSet } from '@/logic/player';
import LevelButton from '@/components/atoms/LevelButton.vue';
import NameOption from '@/components/atoms/NameOption.vue';
import ConfirmationDialog from '@/components/atoms/ConfirmationDialog.vue';
import PageTitle from '@/components/atoms/PageTitle.vue';
import AppLogo from '@/components/atoms/AppLogo.vue';
import { GameLevel } from '@/types';

export default defineComponent({
  name: 'OptionsView',
  components: {
    LevelButton,
    NameOption,
    ConfirmationDialog,
    PageTitle,
    AppLogo,
  },
  setup() {
    const isDialogVisible = ref(!isUserNameSet());

    return { isDialogVisible, GameLevel };
  },
});
</script>
