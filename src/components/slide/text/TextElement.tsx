import { useEffect, useRef, useState } from "react";
import { TText } from "../../../model/element/TextTypes";

import styles from "./TextElement.module.css";

type TextElementProps = {
  text: TText;
  isEdit?: boolean;
  onChange?: (text: string) => void;
};

export const TextElement = ({ text, isEdit, onChange }: TextElementProps) => {
  const [value, setValue] = useState(text.text);

  const handleEdit = () => {
    onChange && onChange(value);
  };

  const elementStyle = {
    fontFamily: text.font.family,
    fontSize: text.font.size,
    color: text.font.color,
    fontWeight: text.font.bold ? "bold" : "400",
    textDecoration: text.font.underline ? "underline" : "none",
    fontStyle: text.font.italic ? "italic" : "normal",
  };

  return (
    <>
      {!isEdit && (
        <p style={elementStyle} className={styles.text}>
          {text.text}
        </p>
      )}
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
