import { RefObject, useEffect, useState } from "react";

export const useDragAndDrop = (
  elementRef: RefObject<HTMLDivElement>,
  initPosition: { x: number; y: number },
  onMouseUp: (state: boolean) => void
) => {
  const [position, setPosition] = useState(initPosition);
  let startPos: { x: number; y: number } = { x: 0, y: 0 };

  useEffect(() => {
    elementRef.current?.addEventListener("mousedown", mouseDownHandler);
    return () => {
      elementRef.current?.removeEventListener("mousedown", mouseDownHandler);
    };
  });

  const mouseDownHandler = (e: MouseEvent) => {
    e.preventDefault();

    startPos = {
      x: e.pageX,
      y: e.pageY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    onMouseUp(true);
  };

  const mouseUpHandler = () => {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);

    onMouseUp(false);
  };

  const mouseMoveHandler = (e: MouseEvent) => {
    const delta = {
      x: e.pageX - startPos.x,
      y: e.pageY - startPos.y,
    };
    const newPos = {
      x: position.x + delta.x,
      y: position.y + delta.y,
    };
    setPosition(newPos);
  };

  return position;
};
