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
import { TCanvas, TSize } from "../../../model/element/ElementTypes";
import { getImageSize } from "../../../model/element/ImageActions";
import { useState } from "react";
import { Modal } from "../../modal/Modal";
import { ImageSearchForm } from "../../forms/ImageSearchForm";

type Props = {
  currentSlideId: string;
  newSlide: () => void;
  deleteSlides: () => void;
  addImage: (slideId: string, image: TImage, size: TSize) => void;
  addText: (slideId: string, text: TText) => void;
  addFigure: (slideId: string, figure: TFigure) => void;
  addCamera: (slideId: string, camera: TCanvas) => void;
  setPreview: () => void;
  undo: () => void;
  redo: () => void;
};

function ActionBar({
  currentSlideId,
  newSlide,
  deleteSlides,
  addImage,
  addText,
  addFigure,
  addCamera,
  setPreview,
  undo,
  redo,
}: Props) {
  const [imageModal, setImageModal] = useState(false);

  const handleImageModal = () => {
    setImageModal(!imageModal);
  };

  const handleAddImage = (url: string) => {
    getImageSize(url, (size) => {
      const object: TImage = {
        image: url,
      };

      addImage(currentSlideId, object, reduceSize(size, 3));
    });
    setImageModal(false);
  };

  const reduceSize = (size: TSize, scale: number = 2) => {
    let s = size;

    if (size.width > 600) {
      s.width = Math.floor(size.width / scale);
      s.height = Math.floor(size.height / scale);
    }
    if (size.height > 500) {
      s.width = Math.floor(size.width / scale);
      s.height = Math.floor(size.height / scale);
    }

    return s;
  };

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
            undo();
          }}
        />
        <ActionButton
          icon="redo"
          onClick={() => {
            redo();
          }}
          style={{ marginRight: 24 }}
        />

        <ActionButton
          icon="text_fields"
          onClick={() => {
            const newText: TText = {
              text: "Text",
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
            loadImage((object, size) => {
              addImage(currentSlideId, object, reduceSize(size, 3));
            });
          }}
        />
        <ActionButton icon="language" onClick={handleImageModal} />
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
          setPreview();
        }}
      />

      {imageModal && (
        <Modal title="Изображение из интернетов" onClose={handleImageModal}>
          <ImageSearchForm onSubmit={handleAddImage} />
        </Modal>
      )}
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
    setPreview: () =>
      dispatch({
        type: "SET_VIEW_MODE",
        payload: null,
      }),
    deleteSlides: () =>
      dispatch({
        type: "DELETE_SLIDES",
        payload: null,
      }),
    addImage: (slideId: string, content: TImage, size: TSize) =>
      dispatch({
        type: "CREATE_ELEMENT",
        payload: { slideId, content, size },
      }),
    addText: (slideId: string, content: TText) =>
      dispatch({
        type: "CREATE_ELEMENT",
        payload: { slideId: slideId, content: content },
      }),
    addFigure: (slideId: string, content: TFigure) =>
      dispatch({
        type: "CREATE_ELEMENT",
        payload: { slideId: slideId, content: content },
      }),
    addCamera: (slideId: string, content: TCanvas) =>
      dispatch({
        type: "CREATE_ELEMENT",
        payload: { slideId: slideId, content: content },
      }),
    undo: () =>
      dispatch({
        type: "UNDO",
      }),
    redo: () =>
      dispatch({
        type: "REDO",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
