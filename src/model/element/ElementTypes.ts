import { TFigure } from "./FigureTypes";
import { TImage } from "./ImageTypes";
import { TText } from "./TextTypes";

export type TElement = {
  id: string;
  width: number;
  height: number;
  position: TPosition;
  color?: string;
  border?: TBorder;
  data: TText | TImage | TFigure | TCanvas;
};

export type TPosition = {
  x: number;
  y: number;
};

export type TSize = {
  width: number;
  height: number;
};

export enum EBorderStyle {
  none = "Нет",
  solid = "Сплошной",
  dotted = "Точечная",
  dashed = "Пунктирная",
}

export type TBorder = {
  width: number;
  type: EBorderStyle;
  color: string;
};

export type TCanvas = {
  video: boolean;
};
