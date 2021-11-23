import { Slide } from "../../model/slide/SlideTypes";
import { SlideList } from "../slides/SlideList";
import styles from "./SidePanel.module.css";

type SlidesPanelProps = {
  width?: number;
  slides: Slide[];
  selectedSlides: number[];
};

export const SlidesPanel = ({
  width = 300,
  slides,
  selectedSlides,
}: SlidesPanelProps) => {
  return (
    <div className={styles.sidePanel} style={{ width }}>
      <SlideList slides={slides} selectedSlides={selectedSlides} />
    </div>
  );
};
