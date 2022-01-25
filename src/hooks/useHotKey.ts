import { RefObject, useEffect } from "react";

export const useHotKey = (
  callback: (key: string, ctrl?: boolean) => void,
  element?: RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    if (element?.current) {
      element.current.addEventListener("keydown", onKeyPress);
    } else {
      document.addEventListener("keydown", onKeyPress);
    }
    return () => {
      if (element?.current) {
        element.current.removeEventListener("keydown", onKeyPress);
      } else {
        document.removeEventListener("keydown", onKeyPress);
      }
    };
  });

  const onKeyPress = (e: KeyboardEvent) => {
    callback(e.key, e.ctrlKey);
  };
};
