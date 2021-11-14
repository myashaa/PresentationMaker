import { Editor } from "./EditorTypes";
import { Presentation } from "../presentation/PresentationTypes";
import { createSlide } from "../presentation/PresentationActions";

export function loadPresentation(file: File) {
  //TODO: parsing json
  //const newEditor = {};
  // return newEditor;
}

export function savePresentation(presentation: Presentation) {}

export function exportPresentation(presentation: Presentation) {}

export function renamePresentation(editor: Editor, name: string): Editor {
  const newEditor: Editor = {
    ...editor,
  };

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
