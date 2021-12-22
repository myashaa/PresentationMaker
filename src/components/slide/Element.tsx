import { TElement, TPosition, TSize } from "../../model/element/ElementTypes";
import { TextElement } from "./text/TextElement";

import styles from "./Element.module.css";
import { dispatch } from "../../editor";
import { setText } from "../../model/element/TextActions";
import { ImageElement } from "./image/ImageElement";
import { FigureElement } from "./figures/FigureElement";
import { useRef, useState } from "react";
import { classnames } from "../../utils";
import useOnClickOutside from "../../hooks/useOnClickOutside";

type Props = {
  position: TPosition;
  size: TSize;
  element: TElement;
  slideId: string;
  selected?: boolean;
  onClick?: () => void;
};

export function Element({
  position,
  size,
  slideId,
  element,
  selected,
  onClick,
}: Props) {
  const elementRef = useRef<HTMLDivElement>(null);

  const style = {
    top: position.y,
    left: position.x,
    width: size.width,
    height: size.height,
  };

  const data = element.data;
  return (
    <div
      ref={elementRef}
      style={style}
      className={classnames(styles.element, selected && styles.selected)}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
    >
      {"text" in data && (
        <TextElement
          text={data.text}
          onChange={(text) => {
            dispatch(setText, true, slideId, element.id, text);
          }}
        />
      )}
      {"image" in data && <ImageElement src={data.image} />}
      {"figure" in data && (
        <FigureElement
          figure={data.figure}
          width={element.width}
          height={element.height}
          fill={data.fill}
        />
      )}
    </div>
  );
}
