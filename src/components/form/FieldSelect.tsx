import styles from "./Field.module.css";

type FieldSelectProps = {
  label?: string;
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  item6?: string;
  item7?: string;
  item8?: string;
  item9?: string;
  item10?: string;
};

type ItemProps = {
  text: string;
};

export function FieldSelect({ label, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10 }: FieldSelectProps) {
  return (
    <div className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      <select className={styles.fielSelect}>
        <option>{item1}</option>
        <option>{item2}</option>
        <option>{item3}</option>
        <option>{item4}</option>
        <option>{item5}</option>
        <option>{item6}</option>
        <option>{item7}</option>
        <option>{item8}</option>
        <option>{item9}</option>
        <option>{item10}</option>
      </select>
    </div>
  );
}
