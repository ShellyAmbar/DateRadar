import React, {useState} from "react";
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from "react-native";

const DatePickerItem = ({date, isSelected, onSelectDate}) => {
  return (
    <TouchableOpacity
      style={[styles.dateItem, isSelected && styles.selectedDateItem]}
      onPress={() => onSelectDate(date)}
    >
      <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>
        {date}
      </Text>
      {isSelected && <Icon name="ios-checkmark" size={24} color="#007AFF" />}
    </TouchableOpacity>
  );
};

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = [
    "Aug 01",
    "Aug 02",
    "Aug 03",
    "Aug 04",
    // Add more dates here
  ];

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={dates}
        renderItem={({item}) => (
          <DatePickerItem
            date={item}
            isSelected={item === selectedDate}
            onSelectDate={handleSelectDate}
          />
        )}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  dateItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 8,
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDateItem: {
    backgroundColor: "#007AFF",
  },
  dateText: {
    fontSize: 16,
    color: "black",
  },
  selectedDateText: {
    color: "white",
    fontWeight: "bold",
  },
});
