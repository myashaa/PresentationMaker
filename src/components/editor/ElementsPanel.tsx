import React from "react";
import { FigureForm } from "../elements/FigureForm";
import { TextForm } from "../elements/TextForm";
import { ImageForm } from "../elements/ImageForm";

import styles from "./SidePanel.module.css";

type ElementsPanelProps = {
  width?: number;
};

export const ElementsPanel = ({ width = 300 }: ElementsPanelProps) => {
  return <div className={styles.sidePanel} style={{ width }}>
    <TextForm />
  </div>;
};
