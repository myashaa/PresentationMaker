import { Element, Image } from "../element/ElementTypes";

export type Slide = {
  elementList: Element[];
  background: Background;
};

export type Background = {
  color?: string;
  picture?: Image;
};
