import { PresentationHistory } from "../history/HistoryTypes";
import { Presentation } from "../presentation/PresentationTypes";

export type Editor = {
  mode: "view" | "edit";
  history: PresentationHistory;
  presentation: Presentation;
};