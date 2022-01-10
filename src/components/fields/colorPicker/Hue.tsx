import React, { useEffect, useRef } from "react";
import { useHorizontalMove } from "./../../../hooks/useHorizontalMove";
import styles from "./ColorPicker.module.css";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export function HuePicker({ value, onChange }: Props) {
  const hueRef = useRef<HTMLDivElement>(null);
  const { x } = useHorizontalMove(hueRef, value, 9, 0, 200);

  useEffect(() => {
    const hue = ((359 * x) / 200 + 17) | 0;
    onChange(hue);
  }, [x, onChange]);

  return (
    <>
      <div className={styles.hue}>
        <div ref={hueRef} style={{ left: x }} className={styles.huePicker} />
      </div>
    </>
  );
}
