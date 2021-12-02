import styles from "./Empty.module.css";

type EmptyProps = {
  text?: string;
};

export const Empty = ({ text }: EmptyProps) => {
  return (
    <div className={styles.empty}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
