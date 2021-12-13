import { dispatch } from "../../editor";
import {
  deleteSlide,
  deleteSlides,
  selectSlides,
} from "../../model/presentation/PresentationActions";
import { Slide } from "../../model/slide/SlideTypes";
import { MiniSlide } from "./MiniSlide";

type SlideListProps = {
  slides?: Slide[];
  selectedSlides: number[];
};

export function SlideList({ slides, selectedSlides }: SlideListProps) {
  const slideList = slides?.map((slide, index) => (
    <MiniSlide
      key={index}
      index={index + 1}
      elements={slide.elementList}
      background={slide.background}
      selected={selectedSlides.some((id) => id === index)}
      onSelect={() => {
        dispatch(selectSlides, false, [index]);
      }}
      onMultiSelect={() => {
        if (!selectedSlides.some((id) => id === index))
          dispatch(selectSlides, false, [...selectedSlides, index]);
        else if (selectedSlides.length > 1)
          dispatch(
            selectSlides,
            false,
            selectedSlides.filter((id) => id !== index)
          );
      }}
      onDelete={() => {
        dispatch(deleteSlides, true, selectedSlides);
      }}
    />
  ));

  return <>{slideList}</>;
}
