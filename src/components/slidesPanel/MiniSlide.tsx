import { TElement } from "../../model/element/ElementTypes";
import { TBackground } from "../../model/slide/SlideTypes";

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
  return (
    <div
      className={`${styles.slidePreview} ${
        selected && styles.slidePreviewActive
      }`}
      onClick={(event) => {
        if (event.ctrlKey) {
          onMultiSelect && onMultiSelect();
        } else {
          onSelect && onSelect();
        }
      }}
    >
      <span className={styles.slideIndex}>{index}</span>
      <div className={styles.slideMiniature}>
        {selected && (
          <span
            className={`${styles.slideRemove} material-icons`}
            onClick={(e) => {
              e.stopPropagation();
              onDelete && onDelete();
            }}
          >
            close
          </span>
        )}
        {/* <div className={styles.slidePreviewMini}>
          {elements &&
            elements.map((element, index) => (
              <SlideElement key={index} element={element} />
            ))}
        </div> */}
      </div>
    </div>
  );
}
