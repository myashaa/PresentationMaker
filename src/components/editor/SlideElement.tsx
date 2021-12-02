import { RefObject, useEffect, useRef, useState } from "react";
import { dispatch } from "../../editor";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { Element as ElementType } from "../../model/element/ElementTypes";
import { setText } from "../../model/element/TextActions";
import { moveElement } from "../../model/slide/SlideActions";
import styles from "./SlideElement.module.css";

type ElementProps = {
  slideId?: number;
  id?: number;

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
  const [isEditMode, setEditMode] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isMulti, setMuli] = useState(false);

  const elementRef = useRef(null);

  const position = useDragAndDrop(elementRef, element.position, (state) => {
    setIsMoving(state);
    state && onClick && onClick(isMulti);
  });

  useEffect(() => {
    selected && dispatch(moveElement, slideId, id, position);
  }, [isMoving]);

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
      {element?.text && (
        <p
          onDoubleClick={() => setEditMode(true)}
          contentEditable={isEditMode}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              dispatch(setText, slideId, id, "e.");
              setEditMode(false);
            }
          }}
        >
          {element?.text?.content}
        </p>
      )}
    </div>
  );
}
