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

function dispatch(modify: Function, ...payload: any) {
  const newEditor = modify(editor, ...payload);
  setEditor(newEditor);

  if (editorChangeHandler) {
    editorChangeHandler();
  }
}

export { getEditor, setEditor, dispatch, addChangeHandler };
