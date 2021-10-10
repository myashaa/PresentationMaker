import React from "react";

import "./SidePanel.style.css";

type SidePanelProps = {
  width?: number;
  children?: React.ReactNode;
};

export function SidePanel({ width = 300, children }: SidePanelProps) {
  return (
    <div className="app-side-panel" style={{ width: width + "px" }}>
      {children}
    </div>
  );
}
