import React, { useEffect, useRef, useState } from "react";

import { HuePicker } from "./Hue";
import { LigthnessPicker } from "./Ligthness";
import { SaturationPicker } from "./Saturation";

import styles from "./ColorPicker.module.css";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

type ColorPickerProps = {
  onClick?: (value: string) => void;
};

export const ColorPicker = ({ onClick }: ColorPickerProps) => {
  const [visible, setVisible] = useState(false);
  const [hue, setHue] = useState(20);
  const [ligthness, setLigthness] = useState(20);
  const [saturation, setSaturation] = useState(20);

  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => {
    setVisible(false);
  });

  const style = {
  color: "#888888",
  cursor: "pointer",
  marginLeft: "3px"
};

  return (
    <div className={styles.container}>
      <span className={`material-icons ${styles.headerFormIcon}`} style={style} onClick={() => setVisible(!visible)}>palette</span>

      {visible && (
        <div className={styles.content}>
          <div
            className={styles.color}
            style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${ligthness}%)` }}
          />
          <p>Тон {hue}</p>
          <HuePicker value={hue} onChange={setHue} />
          <p>Яркость {ligthness}%</p>
          <LigthnessPicker value={ligthness} onChange={setLigthness} />
          <p>Насыщенность {saturation}%</p>
          <SaturationPicker value={saturation} onChange={setSaturation} />
        </div>
      )}
    </div>
  );
};