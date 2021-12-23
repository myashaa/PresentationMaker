import { useRef } from "react";
import { COLORS } from "../../colors";
import { TElement } from "../../model/element/ElementTypes";
import { EFigureType } from "../../model/element/FigureTypes";
import { classnames } from "../../utils";
import { CircleFigure } from "./figures/CircleFigure";
import { SquareFigure } from "./figures/SquareFigure";
import { TriangleFigure } from "./figures/TriangleFigure";
import styles from "./SlideElement.module.css";
import { TextElement } from "./text/TextElement";

type ElementProps = {
  element: TElement;
  selected?: boolean;
  onClick?: (onCtrl?: boolean) => void;
};

export function SlideElement({ element, selected, onClick }: ElementProps) {
  const elementRef = useRef(null);

  const isText = element.data.hasOwnProperty("font");
  const isImage = element.data.hasOwnProperty("url");
  const isFigure = element.data.hasOwnProperty("type");

  const style = {
    width: element.width,
    height: element.height,
    top: element.position.y,
    left: element.position.x,
    backgroundColor: element.color,
    outlineStyle: element.border?.type ? element.border?.type : "solid",
    outlineWidth: element.border?.width ? element.border?.width : "0",
    outlineColor: element.border?.color ? element.border?.color : COLORS.black,
    outlineOffset: `-${element.border?.width}px`,
    // fontWeight: element?.data?.font?.bold ? "bold" : "400",
    // textDecoration: element.data.underline ? "underline" : "none",
    // fontStyle: element.data.italic ? "italic" : "none",
    // fontFamily: element.data.font.family || "Arial",
  };
  const resizers = (
    <>
      <span ref={null} className={classnames(styles.resizer, styles.lt)} />
      <span ref={null} className={classnames(styles.resizer, styles.lb)} />
      <span ref={null} className={classnames(styles.resizer, styles.rt)} />
      <span ref={null} className={classnames(styles.resizer, styles.rb)} />
    </>
  );

  return (
    <div
      className={classnames(styles.element, selected && styles.selected)}
      // style={style}
      onClick={(event) => {
        event.stopPropagation();
        onClick && onClick(event.ctrlKey);
      }}
      ref={elementRef}
    >
      {/* {!isText && selected && resizers}
      {isText && <TextElement text={element?.data?.content} />}
      {isImage && <img src={element.data.url} alt="" />}
      {isFigure && element.data?.type === EFigureType.circle && (
        <CircleFigure
          fill={element.data.fill}
          width={element.width}
          height={element.height}
        />
      )}
      {isFigure && element.data?.type === EFigureType.square && (
        <SquareFigure
          fill={element.data.fill}
          width={element.width}
          height={element.height}
        />
      )}
      {isFigure && element.data?.type === EFigureType.triangle && (
        <TriangleFigure
          fill={element.data.fill}
          width={element.width}
          height={element.height}
        />
      )} */}
    </div>
  );
}
