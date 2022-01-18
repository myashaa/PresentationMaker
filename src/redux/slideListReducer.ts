import { createElement, moveElement } from "../model/slide/SlideActions";
import { TSlide } from "../model/slide/SlideTypes";
import { ActionType } from "./actionType";

export const slideListReducer = (state: TSlide[], action: ActionType) => {
  switch (action.type) {
    case "CREATE_ELEMENT":
      const { slideId, content } = action.payload;
      return createElement(state, slideId, content);
    case "MOVE_ELEMENT":
      return moveElement(
        state,
        action.payload.slide,
        action.payload.id,
        action.payload.position
      );
    default:
      return state;
  }
};
