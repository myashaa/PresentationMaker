import { RefObject, useEffect, useState } from "react";
import { Position } from "../model/editor/EditorTypes";

export const useDragAndDrop = (
  elementRef: RefObject<HTMLDivElement>,
  position: Position,
  onMoveEnd: () => void
) => {};
