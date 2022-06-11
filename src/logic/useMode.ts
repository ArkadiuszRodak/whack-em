import { ref } from 'vue';
import { GameMode } from '@/types';

const mode = ref<GameMode>(GameMode.Zombies);

export const getMode = (): GameMode => mode.value;
export const setMode = (m: GameMode) => {
  mode.value = m;
};
