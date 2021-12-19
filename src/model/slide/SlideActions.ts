import { random, uuid4 } from "../../utils";
import { Editor } from "../editor/EditorTypes";
import { Element } from "../element/ElementTypes";
import { Figure, Text, Image } from "../element/ElementTypes";
import { Background } from "./SlideTypes";

// Установка фона для слайда
export function setBackground(
  editor: Editor,
  slideId: string,
  background: Background
): Editor {
  const { presentation } = editor;
  const { slideList } = presentation;

  const newSlideList = slideList.map((slide) =>
    slide.id === slideId ? { ...slide, background } : slide
  );

  const newEditor: Editor = {
    ...editor,
    presentation: {
      ...presentation,
      slideList: newSlideList,
    },
  };

  return newEditor;
}

// Очистка фона слайда
export function clearBackground(editor: Editor, slideId: string): Editor {
  const background: Background = {
    color: "#FFFFFF",
  };

  const newSlideList = editor.presentation.slideList.map((slide) =>
    slide.id === slideId ? { ...slide, background } : slide
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
  slideId: string,
  content: Text & Image & Figure
): Editor {
  const newElement: Element = {
    id: uuid4(),
    width: 100,
    height: 100,
    position: { x: random(0, 640), y: random(0, 480) },
    color: "#FFFFFF",
    data: content,
  };

  const { slideList } = editor.presentation;
  const newSlideList = slideList.map((slide) => {
    if (slide.id === slideId) {
      const { elementList } = slide;
      return { ...slide, elementList: [...elementList, newElement] };
    }
    return slide;
  });

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
  slideId: string,
  elementId: string
): Editor {
  const { slideList } = editor.presentation;
  const newSlideList = slideList.map((slide) => {
    if (slide.id === slideId) {
      const { elementList } = slide;
      return {
        ...slide,
        // ???
        elementList: elementList.filter((element) => element.id !== elementId),
      };
    }
    return slide;
  });

  return {
    ...editor,
    presentation: {
      ...editor.presentation,
      slideList: newSlideList,
    },
  };
}

// Удаление элементов
export function removeElements(
  editor: Editor,
  slideId: string,
  elementIds: string[]
) {
  const { slideList } = editor.presentation;
  const newSlideList = slideList.map((slide) => {
    if (slide.id === slideId) {
      const { elementList } = slide;
      return {
        ...slide,
        elementList: elementList.filter(
          // ???
          (element) => !elementIds.some(() => element.id)
        ),
      };
    }
    return slide;
  });

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
  slideId: string,
  elementId: string,
  newPosition: { x: number; y: number }
): Editor {
  const { slideList } = editor.presentation;

  const newSlideList = slideList.map((slide) => {
    if (slide.id === slideId) {
      const { elementList } = slide;
      const newElementList = elementList.map((element) =>
        element.id === elementId
          ? { ...element, position: newPosition }
          : element
      );
      return { ...slide, elementList: newElementList };
    }
    return slide;
  });

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
  slideId: string,
  elementId: string,
  newWidth: number,
  newHeight: number
): Editor {
  const { slideList } = editor.presentation;

  const newSlideList = slideList.map((slide) => {
    if (slide.id === slideId) {
      const { elementList } = slide;
      const newElementList = elementList.map((element, id) =>
        element.id === elementId
          ? { ...element, width: newWidth, height: newHeight }
          : element
      );
      return { ...slide, elementList: newElementList };
    }
    return slide;
  });

  return {
    ...editor,
    presentation: {
      ...editor.presentation,
      slideList: newSlideList,
    },
  };
}

export function selectElements(editor: Editor, elementsIds: string[]): Editor {
  const { presentation } = editor;

  const newEditor: Editor = {
    ...editor,
    presentation: {
      ...presentation,
      selectedElementIds: elementsIds,
    },
  };

  return newEditor;
}
