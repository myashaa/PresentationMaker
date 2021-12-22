type Props = {
  src: string;
};

export function ImageElement({ src }: Props) {
  return <img src={src} alt="" />;
}
