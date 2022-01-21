import styles from "./ElementsPanel.module.css";
import SlideForm from "./forms/SlideForm";
import { TSlide } from "../../model/slide/SlideTypes";
import FigureForm from "./forms/FigureForm";
import { AppDispatch, RootState } from "../../redux/store";
import { getLastElement } from "../../utils";
import { connect } from "react-redux";
import ElementForm from "./forms/ElementForm";
import TextForm from "./forms/TextForm";
import ImageForm from "./forms/ImageForm";
import { ActionButton } from "../header/actions/ActionButton";

type ElementsPanelProps = {
  slides: TSlide[];
  selectedSlide: string;
  selectedElement: string;
  width?: number;
  deleteElement: (slide: string, element: string) => void;
};

function ElementsPanel({
  slides,
  selectedSlide,
  selectedElement,
  width = 300,
  deleteElement,
}: ElementsPanelProps) {
  const slide = slides?.filter((s) => s.id === selectedSlide)[0];
  const element = slide?.elementList.filter((e) => e.id === selectedElement)[0];
  const data = element?.data || {};

  const handleDelete = () => {
    deleteElement(slide.id, element.id);
  };

  const getPanelTitle = () => {
    if ("image" in data) return { icon: "image", text: "Изображение" };
    if ("text" in data) return { icon: "text_fields", text: "Текст" };
    if ("figure" in data) return { icon: "category", text: "Фигура" };
    return { icon: "filter", text: "Слайд" };
  };

  const panelTitle = getPanelTitle();

  return (
    <div className={styles.sidePanel} style={{ width }}>
      <div className={styles.headerForm}>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <span className={`material-icons ${styles.headerFormIcon}`}>
            {panelTitle.icon}
          </span>
          <span className={styles.headerFormTitle}>{panelTitle.text}</span>
        </div>
        {!!element && slide && (
          <ActionButton
            icon="delete"
            style={{ marginRight: 0 }}
            onClick={handleDelete}
          />
        )}
      </div>
      {!!element && slide && (
        <ElementForm element={element} slideId={slide?.id} />
      )}

      {"text" in data && slide && (
        <TextForm element={element} slideId={slide?.id} />
      )}
      {"image" in data && slide && (
        <ImageForm element={element} slideId={slide?.id} />
      )}
      {"figure" in data && slide && (
        <FigureForm element={element} slideId={slide?.id} />
      )}

      {!element && slide && <SlideForm slide={slide} />}
    </div>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    deleteElement: (slide: string, element: string) =>
      dispatch({
        type: "DELETE_ELEMENT",
        payload: { slide, element },
      }),
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    slides: state.presentation.slideList,
    selectedSlide: getLastElement(state.presentation.selectedSlidesIds),
    selectedElement: getLastElement(state.presentation.selectedElementIds),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementsPanel);
