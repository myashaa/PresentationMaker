import { TEditor } from "./model/editor/EditorTypes";
import { updateHistory } from "./model/history/HistoryActions";

let editor = {} as TEditor;
let editorChangeHandler: Function = () => {};

function getEditor(): TEditor {
  return editor;
}

function setEditor(newEditor: TEditor) {
  editor = newEditor;
}

function addChangeHandler(handler: Function) {
  editorChangeHandler = handler;
}

function dispatch(modify: Function, history: boolean = false, ...payload: any) {
  const newEditor = modify(editor, ...payload);
  if (history) {
    setEditor(updateHistory(newEditor));
  } else {
    setEditor(newEditor);
  }

  if (editorChangeHandler) {
    editorChangeHandler();
  }
}

export { getEditor, setEditor, dispatch, addChangeHandler };
