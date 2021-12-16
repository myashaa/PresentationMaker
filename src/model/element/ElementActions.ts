import { Editor } from "../editor/EditorTypes";
import { Border } from "./ElementTypes";

export function changeElementBorder(
  editor: Editor,
  slideId: string,
  elementId: string,
  border: Border
): Editor {
  const { presentation } = editor;

  const { slideList } = presentation;
  const currentSlide = slideList.filter((slide) => slide.id === slideId)[0];

  const { elementList } = currentSlide;
  const newElementList = elementList.map((element) =>
    element.id === elementId ? { ...element, border } : element
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

export function changeElementColor(
  editor: Editor,
  slideId: string,
  elementId: string,
  color: string
): Editor {
  const { presentation } = editor;

  const { slideList } = presentation;
  const currentSlide = slideList.filter((slide) => slide.id === slideId)[0];

  const { elementList } = currentSlide;
  const newElementList = elementList.map((element) =>
    element.id === elementId ? { ...element, color } : element
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
