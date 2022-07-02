import { ref } from 'vue';
import { GameMode } from '@/types';

const storageKey = 'mode';

const getModeFromLocalStorage = (): GameMode => (
  (localStorage.getItem(storageKey) as unknown as GameMode) || GameMode.Zombies
);

const mode = ref<GameMode>(getModeFromLocalStorage());

export const useMode = () => ({
  get: (): GameMode => mode.value,
  set: (m: GameMode) => {
    mode.value = m;
    localStorage.setItem(storageKey, `${m}`); // mode as enum key
  },
});
