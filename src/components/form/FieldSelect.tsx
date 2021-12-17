import { Field } from "./Field";
import styles from "./Field.module.css";

type FieldSelectProps = {
  label?: string;
  items?: string[];
  onChange?: (value: string) => void
};

export function FieldSelect({ label, items, onChange }: FieldSelectProps) {
  return (
    <Field label={label}>
      <select className={styles.fielSelect}>
        <option>Не выбрано</option>
        {items?.map((item, index) => (
          <option key={index} onClick={() => onChange && onChange(item)}>{item}</option>
        ))}
      </select>
    </Field>
  );
}
