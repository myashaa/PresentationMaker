export function changeElementBorder(
  editor: Editor,
  slideId: number,
  elementId: number,
  border: Border
): Editor {}

export function changeElementColor(
  editor: Editor,
  slideId: number,
  element: SlideElement,
  color: string
): Editor {}

export function setFontFamily(
  editor: Editor,
  slideId: number,
  element: SlideElement,
  fontFamily: string
): Editor {}

export function setFontColor(
  editor: Editor,
  slideId: number,
  element: SlideElement,
  color: string
): Editor {}

export function setFontSize(
  editor: Editor,
  slideId: number,
  element: SlideElement,
  size: number
): Editor {}

export function setFilter(
  editor: Editor,
  slideId: number,
  element: SlideElement,
  filter: string
): Editor {}

export function deleteFilter(
  editor: Editor,
  slideId: number,
  element: SlideElement
): Editor {}

export function loadImage(
  editor: Editor,
  element: SlideElement,
  image: Image
): Editor {}
