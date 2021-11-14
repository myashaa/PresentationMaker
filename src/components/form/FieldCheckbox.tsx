import styles from "./Field.module.css";

type FieldCheckboxProps = {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function FieldCheckbox({ label, value, onChange }: FieldCheckboxProps) {
  return (
    <div className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      <div className={styles.fieldValue}>
        <input
          className={styles.fieldCheckbox}
          type= "checkbox"
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
