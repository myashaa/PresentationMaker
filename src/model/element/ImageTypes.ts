export type TImage = {
  image: string;
  filter?: EFilter;
};

export enum EFilter {
  none = "Ничего",
  blur = "Размытие",
  baw = "Черно-белое",
}
