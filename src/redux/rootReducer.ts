import { combineReducers } from "redux";
import { modeReducer } from "./modeReducer";
import { presentationReducer } from "./presentationReducer";

export const rootReducer = combineReducers({
  mode: modeReducer,
  presentation: presentationReducer,
});
