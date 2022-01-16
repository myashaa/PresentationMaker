import { ActionButton } from "./ActionButton";
import styles from "./ActionBar.module.css";
import { AppDispatch, RootState } from "../../../redux/store";
import { connect } from "react-redux";
import { loadImage } from "../../../model/element/ImageActions";
import { TImage } from "../../../model/element/ImageTypes";
import { TText } from "../../../model/element/TextTypes";
import { EFigureType, TFigure } from "../../../model/element/FigureTypes";
import { COLORS } from "../../../colors";
import { getLastElement } from "../../../utils";
import { TCanvas } from "../../../model/element/ElementTypes";

type Props = {
  currentSlideId: string;
  newSlide: () => void;
  deleteSlides: () => void;
  addImage: (slideId: string, image: TImage) => void;
  addText: (slideId: string, text: TText) => void;
  addFigure: (slideId: string, figure: TFigure) => void;
  addCamera: (slideId: string, camera: TCanvas) => void;
};

function ActionBar(
  { currentSlideId,
    newSlide, 
    deleteSlides, 
    addImage,
    addText,
    addFigure,
    addCamera, 
  }: Props) {
  return (
    <div className={styles.appActionBar}>
      <div className={styles.appActionsGroup}>
        <ActionButton
          icon="add_to_photos"
          label="Добавить слайд"
          primary
          onClick={() => {
            newSlide();
          }}
        />
        <ActionButton
          icon="delete"
          primary
          onClick={() => {
            deleteSlides();
          }}
          style={{ marginRight: 24 }}
        />

        <ActionButton
          icon="undo"
          onClick={() => {
            // dispatch(undo, false, editor);
          }}
        />
        <ActionButton
          icon="redo"
          onClick={() => {
            // dispatch(redo, false, editor);
          }}
          style={{ marginRight: 24 }}
        />

        <ActionButton
          icon="text_fields"
          onClick={() => {
            const newText: TText = {
              text: "Sample Text",
              font: {
                family: "Montserrat",
                size: 16,
                color: COLORS.black,
                bold: false,
                underline: false,
                italic: false,
              },
            };
            addText(currentSlideId, newText);
          }}
        />
        <ActionButton
          icon="image"
          onClick={() => {
            loadImage((object) => {
              addImage(currentSlideId, object);
            })
          }}
        />
        <ActionButton
          icon="category"
          onClick={() => {
            const newFigure: TFigure = {
              figure: EFigureType.triangle,
              fill: COLORS.primary,
            };
            addFigure(currentSlideId, newFigure);
          }}
        />
        <ActionButton
          icon="photo_camera"
          onClick={() => {
            const newCanvas: TCanvas = {
              video: true,
            };
            addCamera(currentSlideId, newCanvas);
          }}
        />
      </div>

      <ActionButton
        icon="video_library"
        label="Слайд-шоу"
        primary
        onClick={() => {
          // dispatch(changeMode, true, EMode.view);
        }}
      />
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    currentSlideId: getLastElement(state.presentation.selectedSlidesIds),
  };
};


const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    newSlide: () =>
      dispatch({
        type: "NEW_SLIDE",
        payload: null,
      }),
    deleteSlides: () =>
      dispatch({
        type: "DELETE_SLIDES",
        payload: null,
      }),
    addImage: (slideId: string, content: TImage) =>
      dispatch({
        type: "CREATE_ELEMENT",
        payload: {slideId: slideId, content: content},
      }),
    addText: (slideId: string, content: TText) =>
      dispatch({
        type: "CREATE_ELEMENT",
        payload: {slideId: slideId, content: content},
      }),
    addFigure: (slideId: string, content: TFigure) =>
      dispatch({
        type: "CREATE_ELEMENT",
        payload: {slideId: slideId, content: content},
      }),
    addCamera: (slideId: string, content: TCanvas) =>
      dispatch({
        type: "CREATE_ELEMENT",
        payload: {slideId: slideId, content: content},
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
