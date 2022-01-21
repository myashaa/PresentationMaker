import { combineReducers } from "redux";
import {
  createPresentation,
  savePresentation,
  setPresentation,
} from "../model/editor/EditorActions";
import { EMode, TEditor } from "../model/editor/EditorTypes";
import { uuid4 } from "../utils";
import { ActionType } from "./actionType";
import { modeReducer } from "./modeReducer";
import { presentationReducer } from "./presentationReducer";

// export const rootReducer = combineReducers({
//   mode: modeReducer,
//   presentation: presentationReducer,
// });

const initialSlide = {
  id: uuid4(),
  elementList: [],
  background: {
    color: "#fff",
  },
};

const initialState: TEditor = {
  mode: EMode.edit,
  presentation: {
    name: "Presentation",
    selectedElementIds: [],
    slideList: [initialSlide],
    selectedSlidesIds: [initialSlide.id],
  },
  history: {
    index: 0,
    states: [],
  },
};

export const rootReducer = (
  state: TEditor = initialState,
  action: ActionType
): TEditor => {
  switch (action.type) {
    case "NEW_PRESENTATION":
      return createPresentation(state);
    case "OPEN_PRESENTATION":
      return setPresentation(state, action.payload);
    case "SAVE_PRESENTATION":
      savePresentation(state);
      return state;
    default:
      return {
        ...state,
        presentation: presentationReducer(state.presentation, action),
        mode: modeReducer(state.mode, action),
      };
  }
};
