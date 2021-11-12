import "./Form.styles.css";
import { FieldInput } from "../form/FieldInput";
import { FieldSelect } from "../form/FieldSelect";

type ImageFormProps = {};

export function ImageForm({}: ImageFormProps) {
  return (
    <div className="form">
      <div className="header-form header-form--title">
        <span className="material-icons header-form-icon">image</span>
        <span className="header-form-title">Изображение</span>
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
      <div className="line"></div>
      <FieldSelect label={"Фильтр"} items={["блюр", "выделение цвета"]} />
    </div>
  );
}
