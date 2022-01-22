import { ChangeEvent, CSSProperties, useEffect, useState } from "react";
import { ColorPicker } from "../fields/colorPicker/ColorPicker";
import styles from "./ColorInput.module.css";

type Props = {
  label?: string;
  value?: string;
  style?: CSSProperties;
  onChange?: (value: string) => void;
};

export function ColorInput({ label, value, style, onChange }: Props) {
  const [text, setText] = useState(value || "#ffffff");
  const [pickerVisible, setPickerVisible] = useState(false);

  useEffect(() => {
    setText(value || "#ffffff");
  }, [value]);

  const handlePicker = () => {
    setPickerVisible(!pickerVisible);
    handleInput();
  };

  const handleChangeColor = (color: string) => {
    setText(color);
  };

  const handleInput = () => {
    onChange && onChange(text);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <label className={styles.container} style={style}>
      {!!label && <div className={styles.label}>{label}</div>}
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={handleChange}
        onBlur={handleInput}
      />
      <div
        className={styles.colorPickerDot}
        style={{ backgroundColor: value }}
        onClick={handlePicker}
      />
      {pickerVisible && (
        <ColorPicker
          value={text}
          onClose={handlePicker}
          onChange={handleChangeColor}
          onSubmit={handleInput}
        />
      )}
    </label>
  );
}
