import { Slide } from "../../model/slide/SlideTypes";
import { Element as ElementType, Text } from "../../model/element/ElementTypes";

import styles from "./Editor.module.css";
import { useEffect, useRef, useState } from "react";
import { dispatch } from "../../editor";
import { selectElements } from "../../model/slide/SlideActions";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { setText } from "../../model/element/TextActions";

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
            <Element
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

type ElementProps = {
  slideId?: number;
  id?: number;

  element: ElementType;
  selected?: boolean;
  onClick?: (onCtrl?: boolean) => void;
};

export function Element({
  element,
  selected,
  id,
  slideId,
  onClick,
}: ElementProps) {
  const [isEditMode, setEditMode] = useState(false);

  return (
    <div
      className={`${styles.element} ${selected && styles.selected}`}
      style={{
        width: element.width < 0 ? "auto" : element.width,
        height: element.height < 0 ? "auto" : element.height,
        top: element.position.y,
        left: element.position.x,
      }}
      onClick={(event) => {
        event.stopPropagation();
        onClick && onClick(event.ctrlKey);
      }}
    >
      {element?.text && (
        <p
          onDoubleClick={() => setEditMode(true)}
          contentEditable={isEditMode}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              dispatch(setText, slideId, id, "e.");
              setEditMode(false);
            }
          }}
        >
          {element?.text?.content}
        </p>
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
