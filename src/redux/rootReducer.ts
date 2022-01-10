import { combineReducers } from "redux";
import { presentationReducer } from "./presentationReducer";

export const rootReducer = combineReducers({
  presentation: presentationReducer,
});
