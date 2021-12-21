import { COLORS } from "../../../colors"

type Props = {
  width: number;
  height: number;
  fill?: string;
}

export const SquareFigure = ({width, height, fill}: Props) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0" y="0" width={width} height={height} fill={fill || COLORS.primary}/>
  </svg>
)
