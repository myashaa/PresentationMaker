import { TEditor } from "../editor/EditorTypes";
import { TSlide } from "../slide/SlideTypes";
import { EFigureType } from "./FigureTypes";

export function changeFigure(
  editor: TEditor,
  slideId: string,
  elementId: string,
  newFigure: EFigureType
): TEditor {
  const { presentation } = editor;

  const { slideList } = presentation;
  const currentSlide = slideList.filter((slide) => slide.id === slideId)[0];

  const { elementList } = currentSlide;
  const newElementList = elementList.map((element) =>
    element.id === elementId
      ? {
          ...element,
          data: {
            ...element.data,
            figure: newFigure,
          },
        }
      : element
  );

  return {
    ...editor,
    presentation: {
      ...presentation,
      slideList: slideList.map((slide) =>
        slide.id === slideId ? { ...slide, elementList: newElementList } : slide
      ),
    },
  };
}

export function changeFigureColor(
  slideList: TSlide[],
  slideId: string,
  elementId: string,
  color: string
): TSlide[] {
  const currentSlide = slideList.filter((slide) => slide.id === slideId)[0];

  const { elementList } = currentSlide;
  const newElementList = elementList.map((element) =>
    element.id === elementId
      ? {
          ...element,
          data: {
            ...element.data,
            fill: color,
          },
        }
      : element
  );

  const newSlideList = slideList.map((slide) =>
    slide.id === slideId ? { ...slide, elementList: newElementList } : slide
  );

  return newSlideList;
}
