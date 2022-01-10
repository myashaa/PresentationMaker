import React, { useEffect, useRef, useState } from "react";

import { HuePicker } from "./Hue";
import { LigthnessPicker } from "./Ligthness";
import { SaturationPicker } from "./Saturation";

// import "./ColorPicker.css";
import styles from "./ColorPicker.module.css";
import { useHorizontalMove } from "./../../../hooks/useHorizontalMove";

export function ColorPicker() {
  const [hue, setHue] = useState(20);
  const [ligthness, setLigthness] = useState(20);
  const [saturation, setSaturation] = useState(20);
  // const [saturation, setSaturation] = useState(0);

  const pickerRef = useRef<HTMLDivElement>(null);
  // const { x, y } = useHorizontalMove(pickerRef, -8, 244);
  // const sat = ((100 * x) / 250 + 3) | 0;
  // const light = ((100 * y) / 250 + 3) | 0;
  // const light = ((((100 * y) / 250 + 3) / 2) * -1) | 0;

  // useEffect(() => {
  //   const sat = ((100 * x + y) / 250 + 3) | 0;
  //   const light = (50 - (25 * y) / 125 - 1) | 0;

    // if (light === 50) {
    //   setSaturation(100);
    // } else {
    //   setSaturation(sat);
    // }
  // }, [x, y]);

  return (
    <div className={styles.colorPickerUi}>
      {/* <div
        className="picker"
        style={{ backgroundColor: `hsl(${hue}, 100%, 50%)` }}
      >
        <div
          className="color-point"
          ref={pickerRef}
          style={{ left: 0, top: 0 }}
        />
      </div> */}
      <div className={styles.colorСontainer}>
        <div
          className={styles.color}
          style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${ligthness}%)` }}
        />
        <HuePicker value={hue} onChange={setHue} />
        <p>{hue}</p>
        <LigthnessPicker value={ligthness} onChange={setLigthness} />
        <p>{ligthness}</p>
        <SaturationPicker value={saturation} onChange={setSaturation} />
        <p>{saturation}</p>
      </div>
    </div>
  );
}
