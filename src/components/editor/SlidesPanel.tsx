import { dispatch } from "../../editor";
import {
  deleteSlides,
  selectSlides,
} from "../../model/presentation/PresentationActions";
import { Slide } from "../../model/slide/SlideTypes";
import { MiniSlide } from "../slides/MiniSlide";
import styles from "./SidePanel.module.css";

type SlidesPanelProps = {
  width?: number;
  slides: Slide[];
  selectedSlides: string[];
};

export const SlidesPanel = ({
  width = 300,
  slides,
  selectedSlides,
}: SlidesPanelProps) => {
  const selectSlideHandle = (ids: string[]) => {
    dispatch(selectSlides, false, ids);
  };

  const slideList = slides?.map((slide, index) => (
    <MiniSlide
      key={index}
      index={index + 1}
      elements={slide.elementList}
      background={slide.background}
      selected={selectedSlides.some((id) => id === slide.id)}
      onSelect={() => {
        selectSlideHandle([slide.id]);
      }}
      onMultiSelect={() => {
        if (!selectedSlides.some((id) => id === slide.id))
          selectSlideHandle([...selectedSlides, slide.id]);
        else if (selectedSlides.length > 1)
          selectSlideHandle(selectedSlides.filter((id) => id !== slide.id));
      }}
      onDelete={() => {
        dispatch(deleteSlides, true, selectedSlides);
        // TODO: Выделение слайдов после удаления
      }}
    />
  ));

  return (
    <div className={styles.sidePanel} style={{ width }}>
      {slideList}
    </div>
  );
};
