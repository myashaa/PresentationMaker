import { useRef, useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

import styles from "./Select.module.css";

type SelectProps = {
  values: string[];
  current?: string;
  onClick?: (value: string) => void;
};

export const Select = ({ values, current, onClick }: SelectProps) => {
  const [visible, setVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => {
    setVisible(false);
  });

  return (
    <div className={styles.content}>
      <button className={styles.button} onClick={() => setVisible(!visible)}>
        <span className={styles.buttonLabel}>{current || values[0]}</span>
        <span className="material-icons">expand_more</span>
      </button>

      {visible && (
        <div ref={menuRef} className={styles.selectContent}>
          {values.map((item) => (
            <div
              className={styles.selectItem}
              onClick={() => {
                onClick && onClick(item);
                setVisible(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
