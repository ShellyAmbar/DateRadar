import {Direction} from "../interfaces";

type DataItem = {
  index: number;
  title: string;
  subTitle: string;
  image: string;
  onPress: () => void;
};
type ScrollItemProps = {
  scrollDirection: Direction;
  dataItem: DataItem;
};

export {DataItem, ScrollItemProps};
