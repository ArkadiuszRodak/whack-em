import { ref } from 'vue';

const lifeAtStart = 10;
const life = ref(lifeAtStart);

export const useLife = () => ({
  atStart: (): number => lifeAtStart,
  get: (): number => life.value,
  clear: (): void => {
    life.value = 0;
  },
  reset: (): void => {
    life.value = lifeAtStart;
  },
  decrement: (): void => {
    if (life.value > 0) {
      life.value -= 1;
    }
  },
});
