import { PresentationHistory } from "../history/types";
import { Presentation } from "../presentation/types";

export type Editor = {
  mode: "view" | "edit";
  history: PresentationHistory[];
  presentation: Presentation;
};