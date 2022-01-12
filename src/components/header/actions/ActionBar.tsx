import { ActionButton } from "./ActionButton";
import styles from "./ActionBar.module.css";
import { AppDispatch } from "../../../redux/store";
import { connect } from "react-redux";

type Props = {
  newSlide: () => void;
  deleteSlides: () => void;
};

function ActionBar({ newSlide, deleteSlides }: Props) {
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
        />
      </div>
      {/* <div className={styles.appActionsGroup}>
        
        
        <ActionButton
          icon="undo"
          onClick={() => {
            dispatch(undo, false, editor);
          }}
        />
        <ActionButton
          icon="redo"
          onClick={() => {
            dispatch(redo, false, editor);
          }}
        />

        <div className={styles.appActionsRigth}>
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
              dispatch(createElement, true, selectedSlide, newText);
            }}
          />
          <ActionButton
            icon="image"
            onClick={() => {
              const fileInputNode = document.createElement("input");
              fileInputNode.type = "file";
              fileInputNode.click();
              fileInputNode.addEventListener("change", () => {
                const file = fileInputNode.files?.[0] as File;
                const reader = new FileReader();

                reader.onloadend = function () {
                  const newImage: TImage = {
                    image: "https://via.placeholder.com/150",
                  };

                  if (file.type.includes("image")) {
                    newImage.image = String(reader.result);
                  }

                  dispatch(createElement, true, selectedSlide, newImage);
                };

                reader.readAsDataURL(file);
              });
            }}
          />
          <ActionButton
            icon="category"
            onClick={() => {
              const newFigure: TFigure = {
                figure: EFigureType.triangle,
                fill: COLORS.primary,
              };
              dispatch(createElement, true, selectedSlide, newFigure);
            }}
          />
          <ActionButton
            icon="photo_camera"
            onClick={() => {
              const newCanvas: TCanvas = {
                video: true,
              };
              dispatch(createElement, true, selectedSlide, newCanvas);
            }}
          />
        </div>
      </div>

      <ActionButton
        icon="video_library"
        label="Слайд-шоу"
        primary
        onClick={() => {
          dispatch(changeMode, true, EMode.view);
        }}
      /> */}
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
  };
};

export default connect(null, mapDispatchToProps)(ActionBar);
