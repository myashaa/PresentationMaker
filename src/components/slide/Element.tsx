import { EBorderStyle, TElement, TPosition, TSize } from "../../model/element/ElementTypes";
import { TextElement } from "./text/TextElement";

import styles from "./Element.module.css";
import { dispatch } from "../../editor";
import { setText } from "../../model/element/TextActions";
import { ImageElement } from "./image/ImageElement";
import { FigureElement } from "./figures/FigureElement";
import { useEffect, useRef, useState } from "react";
import { classnames } from "../../utils";
import { COLORS } from "../../colors";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { moveElement, resizeElement } from "../../model/slide/SlideActions";
import { useResize } from "../../hooks/useResize";

type Props = {
  position: TPosition;
  size: TSize;
  element: TElement;
  slideId?: string;
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
  const [moving, setMoving] = useState(false);
  const [resizing, setResizing] = useState(false);

  const elementRef = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    !selected && setEdit(false);
  }, [selected]);

  let borderType = "";
  if (element.border?.type === EBorderStyle.solid) borderType = "solid";
  if (element.border?.type === EBorderStyle.dashed) borderType = "dashed";
  if (element.border?.type === EBorderStyle.dotted) borderType = "dotted";
        
  useEffect(() => {
    !moving && dispatch(moveElement, true, slideId, element.id, pos);
  }, [moving]);

  useEffect(() => {
    dispatch(resizeElement, true, slideId, element.id, sz.width, sz.height);
  }, [resizing]);

  const pos = useDragAndDrop(
    elementRef,
    position,
    () => {
      setMoving(true);
      console.log("двигаю");
    },
    () => {
      setMoving(false);
    },
    selected && !edit && !resizing
  );

  const sz = useResize(
    resizerRef,
    size,
    () => {
      !moving && setResizing(true);
    },
    () => {
      setMoving(false);
    },
    () => {
      setResizing(false);
    },
    selected && !edit
  );

  const style = {
    top: moving ? pos.y : position.y,
    left: moving ? pos.x : position.x,
    width: resizing ? sz.width : size.width,
    height: resizing ? sz.height : size.height,
    outlineStyle: borderType ? borderType : "solid",
    outlineWidth: element.border?.width ? element.border?.width : 0,
    outlineColor: element.border?.color ? element.border?.color : COLORS.lightGrey,
    outlineOffset: `-${element.border?.width}px`,
    backgroundColor: element.color ? element.color : COLORS.white
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
        setMoving(false);
        setResizing(false);
      }}
    >
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
          width={sz.width}
          height={sz.height}
          fill={data.fill}
        />
      )}
      {selected && (
        <div
          ref={resizerRef}
          className={classnames(styles.resizer, styles.rb)}
        ></div>
      )}
    </div>
  );
}
