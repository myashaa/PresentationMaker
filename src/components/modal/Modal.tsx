import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./Modal.module.css";

type Props = {
  title: string;
  children?: React.ReactNode;
  onClose?: () => void;
};

export function Modal({ title, children, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, () => {
    onClose && onClose();
  });

  return (
    <div className={styles.overlay}>
      <div ref={modalRef} className={styles.modal}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div
            className={`${styles.buttonClose} material-icons`}
            onClick={onClose}
          >
            close
          </div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
