import styles from "./Popup.module.css";
import Image from "../../assets/cat.png"

type PopupProps = {
  title?: string;
  text?: string;
};

export function Popup({ title, text }: PopupProps) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <button className={styles.exit}><span className={styles.exitText}>+</span></button>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Сохранить</button>
          <button className={styles.button}>Отменить</button>
        </div>
        <img src={Image} className={styles.image} />
      </div>
    </div>
  );
}
