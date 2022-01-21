import { EFilter } from "../../../model/element/ImageTypes";
import styles from "./ImageElement.module.css";

type Props = {
  src: string;
  filter?: EFilter;
};

export function ImageElement({ src, filter }: Props) {
  const filterSwitch = (f: EFilter = EFilter.none) => {
    switch (f) {
      case EFilter.blur:
        return blurStyle;
      case EFilter.baw:
        return grayStyle;
      default:
        return {};
    }
  };

  const blurStyle = {
    filter: "blur(2px)",
  };

  const grayStyle = {
    filter: "grayscale(1)",
  };

  const style = filterSwitch(filter);

  return (
    <img
      className={styles.image}
      src={src}
      alt=""
      draggable="false"
      style={style}
    />
  );
}
