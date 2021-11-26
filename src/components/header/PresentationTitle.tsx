import { useState } from "react";

import styles from "./PresentationTitle.module.css";

type PresentationTitleProps = {
  title: string;
  onSubmit?: (value: string) => void;
};

// не выносит субмит
export function PresentationTitle({ title, onSubmit }: PresentationTitleProps) {
  const [value, setValue] = useState(title);
  const [isActive, setActive] = useState(false);

  return (
    <input
      className={styles.presentationTitle}
      value={value}
      onFocus={(e) => {
        setActive(true);
        e.currentTarget.select();
      }}
      onBlur={() => {
        setActive(false);
        onSubmit && onSubmit(value);
      }}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={(e) => {
        setActive(false);
        if (e.key === "Enter") {
          onSubmit && onSubmit(value);
          e.currentTarget.blur();
        }
      }}
    />
  );
}
