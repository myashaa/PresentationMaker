import { Text } from "../../model/element/ElementTypes";
import { ActionButton } from "./ActionButton";

import { dispatch } from "../../editor";
import { createElement } from "../../model/slide/SlideActions";
import { createSlide } from "../../model/presentation/PresentationActions";

import styles from "./ActionBar.module.css";
import { Editor } from "../../model/editor/EditorTypes";
import { undo, redo, updateHistory } from "../../model/editor/EditorActions";

type ActionBarProps = {
  selectedSlide: number;
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
          dispatch(createSlide, {});
          dispatch(updateHistory, editor);
        }}
      />
      <ActionButton 
        icon="undo" 
        onClick={() => {
          dispatch(undo, editor);
        }}
        />
      <ActionButton 
        icon="redo" 
        onClick={() => {
          dispatch(redo, editor);
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
            dispatch(createElement, selectedSlide, newText);
          }}
        />
        <ActionButton icon="image" />
        <ActionButton icon="category" />
      </div>
    </div>
  );
}
