import React from "react";

import styles from "./PresentationTitle.module.css";

type PresentationTitleProps = {
  title: string;
};

export function PresentationTitle({ title }: PresentationTitleProps) {
  return <h1 className={styles.presentationTitle}>{title}</h1>;
}
