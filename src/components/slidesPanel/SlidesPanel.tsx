import { dispatch } from "../../editor";
import { useHotKey } from "../../hooks/useHotKey";
import {
  deleteSlides,
  selectSlides,
} from "../../model/presentation/PresentationActions";
import { TSlide } from "../../model/slide/SlideTypes";
import { MiniSlide } from "./MiniSlide";
import styles from "./SlidesPanel.module.css";

type SlidesPanelProps = {
  width?: number;
  slides: TSlide[];
  selectedSlides: string[];
};

export const SlidesPanel = ({
  width = 300,
  slides,
  selectedSlides,
}: SlidesPanelProps) => {
  useHotKey(() => {
    dispatch(deleteSlides, true, selectedSlides);
  }, "Delete");

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
      }}
    />
  ));

  return (
    <div className={styles.sidePanel} style={{ width }}>
      {slideList}
    </div>
  );
};
