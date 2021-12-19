import { Editor } from "../editor/EditorTypes";
import { Slide } from "../slide/SlideTypes";
import { Element, Text } from "./ElementTypes";

export function setFontUnderline(
  editor: Editor,
  slideId: string,
  elementId: string,
  underline: boolean
) {
  const { presentation } = editor;
  const { slideList } = presentation;

  const currentSlide = slideList.filter((slide) => slide.id === slideId)[0];
  const { elementList } = currentSlide;

  const currentElement = elementList.filter(
    (element) => element.id === elementId
  )[0];

  const elementData = currentElement.data as Text;
  const elementFont = { ...elementData?.font };
  const newElement = {
    ...currentElement,
    data: { ...elementData, font: elementFont, underline },
  };

  console.log(newElement)

  const newElementList = elementList.map((element) => element.id === elementId ? newElement : element)

  return {
    ...editor,
    presentation: {
      ...presentation,
      slideList: slideList.map((slide) =>
        slideId === slideId
          ? { ...slide, elementList: newElementList }
          : slide
      ),
    },
  };
}

export function setFontBold(
  editor: Editor,
  slideId: string,
  elementId: string,
  bold: boolean
) {
  const { presentation } = editor;
  const { slideList } = presentation;

  const currentSlide = slideList.filter((slide) => slide.id === slideId)[0];
  const { elementList } = currentSlide;

  const currentElement = elementList.filter(
    (element) => element.id === elementId
  )[0];

  const elementData = currentElement.data as Text;
  const elementFont = { ...elementData?.font };
  const newElement = {
    ...currentElement,
    data: { ...elementData, font: elementFont, bold },
  };

  console.log(newElement)

  const newElementList = elementList.map((element) => element.id === elementId ? newElement : element)

  return {
    ...editor,
    presentation: {
      ...presentation,
      slideList: slideList.map((slide) =>
        slideId === slideId
          ? { ...slide, elementList: newElementList }
          : slide
      ),
    },
  };
}

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
  const elementFont = { ...elementData?.font, family: fontFamily };
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
  const elementFont = { ...elementData?.font, color };
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
  const elementFont = { ...elementData?.font, size };
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

export function setText(
  editor: Editor,
  slideId: number,
  elementId: number,
  content: string
): Editor {
  const { slideList } = editor.presentation;
  const newSlideList: Slide[] = slideList.map((slide, index) => {
    if (slideId === index) {
      const { elementList } = slide;
      const newElementList: Element[] = elementList.map((element, id) => {
        if (id === elementId) {
          return { ...element, content: content || "" };
        }
        return element;
      });
      return { ...slide, elementList: newElementList };
    }
    return slide;
  });
  return {
    ...editor,
    presentation: { ...editor.presentation, slideList: newSlideList },
  };
}
