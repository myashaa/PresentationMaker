import { Editor } from "../editor/EditorTypes";
import { Text } from "./ElementTypes";

export function setFontFamily(
  editor: Editor,
  slideId: number,
  elementId: number,
  fontFamily: string
): Editor {
  const { presentation } = editor;
  const { slideList } = presentation;

  // ???
  const currentSlide = slideList.filter((slide, index) => index === slideId)[0];

  const { elementList } = currentSlide;
  const currentElement = elementList.filter(
    // ???
    (element, index) => index === elementId
  )[0];

  const elementData = currentElement.data as Text;
  const elementFont = { ...elementData.font, family: fontFamily };
  const newElement = {
    ...currentElement,
    data: { ...elementData, font: elementFont },
  };

  return {
    ...editor,
    presentation: {
      ...presentation,
      slideList: slideList.map((slide, index) =>
        index === slideId
          ? { ...slide, elementList: { ...elementList, newElement } }
          : slide
      ),
    },
  };
}

export function setFontColor(
  editor: Editor,
  slideId: number,
  elementId: number,
  color: string
): Editor {
  const { presentation } = editor;
  const { slideList } = presentation;

  // ???
  const currentSlide = slideList.filter((slide, index) => index === slideId)[0];

  const { elementList } = currentSlide;
  const currentElement = elementList.filter(
    // ???
    (element, index) => index === elementId
  )[0];

  const elementData = currentElement.data as Text;
  const elementFont = { ...elementData.font, color };
  const newElement = {
    ...currentElement,
    data: { ...elementData, font: elementFont },
  };

  return {
    ...editor,
    presentation: {
      ...presentation,
      slideList: slideList.map((slide, index) =>
        index === slideId
          ? { ...slide, elementList: { ...elementList, newElement } }
          : slide
      ),
    },
  };
}

export function setFontSize(
  editor: Editor,
  slideId: number,
  elementId: number,
  size: number
): Editor {
  const { presentation } = editor;
  const { slideList } = presentation;

  // ???
  const currentSlide = slideList.filter((slide, index) => index === slideId)[0];

  const { elementList } = currentSlide;
  const currentElement = elementList.filter(
    // ???
    (element, index) => index === elementId
  )[0];

  const elementData = currentElement.data as Text;
  const elementFont = { ...elementData.font, size };
  const newElement = {
    ...currentElement,
    data: { ...elementData, font: elementFont },
  };

  return {
    ...editor,
    presentation: {
      ...presentation,
      slideList: slideList.map((slide, index) =>
        index === slideId
          ? { ...slide, elementList: { ...elementList, newElement } }
          : slide
      ),
    },
  };
}
