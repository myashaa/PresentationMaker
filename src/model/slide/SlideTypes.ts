import { SlideElement } from "../element/ElementTypes";
import { Image } from "../image/ImageTypes";

export type Slide = {
  elementList: SlideElement[];
  background: Background;
};

export type Background = {
  color?: string;
  picture?: Image;
};
