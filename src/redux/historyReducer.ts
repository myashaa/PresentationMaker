import { TEditor } from "../model/editor/EditorTypes";
import { redo, undo, updateHistory } from "../model/history/HistoryActions";
import { THistory } from "../model/history/HistoryTypes";
import { ActionType } from "./actionType";

export function historyReducer(state: TEditor, action: ActionType) {
  switch (action.type) {
    case "UPDATE_HISTORY":
      return updateHistory(state);
    case "UNDO":
      return undo(state);
    case "REDO":
      return redo(state);
    default:
      return state;
  }
}
