import styles from "./Popup.module.css";
import { PopupContent } from "./PopupContent";
import { PopupFooter } from "./PopupFooter";
import { PopupHeader } from "./PopupHeader";

type PopupProps = {
  title?: string;
  text?: string;
  leftButton?: string;
  rightButton?: string;
};

export function Popup({ title, text, leftButton, rightButton }: PopupProps) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <PopupHeader title={title} />
        <PopupContent text={text} />
        <PopupFooter leftButton={leftButton} rightButton={rightButton} />
      </div>
    </div>
  );
}
