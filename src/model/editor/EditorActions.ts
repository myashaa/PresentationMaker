import { Editor } from "./EditorTypes";
import { Presentation } from "../presentation/PresentationTypes";
import { createSlide } from "../presentation/PresentationActions";

export function loadPresentation(file: File) {
  // console.log("file", file);
  const dataStr = window.URL.createObjectURL(file);
  // console.log("data", dataStr);
  // let presentation = {};
  // fetch(filePath)
  //   .then((response) => response.json())
  //   .then((json) => (presentation = JSON.parse(json)));
  // return presentation;
}

export function savePresentation(editor: Editor) {
  const toJSON = JSON.stringify(editor.presentation);
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(toJSON);

  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", editor.presentation.name + ".json");
  downloadAnchorNode.click();
  downloadAnchorNode.remove();

  return editor;
}

export function exportPresentation(presentation: Presentation) { }

export function renamePresentation(editor: Editor, name: string): Editor {
  const newEditor: Editor = {
    ...editor,
  };
  console.log(newEditor);

  newEditor.presentation.name = name;

  return newEditor;
}

export function createPresentation(editor: Editor): Editor {
  const newEditor: Editor = {
    ...editor,
    history: {
      index: -1,
      states: [],
    },
    presentation: {
      name: "Название презентации",
      slideList: [],
      selectedSlidesIds: [],
      selectedElementIds: [],
    },
  };

  return createSlide(newEditor);
}

export function undo(editor: Editor): Editor {
  const newEditor: Editor = {
    ...editor,
  };

  if (editor.history.index > 0) {
    newEditor.history.index = editor.history.index - 1;
    newEditor.presentation = editor.history.states[newEditor.history.index];
  }

  return newEditor;
}

export function redo(editor: Editor): Editor {
  const newEditor: Editor = {
    ...editor,
  };

  if (editor.history.index < editor.history.states.length - 1) {
    newEditor.history.index = editor.history.index + 1;
    newEditor.presentation = editor.history.states[newEditor.history.index];
  }

  return newEditor;
}

export function updateHistory(editor: Editor): Editor {
  const newEditor: Editor = {
    ...editor,
    history: {
      ...editor.history,
      index: editor.history.index + 1,
    },
  };

  const newStates = newEditor.history.states.filter((value, index) =>
    index <= newEditor.history.index && value)

  newEditor.history.states = [...newStates, editor.presentation]

  return newEditor;
}

export function changeMode(editor: Editor, mode: "view" | "edit"): Editor {
  const newEditor = {
    ...editor,
  };

  newEditor.mode = mode;

  return newEditor;
}
