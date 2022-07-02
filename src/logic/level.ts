import { ref } from 'vue';
import { GameLevel, LevelDef } from '@/types';

const storageKey = 'level';

const levelDef: Record<GameLevel, LevelDef> = {
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

const getLevelFromLocalStorage = (): GameLevel => {
  const lvl = parseInt(localStorage.getItem(storageKey) as string, 10);

  return Number.isInteger(lvl) && Object.values(GameLevel).includes(lvl)
    ? (lvl as unknown as GameLevel)
    : GameLevel.Normal;
};

const level = ref<GameLevel>(getLevelFromLocalStorage());

export const useLevel = () => ({
  getDef: (lvl?: GameLevel): LevelDef => (lvl ? levelDef[lvl] : levelDef[level.value]),
  get: (): GameLevel => level.value,
  set: (lvl: GameLevel): void => {
    level.value = lvl;
    localStorage.setItem(storageKey, `${lvl}`); // level as enum key
  },
});
