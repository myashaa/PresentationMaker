import { useEffect, useRef, useState } from "react";
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
  const [scale, setScale] = useState([1, 1]);

  const slide: TSlide = at(slides, slideIndex);

  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current) {
      const { width, height } = playerRef.current?.getBoundingClientRect();
      const scaleX = Math.min(
        window.innerWidth / width,
        window.innerHeight / height
      );
      const scaleY = scaleX;

      setScale([scaleX, scaleY]);
    }
  }, []);

  useHotKey((key) => {
    if (key === "Escape") {
      dispatch(changeMode, false, EMode.edit);
    }

    if (key === "ArrowLeft") {
      prevSlide();
    }

    if (key === "ArrowRight") {
      nextSlide();
    }
  });

  const nextSlide = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      dispatch(changeMode, false, EMode.edit);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const style = {
    backgroundColor: slide.background?.color,
    backgroundImage: `url(${slide.background?.picture?.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: `scale(${scale[0]})`,
  };

  return (
    <>
      <PlayerControls
        onClose={() => dispatch(changeMode, false, EMode.edit)}
        onBack={prevSlide}
        onForward={nextSlide}
        label={`${slideIndex + 1} / ${slides.length}`}
      />
      <div ref={playerRef} className={styles.player} style={style}>
        {slide.elementList.map((element) => {
          const style = {
            top: element.position.y,
            left: element.position.x,
            width: element.width,
            height: element.height,
            backgroundColor: element.color,
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
              <p style={{ ...style, ...fontStyle }}>{element.data.text}</p>
            );
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
    </>
  );
}

type ControlsProps = {
  onClose?: () => void;
  onBack?: () => void;
  onForward?: () => void;
  label?: string;
};

export const PlayerControls = ({
  label,
  onBack,
  onClose,
  onForward,
}: ControlsProps) => {
  return (
    <div className={styles.controls}>
      <button
        className={`${styles.controlButton} material-icons`}
        onClick={onClose}
      >
        close
      </button>
      <button
        className={`${styles.controlButton} material-icons`}
        onClick={onBack}
      >
        arrow_back
      </button>
      <span className={styles.controlsLabel}>{label}</span>
      <button
        className={`${styles.controlButton} material-icons`}
        onClick={onForward}
      >
        arrow_forward
      </button>
    </div>
  );
};
