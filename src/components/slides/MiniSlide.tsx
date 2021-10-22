import React from "react";
import { SlideElement } from "../../model/element/types";
import { Background } from "../../model/slide/types";

import "./MiniSlide.styles.css";

type MiniSlideProps = {
  elements?: SlideElement[];
  background?: Background;
};

export function MiniSlide({ elements, background }: MiniSlideProps) {
  return <div className="slide-miniature"></div>;
}
