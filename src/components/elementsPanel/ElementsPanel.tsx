import { TextForm } from "./forms/TextForm";
import styles from "./ElementsPanel.module.css";
import { TElement } from "../../model/element/ElementTypes";
import { FigureForm } from "./forms/FigureForm";
import { ImageForm } from "./forms/ImageForm";
import { SlideForm } from "./forms/SlideForm";
import { TSlide } from "../../model/slide/SlideTypes";
import { TText } from "../../model/element/TextTypes";
import { TFigure } from "../../model/element/FigureTypes";
import { TImage } from "../../model/element/ImageTypes";

type ElementsPanelProps = {
  slide?: TSlide;
  width?: number;
  element?: TElement;
};

export const ElementsPanel = ({
  slide,
  element,
  width = 300,
}: ElementsPanelProps) => {
  const data = element?.data || {};

  return (
    <div className={styles.sidePanel} style={{ width }}>
      {"text" in data && <TextForm element={element} slideId={slide?.id} />}
      {/* {element?.data.figure && (
        <FigureForm element={element} slideId={slide?.id} />
      )}
      {element?.data.image && (
        <ImageForm element={element} slideId={slide?.id} />
      )} */}
      {/* {!(element?.data.font || element?.data.type || element?.data.url) && <SlideForm slide={slide} />} */}
    </div>
  );
};
