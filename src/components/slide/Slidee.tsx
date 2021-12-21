import { COLORS } from "../../colors";
import { Slide as SlideType } from "../../model/slide/SlideTypes";
import { Element as ElementType } from "../../model/element/ElementTypes";
import { classnames } from "../../utils";
import styles from "./Slide.module.css";

type SlideProps = {
  slide: SlideType;
  elements: ElementType[];
  onClick?: (onCtrl?: boolean) => void;
};

export function Slidee({ slide, elements, onClick }: SlideProps) {
  const style = {
    backgroundColor: slide.background?.color ? slide.background.color : COLORS.lightGrey,
  };

  return (
    <div
      className={classnames(styles.slide)}
      style={style}
      onClick={(event) => {
        event.stopPropagation();
        onClick && onClick(event.ctrlKey);
      }}
    >
    </div>
  );
}
