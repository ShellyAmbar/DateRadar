import {Location} from "@traveloffline/app/features/places/interfaces";
import {Direction} from "../interfaces";

type DataItem = {
  index: number;
  title: string;
  subTitle: string;
  address: string;
  location: Location;
  image: any;
  onPress: () => void;
  rate: number;
};
type ScrollItemProps = {
  scrollDirection: Direction;
  dataItem: DataItem;
  scrollX: number;
  scrollY: number;
  index: number;
  numTotalItems: number;
  isAnimateX?: boolean;
  isAnimateY?: boolean;
};

export {DataItem, ScrollItemProps};
