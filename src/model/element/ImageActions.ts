import { TEditor } from "../editor/EditorTypes";
import { TElement } from "./ElementTypes";
import { TFilter, TImage } from "./ImageTypes";

export function setFilter(
  editor: TEditor,
  slideId: string,
  element: TElement,
  filter: TFilter
): TEditor {
  const data = element.data as TImage;
  const newData = { ...data, filter };
  const newElement = { ...element, data: newData };

  const { slideList } = editor.presentation;
  const { elementList } = slideList.filter((slide) => slide.id === slideId)[0];

  const newElementList = elementList.map((element) =>
    element.id === newElement.id ? newElement : element
  );

  const newSlideList = slideList.map((slide) =>
    slide.id === slideId ? { ...slide, elementList: newElementList } : slide
  );

  const newPresentation = { ...editor.presentation, slideList: newSlideList };

  const newEditor = { ...editor, newPresentation };

  return newEditor;
}

export function deleteFilter(
  editor: TEditor,
  slideId: string,
  element: TElement
): TEditor {
  const data = element.data as TImage;
  const newData = { ...data, filter: {} };
  const newElement = { ...element, data: newData };

  const { slideList } = editor.presentation;
  const { elementList } = slideList.filter((slide) => slide.id === slideId)[0];

  const newElementList = elementList.map((element) =>
    element.id === newElement.id ? newElement : element
  );

  const newSlideList = slideList.map((slide) =>
    slide.id === slideId ? { ...slide, elementList: newElementList } : slide
  );

  const newPresentation = { ...editor.presentation, slideList: newSlideList };

  const newEditor = { ...editor, newPresentation };

  return newEditor;
}

export async function loadImage(url: string): Promise<TImage> {
  let data = "";

  const toDataURL = (url: string) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  await toDataURL(url).then((dataUrl) => {
    console.log(dataUrl);
    data = String(dataUrl);
  });

  const image: TImage = {
    image: data,
  };

  return image;
}
