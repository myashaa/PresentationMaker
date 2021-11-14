import React from "react";
import { Element } from "../../model/element/ElementTypes";
import { Background } from "../../model/slide/SlideTypes";

import styles from "./MiniSlide.module.css";

type MiniSlideProps = {
  elements?: Element[];
  background?: Background;
  index?: number;
};

export function MiniSlide({ index, elements, background }: MiniSlideProps) {
  return (
    <div className={styles.slidePreview}>
      <span className={styles.slideIndex}>{index}</span>
      <div className={styles.slideMiniature}></div>
    </div>
  );
}
