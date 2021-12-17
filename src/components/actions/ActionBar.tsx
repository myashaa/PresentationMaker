import { Image, Text } from "../../model/element/ElementTypes";
import { ActionButton } from "./ActionButton";

import { dispatch } from "../../editor";
import { loadImage } from "../../model/element/ImageActions";
import { createElement } from "../../model/slide/SlideActions";
import {
  createSlide,
  deleteSlides,
} from "../../model/presentation/PresentationActions";

import styles from "./ActionBar.module.css";
import { Editor } from "../../model/editor/EditorTypes";
import { undo, redo } from "../../model/editor/EditorActions";

type ActionBarProps = {
  selectedSlide: string;
  editor: Editor;
};

export function ActionBar({ selectedSlide, editor }: ActionBarProps) {
  return (
    <div className={styles.appActionBar}>
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
        onClick={() => {
          dispatch(deleteSlides, false, editor.presentation.selectedSlidesIds);
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
            const newText: Text = {
              content: "Sample Text",
              font: {
                family: "Montserrat",
                size: 16,
                color: "#000",
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
              const reader  = new FileReader();

              reader.onloadend = function () {

                const newImage: Image = {
                  url: "https://via.placeholder.com/150",
                };

                if (file.type.includes("image")) {
                  newImage.url = String(reader.result);
                }

                dispatch(createElement, true, selectedSlide, newImage);
              }

              reader.readAsDataURL(file);
            })
          }}
        />
        <ActionButton icon="category" />
      </div>
    </div>
  );
}
