import { Image } from "../image/types";

export type SlideElement = {
  width: number;
  heigth: number;
  position: {
    x: number;
    y: number;
  };
  color?: string;
  border?: Border;
  data: SlideText | Image | Figure;
};

export type Border = {
  width: number;
  type: "solid" | "dotted" | "dashed";
  color: string;
};

export type SlideText = {
  fontFamily: string;
  fontColor: string;
  fontSize: number;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  content: string;
};

export type Figure = {
  type: "circle" | "triangle" | "sguare";
};