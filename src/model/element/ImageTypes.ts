export type TImage = {
  image: string;
  filter?: TFilter;
};

export type TFilter = {
  blur: number;
  colorSelection: string;
};
