import { COLORS } from "../../colors";
import { uuid4 } from "../../utils";
import { TEditor } from "../editor/EditorTypes";
import { TCanvas, TElement } from "../element/ElementTypes";
import { TFigure } from "../element/FigureTypes";
import { TImage } from "../element/ImageTypes";
import { TText } from "../element/TextTypes";
import { TPresentation } from "../presentation/PresentationTypes";
import { TBackground, TSlide } from "./SlideTypes";

// Установка фона для слайда
export function setBackground(
  slideList: TSlide[],
  slideId: string,
  background: TBackground
): TSlide[] {
  const newSlideList = slideList.map((slide) =>
    slide.id === slideId ? { ...slide, background } : slide
  );

  return newSlideList;
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
  slideList: TSlide[],
  slideId: string,
  content: TText | TImage | TFigure | TCanvas
): TSlide[] {
  const newElement: TElement = {
    id: uuid4(),
    width: 100,
    height: 100,
    position: { x: 5, y: 5 },
    data: content,
  };

  const newSlideList = slideList.map((slide) => {
    if (slide.id === slideId) {
      const { elementList } = slide;
      return { ...slide, elementList: [...elementList, newElement] };
    }
    return slide;
  });

  return newSlideList;
}

// Удаление элемента
export function removeElement(
  slideList: TSlide[],
  slideId: string,
  elementId: string
): TSlide[] {
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

  return newSlideList;
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
  slideList: TSlide[],
  slideId: string,
  elementId: string,
  newPosition: { x: number; y: number }
): TSlide[] {
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

  return newSlideList;
}

// Изменение размеров элемента
export function resizeElement(
  slideList: TSlide[],
  slideId: string,
  elementId: string,
  newWidth: number,
  newHeight: number
): TSlide[] {
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

  return newSlideList;
}

export function selectElements(
  presentation: TPresentation,
  elementsIds: string[]
): TPresentation {
  const newPresentation: TPresentation = {
    ...presentation,
    selectedElementIds: elementsIds,
  };

  return newPresentation;
}
