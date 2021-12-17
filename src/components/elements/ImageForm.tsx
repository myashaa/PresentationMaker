import styles from "./Form.module.css";
import { FieldInput } from "../form/FieldInput";
import { FieldSelect } from "../form/FieldSelect";

type ImageFormProps = {};

export function ImageForm({}: ImageFormProps) {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>category</span>
        <span className={styles.headerFormTitle}>Изображение</span>
      </div>
      <FieldSelect label={"Фильтр"} items={["Блюр", "Выделение цвета"]} />  
      <div className={styles.line}></div>
      <FieldInput label={"Высота"} type={"number"} />
      <FieldInput label={"Ширина"} type={"number"} />
      <FieldInput label={"Отступ сверху"} type={"number"} />
      <FieldInput label={"Отступ слева"} type={"number"} />
      <FieldInput label={"Рамка"} type={"number"} />
      <FieldSelect items={["точечная", "пунктирная", "сплошная", "двойная"]} />
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
