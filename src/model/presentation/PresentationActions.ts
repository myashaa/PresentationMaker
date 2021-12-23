import { COLORS } from "../../colors";
import { at, uuid4 } from "../../utils";
import { TEditor } from "../editor/EditorTypes";
import { TSlide } from "../slide/SlideTypes";

export function createSlide(editor: TEditor): TEditor {
  const { presentation } = editor;
  const { slideList } = presentation;

  const newSlide: TSlide = {
    id: uuid4(),
    elementList: [],
    background: {
      color: COLORS.white,
    },
  };

  const newEditor: TEditor = {
    ...editor,
    presentation: {
      ...presentation,
      slideList: [...slideList, newSlide],
      selectedSlidesIds: [newSlide.id],
    },
  };

  return newEditor;
}

export function deleteSlides(editor: TEditor, slideIds: string[]): TEditor {
  const { presentation } = editor;
  const { slideList } = presentation;

  const newSlideList = slideList.filter(
    (slide) => !slideIds.some((id) => id === slide.id) && slide
  );

  const newSelectedSlides = at(newSlideList, -1)?.id;

  const newEditor: TEditor = {
    ...editor,
    presentation: {
      ...presentation,
      slideList: newSlideList,
      selectedSlidesIds: newSelectedSlides ? [newSelectedSlides] : [],
    },
  };

  return newEditor;
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

export function selectSlides(editor: TEditor, slideIds: string[]): TEditor {
  const { presentation } = editor;

  const newEditor: TEditor = {
    ...editor,
    presentation: {
      ...presentation,
      selectedSlidesIds: slideIds,
    },
  };

  return newEditor;
}
