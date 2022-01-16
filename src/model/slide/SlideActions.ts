import { COLORS } from "../../colors";
import { uuid4 } from "../../utils";
import { TEditor } from "../editor/EditorTypes";
import { TElement } from "../element/ElementTypes";
import { TFigure } from "../element/FigureTypes";
import { TImage } from "../element/ImageTypes";
import { TText } from "../element/TextTypes";
import { TBackground, TSlide } from "./SlideTypes";

// Установка фона для слайда
export function setBackground(
  editor: TEditor,
  slideId: string,
  background: TBackground
): TEditor {
  const { presentation } = editor;
  const { slideList } = presentation;

  const newSlideList = slideList.map((slide) =>
    slide.id === slideId ? { ...slide, background } : slide
  );

  const newEditor: TEditor = {
    ...editor,
    presentation: {
      ...presentation,
      slideList: newSlideList,
    },
  };

  return newEditor;
}

// Очистка фона слайда
export function clearBackground(editor: TEditor, slideId: string): TEditor {
  const background: TBackground = {
    color: COLORS.white,
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
  editor: TEditor,
  slideId: string,
  content: TText | TImage | TFigure
): TEditor {
  const newElement: TElement = {
    id: uuid4(),
    width: 100,
    height: 100,
    position: { x: 5, y: 5 },
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
  editor: TEditor,
  slideId: string,
  elementId: string
): TEditor {
  const { slideList } = editor.presentation;
  const newSlideList: TSlide[] = slideList.map((slide) => {
    if (slide.id === slideId) {
      const { elementList } = slide;
      return {
        ...slide,
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
  editor: TEditor,
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
  editor: TEditor,
  slideId: string,
  elementId: string,
  newPosition: { x: number; y: number }
): TEditor {
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
  editor: TEditor,
  slideId: string,
  elementId: string,
  newWidth: number,
  newHeight: number
): TEditor {
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

export function selectElements(
  editor: TEditor,
  elementsIds: string[]
): TEditor {
  const { presentation } = editor;

  const newEditor: TEditor = {
    ...editor,
    presentation: {
      ...presentation,
      selectedElementIds: elementsIds,
    },
  };

  return newEditor;
}
