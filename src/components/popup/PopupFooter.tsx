import styles from "./PopupFooter.module.css";

type PopupFooterProps = {
  leftButton?: string;
  rightButton?: string;
};

export function PopupFooter({ leftButton, rightButton }: PopupFooterProps) {
  return (
    <div className={styles.buttons}>
      <button className={styles.button}>{leftButton}</button>
      <button className={styles.button}>{rightButton}</button>
    </div>
  );
}