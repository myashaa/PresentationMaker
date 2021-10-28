import {Editor} from "./model/editor/EditorTypes"
import {PresentationHistory} from "./model/history/HistoryTypes"
import {Presentation} from "./model/presentation/PresentationTypes"
import {Slide, Background} from "./model/slide/SlideTypes"
import * as el from "./model/element/ElementTypes"
import {Image, Filter} from "./model/image/ImageTypes"
import { setBackground } from "./model/slide/SlideActions"

const initialState: PresentationHistory = {
  index: 0,
  prevState: [],
};

const presentationHistory = [initialState];

const elem1: el.SlideElement = {
  width: 800,
  heigth: 50,
  position: {
    x: 0,
    y: 0,
  },
  color: "#fff",
  data: {
    fontFamily: "Arial",
    fontColor: "#000",
    fontSize: 20,
    bold: true,
    italic: false,
    underline: false,
    content: "Title",
  },
};

const elem2: el.SlideElement = {
  width: 200,
  heigth: 100,
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

const elem3: el.SlideElement = {
  width: 50,
  heigth: 50,
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
    type: "triangle"
  },
};

const slide1: Slide = {
  elementList: [elem1],
  background: {
    color: "#fff",
    picture: null,
  }
};

const slide2: Slide = {
  elementList: [elem2],
  background: {
    color: null,
    picture: {
      url: "background.png",
      filter: {
        blur: 0,
        colorSelection: "#fff",
      },
    },
  }
};

const slide3: Slide = {
  elementList: [elem3],
  background: {
    color: "#000",
    picture: null,
  }
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

setBackground(editor, 1, );