import { EFigureType } from "../../../model/element/FigureTypes";
import { CircleFigure } from "./CircleFigure";
import { SquareFigure } from "./SquareFigure";
import { TriangleFigure } from "./TriangleFigure";

type Props = {
  figure: EFigureType;
  width: number;
  height: number;
  fill?: string;
};

export function FigureElement({ figure, width, height, fill }: Props) {
  return (
    <>
      {figure === EFigureType.square && (
        <SquareFigure height={height} width={width} fill={fill} />
      )}
      {figure === EFigureType.triangle && (
        <TriangleFigure height={height} width={width} fill={fill} />
      )}
      {figure === EFigureType.circle && (
        <CircleFigure height={height} width={width} fill={fill} />
      )}
    </>
  );
}
