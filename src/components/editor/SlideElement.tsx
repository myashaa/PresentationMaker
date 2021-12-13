import { useEffect, useRef, useState } from "react";
import { dispatch } from "../../editor";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { Element as ElementType } from "../../model/element/ElementTypes";
import { moveElement } from "../../model/slide/SlideActions";
import styles from "./SlideElement.module.css";

type ElementProps = {
  slideId?: string;
  id?: string;

  element: ElementType;
  selected?: boolean;
  onClick?: (onCtrl?: boolean) => void;
};

export function SlideElement({
  element,
  selected,
  id,
  slideId,
  onClick,
}: ElementProps) {
  const [isMoving, setIsMoving] = useState(false);
  const [isMulti, setMuli] = useState(false);

  const elementRef = useRef(null);

  const position = useDragAndDrop(elementRef, element.position, (state) => {
    setIsMoving(state);
    state && onClick && onClick(isMulti);
  });

  useEffect(() => {
    selected && dispatch(moveElement, true, slideId, id, position);
  }, [isMoving]);

  const isText = element.data.hasOwnProperty("font");
  const isImage = element.data.hasOwnProperty("url");

  return (
    <div
      className={`${styles.element} ${selected && styles.selected} ${
        isMoving && styles.moving
      }`}
      style={{
        width: element.width < 0 ? "auto" : element.width,
        height: element.height < 0 ? "auto" : element.height,
        top: position.y,
        left: position.x,
      }}
      onClick={(event) => {
        event.stopPropagation();
        onClick && onClick(event.ctrlKey);
        setMuli(event.ctrlKey);
      }}
      ref={elementRef}
    >
      {selected && (
        <>
          <span className={`${styles.resizer} ${styles.lt}`} />
          <span className={`${styles.resizer} ${styles.lb}`} />
          <span className={`${styles.resizer} ${styles.rt}`} />
          <span className={`${styles.resizer} ${styles.rb}`} />
        </>
      )}
      {isText && <p>{element?.data?.content}</p>}
      {isImage && <img src={element.data.url} alt="" />}
    </div>
  );
}
