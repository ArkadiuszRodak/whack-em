import { ref } from 'vue';

const storageKey = 'player-name';

const name = ref(localStorage.getItem(storageKey) || 'Player');

export const usePlayer = () => ({
  isSet: (): boolean => !!localStorage.getItem(storageKey),
  get: (): string => name.value,
  set: (n: string): void => {
    name.value = n;
    localStorage.setItem(storageKey, n);
  },
});
