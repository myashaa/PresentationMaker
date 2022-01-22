import { AnyAction, applyMiddleware, createStore, Dispatch, MiddlewareAPI, Store } from "redux";
import { setPresentation } from "../model/editor/EditorActions";
import { EMode, TEditor } from "../model/editor/EditorTypes";
import { redo, undo, updateHistory } from "../model/history/HistoryActions";
import { THistory } from "../model/history/HistoryTypes";
import { TPresentation } from "../model/presentation/PresentationTypes";
import { rootReducer } from "./rootReducer";

const exceptions: string[] = [
  "UNDO",
  "REDO",
  "UPDATE_HISTORY",
  "SELECT_SLIDES",
  "SELECT_ELEMENTS",
  "SAVE_PRESENTATION",
  "SET_PRESENTATION"
];

const storeHistory = (store: MiddlewareAPI<Dispatch<AnyAction>, TEditor>) =>
  (next: AppDispatch) => (action: AnyAction) => {

    const oldState: TEditor = store.getState();
    const result: AnyAction = next(action)
    
    if (!exceptions.includes(action.type)) {
      const newState: TEditor = store.getState();
      if (JSON.stringify(oldState.presentation) !== JSON.stringify(newState.presentation)) {
        store.dispatch({type: "UPDATE_HISTORY", state: updateHistory(newState)});
      }
    }
    return result
  }

const movingHistory = (store: MiddlewareAPI<Dispatch<AnyAction>, TEditor>) =>
  (next: AppDispatch) => (action: AnyAction) => {

    const oldState: TEditor = store.getState();
    const result: AnyAction = next(action)

    if (["UNDO", "REDO"].includes(action.type)) {
      const currentIndex: number = oldState.history.index;

      const presentation: TPresentation = oldState.history.states[currentIndex];

      const newState: TEditor = {
        ...oldState,
        presentation: presentation,
      }
      store.dispatch({type: "SET_PRESENTATION", payload: newState});
    }

    return result
  }

export const store: Store<TEditor> = createStore(
  rootReducer,
  applyMiddleware(storeHistory, movingHistory)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
