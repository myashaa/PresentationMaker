import styles from "./Form.module.css";
import { FieldInput } from "../form/FieldInput";
import { FieldCheckbox } from "../form/FieldCheckbox";
import { FieldSelect } from "../form/FieldSelect";

type TextFormProps = {};

export function TextForm({}: TextFormProps) {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>category</span>
        <span className={styles.headerFormTitle}>Текст</span>
      </div>
      <FieldSelect label={"Шрифт"} items={["Arial", "Roboto", "Open Sans"]} />
      <FieldInput label={"Размер"} type={"number"} />
      <FieldSelect
        label={"Цвет"}
        items={[
          "Красный",
          "Оранжевый",
          "Желтый",
          "Зеленый",
          "Голубой",
          "Синий",
          "Фиолетовый",
          "Розовый",
          "Белый",
          "Черный",
        ]}
      />
      <FieldCheckbox label={"Жирный"} />
      <FieldCheckbox label={"Подчеркнутый"} />
      <FieldCheckbox label={"Курсивный"} />
      <div className={styles.line}></div>
      <FieldInput label={"Высота"} type={"number"} />
      <FieldInput label={"Ширина"} type={"number"} />
      <FieldInput label={"Отступ сверху"} type={"number"} />
      <FieldInput label={"Отступ слева"} type={"number"} />
      <FieldInput label={"Рамка"} type={"number"} />
      <FieldSelect items={["Точечная", "Пунктирная", "Сплошная", "Двойная"]} />
      <FieldSelect
        items={[
          "Красный",
          "Оранжевый",
          "Желтый",
          "Зеленый",
          "Голубой",
          "Синий",
          "Фиолетовый",
          "Розовый",
          "Белый",
          "Черный",
        ]}
      />
      <FieldSelect
        label={"Заливка"}
        items={[
          "Красный",
          "Оранжевый",
          "Желтый",
          "Зеленый",
          "Голубой",
          "Синий",
          "Фиолетовый",
          "Розовый",
          "Белый",
          "Черный",
        ]}
      />
    </div>
  );
}
