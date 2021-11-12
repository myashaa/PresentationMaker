import React from "react";
import { SlideElement } from "../../model/element/types";
import { Background } from "../../model/slide/types";

import styles from "./MiniSlide.module.css";

type MiniSlideProps = {
  elements?: SlideElement[];
  background?: Background;
};

export function MiniSlide({ elements, background }: MiniSlideProps) {
  return <div className={styles.slideMiniature}></div>;
}
