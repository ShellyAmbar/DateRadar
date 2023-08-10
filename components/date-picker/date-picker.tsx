import React, {useEffect, useMemo, useRef, useState} from "react";
import {FlatList} from "react-native";
import ScrollList from "./scroll-list/scroll-list";
import LabelsHeader from "./labels-header/labels-header";
import styles from "./date-picker.styles";
import {Box} from "@traveloffline/components/controllers/box/box";
import {t} from "@traveloffline/services/i18n";
import useDatePicker from "./hooks/useDatePicker";
import Spacer from "../controllers/spacer/spacer";
import ButtonFactory from "@traveloffline/components/factories/button-factory/button-factory";
import {DatePickerProps} from "./interfaces";
import {LinearGradient} from "expo-linear-gradient";

const TEXT_HEIGHT = 60;
const ROWS_COUNT = 3;
const HEIGHT = TEXT_HEIGHT * ROWS_COUNT;

/**
 *
 * @params strictMode - If strictMode=true, the user will not be able to choose a date that is in the future
 */
const DatePicker = ({onPressProceed, strictMode}: DatePickerProps) => {
  const {
    currentDay,
    setCurrentDay,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    chosenDate,
    monthsArr,
    handleChosenDate,
  } = useDatePicker();

  const daysRef = useRef(null);
  const monthsRef = useRef(null);
  const yearsRef = useRef(null);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      handleChosenDate();
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [currentDay, currentMonth, currentYear]);

  const months: number[] = [...Array(12).keys()];

  const daysInMonth = useMemo(() => {
    const daysInMonth =
      new Date(currentYear + 1, currentMonth + 1, 0).getDate() + 1;
    const days: (string | number)[] = [...Array(daysInMonth).keys()];
    days.forEach((_, index) => {
      days[index] = days[index].toString();
    });
    // note the NO space and 1 space for the unique key extractor!
    days[0] = ""; // NO SPACE
    days.push(" "); // 1 SPACE
    return days;
  }, [currentMonth, currentYear]);

  const years = useMemo(() => {
    const yearsArray = [];
    for (let index = 1900; index <= 2030; index++) {
      yearsArray.push(index);
    }
    return yearsArray;
  }, []);

  return (
    <Box style={styles.DatePickerContainer}>
      <Box>
        <LabelsHeader
          day={t("date_picker:day")}
          month={t("date_picker:month")}
          year={t("date_picker:year")}
        />
        <Spacer size={16} />
        <Box style={[styles.wrapper, {height: HEIGHT}]}>
          <LinearGradient
            style={[{height: TEXT_HEIGHT}, styles.topOpacity]}
            colors={["white", "transparent"]}
            start={[0.5, 0]}
            end={[0.5, 1]}
            locations={[0.0, 1]}
            pointerEvents="none"
          />
          <FlatList
            initialNumToRender={34}
            onMomentumScrollEnd={({nativeEvent}) => {
              const index = Math.round(
                nativeEvent.contentOffset.y / TEXT_HEIGHT
              );
              if (index !== currentDay) {
                setCurrentDay(+daysInMonth[index]);
              }
            }}
            snapToInterval={TEXT_HEIGHT}
            snapToOffsets={daysInMonth.map((_, index) => index * TEXT_HEIGHT)}
            onScrollToIndexFailed={(info) => {
              const wait = new Promise((resolve) => setTimeout(resolve, 500));
              wait.then(() => {
                daysRef.current?.scrollToIndex({index: 1, animated: true});
              });
            }}
            data={daysInMonth}
            pagingEnabled
            ref={daysRef}
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}
            contentOffset={{y: TEXT_HEIGHT * currentDay, x: 0}}
            keyExtractor={(item) => item.toString()}
            renderItem={({item, index}) => (
              <ScrollList title={item.toString()} textHeight={TEXT_HEIGHT} />
            )}
          />
          <FlatList
            initialNumToRender={14}
            onMomentumScrollEnd={({nativeEvent}) => {
              const index = Math.round(
                nativeEvent.contentOffset.y / TEXT_HEIGHT
              );
              if (index !== currentMonth) {
                setCurrentMonth(months[index]);
              }
            }}
            snapToInterval={TEXT_HEIGHT}
            snapToOffsets={months.map((_, index) => index * TEXT_HEIGHT)}
            onScrollToIndexFailed={(info) => {
              const wait = new Promise((resolve) => setTimeout(resolve, 500));
              wait.then(() => {
                monthsRef.current?.scrollToIndex({index: 1, animated: true});
              });
            }}
            data={monthsArr}
            pagingEnabled
            ref={monthsRef}
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}
            contentOffset={{y: TEXT_HEIGHT * currentMonth, x: 0}}
            keyExtractor={(item) => item.toString()}
            renderItem={({item, index}) => (
              <ScrollList title={item.toString()} textHeight={TEXT_HEIGHT} />
            )}
          />
          <FlatList
            initialNumToRender={130}
            onMomentumScrollEnd={({nativeEvent}) => {
              const index = Math.round(
                nativeEvent.contentOffset.y / TEXT_HEIGHT
              );
              if (index !== currentYear) {
                setCurrentYear(years[index]);
              }
            }}
            snapToInterval={TEXT_HEIGHT}
            snapToOffsets={years.map((_, index) => index * TEXT_HEIGHT)}
            onScrollToIndexFailed={(info) => {
              const wait = new Promise((resolve) => setTimeout(resolve, 500));
              wait.then(() => {
                yearsRef.current?.scrollToIndex({index: 1, animated: true});
              });
            }}
            data={years}
            pagingEnabled
            ref={yearsRef}
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}
            contentOffset={{
              y: TEXT_HEIGHT * (new Date().getFullYear() - 1900 - 1),
              x: 0,
            }}
            keyExtractor={(item) => item.toString()}
            renderItem={({item, index}) => (
              <ScrollList title={item.toString()} textHeight={TEXT_HEIGHT} />
            )}
          />
          <LinearGradient
            style={[{height: TEXT_HEIGHT}, styles.bottomOpacity]}
            colors={["white", "transparent"]}
            start={[0.5, 1]}
            end={[0.5, 0]}
            locations={[0.0, 1]}
            pointerEvents="none"
          />
        </Box>

        <Spacer size={16} />

        <Spacer size={16} />
      </Box>
    </Box>
  );
};

export default DatePicker;
