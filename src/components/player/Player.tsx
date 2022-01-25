import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHotKey } from "../../hooks/useHotKey";
import { TSlide } from "../../model/slide/SlideTypes";
import { AppDispatch } from "../../redux/store";
import { at } from "../../utils";
import { Element } from "../slide/Element";

import styles from "./Player.module.css";

type PlayerProps = {
  slides: TSlide[];
  setPreview: () => void;
};

function Player({ slides, setPreview }: PlayerProps) {
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
      editMode();
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
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const editMode = () => {
    setPreview();
  };

  const style = {
    backgroundColor: slide.background?.color,
    backgroundImage: `url(${slide.background?.picture?.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: `scale(${scale[0]})`,
  };

  const elements = slide.elementList.map((element) => (
    <Element key={element.id} element={element} view />
  ));

  return (
    <div className={styles.playerContainer}>
      <PlayerControls
        onClose={editMode}
        onBack={prevSlide}
        onForward={nextSlide}
        label={`${slideIndex + 1} / ${slides.length}`}
      />
      <div ref={playerRef} className={styles.player} style={style}>
        {elements}
      </div>
    </div>
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

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setPreview: () =>
      dispatch({
        type: "SET_EDIT_MODE",
        payload: null,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Player);
