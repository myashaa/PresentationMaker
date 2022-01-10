import React, { useEffect, useRef } from "react";
import { useHorizontalMove } from "./../../../hooks/useHorizontalMove";
import styles from "./ColorPicker.module.css";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export function LigthnessPicker({ value, onChange }: Props) {
  const hueRef = useRef<HTMLDivElement>(null);
  const { x } = useHorizontalMove(hueRef, value, 9, 0, 200);

  useEffect(() => {
    const ligthness = (x / 2 + 4) | 0;
    onChange(ligthness);
  }, [x, onChange]);

  return (
    <>
      <div className={styles.ligthness}>
        <div ref={hueRef} style={{ left: x }} className={styles.huePicker} />
      </div>
    </>
  );
}
