import { Field } from "./Field";
import styles from "./Field.module.css";
import { Select } from "./select/Select";

type FieldSelectProps = {
  label?: string;
  value?: string;
  items: string[];
  onChange?: (value: string) => void;
};

export function FieldSelect({
  label,
  items,
  value,
  onChange,
}: FieldSelectProps) {
  return (
    <Field label={label}>
      <Select
        values={items}
        current={value}
        onClick={(value) => onChange && onChange(value)}
      />
    </Field>
  );
}
