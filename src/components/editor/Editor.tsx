import { Slide } from "../../model/slide/SlideTypes";
import { Element as ElementType, Text } from "../../model/element/ElementTypes";

import styles from "./Editor.module.css";
import { useEffect, useRef, useState } from "react";
import { dispatch } from "../../editor";
import { selectElements } from "../../model/slide/SlideActions";
import useOnClickOutside from "../../hooks/useOnClickOutside";

type EditorProps = {
  slide?: Slide;
  selectedElements?: number[];
};

export function Editor({ slide, selectedElements }: EditorProps) {
  return (
    <>
      {slide && (
        <div className={styles.appEditorView}>
          {slide?.elementList.map((element, index) => (
            <Element
              key={index}
              element={element}
              selected={selectedElements?.some((id) => id === index)}
              onClick={() => {
                dispatch(selectElements, [index]);
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
    </>
  );
}

type ElementProps = {
  element: ElementType;
  selected?: boolean;
  onClick?: (onCtrl?: boolean) => void;
};

export function Element({ element, selected, onClick }: ElementProps) {
  return (
    <div
      className={`${styles.element} ${selected && styles.selected}`}
      style={{
        width: element.width,
        height: element.height,
        top: element.position.y,
        left: element.position.x,
      }}
      onClick={(event) => onClick && onClick(event.ctrlKey)}
    ></div>
  );
}
