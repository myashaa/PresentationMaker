import styles from "./Form.module.css";
import { TElement } from "../../../model/element/ElementTypes";
import { EFigureType, TFigure } from "../../../model/element/FigureTypes";
import { ColorInput } from "../../inputs/ColorInput";
import { AppDispatch } from "../../../redux/store";
import { connect } from "react-redux";
import { Select } from "../../inputs/Select";

type FigureFormProps = {
  element: TElement;
  slideId: string;
  setFill: (id: string, slide: string, fill: string) => void;
  setType: (id: string, slide: string, type: EFigureType) => void;
};

function FigureForm({ slideId, element, setFill, setType }: FigureFormProps) {
  const figure = element.data as TFigure;

  const handleFill = (color: string) => {
    setFill(element.id, slideId, color);
  };

  const handleType = (value: string) => {
    const type = value as EFigureType;
    setType(element.id, slideId, type);
  };

  return (
    <div className={styles.form}>
      <div className={styles.formTitle}>Тип фигуры</div>
      <div className={styles.formFlex} style={{ flexWrap: "wrap" }}>
        <Select
          items={[EFigureType.triangle, EFigureType.square, EFigureType.circle]}
          value={figure.figure}
          onChange={handleType}
        />
      </div>

      <div className={styles.formTitle}>Заливка</div>
      <div className={styles.formFlex}>
        <ColorInput
          label="HEX"
          value={figure.fill.toUpperCase()}
          onChange={handleFill}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setFill: (id: string, slide: string, fill: string) =>
      dispatch({
        type: "SET_FIGURE_FILL",
        payload: { id, slide, fill },
      }),
    setType: (id: string, slide: string, type: EFigureType) =>
      dispatch({
        type: "SET_FIGURE_TYPE",
        payload: { id, slide, type },
      }),
  };
};

export default connect(null, mapDispatchToProps)(FigureForm);
