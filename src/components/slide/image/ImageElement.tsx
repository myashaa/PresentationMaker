import styles from "./ImageElement.module.css";

type Props = {
  src: string;
};

export function ImageElement({ src }: Props) {
  return <img className={styles.image} src={src} alt="" draggable="false" />;
}
