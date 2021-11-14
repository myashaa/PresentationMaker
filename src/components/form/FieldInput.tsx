import styles from "./Field.module.css";

type FieldInputProps = {
  label?: string;
  type?: "text" | "number";
  value?: string;
  onChange?: (value: string) => void;
};

export function FieldInput({ label, type, value, onChange }: FieldInputProps) {
  return (
    <div className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      <div className={styles.fieldValue}>
        <input
          className={styles.fieldInput}
          type={type}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        <span className={styles.fieldLabel}>px</span>
      </div>
    </div>
  );
}
