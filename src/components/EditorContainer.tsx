import React from "react";

import styles from "./EditorContainer.module.css";

type EditorContainerProps = {
  children?: React.ReactNode;
};

export function EditorContainer({ children }: EditorContainerProps) {
  return <div className={styles.appEditorContainer}>{children}</div>;
}
