import React from "react";

import styles from "./SidePanel.module.css";

type SidePanelProps = {
  width?: number;
  children?: React.ReactNode;
};

// убрать
export function SidePanel({ width = 300, children }: SidePanelProps) {
  return (
    <div className={styles.appSidePanel} style={{ width: width + "px" }}>
      {children}
    </div>
  );
}
