import { EBorderStyle, TElement, TPosition, TSize } from "../../model/element/ElementTypes";
import { TextElement } from "./text/TextElement";

import styles from "./Element.module.css";
import { dispatch } from "../../editor";
import { setText } from "../../model/element/TextActions";
import { ImageElement } from "./image/ImageElement";
import { FigureElement } from "./figures/FigureElement";
import { useEffect, useRef, useState } from "react";
import { classnames } from "../../utils";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { resizeElement } from "../../model/slide/SlideActions";
import { COLORS } from "../../colors";

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
  const [edit, setEdit] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    !selected && setEdit(false);
  }, [selected]);

  let borderType = "";
  if (element.border?.type === EBorderStyle.solid) borderType = "solid";
  if (element.border?.type === EBorderStyle.dashed) borderType = "dashed";
  if (element.border?.type === EBorderStyle.dotted) borderType = "dotted";

  const style = {
    top: position.y,
    left: position.x,
    width: size.width,
    height: size.height,
    outlineStyle: borderType ? borderType : "solid",
    outlineWidth: element.border?.width ? element.border?.width : 0,
    outlineColor: element.border?.color ? element.border?.color : COLORS.lightGrey,
    outlineOffset: `-${element.border?.width}px`,
    backgroudColor: element.color ? element.color : COLORS.white
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
      onDoubleClick={(e) => {
        e.stopPropagation();
        setEdit(true);
      }}
    >
      {/* <div className={styles.empty}>пустой :(</div> */}
      {/* {"text" in data && <p className={styles.text}>{data.text}</p>}
      {"text" in data && selected && edit && (
        <textarea className={styles.textEditor} value={data.text} />
      )} */}
      {"text" in data && (
        <TextElement
          text={data}
          isEdit={selected && edit}
          onChange={(value) => {
            dispatch(setText, true, slideId, element.id, value);
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
