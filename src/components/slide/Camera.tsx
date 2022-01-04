import { useEffect, useRef } from "react";

import styles from "./Camera.module.css";

export function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        if (videoRef.current) {
          const video = videoRef.current;
          video.srcObject = stream;
          video.play();
        }
      })
      .catch((err) => {
        console.error("error:", err);
      });
  }, []);

  return (
    <video className={styles.camera} ref={videoRef}>
      Video stream not available.
    </video>
  );
}
