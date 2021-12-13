import { Slide } from "../../model/slide/SlideTypes";
import styles from "./Editor.module.css";
import { dispatch } from "../../editor";
import { selectElements } from "../../model/slide/SlideActions";
import { SlideElement } from "./SlideElement";
import { Empty } from "./Empty";

type EditorProps = {
  slide?: Slide;
  slideId: number;
  selectedElements: number[];
};

export function Editor({ slide, slideId, selectedElements }: EditorProps) {
  const elements = slide?.elementList.map((element, index) => (
    <SlideElement
      key={index}
      id={index}
      slideId={slideId}
      element={element}
      selected={selectedElements?.some((id) => id === index)}
      onClick={(onCtrl) => {
        !onCtrl && dispatch(selectElements, false, [index]);
        onCtrl && dispatch(selectElements, false, [...selectedElements, index]);
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
