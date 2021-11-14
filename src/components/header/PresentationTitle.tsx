import React, { useState } from "react";

import styles from "./PresentationTitle.module.css";

type PresentationTitleProps = {
  title: string;
  onSubmit?: (value: string) => void;
};

export function PresentationTitle({ title, onSubmit }: PresentationTitleProps) {
  const [value, setValue] = useState(title);
  const [isAction, setActive] = useState(false);

  return (
    <input
      className={styles.presentationTitle}
      style={{ borderColor: isAction ? "#fff2b2" : "#FFF" }}
      value={value}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={(e) => {
        setActive(false);
        if (e.key === "Enter") {
          onSubmit && onSubmit(value);
        }
      }}
    />
  );
}
