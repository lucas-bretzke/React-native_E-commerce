import { ImageSourcePropType } from "react-native";

export type ShoeItem = {
  description: string;
  id: number;
  name: string;
  img: ImageSourcePropType;
  discount: number;
  price: number;
  favorite: boolean;
  cart: boolean;
  onClick: () => void;
  getFavorites?: () => void;
};