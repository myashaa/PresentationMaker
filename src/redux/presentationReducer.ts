import { TPresentation } from "../model/presentation/PresentationTypes";
import { ActionType } from "./actionType";

const initialState: TPresentation = {
  name: "Presentation",
  selectedElementIds: [],
  selectedSlidesIds: [],
  slideList: [],
};

export const presentationReducer = (
  state: TPresentation = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "CREATE_PRESENTATION":
      return action.payload;
    case "LOAD_PRESENTATION":
      return action.payload;
    case "SAVE_PRESENTATION":
      return action.payload;
    case "RENAME_PRESENTATION":
      return action.payload;
    default:
      return state;
  }
};
