import {useState} from "react";
import {SearchItem} from "../interfaces";
import {UseSearchBarProps} from "./interfaces";

const useSearchBar = (props: UseSearchBarProps) => {
  const [selectedItem, setSelectedItem] = useState<SearchItem>({
    id: "0",
    name: "",
  });
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [filteredResults, setFilteredResults] = useState<SearchItem[]>(
    props.data
  );
  const [isShowResults, setIsShowResults] = useState(false);

  const resetResults = () => {
    setFilteredResults(props.data);
  };
  return {
    selectedItem,
    setSelectedItem,
    searchTerm,
    setSearchTerm,
    resetResults,
    filteredResults,
    setFilteredResults,
    isShowResults,
    setIsShowResults,
  };
};

export default useSearchBar;
