import {
  createSlide,
  deleteSlides,
  selectSlides,
} from "../model/presentation/PresentationActions";
import { TPresentation } from "../model/presentation/PresentationTypes";
import { ActionType } from "./actionType";
import { slideReducer } from "./slideReducer";

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
    case "NEW_SLIDE":
      return createSlide(state);
    case "SELECT_SLIDES":
      return selectSlides(state, action.payload);
    case "DELETE_SLIDES":
      return deleteSlides(state, state.selectedSlidesIds);
    default:
      return {
        ...state,
        slideList: slideReducer
      };
  }
};

// case "CREATE_PRESENTATION":
//       return action.payload;
//     case "LOAD_PRESENTATION":
//       return action.payload;
//     case "SAVE_PRESENTATION":
//       return action.payload;
//     case "RENAME_PRESENTATION":
//       return action.payload;
