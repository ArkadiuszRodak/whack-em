import { ref } from 'vue';
import { GameMode } from '@/types';

const getModeFromLocalStorage = (): GameMode => {
  const mode = localStorage.getItem('mode');

  return (mode as unknown as GameMode) || GameMode.Zombies;
};

const mode = ref<GameMode>(getModeFromLocalStorage());

export const getMode = (): GameMode => mode.value;
export const setMode = (m: GameMode) => {
  mode.value = m;
  localStorage.setItem('mode', `${m}`); // mode as enum key
};
