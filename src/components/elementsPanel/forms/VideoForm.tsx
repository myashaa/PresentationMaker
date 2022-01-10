import styles from "./Form.module.css";

type VideoFormProps = {
};

export function VideoForm({ }: VideoFormProps) {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>
          photo_camera
        </span>
        <span className={styles.headerFormTitle}>Веб-камера</span>
      </div>
    </div>
  );
}
