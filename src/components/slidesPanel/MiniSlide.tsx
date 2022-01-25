import { MouseEvent, useRef } from "react";
import { COLORS } from "../../colors";
import { TElement } from "../../model/element/ElementTypes";
import { TBackground } from "../../model/slide/SlideTypes";
import { Element } from "../slide/Element";

import styles from "./MiniSlide.module.css";

type MiniSlideProps = {
  elements?: TElement[];
  background?: TBackground;
  index?: number;
  selected?: boolean;
  onSelect?: () => void;
  onMultiSelect?: () => void;
  onDelete?: () => void;
};

export function MiniSlide({
  index,
  selected,
  onSelect,
  onMultiSelect,
  onDelete,
  elements,
  background,
}: MiniSlideProps) {
  const slideRef = useRef<HTMLDivElement>(null);

  const handleDelete = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onDelete && onDelete();
  };

  const handleSelect = (e: MouseEvent<HTMLDivElement>) => {
    if (e.ctrlKey) {
      onMultiSelect && onMultiSelect();
    } else {
      onSelect && onSelect();
    }
  };

  const style = {
    backgroundColor: background?.color ? background.color : COLORS.white,
    backgroundImage: `url(${background?.picture?.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const elementList =
    elements?.map((element) => (
      <Element key={element.id} element={element} view />
    )) || [];

  return (
    <div
      ref={slideRef}
      className={`${styles.slidePreview} ${
        selected && styles.slidePreviewActive
      }`}
      onClick={handleSelect}
    >
      <span className={styles.slideIndex}>{index}</span>
      <div className={styles.slideMiniature} style={style}>
        {selected && (
          <span
            className={`${styles.slideRemove} material-icons`}
            onClick={handleDelete}
          >
            close
          </span>
        )}
        <div className={styles.slidePreviewMini}>{elementList}</div>
      </div>
    </div>
  );
}
