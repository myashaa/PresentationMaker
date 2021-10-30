import { Editor } from "../editor/EditorTypes";
import { SlideElement } from "../element/ElementTypes";
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
  element: SlideText | Image | Figure
): Editor {
  const newElement: SlideElement = {
    width: 100,
    height: 100,
    position: { x: 0, y: 0 },
    color: "#000",
    data: element,
  };

  const newSlideList = editor.presentation.slideList.filter((slide, index) =>
    index === slideId
      ? { ...slide, elementList: [...slide.elementList, element] }
      : slide
  );

  return {
    ...editor,
    presentation: {
      ...editor.presentation,
      slideList: newSlideList,
    },
  };
}

// Удаление элемента
export function removeElement(
  editor: Editor,
  slideId: number,
  elementId: number
): Editor {
  const newSlideList = editor.presentation.slideList.filter((slide, index) =>
    index === slideId
      ? {
          ...slide,
          elementList: slide.elementList.filter(
            (element, index) => index !== elementId
          ),
        }
      : slide
  );

  return {
    ...editor,
    presentation: {
      ...editor.presentation,
      slideList: newSlideList,
    },
  };
}

// Удаление всех элементов
export function removeElements() {
  const newSlideList = editor.presentation.slideList.filter((slide, index) =>
    index === slideId
      ? {
          ...slide,
          elementList: [],
        }
      : slide
  );

  return {
    ...editor,
    presentation: {
      ...editor.presentation,
      slideList: newSlideList,
    },
  };
}

// Перемещение элемента
export function moveElement(
  editor: Editor,
  slideId: number,
  elementId: number,
  newPosition: { x: number; y: number }
): Editor {
  const newSlideList = editor.presentation.slideList.filter((slide, index) =>
    index === slideId
      ? {
          ...slide,
          elementList: slide.elementList.map((element, index) =>
            index === elementId
              ? { ...element, position: newPosition }
              : element
          ),
        }
      : slide
  );

  return {
    ...editor,
    presentation: {
      ...editor.presentation,
      slideList: newSlideList,
    },
  };
}

// Изменение размеров элемента
export function resizeElement(
  editor: Editor,
  slideId: number,
  elementId: number,
  newWidth: number,
  newHeight: number
): Editor {
  const newSlideList = editor.presentation.slideList.filter((slide, index) =>
    index === slideId
      ? {
          ...slide,
          elementList: slide.elementList.map((element, index) =>
            index === elementId
              ? { ...element, width: newWidth, height: newHeight }
              : element
          ),
        }
      : slide
  );

  return {
    ...editor,
    presentation: {
      ...editor.presentation,
      slideList: newSlideList,
    },
  };
}
