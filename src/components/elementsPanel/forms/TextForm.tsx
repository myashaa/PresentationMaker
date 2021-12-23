import styles from "./Form.module.css";
import { FieldSelect } from "../../fields/FieldSelect";
import { FieldInput } from "../../fields/FieldInput";
import { FieldCheckbox } from "../../fields/FieldCheckbox";
import { TElement } from "../../../model/element/ElementTypes";
import { dispatch } from "../../../editor";
import { TFont, TText } from "../../../model/element/TextTypes";
import { setFont } from "../../../model/element/TextActions";

type TextFormProps = {
  element?: TElement;
  slideId?: string;
};

export function TextForm({ element, slideId }: TextFormProps) {
  const text = element?.data as TText;

  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>
          category
        </span>
        <span className={styles.headerFormTitle}>Текст</span>
      </div>

      <FieldSelect
        label={"Шрифт"}
        items={["Arial", "Montserrat"]}
        value={text.font.family}
        onChange={(value) => {
          const font: TFont = {
            ...text.font,
            family: value,
          };

          dispatch(setFont, true, slideId, element?.id, font);
        }}
      />

      <FieldInput
        label={"Размер"}
        type={"number"}
        value={text.font.size.toString()}
        onChange={(value) => {
          const font: TFont = {
            ...text.font,
            size: parseInt(value),
          };

          dispatch(setFont, true, slideId, element?.id, font);
        }}
      />

      <FieldInput
        label={"Цвет"}
        value={text.font.color.toUpperCase()}
        onChange={(value) => {
          const font: TFont = {
            ...text.font,
            color: value,
          };

          dispatch(setFont, true, slideId, element?.id, font);
        }}
      />

      <FieldCheckbox
        label={"Жирный"}
        checked={text.font?.bold}
        onChange={() => {
          const font: TFont = {
            ...text.font,
            bold: !text.font.bold,
          };

          dispatch(setFont, true, slideId, element?.id, font);
        }}
      />
      <FieldCheckbox
        label={"Подчеркнутый"}
        checked={text.font?.underline}
        onChange={() => {
          const font: TFont = {
            ...text.font,
            underline: !text.font.underline,
          };

          dispatch(setFont, true, slideId, element?.id, font);
        }}
      />
      <FieldCheckbox
        label={"Курсивный"}
        checked={text.font?.italic}
        onChange={() => {
          const font: TFont = {
            ...text.font,
            italic: !text.font.italic,
          };

          dispatch(setFont, true, slideId, element?.id, font);
        }}
      />
      <div className={styles.line}></div>
    </div>
  );
}
