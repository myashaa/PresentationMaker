import { Text } from "../../model/element/ElementTypes";
import { Spacer } from "../Spacer";
import { ActionButton } from "./ActionButton";

import { dispatch } from "../../editor";
import { createElement } from "../../model/slide/SlideActions";
import { createSlide } from "../../model/presentation/PresentationActions";

import styles from "./ActionBar.module.css";

export function ActionBar() {
  return (
    <div className={styles.appActionBar}>
      <ActionButton
        icon="add_to_photos"
        label="Добавить слайд"
        primary
        onClick={() => {
          dispatch(createSlide, {});
        }}
      />
      <ActionButton icon="undo" />
      <ActionButton icon="redo" />
      <Spacer width={60} />
      <ActionButton
        icon="title"
        label="Добавить текст"
        onClick={() => {
          const newText: Text = {
            content: "Sample Text",
            font: {
              family: "Montserrat",
              size: 16,
              color: "#000",
            },
          };
          dispatch(createElement, 0, newText);
        }}
      />
      <ActionButton icon="image" label="Добавить изображение" />
      <ActionButton icon="category" label="Добавить фигуру" />
    </div>
  );
}
