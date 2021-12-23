import { useEffect } from "react";

export const useHotKey = (callback: (key: string) => void) => {
  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => document.removeEventListener("keydown", onKeyPress);
  });

  const onKeyPress = (e: KeyboardEvent) => {
    callback(e.key);
  };
};
