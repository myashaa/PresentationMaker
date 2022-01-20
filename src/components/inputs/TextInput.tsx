import {
  ChangeEvent,
  CSSProperties,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import styles from "./TextInput.module.css";

type Props = {
  label?: string;
  value?: string;
  style?: CSSProperties;
  onChange?: (value: string) => void;
};

export function TextInput({ label, value, style, onChange }: Props) {
  const [text, setText] = useState(value || "");

  useEffect(() => {
    setText(value || "");
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    onChange && onChange(text);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
      handleBlur();
    }
  };

  return (
    <label className={styles.container} style={style}>
      {!!label && <div className={styles.label}>{label}</div>}
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      />
    </label>
  );
}
