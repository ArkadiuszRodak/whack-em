import { ref } from 'vue';

const name = ref(localStorage.getItem('whack-em-player-name') || 'Player');

export const isNameSet = (): boolean => !!localStorage.getItem('whack-em-player-name');
export const getName = (): string => name.value;
export const setName = (n: string): void => {
  name.value = n;
  localStorage.setItem('whack-em-player-name', n);
};
