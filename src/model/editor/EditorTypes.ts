import { THistory } from "../history/HistoryTypes";
import { TPresentation } from "../presentation/PresentationTypes";

export enum EMode {
  view = "view",
  edit = "edit",
}

export type TEditor = {
  mode: EMode;
  history: THistory;
  presentation: TPresentation;
};
