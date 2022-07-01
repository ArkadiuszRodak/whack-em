import { ref } from 'vue';

export const lifeAtStart = 1;
const life = ref(lifeAtStart);

export const getLife = (): number => life.value;
export const resetLife = (): void => {
  life.value = lifeAtStart;
};
export const decrementLife = (): void => {
  if (life.value > 0) {
    life.value -= 1;
  }
};
