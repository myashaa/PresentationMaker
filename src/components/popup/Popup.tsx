import styles from "./Popup.module.css";
import { PopupContent } from "./PopupContent";
import { PopupFooter } from "./PopupFooter";
import { PopupHeader } from "./PopupHeader";
import Image from "../../assets/cat.png"
import { PopupSlider } from "./PopupSlider";

type PopupProps = {
  title?: string;
  text?: string;
  needIcon?: boolean;
  needSlider?: boolean;
  needButtons?: boolean;
  leftButton?: string;
  rightButton?: string;
  needCat?: boolean;
};

export function Popup({ title, text, needIcon, needSlider, needButtons, leftButton, rightButton, needCat }: PopupProps) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <PopupHeader title={title} />
        <PopupContent text={text} />
        {needIcon ? <div className={styles.iconWrapper}><span className={`material-icons ${styles.icon}`}>arrow_downward</span></div> : <div></div>}
        {needSlider ? <PopupSlider /> : <div></div>}
        {needButtons ? <PopupFooter leftButton={leftButton} rightButton={rightButton} /> : <div></div>}
        {needCat ? <img src={Image} className={styles.image} /> : <div></div>}
      </div>
    </div>
  );
}