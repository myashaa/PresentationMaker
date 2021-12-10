import styles from "./PopupHeader.module.css";

type PopupHeaderProps = {
  title?: string;
};

export function PopupHeader({ title }: PopupHeaderProps) {
  return (
    <div className={styles.container}>
      <span className={`${styles.exit} material-icons`}>
        close
      </span>
      <p className={styles.title}>{title}</p>
    </div>
  );
}
