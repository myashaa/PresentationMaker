import { useRef } from "react";
import { Element as ElementType } from "../../model/element/ElementTypes";
import { classnames } from "../../utils";
import styles from "./SlideElement.module.css";

type ElementProps = {
  element: ElementType;
  selected?: boolean;
  onClick?: (onCtrl?: boolean) => void;
};

export function SlideElement({ element, selected, onClick }: ElementProps) {
  const elementRef = useRef(null);

  const isText = element.data.hasOwnProperty("font");
  const isImage = element.data.hasOwnProperty("url");
  const isFigure = element.data.hasOwnProperty("type");

  const style = {
    width: element.width < 0 ? "100px" : element.width,
    height: element.height < 0 ? "100px" : element.height,
    top: element.position.y,
    left: element.position.x,
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
      style={style}
      onClick={(event) => {
        event.stopPropagation();
        onClick && onClick(event.ctrlKey);
      }}
      ref={elementRef}
    >
      {!isText && selected && resizers}
      {isText && <p>{element?.data?.content}</p>}
      {isImage && <img src={element.data.url} alt="" />}
      {isFigure && <div className={classnames(styles.figure, styles[element.data?.type])}></div>}
    </div>
  );
}
