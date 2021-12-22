export enum EFigureType {
  square = "Квадрат",
  circle = "Круг",
  triangle = "Треугольник",
}

export type TFigure = {
  figure: EFigureType;
  fill: string;
};
