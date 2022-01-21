import React, { useEffect, useRef } from "react";
import { CSSProperties } from "react";
import { useHorizontalMove } from "./../../../hooks/useHorizontalMove";

import styles from "./ColorPicker.module.css";

type Props = {
  value: number;
  onChange: (value: number) => void;
  onSubmit: () => void;
  style?: CSSProperties;
};

export function SaturationPicker({ value, onChange, onSubmit, style }: Props) {
  const hueRef = useRef<HTMLDivElement>(null);
  const { x } = useHorizontalMove(hueRef, value, 9, 0, 201);

  useEffect(() => {
    const saturation = (x / 2 + 4) | 0;
    onChange(saturation);
  }, [x, onChange]);

  return (
    <div className={styles.saturation} style={style}>
      <div
        ref={hueRef}
        style={{ left: x }}
        className={styles.huePicker}
        onMouseUp={onSubmit}
      />
    </div>
  );
}
