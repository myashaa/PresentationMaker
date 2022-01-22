import { TSlide } from "../../model/slide/SlideTypes";
import styles from "./Editor.module.css";
import { dispatch } from "../../editor";
import { selectElements } from "../../model/slide/SlideActions";
import { SlideElement } from "../slide/SlideElement";
import { Empty } from "../slide/Empty";
import { SquareFigure } from "../slide/figures/SquareFigure";
import { CircleFigure } from "../slide/figures/CircleFigure";
import { TriangleFigure } from "../slide/figures/TriangleFigure";
import { COLORS } from "../../colors";
import { url } from "inspector";

type EditorProps = {
  slide?: TSlide;
  slideId?: string;
  selectedElements: string[];
};

export function Editor({ slide, slideId, selectedElements }: EditorProps) {
  const elements = slide?.elementList.map((element, index) => (
    <SlideElement
      key={index}
      element={element}
      selected={selectedElements?.some((id) => id === element.id)}
      onClick={(onCtrl) => {
        !onCtrl && dispatch(selectElements, false, [element.id]);
        onCtrl &&
          dispatch(selectElements, false, [...selectedElements, element.id]);
      }}
    />
  ));

  return (
    <div className={styles.appEditorContainer}>
      {slide && (
        <div
          className={styles.appEditorView}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(selectElements, false, []);
          }}
        >
          {elements}
        </div>
      )}

      {!slide && <Empty text="Выберите или создайте слайд" />}
    </div>
  );
}
