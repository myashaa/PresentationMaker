import styles from "./Field.module.css";

type FieldProps = {
  label?: string;
  children?: React.ReactNode;
};

export function Field({ label, children }: FieldProps) {
  return (
    <div className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      <div className={styles.fieldValue}>{children}</div>
    </div>
  );
}
