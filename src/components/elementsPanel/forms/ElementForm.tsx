import { flattenDiagnosticMessageText } from "typescript";
import { dispatch } from "../../../editor";
import {
  changeElementBorder,
  changeElementColor,
} from "../../../model/element/ElementActions";
import {
  EBorderStyle,
  TBorder,
  TElement,
} from "../../../model/element/ElementTypes";
import { moveElement, resizeElement } from "../../../model/slide/SlideActions";
import { FieldInput } from "../../fields/FieldInput";
import { FieldSelect } from "../../fields/FieldSelect";
import { ActionButton } from "../../header/actions/ActionButton";

type Props = {
  element?: TElement;
  slideId?: string;
};

const style = {
  marginRight: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center"
};

export function ElementForm({ element, slideId }: Props) {
  return (
    <>
      <FieldInput
        label={"Высота"}
        type={"number"}
        onChange={(text) =>
          dispatch(
            resizeElement,
            true,
            slideId,
            element?.id,
            element?.width,
            parseInt(text)
          )
        }
        value={element?.height.toString()}
      />
      <FieldInput
        label={"Ширина"}
        type={"number"}
        onChange={(text) =>
          dispatch(
            resizeElement,
            true,
            slideId,
            element?.id,
            parseInt(text),
            element?.height
          )
        }
        value={element?.width.toString()}
      />
      <FieldInput
        label={"Позиция сверху"}
        type={"number"}
        onChange={(text) =>
          dispatch(moveElement, true, slideId, element?.id, {
            x: element?.position.x,
            y: parseInt(text),
          })
        }
        value={element?.position.y.toString()}
      />
      <FieldInput
        label={"Позиция слева"}
        type={"number"}
        onChange={(text) =>
          dispatch(moveElement, true, slideId, element?.id, {
            x: parseInt(text),
            y: element?.position.y,
          })
        }
        value={element?.position.x.toString()}
      />
      <FieldSelect
        label={"Вид рамки"}
        items={[EBorderStyle.dashed, EBorderStyle.dotted, EBorderStyle.solid]}
        value={element?.border?.type}
        onChange={(value) => {
          const borderType = value as EBorderStyle;
          const border: TBorder = {
            width: element?.border?.width || 0,
            color: element?.border?.color || "",
            type: borderType,
          };
          
          dispatch(changeElementBorder, true, slideId, element?.id, border);
        }}
      />
      <FieldInput
        label={"Толщина рамки"}
        type={"number"}
        onChange={(text) =>
          dispatch(changeElementBorder, true, slideId, element?.id, {
            width: parseInt(text),
            type: element?.border?.type,
            color: element?.border?.color,
          })
        }
        value={element?.border?.width?.toString()}
      />
      <FieldInput
        label={"Цвет рамки"}
        onChange={(text) =>
          dispatch(changeElementBorder, true, slideId, element?.id, {
            width: element?.border?.width,
            type: element?.border?.type,
            color: text,
          })
        }
        value={element?.border?.color?.toUpperCase()}
      />
      <FieldInput
        label={"Фон"}
        onChange={(text) =>
          dispatch(changeElementColor, true, slideId, element?.id, text)
        }
        value={element?.color?.toUpperCase()}
      />
      <ActionButton
        icon="delete"
        label={"Удалить элемент"}
        style={style}
          //onClick={() => dispatch(clearBackground, true, slide?.id)}
        />
    </>
  );
}
