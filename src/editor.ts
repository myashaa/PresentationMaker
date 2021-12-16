import { updateHistory } from "./model/editor/EditorActions";
import { Editor } from "./model/editor/EditorTypes";

let editor = {} as Editor;
let editorChangeHandler: Function = () => {};

function getEditor(): Editor {
  return editor;
}

function setEditor(newEditor: Editor) {
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
