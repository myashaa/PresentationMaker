import { RefObject, useEffect, useState } from "react";
import { TSize } from "../model/element/ElementTypes";

export const useResize = (
  elementRef: RefObject<HTMLDivElement>,
  initSize: TSize,
  onStart: () => void,
  onResize: () => void,
  onEnd: () => void,
  enabled?: boolean
) => {
  const [size, setSize] = useState<TSize>(initSize);

  let startDragX = 0;
  let startDragY = 0;

  useEffect(() => {
    if (elementRef.current)
      elementRef.current.addEventListener("mousedown", dragHandler);
    return () => {
      if (elementRef.current)
        elementRef.current.removeEventListener("mousedown", dragHandler);
    };
  });

  const dragHandler = (e: MouseEvent) => {
    startDragX = e.clientX;
    startDragY = e.clientY;

    document.addEventListener("mousedown", onMoveInit);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStop);
  };

  const onMoveInit = () => {
    onStart();
  };

  const onMove = (e: MouseEvent) => {
    const newWidth = size.width - startDragX + e.clientX;
    const newHeight = size.height - startDragY + e.clientY;
    enabled && setSize({ width: newWidth, height: newHeight });
    onResize();
  };

  const onStop = () => {
    onEnd();
    if (elementRef.current)
      elementRef.current.removeEventListener("mousedown", dragHandler);
    document.removeEventListener("mousedown", onMoveInit);
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStop);
  };

  return size;
};
