import { TSlide } from "../../model/slide/SlideTypes";
import { classnames, getLastElement } from "../../utils";
import { COLORS } from "../../colors";
import styles from "./Slide.module.css";
import { Element } from "./Element";
import { Empty } from "./Empty";
import { AppDispatch, RootState } from "../../redux/store";
import { connect } from "react-redux";
import { TPosition } from "../../model/element/ElementTypes";

type Props = {
  slides: TSlide[];
  selectedSlide: string;
  selectedElements: string[];
  selectElements: (ids: string[]) => void;
  moveElements: (ids: string, position: TPosition, slide: string) => void;
};

function SlideEditor({
  slides,
  selectedSlide,
  selectedElements,
  selectElements,
  moveElements,
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
    moveElements(id, position, slide.id);
  };

  return (
    <div
      className={styles.editor}
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
    moveElements: (id: string, position: TPosition, slide: string) =>
      dispatch({
        type: "MOVE_ELEMENT",
        payload: { id, position, slide },
      }),
    setText: (id: string, text: string, slide: string) =>
      dispatch({
        type: "SET_TEXT",
        payload: { id, text, slide },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideEditor);
