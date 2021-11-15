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
      <FieldSelect label={"Фильтр"} items={["блюр", "выделение цвета"]} />
    </div>
  );
}
