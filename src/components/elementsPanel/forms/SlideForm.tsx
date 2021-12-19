import styles from "./Form.module.css";
import { FieldInput } from "../../fields/FieldInput";
import { FieldButton } from "../../fields/FieldButton";

export function SlideForm() {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>filter</span>
        <span className={styles.headerFormTitle}>Слайд</span>
      </div>
      <FieldInput label={"Установить цвет фона"} />
      <FieldButton label={"Установить изображение фоном"} />
      <FieldButton label={"Очистить фон"} />
    </div>  
  );
}
