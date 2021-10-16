import React from "react";

import "./ActionBar.styles.css";

export function ActionBar() {
  return (
    <div className="app-action-bar">
      <ActionButton icon="add" label="Добавить слайд" primary />
      <ActionButton icon="undo" />
      <ActionButton icon="redo" />
    </div>
  );
}

type ActionButtonProps = {
  label?: string;
  icon?: string;
  primary?: boolean;
};

export function ActionButton({ label, icon, primary }: ActionButtonProps) {
  return (
    <button className={`action-button ${primary && "primary"}`}>
      {icon && <span className="material-icons">{icon}</span>}
      {label && <span className="action-button-label">{label}</span>}
    </button>
  );
}
