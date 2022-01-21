import styles from "./Form.module.css";
import { TElement } from "../../../model/element/ElementTypes";
import { TFont, TText } from "../../../model/element/TextTypes";
import { CheckInput } from "../../inputs/CheckInput";
import { AppDispatch } from "../../../redux/store";
import { connect } from "react-redux";
import { TextInput } from "../../inputs/TextInput";
import { Select } from "../../inputs/Select";
import { ColorInput } from "../../inputs/ColorInput";

type Props = {
  element: TElement;
  slideId: string;
  setFont: (id: string, slide: string, font: TFont) => void;
};

function TextForm({ element, slideId, setFont }: Props) {
  const text = element.data as TText;

  const setBold = () => {
    const font: TFont = {
      ...text.font,
      bold: !text.font.bold,
    };

    setFont(element.id, slideId, font);
  };

  const setItalic = () => {
    const font: TFont = {
      ...text.font,
      italic: !text.font.italic,
    };

    setFont(element.id, slideId, font);
  };

  const setUnderline = () => {
    const font: TFont = {
      ...text.font,
      underline: !text.font.underline,
    };

    setFont(element.id, slideId, font);
  };

  const setFamily = (value: string) => {
    const font: TFont = {
      ...text.font,
      family: value,
    };

    setFont(element.id, slideId, font);
  };

  const setSize = (value: string) => {
    const font: TFont = {
      ...text.font,
      size: parseInt(value),
    };

    setFont(element.id, slideId, font);
  };

  const handleColor = (color: string) => {
    const font: TFont = {
      ...text.font,
      color,
    };

    setFont(element.id, slideId, font);
  };

  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>
          text_fields
        </span>
        <span className={styles.headerFormTitle}>Текст</span>
      </div>
      <div className={styles.formTitle}>Стиль</div>
      <div className={styles.formFlex}>
        <CheckInput
          label="Жир"
          checked={text.font.bold}
          style={{ marginRight: 8, fontWeight: "bold" }}
          onChange={setBold}
        />
        <CheckInput
          label="Нак"
          checked={text.font.italic}
          style={{ marginRight: 8, fontStyle: "italic" }}
          onChange={setItalic}
        />
        <CheckInput
          label="Под"
          checked={text.font.underline}
          style={{ textDecoration: "underline" }}
          onChange={setUnderline}
        />
      </div>

      <div className={styles.formTitle}>Шрифт</div>
      <div className={styles.formFlex}>
        <Select
          items={["Montserrat", "Arial", "Times New Roman", "Courier New"]}
          value={text.font.family}
          onChange={setFamily}
        />
        <TextInput
          label="px"
          value={`${text.font.size}`}
          style={{ width: 100, marginLeft: 8 }}
          onChange={setSize}
        />
      </div>

      <div className={styles.formTitle}>Цвет</div>
      <div className={styles.formFlex}>
        <ColorInput
          label="HEX"
          value={text.font.color.toUpperCase()}
          onChange={handleColor}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setFont: (id: string, slide: string, font: TFont) =>
      dispatch({
        type: "SET_TEXT_FONT",
        payload: { id, slide, font },
      }),
  };
};

export default connect(null, mapDispatchToProps)(TextForm);
