import { Slide } from "../slide/types";

export type Presentation = {
  name: string;
  slideList: Slide[];
  selectedSlides: Slide[];
};