import { ref } from 'vue';

const score = ref(0);

export const useScore = () => ({
  get: (): number => score.value,
  reset: (): void => {
    score.value = 0;
  },
  increment: (): void => {
    score.value += 1;
  },
});
