import { TSlide } from "../slide/SlideTypes";
import { EFigureType } from "./FigureTypes";

export function changeFigure(
  slideList: TSlide[],
  slideId: string,
  elementId: string,
  newFigure: EFigureType
): TSlide[] {
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

  const newSlideList = slideList.map((slide) =>
    slide.id === slideId ? { ...slide, elementList: newElementList } : slide
  );

  return newSlideList;
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
