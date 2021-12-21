import { useEffect, useRef, useState } from "react";
import "./TextElement.module.css";

type TextElementProps = {
  text: string;
};

export const TextElement = ({ text }: TextElementProps) => {
  const [isEdit, setEdit] = useState(false);

  return (
    <div
      onClick={() => {
        alert("Жопочка");
      }}
      style={{ width: "100%", height: "100%" }}
    >
      {!isEdit && <p>{text}</p>}
      {isEdit && <textarea>{text}</textarea>}
    </div>
  );
};
