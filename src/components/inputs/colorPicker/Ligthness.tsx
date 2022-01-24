import { useEffect, useRef } from "react";
import { useHorizontalMove } from "../../../hooks/useHorizontalMove";
import { CSSProperties } from "react";
import styles from "./ColorPicker.module.css";

type Props = {
  value: number;
  onChange: (value: number) => void;
  onSubmit: () => void;
  style?: CSSProperties;
};

export function LigthnessPicker({ value, onChange, onSubmit, style }: Props) {
  const hueRef = useRef<HTMLDivElement>(null);
  const { x } = useHorizontalMove(hueRef, value, 9, 0, 201);

  useEffect(() => {
    const ligthness = (x / 2 + 4) | 0;
    onChange(ligthness);
  }, [x, onChange]);

  return (
    <>
      <div className={styles.ligthness} style={style}>
        <div
          ref={hueRef}
          style={{ left: x }}
          className={styles.huePicker}
          onMouseUp={onSubmit}
        />
      </div>
    </>
  );
}
