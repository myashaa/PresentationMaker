import { CheckBox } from "./CheckBox";
import { Field } from "./Field";

type FieldCheckboxProps = {
  label?: string;
  checked?: boolean;
  onChange?: () => void;
};

export function FieldCheckbox({
  label,
  checked,
  onChange,
}: FieldCheckboxProps) {
  return (
    <Field label={label}>
      <CheckBox checked={checked} onChecked={onChange} />
    </Field>
  );
}
