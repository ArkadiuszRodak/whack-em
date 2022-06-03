import { ref } from 'vue';
import { GameLevel } from '@/types';

const level = ref<GameLevel>(GameLevel.Normal);

export const getLevel = (): GameLevel => level.value;
export const setLevel = (lvl: GameLevel): void => {
  level.value = lvl;
};
