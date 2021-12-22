import { useEffect, useRef, useState } from "react";

import styles from "./TextElement.module.css";

type TextElementProps = {
  text: string;
  enableEdit?: boolean;
  onChange?: (text: string) => void;
};

export const TextElement = ({ text, onChange }: TextElementProps) => {
  const [value, setValue] = useState(text);
  const [isEdit, setEditMode] = useState(false);

  const editRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    isEdit && editRef.current?.focus();
    !isEdit && setValue(text);
  }, [isEdit]);

  const handleEdit = () => {
    setEditMode(false);
    onChange && onChange(value);
  };

  return (
    <>
      {!isEdit && (
        <p
          className={styles.text}
          onDoubleClick={(e) => {
            isEdit && setEditMode(true);
          }}
        >
          {text}
        </p>
      )}
      {isEdit && (
        <textarea
          className={styles.editor}
          ref={editRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={handleEdit}
          onKeyPress={(e) => {
            e.key === "Enter" && handleEdit();
          }}
        />
      )}
    </>
  );
};
