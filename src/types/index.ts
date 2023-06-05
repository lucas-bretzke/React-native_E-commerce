import { ImageSourcePropType } from "react-native";

export type ShoeItem = {
  id: number;
  name: string;
  img: ImageSourcePropType;
  discount: number;
  price: number;
  favorite: boolean;
  cart: boolean;
  description: string;
  onClick: () => void;
};