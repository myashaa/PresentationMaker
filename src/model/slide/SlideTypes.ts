import { TElement } from "../element/ElementTypes";
import { TImage } from "../element/ImageTypes";

export type TSlide = {
  id: string;
  elementList: TElement[];
  background: TBackground;
};

export type TBackground = {
  color?: string;
  picture?: TImage;
};
