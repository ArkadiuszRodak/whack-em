import { ref } from 'vue';

const score = ref(0);

export const getScore = (): number => score.value;
export const resetScore = (): void => {
  score.value = 0;
};
export const incrementScore = (): void => {
  score.value += 1;
};
