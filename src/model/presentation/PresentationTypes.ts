import { Slide } from "../slide/SlideTypes";

export type Presentation = {
  name: string;
  slideList: Slide[];
  selectedSlidesIds: string[];
  selectedElementIds: number[];
};
