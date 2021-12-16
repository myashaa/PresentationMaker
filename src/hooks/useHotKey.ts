import { useEffect } from "react";

export const useHotKey = (callback: (flag?: boolean) => void, key: string) => {
  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => document.removeEventListener("keydown", onKeyPress);
  });

  const onKeyPress = (e: KeyboardEvent) => {
    if (key.toLowerCase() === e.key.toLowerCase()) {
      callback(e.ctrlKey);
    }
  };
};
