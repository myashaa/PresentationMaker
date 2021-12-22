export type TText = {
  text: string;
  font: TFont;
};

export type TFont = {
  family: string;
  color: string;
  size: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};
