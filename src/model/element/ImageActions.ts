import { Editor } from "../editor/EditorTypes";
import { Element, Filter, Image } from "./ElementTypes";

// export function setFilter(
//   editor: Editor,
//   slideId: number,
//   element: Element,
//   filter: Filter
// ): Editor {
//   const data = element.data as Image;
//   const newData = { ...data, filter };
//   const newElement = { ...element, data: newData };

//   const { slideList } = editor.presentation;
//   const newSlideList = slideList.map((slide, index) =>
//     index === slideId ? { ...slide, elementList: newElementList } : slide
//   );
// }

// export function deleteFilter(
//   editor: Editor,
//   slideId: number,
//   element: Element
// ): Editor {}

// export function loadImage(
//   editor: Editor,
//   element: Element,
//   image: Image
// ): Editor {}
