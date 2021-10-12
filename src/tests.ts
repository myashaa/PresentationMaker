import * as tp from "./types/types"

const initialState: tp.PresentationHistory = {
  index: 0,
  prevState: [],
};

const presentationHistory = [initialState];

const elem1: tp.SlideElement = {
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

const elem2: tp.SlideElement = {
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

const elem3: tp.SlideElement = {
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

const slide1 = {
  elementList: [],
  background: {
    color: "#fff",
    picture: null,
  }
};

const slide2 = {
  elementList: [],
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

const slide3 = {
  elementList: [],
  background: {
    color: "#000",
    picture: null,
  }
};

const slides = [slide1, slide2, slide3];

const sSlides = [slide1];

const pres: tp.Presentation = {
  name: "Presentation1",
  slideList: slides,
  selectedSlides: sSlides,
};

export const editor: tp.Editor = {
  mode: "edit",
  history: presentationHistory,
  presentation: pres,
};

