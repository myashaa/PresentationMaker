import styles from "./PopupFooter.module.css";
import Image from "../../assets/cat.png"

type PopupFooterProps = {
  leftButton?: string;
  rightButton?: string;
};

export function PopupFooter({ leftButton, rightButton }: PopupFooterProps) {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.button}>{leftButton}</button>
        <button className={styles.button}>{rightButton}</button>
      </div>
      <img src={Image} className={styles.image} />
    </div>
  );
}
