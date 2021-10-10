import React from "react";

import "./EditorContainer.styles.css";

type EditorContainerProps = {
  children?: React.ReactNode;
};

export function EditorContainer({ children }: EditorContainerProps) {
  return <div className="app-editor-container">{children}</div>;
}
