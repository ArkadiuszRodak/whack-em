import { ref } from 'vue';

const life = ref(0);

export const getLife = (): number => life.value;
export const resetLife = (): void => {
  life.value = 10;
};
export const decrementScore = (): void => {
  life.value -= 1;
};
