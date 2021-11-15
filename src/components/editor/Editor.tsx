import React from "react";
import { Slide } from "../../model/slide/SlideTypes";
import {
  Element as ElementType,
  Text,
  Figure,
  Image,
} from "../../model/element/ElementTypes";

import styles from "./Editor.module.css";

type EditorProps = {
  slide: Slide;
};

export function Editor({ slide }: EditorProps) {
  return (
    <div className={styles.appEditorView}>
      {slide.elementList.map((element, index) => (
        <Element key={index} element={element} />
      ))}
    </div>
  );
}

type ElementProps = {
  element: ElementType;
};

export function Element({ element }: ElementProps) {
  return (
    <div
      className={styles.element}
      style={{
        width: element.width,
        height: element.height,
        top: element.position.y,
        left: element.position.x,
      }}
    ></div>
  );
}
