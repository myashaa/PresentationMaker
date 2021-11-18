import { Element, Image } from "../element/ElementTypes";

export type Slide = {
  id: number;
  elementList: Element[];
  background: Background;
};

export type Background = {
  color?: string;
  picture?: Image;
};
