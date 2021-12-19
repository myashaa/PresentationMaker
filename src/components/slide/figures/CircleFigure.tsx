import { COLORS } from "../../../colors"

type Props = {
  width: number;
  height: number;
  fill?: string;
}

export const CircleFigure = ({width, height, fill}: Props) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx={width / 2} cy={height / 2} rx={width / 2} ry={height / 2} fill={fill || COLORS.primary} />
  </svg>
)
