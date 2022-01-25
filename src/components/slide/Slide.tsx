import { TSlide } from "../../model/slide/SlideTypes";
import { classnames, getLastElement } from "../../utils";
import { COLORS } from "../../colors";
import styles from "./Slide.module.css";
import { Element } from "./Element";
import { Empty } from "./Empty";
import { AppDispatch, RootState } from "../../redux/store";
import { connect } from "react-redux";
import { TPosition, TSize } from "../../model/element/ElementTypes";
import { useRef } from "react";
import { useHotKey } from "../../hooks/useHotKey";

type Props = {
  slides: TSlide[];
  selectedSlide: string;
  selectedElements: string[];
  selectElements: (ids: string[]) => void;
  moveElement: (ids: string, position: TPosition, slide: string) => void;
  resizeElement: (id: string, size: TSize, slide: string) => void;
  setText: (id: string, text: string, slide: string) => void;
  deleteElement: (slide: string, element: string) => void;
};

function SlideEditor({
  slides,
  selectedSlide,
  selectedElements,
  selectElements,
  moveElement,
  resizeElement,
  setText,
  deleteElement,
}: Props) {
  const slide = slides.filter((slide) => slide.id === selectedSlide)[0];

  const elements = slide?.elementList;

  const style = {
    backgroundColor: slide?.background?.color
      ? slide?.background.color
      : COLORS.white,
    backgroundImage: `url(${slide?.background.picture?.image})`,
    backgroundSize: "cover",
  };

  const slideRef = useRef<HTMLDivElement>(null);

  useHotKey((key) => {
    if (key === "Delete") {
      selectedElements.map((id) => deleteElement(slide.id, id));
    }
  }, slideRef);

  const handleSelectElement = (id: string) => {
    selectElements([id]);
  };

  const handleSelectElements = (id: string) => {
    selectElements([...selectedElements, id]);
  };

  const handleDeselectElements = () => {
    selectElements([]);
  };

  const handleMoveElement = (id: string, position: TPosition) => {
    moveElement(id, position, slide.id);
  };

  const handleResizeElement = (id: string, size: TSize) => {
    resizeElement(id, size, slide.id);
  };

  const handleChangeText = (id: string, text: string) => {
    setText(id, text, slide.id);
  };

  return (
    <div
      className={styles.editor}
      ref={slideRef}
      tabIndex={1}
      onClick={(e) => {
        e.stopPropagation();
        handleDeselectElements();
      }}
    >
      {slide && (
        <div className={classnames(styles.slide)} style={style}>
          {elements?.map((element) => (
            <Element
              key={element.id}
              element={element}
              selected={selectedElements.includes(element.id)}
              onClick={(ctrl: boolean) => {
                !ctrl && handleSelectElement(element.id);
                ctrl && handleSelectElements(element.id);
              }}
              onMove={(position) => handleMoveElement(element.id, position)}
              onResize={(size) => handleResizeElement(element.id, size)}
              onSetText={(text) => handleChangeText(element.id, text)}
            />
          ))}
        </div>
      )}
      {!slide && <Empty text="Создайте или выберите слайд" />}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    slides: state.presentation.slideList,
    selectedSlide: getLastElement(state.presentation.selectedSlidesIds),
    selectedElements: state.presentation.selectedElementIds,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    selectElements: (ids: string[]) =>
      dispatch({
        type: "SELECT_ELEMENTS",
        payload: ids,
      }),
    moveElement: (id: string, position: TPosition, slide: string) =>
      dispatch({
        type: "MOVE_ELEMENT",
        payload: { id, position, slide },
      }),
    resizeElement: (id: string, size: TSize, slide: string) =>
      dispatch({
        type: "RESIZE_ELEMENT",
        payload: { id, width: size.width, height: size.height, slide },
      }),
    setText: (id: string, text: string, slide: string) =>
      dispatch({
        type: "SET_ELEMENT_TEXT",
        payload: { id, text, slide },
      }),
    deleteElement: (slide: string, element: string) =>
      dispatch({
        type: "DELETE_ELEMENT",
        payload: { slide, element },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideEditor);
