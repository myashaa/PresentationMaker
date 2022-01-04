import { ActionButton } from "./ActionButton";

import { dispatch } from "../../../editor";
import { loadImage } from "../../../model/element/ImageActions";
import {
  createElement,
  resizeElement,
} from "../../../model/slide/SlideActions";
import {
  createSlide,
  deleteSlides,
} from "../../../model/presentation/PresentationActions";

import styles from "./ActionBar.module.css";
import { COLORS } from "../../../colors";
import { EMode, TEditor } from "../../../model/editor/EditorTypes";
import { redo, undo } from "../../../model/history/HistoryActions";
import { TText } from "../../../model/element/TextTypes";
import { TImage } from "../../../model/element/ImageTypes";
import { EFigureType, TFigure } from "../../../model/element/FigureTypes";
import { changeMode } from "../../../model/editor/EditorActions";
import { TCanvas } from "../../../model/element/ElementTypes";

type ActionBarProps = {
  selectedSlide: string;
  editor: TEditor;
  selectedElement: string;
};

export function ActionBar({
  selectedSlide,
  editor,
  selectedElement,
}: ActionBarProps) {
  return (
    <div className={styles.appActionBar}>
      <div className={styles.appActionsGroup}>
        <ActionButton
          icon="add_to_photos"
          label="Добавить слайд"
          primary
          onClick={() => {
            dispatch(createSlide, true, {});
          }}
        />
        <ActionButton
          icon="delete"
          primary
          onClick={() => {
            dispatch(deleteSlides, true, editor.presentation.selectedSlidesIds);
          }}
        />
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
            icon="title"
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
            icon="camera"
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
      />
    </div>
  );
}
