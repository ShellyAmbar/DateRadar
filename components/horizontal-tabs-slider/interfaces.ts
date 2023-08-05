type ListItem = {
  name: string;
  index: number;
  isSelected: boolean;
};
type HorizontalSliderProps = {
  dataList: ListItem[];
  onScrollEndDrag: () => void;
  onScrollBeginDrag: () => void;
};

export {ListItem, HorizontalSliderProps};
