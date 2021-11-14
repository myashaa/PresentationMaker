import { Editor } from "../editor/EditorTypes";
import { Border } from "./ElementTypes";

export function changeElementBorder(
  editor: Editor,
  slideId: number,
  elementId: number,
  border: Border
): Editor {
  const { presentation } = editor;

  const { slideList } = presentation;
  const currentSlide = slideList.filter((slide, index) => index === slideId)[0];

  const { elementList } = currentSlide;
  const newElementList = elementList.map((element, index) =>
    index === elementId ? { ...element, border } : element
  );

  return {
    ...editor,
    presentation: {
      ...presentation,
      slideList: slideList.map((slide, index) =>
        index === slideId ? { ...slide, elementList: newElementList } : slide
      ),
    },
  };
}

export function changeElementColor(
  editor: Editor,
  slideId: number,
  elementId: number,
  color: string
): Editor {
  const { presentation } = editor;

  const { slideList } = presentation;
  const currentSlide = slideList.filter((slide, index) => index === slideId)[0];

  const { elementList } = currentSlide;
  const newElementList = elementList.map((element, index) =>
    index === elementId ? { ...element, color } : element
  );

  return {
    ...editor,
    presentation: {
      ...presentation,
      slideList: slideList.map((slide, index) =>
        index === slideId ? { ...slide, elementList: newElementList } : slide
      ),
    },
  };
}
