import { Editor } from "./model/editor/EditorTypes";
import { PresentationHistory } from "./model/history/HistoryTypes";
import { Presentation } from "./model/presentation/PresentationTypes";
import { Slide, Background } from "./model/slide/SlideTypes";
import * as el from "./model/element/ElementTypes";
import { Image, Filter } from "./model/element/ElementTypes";
import { setBackground } from "./model/slide/SlideActions";

const initialState: PresentationHistory = {
  index: 0,
  prevState: [],
};

const presentationHistory = [initialState];

const elem1: el.Element = {
  width: 800,
  height: 50,
  position: {
    x: 0,
    y: 0,
  },
  color: "#fff",
  data: {
    font: {
      family: "Arial",
      color: "#000",
      size: 20,
    },
    bold: true,
    italic: false,
    underline: false,
    content: "Title",
  },
};

const elem2: el.Element = {
  width: 200,
  height: 100,
  position: {
    x: 100,
    y: 50,
  },
  data: {
    url: "image.png",
    filter: {
      blur: 0,
      colorSelection: "#000",
    },
  },
};

const elem3: el.Element = {
  width: 50,
  height: 50,
  position: {
    x: 150,
    y: 200,
  },
  color: "#bcbabe",
  border: {
    width: 1,
    type: "solid",
    color: "#d5d5d6",
  },
  data: {
    type: "triangle",
  },
};

const slide1: Slide = {
  elementList: [elem1],
  background: {
    color: "#fff",
  },
};

const slide2: Slide = {
  elementList: [elem2],
  background: {
    picture: {
      url: "background.png",
      filter: {
        blur: 0,
        colorSelection: "#fff",
      },
    },
  },
};

const slide3: Slide = {
  elementList: [elem3],
  background: {
    color: "#000",
  },
};

const slides = [slide1, slide2, slide3];

const pres: Presentation = {
  name: "Presentation1",
  slideList: slides,
  selectedSlidesIds: [0],
  selectedElementIds: [0],
};

export const editor: Editor = {
  mode: "edit",
  history: presentationHistory,
  presentation: pres,
};

// setBackground(editor, { color: "#fff" });
