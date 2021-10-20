import { Editor } from "../editor/EditorTypes";
import { Figure, SlideText } from "../element/ElementTypes";
import { Image } from "../image/ImageTypes";
import { Background, Slide } from "./SlideTypes";

export function setBackground(
  editor: Editor,
  slideId: number,
  background: Background
): Editor {
  const updatedEditor = editor;
  updatedEditor.presentation.slideList.map((slide, index) =>
    index === slideId ? { ...slide, background } : slide
  );

  return updatedEditor;
}

export function clearBackground(editor: Editor, slideId: number): Editor {
  const background: Background = {
    color: "#fff",
    picture: null,
  };

  const newSlideList: Slide[] = editor.presentation.slideList.map(
    (slide, index) => (index === slideId ? { ...slide, background } : slide)
  );
  const updatedEditor: Editor = {
    ...editor,
    presentation: {
      ...editor.presentation,
      slideList: newSlideList,
    },
  };

  return updatedEditor;
}

export function createElement(
  editor: Editor,
  slideId: number,
  elementType: SlideText | Image | Figure
): Editor {
  // const { slideList } = presentation;
  // ...
}
