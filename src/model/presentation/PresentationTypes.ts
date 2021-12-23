import { TSlide } from "../slide/SlideTypes";

export type TPresentation = {
  name: string;
  slideList: TSlide[];
  selectedSlidesIds: string[];
  selectedElementIds: string[];
};
