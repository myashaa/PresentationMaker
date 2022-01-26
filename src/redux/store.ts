import {
  AnyAction,
  applyMiddleware,
  createStore,
  Dispatch,
  MiddlewareAPI,
  Store,
} from "redux";
import { TEditor } from "../model/editor/EditorTypes";
import { rootReducer } from "./rootReducer";

const exceptions: string[] = [
  "UNDO",
  "REDO",
  "UPDATE_HISTORY",
  "SELECT_SLIDES",
  "SELECT_ELEMENTS",
  "SAVE_PRESENTATION",
  "SET_PRESENTATION",
];

const storeHistory =
  (store: MiddlewareAPI<Dispatch<AnyAction>, TEditor>) =>
  (next: AppDispatch) =>
  (action: AnyAction) => {
    const oldState: TEditor = store.getState();
    const result: AnyAction = next(action);

    if (!exceptions.includes(action.type)) {
      const newState: TEditor = store.getState();

      if (
        JSON.stringify(oldState.presentation) !==
        JSON.stringify(newState.presentation)
      ) {
        store.dispatch({
          type: "UPDATE_HISTORY",
          payload: { presentation: oldState.presentation },
        });
      }
    }

    return result;
  };

const movingHistory =
  (store: MiddlewareAPI<Dispatch<AnyAction>, TEditor>) =>
  (next: AppDispatch) =>
  (action: AnyAction) => {
    const result: AnyAction = next(action);
    const state: TEditor = store.getState();

    if (["UNDO", "REDO"].includes(action.type)) {
      const index = state.history.index;
      const presentation = state.history.states[index];

      const newState: TEditor = {
        ...state,
        presentation,
      };

      store.dispatch({ type: "SET_PRESENTATION", payload: newState });
    }

    return result;
  };

export const store: Store<TEditor> = createStore(
  rootReducer,
  applyMiddleware(storeHistory, movingHistory)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
