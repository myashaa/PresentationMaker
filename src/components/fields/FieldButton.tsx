import { Field } from "./Field";
import styles from "./Field.module.css";

type FieldButtonProps = {
  label?: string;
  onChange?: () => void;
};

export function FieldButton({ label, onChange }: FieldButtonProps) {
  return (
    <Field label={label}>
      <button className={styles.fieldButton} onClick={onChange}>Выбрать</button>
    </Field>
  );
}
