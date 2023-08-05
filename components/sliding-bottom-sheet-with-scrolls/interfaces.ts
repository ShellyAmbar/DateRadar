enum Direction {
  Horizontal,
  Vertical,
}
type DataItem = {
  index: number;
  title: string;
  subTitle: string;
  image: string;
  onPress: () => void;
};
type ScrollItem = {
  list: DataItem[];
  direction: Direction;
  index: number;
};
type BottomSheetWithScrollsProps = {
  scrolls?: ScrollItem[];
};

export {BottomSheetWithScrollsProps, ScrollItem, Direction};
