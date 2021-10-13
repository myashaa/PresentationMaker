import React from "react";

import "./PresentationTitle.styles.css";

type PresentationTitleProps = {
  title: string;
};

export function PresentationTitle({ title }: PresentationTitleProps) {
  return <h1 className="presentation-title">{title}</h1>;
}
