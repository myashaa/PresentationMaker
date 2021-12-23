import { Field } from "./Field";
import styles from "./Field.module.css";

type FieldInputProps = {
  label?: string;
  type?: "text" | "number";
  value?: string;
  onChange?: (value: string) => void;
};

export function FieldInput({ label, type, value, onChange }: FieldInputProps) {
  return (
    <Field label={label}>
      <input
        className={styles.fieldInput}
        type={type}
        value={value}
        min={"0"}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      {type === "number" && <span className={styles.fieldLabel}>px</span>}
    </Field>
  );
}