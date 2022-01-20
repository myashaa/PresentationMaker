import styles from "./Form.module.css";
import { FieldSelect } from "../../fields/FieldSelect";
import { FieldInput } from "../../fields/FieldInput";
import { TElement } from "../../../model/element/ElementTypes";
import { dispatch } from "../../../editor";
import {
  changeFigure,
  changeFigureColor,
} from "../../../model/element/FigureActions";
import { EFigureType, TFigure } from "../../../model/element/FigureTypes";
import { ActionButton } from "../../header/actions/ActionButton";
import { SquareFigure } from "../../slide/figures/SquareFigure";
import { CircleFigure } from "../../slide/figures/CircleFigure";
import { TriangleFigure } from "../../slide/figures/TriangleFigure";
import { ColorInput } from "../../inputs/ColorInput";
import { AppDispatch } from "../../../redux/store";
import { connect } from "react-redux";

type FigureFormProps = {
  element: TElement;
  slideId: string;
  setFill: (id: string, slide: string, fill: string) => void;
};

function FigureForm({ slideId, element, setFill }: FigureFormProps) {
  const figure = element.data as TFigure;

  const handleFill = (color: string) => {
    setFill(element.id, slideId, color);
  };

  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>
          category
        </span>
        <span className={styles.headerFormTitle}>Фигура</span>
      </div>

      <div className={styles.formTitle}>Тип фигуры</div>
      <div className={styles.formFlex} style={{ flexWrap: "wrap" }}>
        <ActionButton
          icon={<SquareFigure height={18} width={18} fill="#c7c7c7" />}
          label="Квадрат"
          style={{ marginBottom: 8, marginRight: 8 }}
        />
        <ActionButton
          icon={<TriangleFigure height={18} width={18} fill="#c7c7c7" />}
          label="Треугольник"
          style={{ marginBottom: 8, marginRight: 8 }}
        />
        <ActionButton
          icon={<CircleFigure height={18} width={18} fill="#c7c7c7" />}
          label="Круг"
          style={{ marginBottom: 8, marginRight: 8 }}
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

      {/* <FieldSelect
        label={"Тип фигуры"}
        items={[EFigureType.triangle, EFigureType.square, EFigureType.circle]}
        value={figure.figure}
        onChange={(value) => {
          const type = value as EFigureType;

          dispatch(changeFigure, true, slideId, element?.id, type);
        }}
      /> */}

      {/* <FieldInput
        label={"Заливка"}
        onChange={(text) =>
          dispatch(changeFigureColor, true, slideId, element?.id, text)
        }
        value={figure?.fill.toUpperCase()}
        color
      /> */}
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
  };
};

export default connect(null, mapDispatchToProps)(FigureForm);
