import { Editor } from "../editor/EditorTypes";
import { Element, Filter, Image } from "./ElementTypes";

export function setFilter(
  editor: Editor,
  slideId: number,
  element: Element,
  filter: Filter
): Editor {
  //const data = element.data as Image;
  const data = element.image;
  const newData = { ...data, filter };
  const newElement = { ...element, data: newData };

  const { slideList } = editor.presentation;
  const { elementList } = slideList[slideId];

  const newElementList = elementList.map((element, index) =>
    index === newElement.id ? newElement : element
  );

  const newSlideList = slideList.map((slide, index) =>
    index === slideId ? { ...slide, elementList: newElementList } : slide
  );

  const newPresentation = { ...editor.presentation, slideList: newSlideList };

  const newEditor = { ...editor, newPresentation};

  return newEditor;
}

export function deleteFilter(
  editor: Editor,
  slideId: number,
  element: Element
): Editor {
  //const data = element.data as Image;
  const data = element.image;
  const newData = { ...data, filter: {} };
  const newElement = { ...element, data: newData };

  const { slideList } = editor.presentation;
  const { elementList } = slideList[slideId];

  const newElementList = elementList.map((element, index) =>
    index === newElement.id ? newElement : element
  );

  const newSlideList = slideList.map((slide, index) =>
    index === slideId ? { ...slide, elementList: newElementList } : slide
  );

  const newPresentation = { ...editor.presentation, slideList: newSlideList };

  const newEditor = { ...editor, newPresentation};

  return newEditor;
}

// export function loadImage(
//   editor: Editor,
//   element: Element,
//   image: Image
// ): Editor {}
