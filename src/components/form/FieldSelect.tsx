import { Field } from "./Field";
import styles from "./Field.module.css";

type FieldSelectProps = {
  label?: string;
  items?: string[];
};

export function FieldSelect({ label, items }: FieldSelectProps) {
  return (
    <Field label={label}>
      <select className={styles.fielSelect}>
        <option>Не выбрано</option>
        {items?.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </Field>
  );
}
