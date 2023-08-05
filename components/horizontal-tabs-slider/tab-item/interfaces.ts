import {ListItem} from "../interfaces";

type TabItemProps = {
  onPress: (item: ListItem) => void;
  item: ListItem;
};

type TabItemStylesProps = {
  isSelected?: boolean;
};

export {TabItemProps, TabItemStylesProps};
