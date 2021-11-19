import styles from "./CheckBox.module.css";

type CheckBoxProps = {
  checked?: boolean;
  onChecked?: () => void;
};

export function CheckBox({ checked, onChecked }: CheckBoxProps) {
  return (
    <div
      className={`${styles.checkBox} ${checked && styles.checked}`}
      onClick={onChecked}
    >
      {checked && <span className={styles.checkMark}></span>}
    </div>
  );
}
