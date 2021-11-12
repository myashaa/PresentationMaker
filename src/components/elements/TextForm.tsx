import styles from "./Form.module.css";
import { FieldInput } from "../form/FieldInput";
import { FieldCheckbox } from "../form/FieldCheckbox";
import { FieldSelect } from "../form/FieldSelect";

type TextFormProps = {};

export function TextForm({}: TextFormProps) {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className="material-icons {styles.headerFormIcon}">title</span>
        <span className={styles.headerFormTitle}>Текст</span>
      </div>
      <FieldInput label={"Высота"} type={"number"} />
      <FieldInput label={"Ширина"} type={"number"} />
      <FieldInput label={"Отступ сверху"} type={"number"} />
      <FieldInput label={"Отступ слева"} type={"number"} />
      <FieldInput label={"Рамка"} type={"number"} />
      <FieldSelect items={["точечная", "пунктирная", "сплошная", "двойная"]} />
      <FieldSelect
        items={[
          "красный",
          "оранжевый",
          "желтый",
          "зеленый",
          "голубой",
          "синий",
          "фиолетовый",
          "розовый",
          "белый",
          "черный",
        ]}
      />
      <FieldSelect
        label={"Заливка"}
        items={[
          "красный",
          "оранжевый",
          "желтый",
          "зеленый",
          "голубой",
          "синий",
          "фиолетовый",
          "розовый",
          "белый",
          "черный",
        ]}
      />
      <div className={styles.line}></div>
      <FieldSelect label={"Шрифт"} items={["Arial", "Roboto", "Open Sans"]} />
      <FieldInput label={"Размер"} type={"number"} />
      <FieldSelect
        label={"Цвет"}
        items={[
          "красный",
          "оранжевый",
          "желтый",
          "зеленый",
          "голубой",
          "синий",
          "фиолетовый",
          "розовый",
          "белый",
          "черный",
        ]}
      />
      <FieldCheckbox label={"Жирный"} />
      <FieldCheckbox label={"Подчеркнутый"} />
      <FieldCheckbox label={"Курсивный"} />
    </div>
  );
}
