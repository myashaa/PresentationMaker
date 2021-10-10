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
  elementList: SlideElement[];
  background: Background;
};

export type Background = {
  color: string | null;
  picture: Image | null;
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
