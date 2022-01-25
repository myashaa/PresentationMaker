import { EMode, TEditor } from "./EditorTypes";
import { TPresentation } from "../presentation/PresentationTypes";
import { uuid4 } from "../../utils";

export function setPresentation(
  editor: TEditor,
  presentation: TPresentation
): TEditor {
  const newEditor: TEditor = {
    ...editor,
    history: {
      index: -1,
      states: [],
    },
    presentation: presentation,
  };

  return newEditor;
}

export function renamePresentation(
  presentation: TPresentation,
  name: string
): TPresentation {
  const newPresentation: TPresentation = {
    ...presentation,
    name,
  };

  return newPresentation;
}

export function loadPresentation(callback: (object: any) => void) {
  const fileInputNode = document.createElement("input");
  fileInputNode.type = "file";
  fileInputNode.click();
  fileInputNode.addEventListener("change", () => {
    const file = fileInputNode.files?.[0] as File;

    const dataStr = window.URL.createObjectURL(file);

    fetch(dataStr)
      .then((response) => response.json())
      .then((json) => {
        callback(json);
      });
  });
}

export function savePresentation(editor: TEditor) {
  const toJSON = JSON.stringify(editor.presentation);
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(toJSON);

  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute(
    "download",
    editor.presentation.name + ".json"
  );
  downloadAnchorNode.click();
  downloadAnchorNode.remove();

  return editor;
}

export function exportPresentation(presentation: TPresentation) {}

export function createPresentation(editor: TEditor): TEditor {
  const newSlide = {
    id: uuid4(),
    elementList: [],
    background: {
      color: "#ffffff",
    },
  };

  const newEditor: TEditor = {
    ...editor,
    mode: EMode.edit,
    history: {
      index: -1,
      states: [],
    },
    presentation: {
      name: "Название презентации",
      slideList: [newSlide],
      selectedSlidesIds: [newSlide.id],
      selectedElementIds: [],
    },
  };

  return newEditor;
}

export function changeMode(editor: TEditor, mode: EMode): TEditor {
  const newEditor = {
    ...editor,
  };

  newEditor.mode = mode;

  return newEditor;
}
