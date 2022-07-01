export enum GameMode {
  Zombies = 'zombies',
  Ghosts = 'ghosts',
  Politico = 'politico',
  Shooter = 'shooter',
}

export enum GameLevel {
  Easy,
  Normal,
  Expert,
}

export interface LevelDef {
  size: 4 | 9 | 16;
  xs: 2 | 3 | 4;
  ys: 2 | 3 | 4;
}

export interface Grid extends LevelDef {
  indexes: Record<number, boolean>
}

export interface Score {
  player: string;
  score: number;
  date: string;
}
