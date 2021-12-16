import styles from "./PopupSlider.module.css";

type PopupSliderProps = {
  title?: string;
};

export function PopupSlider({ title }: PopupSliderProps) {
  return (
    <div className={styles.slider}>
      <div className={styles.items}>
        <div className={styles.item}></div>
      </div>
      <a className={styles.buttonl}>
        <span className={`material-icons ${styles.icon}`}>arrow_back_ios</span>
      </a>
      <a className={styles.buttonr}>
        <span className={`material-icons ${styles.icon}`}>arrow_forward_ios</span>
      </a>
    </div>
  );
}
