import React from "react";
import { MenuPopup } from "../menu/MenuPopup";
import { Spacer } from "../Spacer";

import styles from "./ActionBar.module.css";

export function ActionBar() {
  return (
    <div className={styles.appActionBar}>
      <ActionButton icon="add_to_photos" label="Добавить слайд" primary />
      <ActionButton icon="undo" />
      <ActionButton icon="redo" />
      <Spacer width={60} />
      <ActionButton icon="title" label="Добавить текст" />
      <ActionButton icon="image" label="Добавить изображение" />
      <ActionButton icon="category" label="Добавить фигуру" />
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
    <button className={primary ? styles.actionButtonPrimary : styles.actionButton}> 
      {icon && <span className="material-icons">{icon}</span>}
      {label && <span className={styles.actionButtonLabel}>{label}</span>}
    </button>
  );
}
