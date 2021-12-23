import { useEffect } from "react";

export const useHotKey = (callback: (key: string) => void, key: string) => {
  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => document.removeEventListener("keydown", onKeyPress);
  });

  const onKeyPress = (e: KeyboardEvent) => {
    if (key.toLowerCase() === e.key.toLowerCase()) {
      callback(e.key);
    }
    callback(e.key);
  };
};
