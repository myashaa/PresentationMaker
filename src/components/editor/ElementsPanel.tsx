import React from "react";

import styles from "./SidePanel.module.css";

type ElementsPanelProps = {
  width?: number;
};

export const ElementsPanel = ({ width = 300 }: ElementsPanelProps) => {
  return <div className={styles.sidePanel} style={{ width }}></div>;
};
