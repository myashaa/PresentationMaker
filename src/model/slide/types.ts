import { SlideElement } from "../element/types";
import { Image } from "../image/types";

export type Slide = {
  elementList: SlideElement[];
  background: Background;
};

export type Background = {
  color: string | null;
  picture: Image | null;
};