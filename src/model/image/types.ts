export type Image = {
  url: string;
  filter: Filter;
};

export type Filter = {
  blur: number;
  colorSelection: string;
};