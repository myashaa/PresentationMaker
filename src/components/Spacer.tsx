type SpacerProps = {
  width: number;
};

export function Spacer({ width }: SpacerProps) {
  return <div style={{ width: width }}></div>;
}
