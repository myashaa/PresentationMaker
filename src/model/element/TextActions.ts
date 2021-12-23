import { TEditor } from "../editor/EditorTypes";
import { TElement } from "./ElementTypes";
import { TFont, TText } from "./TextTypes";

export function setFont(
  editor: TEditor,
  slideId: string,
  elementId: string,
  font: TFont
) {
  const { presentation } = editor;
  const { slideList } = presentation;

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

  return {
    ...editor,
    presentation: {
      ...presentation,
      slideList: slideList.map((slide) =>
        slideId === slideId ? { ...slide, elementList: newElementList } : slide
      ),
    },
  };
}

export function setText(
  editor: TEditor,
  slideId: string,
  elementId: string,
  content: string
): TEditor {
  const { presentation } = editor;
  const { slideList } = presentation;

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

  return {
    ...editor,
    presentation: {
      ...presentation,
      slideList: slideList.map((slide) =>
        slideId === slide.id ? { ...slide, elementList: newElementList } : slide
      ),
    },
  };
}
