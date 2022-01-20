import { CSSProperties } from "react";
import { CheckBox } from "../fields/CheckBox";
import styles from "./CheckInput.module.css";

type Props = {
  label: string;
  checked?: boolean;
  style?: CSSProperties;
  onChange?: () => void;
};

export function CheckInput({ label, checked, style, onChange }: Props) {
  return (
    <label className={styles.container} style={style} onClick={onChange}>
      <div className={styles.label}>{label}</div>
      <CheckBox checked={checked} />
    </label>
  );
}
