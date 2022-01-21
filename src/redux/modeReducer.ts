import { EMode } from "../model/editor/EditorTypes";
import { ActionType } from "./actionType";

const initialState: EMode = EMode.edit;

export const modeReducer = (
  state: EMode = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "SET_EDIT_MODE":
      return EMode.edit;
    case "SET_VIEW_MODE":
      return EMode.view;
    default:
      return state;
  }
};
