import { createStore } from "redux";
import { EMode, TEditor } from "../model/editor/EditorTypes";
import { rootReducer } from "./rootReducer";

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
