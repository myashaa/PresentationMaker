import { TextForm } from "./forms/TextForm";
import styles from "./ElementsPanel.module.css";
import { Element } from "../../model/element/ElementTypes";
import { FigureForm } from "./forms/FigureForm";
import { ImageForm } from "./forms/ImageForm";
import { SlideForm } from "./forms/SlideForm";

type ElementsPanelProps = {
  slideId?: string;
  width?: number;
  element?: Element;
};

export const ElementsPanel = ({ slideId, element, width = 300 }: ElementsPanelProps) => {
  return <div className={styles.sidePanel} style={{ width }}>
    {element?.data.font && <TextForm element={element} slideId={slideId} />}
    {element?.data.type && <FigureForm element={element} slideId={slideId} />}
    {element?.data.url && <ImageForm />}
    {/* <SlideForm / > */}
  </div>;
};
