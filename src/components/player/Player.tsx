import { useState } from "react";
import { COLORS } from "../../colors";
import { dispatch } from "../../editor";
import { useHotKey } from "../../hooks/useHotKey";
import { changeMode } from "../../model/editor/EditorActions";
import { EMode } from "../../model/editor/EditorTypes";
import { TPresentation } from "../../model/presentation/PresentationTypes";
import { TSlide } from "../../model/slide/SlideTypes";
import { at } from "../../utils";
import { Element } from "../slide/Element";
import { FigureElement } from "../slide/figures/FigureElement";
import { ImageElement } from "../slide/image/ImageElement";
import { TextElement } from "../slide/text/TextElement";

import styles from "./Player.module.css";

type PlayerProps = {
  slides: TSlide[];
};

export function Player({ slides }: PlayerProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  const slide: TSlide = at(slides, slideIndex);

  useHotKey((key) => {
    if (key === "Escape") {
      dispatch(changeMode, false, EMode.edit);
    }
    console.log(key);

    if (key === "ArrowLeft" && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }

    if (key === "ArrowRight" && slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  });

  const style = {
    backgroundColor: slide.background?.color
      ? slide.background.color
      : COLORS.white,
    backgroundImage: `url(${slide.background?.picture?.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={styles.player} style={style}>
      {slide.elementList.map((element, index) => {
        const style = {
          top: element.position.y,
          left: element.position.x,
          width: element.width,
          height: element.height,
          backgroundColor: element.color ? element.color : COLORS.white,
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
            textDecoration: element.data.font.underline ? "underline" : "none",
            fontStyle: element.data.font.italic ? "italic" : "normal",
          };

          return <p style={{ ...style, ...fontStyle }}>{element.data.text}</p>;
        }

        if ("figure" in element.data) {
          return (
            <div style={style}>
              <FigureElement
                figure={element.data.figure}
                width={element.width}
                height={element.height}
                fill={element.data.fill}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
