import styles from "./Form.module.css";
import { FieldInput } from "../form/FieldInput";
import { FieldCheckbox } from "../form/FieldCheckbox";
import { FieldSelect } from "../form/FieldSelect";
import { useState } from "react";

type TextFormProps = {};

// для списка элементов нужно для кей
type TListElement = {
  id: string;
  value: string;
}

const fonts = ["Arial", "Roboto", "Open Sans"]

export function TextForm({ }: TextFormProps) {
  const [isBold, setBold] = useState(false)
  const [isUnderline, setUnderline] = useState(false)
  const [isItalic, setItalic] = useState(false)
  const [fontFamily, setFontFamily] = useState(fonts[0])
  const [fontSize, setFontSize] = useState(0)
  
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>category</span>
        <span className={styles.headerFormTitle}>Текст</span>
      </div>
      <FieldSelect label={"Шрифт"} items={fonts} onChange={(value) => setFontFamily(value)} />
      <FieldInput label={"Размер"} type={"number"} onChange={(text) => setFontSize(parseInt(text))} value={fontSize.toString()} />
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
      <FieldCheckbox label={"Жирный"} checked={isBold} onChange={() => setBold(!isBold)} />
      <FieldCheckbox label={"Подчеркнутый"} checked={isUnderline} onChange={() => setUnderline(!isUnderline)} />
      <FieldCheckbox label={"Курсивный"} checked={isItalic} onChange={() => setItalic(!isItalic)} />
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
