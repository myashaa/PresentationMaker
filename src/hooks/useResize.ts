import { RefObject, useEffect, useState } from "react";

export const useResize = (
  elementRef: RefObject<HTMLDivElement>,
  elementPosition: { x: number; y: number },
  elementSize: { width: number; height: number },
  topLeftRef: RefObject<HTMLSpanElement>,
  topRightRef: RefObject<HTMLSpanElement>,
  bottomLeftRef: RefObject<HTMLSpanElement>,
  bottomRightRef: RefObject<HTMLSpanElement>
) => {
  let startPosition: { x: number; y: number } = elementPosition;
  const [size, setSize] =
    useState<{ width: number; height: number }>(elementSize);
  const [currentResizer, setResizer] = useState(-1);

  useEffect(() => {
    topLeftRef.current?.addEventListener("mousedown", tlHandle);
    topRightRef.current?.addEventListener("mousedown", trHandle);
    bottomLeftRef.current?.addEventListener("mousedown", blHandle);
    bottomRightRef.current?.addEventListener("mousedown", brHandle);
    return () => {
      topLeftRef.current?.removeEventListener("mousedown", tlHandle);
      topRightRef.current?.removeEventListener("mousedown", trHandle);
      bottomLeftRef.current?.removeEventListener("mousedown", blHandle);
      bottomRightRef.current?.removeEventListener("mousedown", brHandle);
    };
  });

  useEffect(() => {
    console.log(currentResizer);
  }, [currentResizer]);

  const tlHandle = (e: MouseEvent) => {
    e.preventDefault();
    setResizer(1);
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
  };
  const trHandle = (e: MouseEvent) => {
    e.preventDefault();
    setResizer(2);
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
  };
  const blHandle = (e: MouseEvent) => {
    e.preventDefault();
    setResizer(3);
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
  };
  const brHandle = (e: MouseEvent) => {
    e.preventDefault();
    setResizer(4);
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
  };

  const resize = (e: MouseEvent) => {
    const delta = {
      x: e.pageX - startPosition.x,
      y: e.pageY - startPosition.y,
    };

    console.log(startPosition);

    setSize({
      width: e.pageX - size.width + delta.x,
      height: e.pageY - size.height + delta.y,
    });
  };

  const stopResize = () => {
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
    setResizer(-1);
  };

  return size;
};
