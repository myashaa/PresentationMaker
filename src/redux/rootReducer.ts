import {
  createPresentation,
  savePresentation,
  setPresentation,
} from "../model/editor/EditorActions";
import { EMode, TEditor } from "../model/editor/EditorTypes";
import { uuid4 } from "../utils";
import { ActionType } from "./actionType";
import { historyReducer } from "./historyReducer";
import { modeReducer } from "./modeReducer";
import { presentationReducer } from "./presentationReducer";

const initialSlide = {
  id: uuid4(),
  elementList: [],
  background: {
    color: "#fff",
  },
};

const initialPresentation = {
  name: "Presentation",
  selectedElementIds: [],
  slideList: [initialSlide],
  selectedSlidesIds: [initialSlide.id],
};

const initialState: TEditor = {
  mode: EMode.edit,
  presentation: initialPresentation,
  history: {
    index: 1,
    states: [initialPresentation],
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
    case "SET_PRESENTATION":
      return action.payload;
    default:
      return {
        presentation: presentationReducer(state.presentation, action),
        mode: modeReducer(state.mode, action),
        history: historyReducer(state.history, action),
      };
  }
};
