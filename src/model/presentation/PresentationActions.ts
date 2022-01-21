import { COLORS } from "../../colors";
import { at, uuid4 } from "../../utils";
import { TEditor } from "../editor/EditorTypes";
import { TSlide } from "../slide/SlideTypes";
import { TPresentation } from "./PresentationTypes";

export function createSlide(presentation: TPresentation): TPresentation {
  const { slideList } = presentation;

  const newSlide: TSlide = {
    id: uuid4(),
    elementList: [],
    background: {
      color: COLORS.white,
    },
  };

  const newPresentation: TPresentation = {
    ...presentation,
    slideList: [...slideList, newSlide],
    selectedSlidesIds: [newSlide.id],
  };

  return newPresentation;
}

export function deleteSlides(
  presentation: TPresentation,
  slideIds: string[]
): TPresentation {
  const { slideList } = presentation;

  const newSlideList = slideList.filter(
    (slide) => !slideIds.some((id) => id === slide.id) && slide
  );

  const newSelectedSlides = at(newSlideList, -1)?.id;

  const newPresentation: TPresentation = {
    ...presentation,
    slideList: newSlideList,
    selectedSlidesIds: newSelectedSlides ? [newSelectedSlides] : [],
  };

  return newPresentation;
}

// TODO: Переписать функцию для перемещения слайдов местами
export function moveSlide(
  editor: TEditor,
  indexFrom: number,
  indexTo: number
): TEditor {
  const { presentation } = editor;
  const { slideList } = presentation;

  const mySlide = slideList[indexFrom];
  const swapSlide = slideList[indexTo];

  const newSlideList = slideList.map((slide, index) => {
    if (index === indexFrom) return swapSlide;
    if (index === indexTo) return mySlide;
    return slide;
  });

  const newEditor: TEditor = {
    ...editor,
    presentation: {
      ...presentation,
      slideList: newSlideList,
    },
  };

  return newEditor;
}

export function selectSlides(
  presentation: TPresentation,
  slideIds: string[]
): TPresentation {
  const newPresentation: TPresentation = {
    ...presentation,
    selectedSlidesIds: slideIds,
  };

  return newPresentation;
}
