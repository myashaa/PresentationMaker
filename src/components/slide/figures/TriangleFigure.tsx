import { COLORS } from "../../../colors"

type Props = {
  width: number;
  height: number;
  fill?: string;
}

export const TriangleFigure = ({width, height, fill}: Props) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon fill={fill || COLORS.primary} points={`0,${height} ${width / 2},0 ${width},${height}`}/>
  </svg>
)
