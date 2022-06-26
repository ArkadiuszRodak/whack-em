/* eslint-disable object-curly-newline */
<template>
  <page-title>
    Options
  </page-title>

  <confirmation-dialog v-model="isDialogVisible">
    <p>Please set your name first.</p>
  </confirmation-dialog>

  <div class="flex items-baseline">
    <div class="text-3xl text-center mr-4">PLAYER NAME</div>
    <hr class="grow border-stone-300 border-t-2" />
  </div>
  <name-option />

  <div class="flex items-baseline mt-5">
    <div class="text-3xl text-center mr-4">LEVEL</div>
    <hr class="grow border-stone-300 border-t-2" />
  </div>
  <level-button :level="GameLevel.Easy" :color="'sky-300'">Easy</level-button>
  <level-button :level="GameLevel.Normal" :color="'emerald-300'">Normal</level-button>
  <level-button :level="GameLevel.Expert" :color="'red-300'">Expert</level-button>

  <div class="flex items-baseline mt-5">
    <div class="text-3xl text-center mr-4">MODE</div>
    <hr class="grow border-stone-300 border-t-2" />
  </div>
  <div>
    Modes here: eg. Wild West, Politico, Scary
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LevelButton from '@/components/atoms/LevelButton.vue';
import NameOption from '@/components/atoms/NameOption.vue';
import { GameLevel } from '@/types';
import { isUserNameSet } from '@/logic/useUserName';
import ConfirmationDialog from '@/components/atoms/ConfirmationDialog.vue';
import PageTitle from '@/components/atoms/PageTitle.vue';

export default defineComponent({
  name: 'OptionsView',
  components: {
    LevelButton,
    NameOption,
    ConfirmationDialog,
    PageTitle,
  },
  setup() {
    const isDialogVisible = ref(!isUserNameSet());

    return { isDialogVisible, GameLevel };
  },
});
</script>
