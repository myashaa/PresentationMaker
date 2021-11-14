import styles from "./Field.module.css";

type FieldSelectProps = {
  label?: string;
  items?: string[];
};

export function FieldSelect({ label, items }: FieldSelectProps) {
  return (
    <div className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      <select className={styles.fielSelect}>
        {items?.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}
