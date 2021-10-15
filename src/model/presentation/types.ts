import { Slide } from "../slide/types";

export type Presentation = {
  name: string;
  slideList: Slide[];
  selectedSlidesIds: number[];
  selectedElementIds: number[];
};
