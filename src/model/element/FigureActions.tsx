import { TEditor } from "../editor/EditorTypes";

export function changeFigureColor(
  editor: TEditor,
  slideId: string,
  elementId: string,
  color: string
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
            fill: color,
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
