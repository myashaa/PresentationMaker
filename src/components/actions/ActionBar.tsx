import { Text } from "../../model/element/ElementTypes";
import { ActionButton } from "./ActionButton";

import { dispatch } from "../../editor";
import { createElement } from "../../model/slide/SlideActions";
import { createSlide } from "../../model/presentation/PresentationActions";

import styles from "./ActionBar.module.css";

type ActionBarProps = {
  selectedSlide: number;
};

export function ActionBar({ selectedSlide }: ActionBarProps) {
  return (
    <div className={styles.appActionBar}>
      <div className={styles.appActions}>
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
      </div>
      <div className={`${styles.appActions} ${styles.appActionsRigth}`}>
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
            dispatch(createElement, selectedSlide, newText);
          }}
        />
        <ActionButton icon="image" />
        <ActionButton icon="category" />
      </div>
    </div>
  );
}
