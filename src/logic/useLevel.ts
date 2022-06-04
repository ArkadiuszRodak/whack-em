import { ref } from 'vue';
import { GameLevel } from '@/types';

const levelDef = {
  [GameLevel.Easy]: {
    size: 4,
    xs: 2,
    ys: 2,
  },
  [GameLevel.Normal]: {
    size: 9,
    xs: 3,
    ys: 3,
  },
  [GameLevel.Expert]: {
    size: 16,
    xs: 4,
    ys: 4,
  },
};

const level = ref<GameLevel>(GameLevel.Normal);

export const getLevelDef = (lvl: GameLevel) => levelDef[lvl];

export const getLevel = (): GameLevel => level.value;
export const setLevel = (lvl: GameLevel): void => {
  level.value = lvl;
};
