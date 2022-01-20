import { TEditor } from "../editor/EditorTypes";
import { TSlide } from "../slide/SlideTypes";
import { TElement } from "./ElementTypes";
import { TFont, TText } from "./TextTypes";

export function setFont(
  slideList: TSlide[],
  slideId: string,
  elementId: string,
  font: TFont
) {
  const currentSlide = slideList.filter((slide) => slide.id === slideId)[0];
  const { elementList } = currentSlide;

  const currentElement = elementList.filter(
    (element) => element.id === elementId
  )[0];

  const elementData = currentElement.data as TText;
  const newElement = {
    ...currentElement,
    data: { ...elementData, font },
  };

  const newElementList = elementList.map((element) =>
    element.id === elementId ? newElement : element
  );

  const newSlideList = slideList.map((slide) =>
    slideId === slide.id ? { ...slide, elementList: newElementList } : slide
  );

  return newSlideList;
}

export function setText(
  slideList: TSlide[],
  slideId: string,
  elementId: string,
  content: string
): TSlide[] {
  const currentSlide = slideList.filter((slide) => slide.id === slideId)[0];
  const { elementList } = currentSlide;

  const currentElement = elementList.filter(
    (element) => element.id === elementId
  )[0];

  const elementData = currentElement.data as TText;
  const newElement = {
    ...currentElement,
    data: { ...elementData, text: content },
  };

  const newElementList = elementList.map((element) =>
    element.id === elementId ? newElement : element
  );

  const newSlideList = slideList.map((slide) =>
    slideId === slide.id ? { ...slide, elementList: newElementList } : slide
  );

  return newSlideList;
}
