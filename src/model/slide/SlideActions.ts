import { Editor } from "../editor/EditorTypes";
import { Figure, SlideText } from "../element/ElementTypes";
import { Image } from "../image/ImageTypes";
import { Background, Slide } from "./SlideTypes";

// Установка фона для слайда
export function setBackground(
  editor: Editor,
  slideId: number,
  background: Background
): Editor {
  return editor.presentation.slideList.map((slide, index) =>
    index === slideId ? { ...slide, background } : slide
  );
}

// Очистка фона слайда
export function clearBackground(editor: Editor, slideId: number): Editor {
  const background: Background = {
    color: "#fff",
    picture: null,
  };

  const newSlideList: Slide[] = editor.presentation.slideList.map(
    (slide, index) => (index === slideId ? { ...slide, background } : slide)
  );

  return {
    ...editor,
    presentation: {
      ...editor.presentation,
      slideList: newSlideList,
    },
  };
}

// Создание элемента на слайде
export function createElement(
  editor: Editor,
  slideId: number,
  elementType: SlideText | Image | Figure
): Editor {}
