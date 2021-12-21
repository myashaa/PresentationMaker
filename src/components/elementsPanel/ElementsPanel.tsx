import { TextForm } from "./forms/TextForm";
import styles from "./ElementsPanel.module.css";
import { Element } from "../../model/element/ElementTypes";
import { FigureForm } from "./forms/FigureForm";
import { ImageForm } from "./forms/ImageForm";
import { SlideForm } from "./forms/SlideForm";
import { Slide } from "../../model/slide/SlideTypes";

type ElementsPanelProps = {
  slide?: Slide;
  width?: number;
  element?: Element;
};

export const ElementsPanel = ({ slide, element, width = 300 }: ElementsPanelProps) => {
  return <div className={styles.sidePanel} style={{ width }}>
    {element?.data.font && <TextForm element={element} slideId={slide?.id} />}
    {element?.data.type && <FigureForm element={element} slideId={slide?.id} />}
    {element?.data.url && <ImageForm element={element} slideId={slide?.id} />}
    {!(element?.data.font || element?.data.type || element?.data.url) && <SlideForm slide={slide} />}
  </div>;
};
