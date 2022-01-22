import { TEditor } from "../editor/EditorTypes";

export function undo(editor: TEditor): TEditor {
  const newEditor: TEditor = {
    ...editor,
  };

  if (editor.history.index > 0) {
    newEditor.history.index = editor.history.index - 1;
  }

  return newEditor;
}

export function redo(editor: TEditor): TEditor {
  const newEditor: TEditor = {
    ...editor,
  };

  if (editor.history.index < editor.history.states.length - 1) {
    newEditor.history.index = editor.history.index + 1;
  }

  return newEditor;
}

export function updateHistory(editor: TEditor): TEditor {
  const newEditor: TEditor = {
    ...editor,
    history: {
      ...editor.history,
      index: editor.history.index + 1,
    },
  };

  const newStates = newEditor.history.states.filter(
    (value, index) => index <= newEditor.history.index - 1 && value
  );

  newEditor.history.states = [...newStates, editor.presentation];

  return newEditor;
}
