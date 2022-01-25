import {
  changeFigure,
  changeFigureColor,
} from "../model/element/FigureActions";
import { setFilter } from "../model/element/ImageActions";
import { setFont, setText } from "../model/element/TextActions";
import {
  createElement,
  moveElement,
  removeElement,
  resizeElement,
  setBackground,
} from "../model/slide/SlideActions";
import { TSlide } from "../model/slide/SlideTypes";
import { ActionType } from "./actionType";

export const slideListReducer = (state: TSlide[], action: ActionType) => {
  switch (action.type) {
    case "CREATE_ELEMENT":
      const { slideId, content } = action.payload;
      return createElement(state, slideId, content, action.payload.size);
    case "DELETE_ELEMENT":
      return removeElement(state, action.payload.slide, action.payload.element);
    case "MOVE_ELEMENT":
      return moveElement(
        state,
        action.payload.slide,
        action.payload.id,
        action.payload.position
      );
    case "RESIZE_ELEMENT":
      return resizeElement(
        state,
        action.payload.slide,
        action.payload.id,
        action.payload.width,
        action.payload.height
      );
    case "SET_ELEMENT_TEXT":
      return setText(
        state,
        action.payload.slide,
        action.payload.id,
        action.payload.text
      );
    case "SET_TEXT_FONT":
      return setFont(
        state,
        action.payload.slide,
        action.payload.id,
        action.payload.font
      );
    case "SET_FIGURE_FILL":
      return changeFigureColor(
        state,
        action.payload.slide,
        action.payload.id,
        action.payload.fill
      );
    case "SET_FIGURE_TYPE":
      return changeFigure(
        state,
        action.payload.slide,
        action.payload.id,
        action.payload.type
      );
    case "SET_IMAGE_FILTER":
      return setFilter(
        state,
        action.payload.slide,
        action.payload.element,
        action.payload.filter
      );
    case "SET_SLIDE_BACKGROUND":
      return setBackground(
        state,
        action.payload.slide,
        action.payload.background
      );
    default:
      return state;
  }
};
