import { COLORS } from "../colors";
import { uuid4 } from "../utils";
import { createElement } from "../model/slide/SlideActions";
import { TSlide } from "../model/slide/SlideTypes";
import { ActionType } from "./actionType";

const initialState: TSlide[] = [{
  id: uuid4(),
  elementList: [],
  background: {
    color: COLORS.white,
  },
}];

export const slideListReducer = (
  state: TSlide[] = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "CREATE_ELEMENT":
      const {slideId, content} = action.payload;
      return createElement(state, slideId, content);
    default:
      return state;
  }
};