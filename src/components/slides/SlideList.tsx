import React from "react";
import { Slide } from "../../model/slide/SlideTypes";
import { MiniSlide } from "./MiniSlide";

import styles from "./SlideList.module.css";

type SlideListProps = {
  slides?: Slide[];
};

export function SlideList({ slides }: SlideListProps) {
  const slideList = slides?.map((slide, index) => (
    <MiniSlide
      key={index}
      index={index + 1}
      elements={slide.elementList}
      background={slide.background}
    />
  ));

  return <>{slideList}</>;
}
