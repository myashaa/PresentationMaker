import { RefObject, useEffect, useState } from "react";
import { TPosition } from "../model/element/ElementTypes";

export const useDragAndDrop = (
  elementRef: RefObject<HTMLDivElement>,
  position: TPosition,
  onMoveEnd: () => void
) => {};
