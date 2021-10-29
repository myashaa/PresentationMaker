import styles from "./Field.module.css";

type FieldProps = {
  label?: string;
  type?: "text" | "number" | "checkbox";
  sign?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function Field({ label, type, sign, value, onChange }: FieldProps) {
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
        {sign && <span className={styles.fieldSign}>{sign}</span>}
      </div>
    </div>
  );
}
