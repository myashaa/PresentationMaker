import { useRef } from "react";
import { COLORS } from "../../colors";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { TElement } from "../../model/element/ElementTypes";
import { TBackground } from "../../model/slide/SlideTypes";
import { Camera } from "../slide/Camera";
import { FigureElement } from "../slide/figures/FigureElement";

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

  const style = {
    backgroundColor: background?.color ? background.color : COLORS.white,
    backgroundImage: `url(${background?.picture?.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      ref={slideRef}
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
      <div className={styles.slideMiniature} style={style}>
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
        <div className={styles.slidePreviewMini}>
          {elements &&
            elements.map((element, index) => {
              const style = {
                top: element.position.y,
                left: element.position.x,
                width: element.width,
                height: element.height,
              };

              if ("image" in element.data) {
                return (
                  <img
                    style={{ ...style, objectFit: "cover" }}
                    key={element.id}
                    src={element.data.image}
                    alt=""
                  />
                );
              }

              if ("text" in element.data) {
                const fontStyle = {
                  margin: 0,
                  fontFamily: element.data.font.family,
                  fontSize: element.data.font.size,
                  color: element.data.font.color,
                  fontWeight: element.data.font.bold ? "bold" : "400",
                  textDecoration: element.data.font.underline
                    ? "underline"
                    : "none",
                  fontStyle: element.data.font.italic ? "italic" : "normal",
                };

                return (
                  <p key={element.id} style={{ ...style, ...fontStyle }}>
                    {element.data.text}
                  </p>
                );
              }

              if ("figure" in element.data) {
                return (
                  <div key={element.id} style={style}>
                    <FigureElement
                      figure={element.data.figure}
                      width={element.width}
                      height={element.height}
                      fill={element.data.fill}
                    />
                  </div>
                );
              }

              if ("video" in element.data) {
                return <Camera key={element.id} />;
              }
            })}
        </div>
      </div>
    </div>
  );
}
