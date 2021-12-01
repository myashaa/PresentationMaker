import { useState } from "react";
import { dispatch } from "../../editor";
import { Element as ElementType } from "../../model/element/ElementTypes";
import { setText } from "../../model/element/TextActions";
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

  return (
    <div
      className={`${styles.element} ${selected && styles.selected}`}
      style={{
        width: element.width < 0 ? "auto" : element.width,
        height: element.height < 0 ? "auto" : element.height,
        top: element.position.y,
        left: element.position.x,
      }}
      onClick={(event) => {
        event.stopPropagation();
        onClick && onClick(event.ctrlKey);
      }}
    >
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
