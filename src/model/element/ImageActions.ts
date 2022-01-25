import { TEditor } from "../editor/EditorTypes";
import { TSlide } from "../slide/SlideTypes";
import { TElement, TSize } from "./ElementTypes";
import { EFilter, TImage } from "./ImageTypes";

export function setFilter(
  slideList: TSlide[],
  slideId: string,
  element: TElement,
  filter: EFilter
): TSlide[] {
  const data = element.data as TImage;
  const newData = { ...data, filter };
  const newElement = { ...element, data: newData };

  const { elementList } = slideList.filter((slide) => slide.id === slideId)[0];

  const newElementList = elementList.map((element) =>
    element.id === newElement.id ? newElement : element
  );

  const newSlideList = slideList.map((slide) =>
    slide.id === slideId ? { ...slide, elementList: newElementList } : slide
  );

  return newSlideList;
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

export function loadImage(callback: (object: TImage, size: TSize) => void) {
  const fileInputNode = document.createElement("input");
  fileInputNode.type = "file";
  fileInputNode.click();
  fileInputNode.addEventListener("change", () => {
    const file = fileInputNode.files?.[0] as File;
    const reader = new FileReader();
    reader.onloadend = function () {
      const newImage: TImage = {
        name: file.name,
        image: "https://via.placeholder.com/150",
      };

      if (file.type.includes("image")) {
        newImage.image = String(reader.result);
      }
      getImageSize(newImage.image, (size) => {
        callback(newImage, size);
      });
    };
    reader.readAsDataURL(file);
  });
}

export function getImageSize(src: string, callback: (size: TSize) => void) {
  const image = new Image();
  image.onload = () => {
    callback({ width: image.width, height: image.height });
  };
  image.src = src;
}

export async function loadImageFromURL(url: string): Promise<TImage> {
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
    data = String(dataUrl);
  });

  const image: TImage = {
    image: data,
  };

  return image;
}
