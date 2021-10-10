export type Editor = {
  mode: "view" | "edit";
  history: PresentationHistory[];
  presentation: Presentation;
};

export type PresentationHistory = {
  index: number;
  prevState: []; //smth
};

export type Presentation = {
  name: string;
  slideList: Slide[];
  selectedSlides: Slide[];
};

export type Slide = {
  animation: SlideAnimation;
  elementList: SlideElement[];
  background: Background;
};

export type SlideAnimation = {
  fadeIn: 0;
  fadeOut: 1;
};

export type Background = {
  color: string;
  picture: Image;
};

export type SlideElement = {
  width: number;
  heigth: number;
  position: {
    x: number;
    y: number;
  };
  color: string;
  border: Border;
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
};

export type Image = {
  url: string;
  filter: Filter;
};

export type Filter = {
  blur: number;
  colorSelection: string;
};

export type Figure = {
  type: "circle" | "triangle" | "sguare";
};
