import React, { useEffect, useRef, useState } from "react";

import { HuePicker } from "./Hue";
import { LigthnessPicker } from "./Ligthness";
import { SaturationPicker } from "./Saturation";

import styles from "./ColorPicker.module.css";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { hexToHSL } from "../../../utils";

type ColorPickerProps = {
  value?: string;
  onClick?: (value: string) => void;
  onChange?: (value: {h: number, s: number, l: number}) => void;
};

export const ColorPicker = ({ onChange, value }: ColorPickerProps) => {
  const [visible, setVisible] = useState(false);
  const hslValue = hexToHSL(value || "")
  
  const [hue, setHue] = useState(hslValue[0] || 101);
  const [ligthness, setLigthness] = useState(hslValue[2] || 101);
  const [saturation, setSaturation] = useState(hslValue[1] || 101);

  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => {
    setVisible(false);
  });

  const style = {
  color: "#888888",
  cursor: "pointer",
  marginLeft: "3px"
  };
  
  const color = `hsl(${hue}, ${saturation}%, ${ligthness}%)`;

  useEffect(() => {
    onChange && onChange({h: hue, s: saturation, l: ligthness})
  }, [hue, saturation, ligthness])

  return (
    <div className={styles.container}>
      <span className={`material-icons ${styles.headerFormIcon}`} style={style} onClick={() => setVisible(!visible)}>palette</span>

      {visible && (
        <div className={styles.content}>
          <div className={styles.info}>
            <div
              className={styles.color}
              style={{ backgroundColor: color }}
            />
            <div className={styles.values}>
              <p style={{fontSize: "14px"}}>{hue} тон</p>
              <p style={{fontSize: "14px"}}>{saturation}% насыщенность</p>
              <p style={{fontSize: "14px"}}>{ligthness}% яркость</p>
            </div>
          </div>
          <div className={styles.value}>
            <p style={{fontSize: "14px"}}>H</p>
            <HuePicker value={hue} onChange={setHue} />
          </div>
          <div className={styles.value}>
            <p style={{fontSize: "14px"}}>S</p>
            <SaturationPicker value={saturation} onChange={setSaturation} style={{ backgroundColor: `hsl(${hue}, 50%, ${ligthness}%)` }} />
          </div>
          <div className={styles.value}>
            <p style={{fontSize: "14px"}}>L </p>
            <LigthnessPicker value={ligthness} onChange={setLigthness} style={{ backgroundColor: `hsl(${hue}, ${saturation}%, 50%)` }} />
          </div>  
        </div>
      )}
    </div>
  );
};