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
  contentWidth: number;
  contentHeight: number;
  squareSize: string;
  indexes: Record<number, boolean>
}
