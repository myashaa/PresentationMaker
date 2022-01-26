import { RefObject, useState, useEffect } from "react";

export function useHorizontalMove(
  element: RefObject<HTMLDivElement>,
  value: number,
  offset: number,
  min: number,
  max: number
) {
  const [pos, setPos] = useState({ x: value - offset, y: value - offset });
  let startDragX = 0;
  let startDragY = 0;

  const onMove = (e: MouseEvent) => {
    const newX = pos.x - startDragX + e.clientX;
    const newY = pos.y - startDragY + e.clientY;

    if (newX > min - offset && newX < max - offset) {
      setPos({ x: newX, y: pos.y });
    }

    if (newX > max - offset) {
      setPos({ x: max - offset, y: pos.y });
    }

    if (newX < min - offset) {
      setPos({ x: min - offset, y: pos.y });
    }
  };

  const onStop = () => {
    startDragX = 0;
    startDragY = 0;

    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStop);
  };

  const dragHandler = (e: MouseEvent) => {
    startDragX = e.clientX;
    startDragY = e.clientY;

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStop);
  };

  useEffect(() => {
    const current = element?.current;
    if (current) current.addEventListener("mousedown", dragHandler);
    return () => {
      if (current) current.removeEventListener("mousedown", dragHandler);
    };
  });

  return pos;
}
