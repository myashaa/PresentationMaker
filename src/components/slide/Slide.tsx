import { TSlide } from "../../model/slide/SlideTypes";
import { classnames } from "../../utils";

import { COLORS } from "../../colors";
import styles from "./Slide.module.css";
import { TText } from "../../model/element/TextTypes";
import { TextElement } from "./text/TextElement";
import { Element } from "./Element";
import { dispatch } from "../../editor";
import { selectElements } from "../../model/slide/SlideActions";
import { useState } from "react";

type SlideProps = {
  slide: TSlide;
  selectedElements: string[];
};

export function SlideEditor({ slide, selectedElements }: SlideProps) {
  const elements = slide.elementList;

  const style = {
    backgroundColor: slide.background?.color
      ? slide.background.color
      : COLORS.white,
  };

  return (
    <div
      className={styles.editor}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(selectElements, false, []);
      }}
    >
      <div className={classnames(styles.slide)} style={style}>
        {elements.map((element) => (
          <Element
            key={element.id}
            size={{ width: element.width, height: element.height }}
            position={element.position}
            element={element}
            slideId={slide.id}
            selected={selectedElements.includes(element.id)}
            onClick={() => {
              dispatch(selectElements, false, [element.id]);
            }}
          />
        ))}
      </div>
    </div>
  );
}
