import {useEffect, useRef, useState} from "react";
import UseHorizontalSliderProps from "./interfaces";
import {ListItem} from "../interfaces";
import {Platform} from "react-native";

const useHorizontalSlider = ({list, ...props}: UseHorizontalSliderProps) => {
  const [listOfData, setlistOfData] = useState<ListItem[]>([...list]);
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log(listOfData);

    if (listOfData?.length > 0) {
      onSelectItem(listOfData[0]);
    }
  }, [JSON.stringify(listOfData.length)]);

  const onSelectItem = (item: ListItem) => {
    let indexInList = listOfData.findIndex(
      (itemData) => itemData.index === item.index
    );

    listOfData[indexInList].isSelected =
      listOfData[indexInList].isSelected === false;

    setlistOfData([...listOfData]);

    const x = indexInList * 100;
    scrollRef?.current?.scrollTo({
      x: x,
      y: 0,
      animated: true,
    });
  };
  return {
    listOfData,
    onSelectItem,
    scrollRef,
  };
};

export default useHorizontalSlider;
