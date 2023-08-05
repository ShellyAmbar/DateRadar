import {DataItem} from "./scroll-item/interfases";

enum Direction {
  Horizontal,
  Vertical,
}

type ScrollItem = {
  list: DataItem[];
  direction: Direction;
  index: number;
};

type CaruselViewProps = {
  scrollItem: ScrollItem;
  onStartDrag: () => void;
  onEndDrag: () => void;
  onEndTouch: () => void;
  onStartTouch: () => void;
};
export {CaruselViewProps, Direction, ScrollItem};
