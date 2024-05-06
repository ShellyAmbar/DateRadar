import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";
import React from "react";
import Search from "@traveloffline/assets/images/search.svg";
import Delete from "@traveloffline/assets/images/closeIconWhite.svg";
import {SearchBarProps} from "./interfaces";
import useSearchBar from "./hooks/useSearchBar";
import Styles from "./search-bar.styles";
import SearchItem from "./search-item/search-item";
const SearchBar = ({
  onClickSearch,
  onSelectResult,
  data = [],
  viewContainerStyle,
  searchbarContainerStyle,
  resultsContainerStyle,
  buttonSearchStyle,
  cancleButtonStyle,
  textInputStyle,
  onPressDelete,
  resultItemTextStyle,
  resultItemContainerStyle,
  isAutoCompleteSearch = false,
  icon,
  ...props
}: SearchBarProps) => {
  const {
    searchTerm,
    setSearchTerm,
    filteredResults,
    setFilteredResults,
    resetResults,
    isShowResults,
    setIsShowResults,
  } = useSearchBar({data: data ?? []});
  return (
    <View style={[Styles.container, {...viewContainerStyle}]}>
      <View style={[Styles.searchbar, {...searchbarContainerStyle}]}>
        {!isAutoCompleteSearch && (
          <TouchableOpacity
            onPress={() => onClickSearch && onClickSearch(searchTerm)}
            style={[Styles.search_icon, {...buttonSearchStyle}]}
          >
            {icon ? icon() : <Search width={20} height={20} />}
          </TouchableOpacity>
        )}
        {searchTerm?.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setIsShowResults(false);
              onPressDelete && onPressDelete();
              setSearchTerm("");
              setFilteredResults([]);
              resetResults();
            }}
            style={[Styles.delete_icon, {...cancleButtonStyle}]}
          >
            <Delete width={14} height={14} />
          </TouchableOpacity>
        )}
        <TextInput
          cursorColor={"#FFFF"}
          style={[
            Styles.input,
            !isAutoCompleteSearch && {paddingStart: 20},
            {...textInputStyle},
          ]}
          value={searchTerm}
          onChangeText={(v) => {
            setSearchTerm(v);
            if (v.length === 0) {
              setIsShowResults(false);
            } else {
              setIsShowResults(true);
            }
            // in case delete char from search term

            if (v.length < searchTerm.length) {
              resetResults();
              setFilteredResults(
                data.filter((item) =>
                  item.name.toLowerCase().includes(v.toLowerCase())
                )
              );
            } else {
              setFilteredResults(
                filteredResults.filter((item) =>
                  item.name.toLowerCase().includes(v.toLowerCase())
                )
              );
            }
          }}
          placeholder="Search for a place.."
          placeholderTextColor={"#FFFF"}
          {...props}
        />
      </View>
      <View>
        {data.length > 0 && isShowResults && (
          <>
            <View style={Styles.spacer} />

            <FlatList
              style={[Styles.list, {...resultsContainerStyle}]}
              data={filteredResults}
              renderItem={({item, index}) => (
                <SearchItem
                  containerStyle={resultItemContainerStyle}
                  textStyle={resultItemTextStyle}
                  key={item.id}
                  text={item.name}
                  onPress={() => {
                    setSearchTerm(item.name);
                    onSelectResult && onSelectResult(item);
                    setIsShowResults(false);
                    Keyboard.dismiss();
                  }}
                />
              )}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
