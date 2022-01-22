import { renamePresentation } from "../model/editor/EditorActions";
import {
  createSlide,
  deleteSlides,
  selectSlides,
} from "../model/presentation/PresentationActions";
import { TPresentation } from "../model/presentation/PresentationTypes";
import { selectElements } from "../model/slide/SlideActions";
import { uuid4 } from "../utils";
import { ActionType } from "./actionType";
import { slideListReducer } from "./slideListReducer";

const initialSlide = {
  id: uuid4(),
  elementList: [],
  background: {
    color: "#fff",
  },
};

const initialState: TPresentation = {
  name: "Presentation",
  selectedElementIds: [],
  slideList: [initialSlide],
  selectedSlidesIds: [initialSlide.id],
};

export const presentationReducer = (
  state: TPresentation = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "RENAME_PRESENTATION":
      return renamePresentation(state, action.payload);
    case "NEW_SLIDE":
      return createSlide(state);
    case "SELECT_SLIDES":
      return selectSlides(state, action.payload);
    case "DELETE_SLIDES":
      return deleteSlides(state, state.selectedSlidesIds);
    case "SELECT_ELEMENTS":
      return selectElements(state, action.payload);
    default:
      return {
        ...state,
        slideList: slideListReducer(state.slideList, action),
      };
  }
};
