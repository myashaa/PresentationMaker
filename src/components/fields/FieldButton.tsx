import { Field } from "./Field";
import styles from "./Field.module.css";

type FieldButtonProps = {
  label?: string;
};

export function FieldButton({ label }: FieldButtonProps) {
  return (
    <Field label={label}>
      <button className={styles.fieldButton}>Выбрать</button>
    </Field>
  );
}
