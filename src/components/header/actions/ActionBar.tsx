import { ActionButton } from "./ActionButton";
import styles from "./ActionBar.module.css";
import { AppDispatch } from "../../../redux/store";
import { connect } from "react-redux";
import { loadImage } from "../../../model/element/ImageActions";
import { TImage } from "../../../model/element/ImageTypes";
import { TText } from "../../../model/element/TextTypes";
import { EFigureType, TFigure } from "../../../model/element/FigureTypes";
import { COLORS } from "../../../colors";

type Props = {
  newSlide: () => void;
  deleteSlides: () => void;
  addImage: (image: TImage) => void;
  addText: (text: TText) => void;
  addFigure: (figure: TFigure) => void;
};

function ActionBar(
  { newSlide, 
    deleteSlides, 
    addImage,
    addText,
    addFigure, 
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
            addText(newText);
          }}
        />
        <ActionButton
          icon="image"
          onClick={() => {
            loadImage((object) => {
              addImage(object);
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
            addFigure(newFigure);
          }}
        />
        <ActionButton
          icon="photo_camera"
          onClick={() => {
            // const newCanvas: TCanvas = {
            //   video: true,
            // };
            // dispatch(createElement, true, selectedSlide, newCanvas);
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
    addImage: (content: TImage) =>
      dispatch({
        type: "CREATE_ELEMENT",
        payload: content,
      }),
    addText: (content: TText) =>
      dispatch({
        type: "CREATE_ELEMENT",
        payload: content,
      }),
    addFigure: (content: TFigure) =>
      dispatch({
        type: "CREATE_ELEMENT",
        payload: content,
      }),
  };
};

export default connect(null, mapDispatchToProps)(ActionBar);
