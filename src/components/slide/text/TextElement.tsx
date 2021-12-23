import { useEffect, useRef, useState } from "react";

import styles from "./TextElement.module.css";

type TextElementProps = {
  text: string;
  isEdit?: boolean;
  onChange?: (text: string) => void;
};

export const TextElement = ({ text, isEdit, onChange }: TextElementProps) => {
  const [value, setValue] = useState(text);

  const handleEdit = () => {
    onChange && onChange(value);
  };

  return (
    <>
      {!isEdit && <p className={styles.text}>{text}</p>}
      {isEdit && (
        <textarea
          className={styles.editor}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyPress={(e) => {
            e.key === "Enter" && handleEdit();
          }}
          onBlur={() => {
            handleEdit();
          }}
        />
      )}
    </>
  );
};
