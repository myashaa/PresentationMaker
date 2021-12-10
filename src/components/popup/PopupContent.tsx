import styles from "./PopupContent.module.css";

type PopupContentProps = {
  text?: string;
};

export function PopupContent({ text }: PopupContentProps) {
  return (
    <div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
