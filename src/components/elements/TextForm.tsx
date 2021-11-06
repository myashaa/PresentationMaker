import "./Form.styles.css";
import { FieldInput } from "../form/FieldInput";
import { FieldCheckbox } from "../form/FieldCheckbox";
import { FieldSelect } from "../form/FieldSelect";

type TextFormProps = {};

export function TextForm({}: TextFormProps) {
  return (
    <div className="form">
      <div className="header-form">
        <span className="material-icons header-form-icon">title</span>
        <span className="header-form-title">Текст</span>
      </div>
      <FieldInput label={"Высота"} type={"number"} />
      <FieldInput label={"Ширина"} type={"number"} />
      <FieldInput label={"Отступ сверху"} type={"number"} />
      <FieldInput label={"Отступ слева"} type={"number"} />
      <FieldInput label={"Рамка"} type={"number"} />
      <FieldSelect item1={"точечная"} item2={"пунктирная"} item3={"сплошная"} item4={"двойная"} />
      <FieldSelect item1={"красный"} item2={"оранжевый"} item3={"желтый"} item4={"зеленый"} item5={"голубой"} item6={"синий"} item7={"фиолетовый"} item8={"розовый"} item9={"белый"} item10={"черный"} />
      <FieldSelect label={"Заливка"} item1={"красный"} item2={"оранжевый"} item3={"желтый"} item4={"зеленый"} item5={"голубой"} item6={"синий"} item7={"фиолетовый"} item8={"розовый"} item9={"белый"} item10={"черный"} />
      <div className="line"></div>
      <FieldSelect label={"Шрифт"} item1={"Arial"} item2={"Roboto"} item3={"Open Sans"} />
      <FieldInput label={"Размер"} type={"number"} />
      <FieldSelect label={"Цвет"} item1={"красный"} item2={"оранжевый"} item3={"желтый"} item4={"зеленый"} item5={"голубой"} item6={"синий"} item7={"фиолетовый"} item8={"розовый"} item9={"белый"} item10={"черный"} />
      <FieldCheckbox label={"Жирный"} />
      <FieldCheckbox label={"Подчеркнутый"} />
      <FieldCheckbox label={"Курсивный"} />
    </div>
  );
}
