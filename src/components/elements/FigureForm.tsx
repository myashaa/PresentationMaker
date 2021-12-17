import styles from "./Form.module.css";
import { FieldInput } from "../form/FieldInput";
import { FieldSelect } from "../form/FieldSelect";

type FigureFormProps = {};

export function FigureForm({}: FigureFormProps) {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>category</span>
        <span className={styles.headerFormTitle}>Фигура</span>
      </div>
      <FieldSelect
        label={"Тип фигуры"}
        items={["Круг", "Треугольник", "Прямоугольник"]}
      />
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
