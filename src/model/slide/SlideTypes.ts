import { Element, Image } from "../element/ElementTypes";

export type Slide = {
  id: string;
  elementList: Element[];
  background: Background;
};

export type Background = {
  color?: string;
  picture?: Image;
};
