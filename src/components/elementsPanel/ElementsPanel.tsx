import styles from "./ElementsPanel.module.css";
import { TElement } from "../../model/element/ElementTypes";
import { ImageForm } from "./forms/ImageForm";
import { SlideForm } from "./forms/SlideForm";
import { TSlide } from "../../model/slide/SlideTypes";
import { FigureForm } from "./forms/FigureForm";
import { VideoForm } from "./forms/VideoForm";
import { RootState } from "../../redux/store";
import { getLastElement } from "../../utils";
import { connect } from "react-redux";
import ElementForm from "./forms/ElementForm";
import TextForm from "./forms/TextForm";

type ElementsPanelProps = {
  slides: TSlide[];
  selectedSlide: string;
  selectedElement: string;
  width?: number;
};

function ElementsPanel({
  slides,
  selectedSlide,
  selectedElement,
  width = 300,
}: ElementsPanelProps) {
  const slide = slides?.filter((s) => s.id === selectedSlide)[0];
  const element = slide?.elementList.filter((e) => e.id === selectedElement)[0];
  const data = element?.data || {};

  return (
    <div className={styles.sidePanel} style={{ width }}>
      {"text" in data && <TextForm element={element} slideId={slide?.id} />}
      {"image" in data && <ImageForm element={element} slideId={slide?.id} />}
      {"figure" in data && <FigureForm element={element} slideId={slide?.id} />}
      {("image" in data ||
        "text" in data ||
        "figure" in data ||
        "video" in data) && (
        <ElementForm element={element} slideId={slide?.id} />
      )}
      {!(
        "image" in data ||
        "text" in data ||
        "figure" in data ||
        "video" in data
      ) && <SlideForm slide={slide} />}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    slides: state.presentation.slideList,
    selectedSlide: getLastElement(state.presentation.selectedSlidesIds),
    selectedElement: getLastElement(state.presentation.selectedElementIds),
  };
};

export default connect(mapStateToProps)(ElementsPanel);
