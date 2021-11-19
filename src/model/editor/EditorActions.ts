import { Editor } from "./EditorTypes";
import { Presentation } from "../presentation/PresentationTypes";
import { createSlide } from "../presentation/PresentationActions";

export function loadPresentation(file?: File) {
  console.log("file", file);
  const dataStr = window.URL.createObjectURL(file);
  console.log("data", dataStr);
  // let presentation = {};

  // fetch(filePath)
  //   .then((response) => response.json())
  //   .then((json) => (presentation = JSON.parse(json)));

  // return presentation;
}

export function savePresentation(presentation: Presentation) {
  const toJSON = JSON.stringify(presentation);
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(toJSON);

  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", presentation.name + ".json");
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

export function exportPresentation(presentation: Presentation) {}

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
    presentation: {
      name: "New Presentation",
      slideList: [],
      selectedSlidesIds: [],
      selectedElementIds: [],
    },
  };

  return createSlide(newEditor);
}

export function undo(editor: Editor): Editor {
  const newEditor = {
    ...editor,
  };

  //TODO: undo

  return newEditor;
}

export function redo(editor: Editor): Editor {
  const newEditor = {
    ...editor,
  };

  //TODO: redo

  return newEditor;
}

export function changeMode(editor: Editor, mode: "view" | "edit"): Editor {
  const newEditor = {
    ...editor,
  };

  newEditor.mode = mode;

  return newEditor;
}
