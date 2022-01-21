import { CSSProperties, useState } from "react";
import { uuid4 } from "../../utils";
import styles from "./Select.module.css";

type SelectProps = {
  items: string[];
  value: string;
  style?: CSSProperties;
  onChange?: (value: string) => void;
};

export function Select({ items, value, style, onChange }: SelectProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <label className={styles.container} style={style} onClick={handleExpand}>
      <span className={styles.input}>{value}</span>
      <span className="material-icons" style={{ color: "#c7c7c7" }}>
        expand_more
      </span>

      {expanded && (
        <SelectPopup>
          {items.map((item) => (
            <SelectItem key={uuid4()} label={item} onSelect={onChange} />
          ))}
        </SelectPopup>
      )}
    </label>
  );
}

type SelectPopupProps = {
  children?: React.ReactNode;
};

export function SelectPopup({ children }: SelectPopupProps) {
  return <div className={styles.popup}>{children}</div>;
}

type ItemProps = {
  label: string;
  onSelect?: (value: string) => void;
};

export function SelectItem({ label, onSelect }: ItemProps) {
  const handleSelect = () => {
    onSelect && onSelect(label);
  };

  return (
    <div className={styles.item} onClick={handleSelect}>
      {label}
    </div>
  );
}
