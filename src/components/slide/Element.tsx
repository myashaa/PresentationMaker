import {
  EBorderStyle,
  TElement,
  TPosition,
  TSize,
} from "../../model/element/ElementTypes";
import { TextElement } from "./text/TextElement";

import styles from "./Element.module.css";
import { ImageElement } from "./image/ImageElement";
import { FigureElement } from "./figures/FigureElement";
import { useEffect, useRef, useState } from "react";
import { classnames } from "../../utils";
import { COLORS } from "../../colors";
import { useMoveAndResize } from "../../hooks/useMoving";
import { Camera } from "./Camera";

type Props = {
  element: TElement;
  selected?: boolean;
  view?: boolean;
  onClick?: (ctrl: boolean) => void;
  onMove?: (position: TPosition) => void;
  onResize?: (size: TSize) => void;
  onSetText?: (text: string) => void;
};

export function Element({
  element,
  selected,
  view,
  onClick,
  onMove,
  onResize,
  onSetText,
}: Props) {
  const [edit, setEdit] = useState(false);
  const [moving, setMoving] = useState(false);
  const [resizing, setResizing] = useState(false);

  const elementRef = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    !view && !selected && setEdit(false);
  }, [selected]);

  let borderType = "";
  if (element.border?.type === EBorderStyle.solid) borderType = "solid";
  if (element.border?.type === EBorderStyle.dashed) borderType = "dashed";
  if (element.border?.type === EBorderStyle.dotted) borderType = "dotted";

  useEffect(() => {
    !moving && onMove && onMove(pos);
  }, [moving]);

  useEffect(() => {
    !resizing && onResize && onResize(sz);
  }, [resizing]);

  const [p, s] = useMoveAndResize(
    elementRef,
    resizerRef,
    element.position,
    { width: element.width, height: element.height },
    !edit && selected,
    (status) => {
      selected && setMoving(status);
    },
    (status) => {
      selected && setResizing(status);
    }
  );
  const pos = p as TPosition;
  const sz = s as TSize;

  const style = {
    top: moving ? pos.y : element.position.y,
    left: moving ? pos.x : element.position.x,
    width: resizing ? sz.width : element.width,
    height: resizing ? sz.height : element.height,
    outlineStyle: borderType ? borderType : "solid",
    outlineWidth: element.border?.width ? element.border?.width : 0,
    outlineColor: element.border?.color
      ? element.border?.color
      : COLORS.lightGrey,
    outlineOffset: `-${element.border?.width}px`,
    backgroundColor: element.color,
    cursor: !view ? "pointer" : "default",
  };

  const data = element.data;

  return (
    <div
      ref={elementRef}
      style={style}
      className={classnames(styles.element, selected && styles.selected)}
      onClick={(e) => {
        e.stopPropagation();
        !view && onClick && onClick(e.ctrlKey);
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        !view && setEdit(true);
        setMoving(false);
        setResizing(false);
      }}
    >
      {"text" in data && (
        <TextElement
          text={data}
          isEdit={selected && edit}
          onChange={(value) => {
            onSetText && onSetText(value);
          }}
        />
      )}
      {"image" in data && (
        <ImageElement src={data.image} filter={data.filter} />
      )}
      {"figure" in data && (
        <FigureElement
          figure={data.figure}
          width={sz.width}
          height={sz.height}
          fill={data.fill}
        />
      )}
      {"video" in data && <Camera />}
      {selected && (
        <div
          ref={resizerRef}
          className={classnames(styles.resizer, styles.rb)}
        ></div>
      )}
    </div>
  );
}
