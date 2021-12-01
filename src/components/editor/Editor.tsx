import { Slide } from "../../model/slide/SlideTypes";

import styles from "./Editor.module.css";
import { useState } from "react";
import { dispatch } from "../../editor";
import { selectElements } from "../../model/slide/SlideActions";
import { SlideElement } from "./SlideElement";

type EditorProps = {
  slide?: Slide;
  slideId: number;
  selectedElements: number[];
};

export function Editor({ slide, slideId, selectedElements }: EditorProps) {
  const [isSelection, setSelection] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  return (
    <div className={styles.appEditorContainer}>
      {slide && (
        <div
          className={styles.appEditorView}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(selectElements, []);
          }}
          onMouseDown={(e) => {
            setSelection(true);
            setCoordinates({ x: e.screenX, y: e.screenY });
          }}
          onMouseUp={() => setSelection(false)}
        >
          {slide?.elementList.map((element, index) => (
            <SlideElement
              key={index}
              id={index}
              slideId={slideId}
              element={element}
              selected={selectedElements?.some((id) => id === index)}
              onClick={(onCtrl) => {
                !onCtrl && dispatch(selectElements, [index]);
                onCtrl &&
                  dispatch(selectElements, [...selectedElements, index]);
              }}
            />
          ))}
        </div>
      )}
      {!slide && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#acacac" }}>Создайте или выберите слайд</p>
        </div>
      )}
    </div>
  );
}

type SelectionProps = {
  startx: number;
  starty: number;
  endx: number;
  endy: number;
};

export function Selection({ startx, starty, endx, endy }: SelectionProps) {
  return (
    <div
      className={styles.selection}
      style={{ left: startx, top: starty, width: endx, height: endy }}
    />
  );
}
