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
  preloadImages: (): void => {
    const whackImg = new Image();
    whackImg.src = '/img/whack.png';
    const images = [whackImg];
    for (let i = 1; i <= 5; i += 1) {
      const img = new Image();
      img.src = `/img/${mode.value}/${i}.png`;
      images.push(img);
    }
  },
});
