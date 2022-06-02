export enum GameLevel {
  Easy,
  Normal,
  Expert,
}

export interface CalculatedGrid {
  size: 4 | 9 | 16;
  xs: 2 | 3 | 4;
  ys: 2 | 3 | 4;
  className: string
}
