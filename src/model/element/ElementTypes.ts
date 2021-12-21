export type Element = {
  id: string;
  width: number;
  height: number;
  position: {
    x: number;
    y: number;
  };
  color?: string;
  border?: Border;
  data: Text & Image & Figure;
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
  filter?: Filter;
};

export type Figure = {
  type: "circle" | "triangle" | "sguare";
  fill: string;
};

export enum BorderVariant {
  solid = "Сплошной",
  dotted = "Точечная",
  dashed = "Пунктирная"
}

export type Border = {
  width: number;
  type: BorderVariant;
  color: string;
};

export type Filter = {
  blur: number;
  colorSelection: string;
};
