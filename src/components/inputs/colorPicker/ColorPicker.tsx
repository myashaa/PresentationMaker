import React, { useEffect, useRef, useState } from "react";
import { HuePicker } from "./Hue";
import { LigthnessPicker } from "./Ligthness";
import { SaturationPicker } from "./Saturation";
import styles from "./ColorPicker.module.css";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { hexToHSL, hslToHEX } from "../../../utils";

type ColorPickerProps = {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onClose?: () => void;
};

export const ColorPicker = ({
  onChange,
  onClose,
  onSubmit,
  value,
}: ColorPickerProps) => {
  const hslValue = hexToHSL(value || "");

  const [hue, setHue] = useState(hslValue[0] || 0);
  const [saturation, setSaturation] = useState(hslValue[1] || 0);
  const [ligthness, setLigthness] = useState(hslValue[2] || 0);

  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => {
    onClose && onClose();
  });

  useEffect(() => {
    setHue(hslValue[0]);
    setSaturation(hslValue[1]);
    setLigthness(hslValue[2]);
  }, []);

  const color = `hsl(${hue}, ${saturation}%, ${ligthness}%)`;

  useEffect(() => {
    const hex = hslToHEX([hue, saturation, ligthness]);
    onChange && onChange(hex);
  }, [hue, saturation, ligthness]);

  const handleSubmit = () => {
    const hex = hslToHEX([hue, saturation, ligthness]);
    onSubmit && onSubmit(hex);
  };

  return (
    <div className={styles.content} ref={menuRef}>
      <div className={styles.info}>
        <div className={styles.color} style={{ backgroundColor: color }} />
        <div className={styles.values}>
          <p style={{ fontSize: "14px" }}>{hue} тон</p>
          <p style={{ fontSize: "14px" }}>{saturation}% насыщенность</p>
          <p style={{ fontSize: "14px" }}>{ligthness}% яркость</p>
        </div>
      </div>
      <div className={styles.value}>
        <p style={{ fontSize: "14px" }}>H</p>
        <HuePicker value={hue} onChange={setHue} onSubmit={handleSubmit} />
      </div>
      <div className={styles.value}>
        <p style={{ fontSize: "14px" }}>S</p>
        <SaturationPicker
          value={saturation}
          onChange={setSaturation}
          style={{ backgroundColor: `hsl(${hue}, 50%, ${ligthness}%)` }}
          onSubmit={handleSubmit}
        />
      </div>
      <div className={styles.value}>
        <p style={{ fontSize: "14px" }}>L </p>
        <LigthnessPicker
          value={ligthness}
          onChange={setLigthness}
          style={{ backgroundColor: `hsl(${hue}, ${saturation}%, 50%)` }}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
