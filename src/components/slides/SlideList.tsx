import React from "react";
import { Slide } from "../../model/slide/types";
import { MiniSlide } from "./MiniSlide";

import "./SlideList.styles.css";

type SlideListProps = {
  slides?: Slide[];
};

export function SlideList({ slides }: SlideListProps) {
  const slideList = slides?.map((slide) => (
    <MiniSlide elements={slide.elementList} background={slide.background} />
  ));

  return <div>{slides}</div>;
}
