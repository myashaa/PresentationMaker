export type Element = {
  width: number;
  height: number;
  position: {
    x: number;
    y: number;
  };
  color?: string;
  border?: Border;
  // data: Text | Image | Figure;
  text?: Text;
  image?: Image;
  figure?: Figure;
};

export type Text = {
  content: string;
  font: Font;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

export type Font = {
  family: string;
  color: string;
  size: number;
};

export type Image = {
  url: string;
  filter: Filter;
};

export type Figure = {
  type: "circle" | "triangle" | "sguare";
};

export type Border = {
  width: number;
  type: "solid" | "dotted" | "dashed";
  color: string;
};

export type Filter = {
  blur: number;
  colorSelection: string;
};
