import {useState} from "react";
import {t} from "@traveloffline/services/i18n";

function useDatePicker() {
  let today = new Date();

  // state values
  const [currentDay, setCurrentDay] = useState<number>(today.getDate());
  const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth());
  const [currentYear, setCurrentYear] = useState<number>(
    today.getFullYear() - 1
  );
  const [monthsArr] = useState<string[]>(getMonthList());
  //   const [yearsArr] = useState<number[]>(getYearList());

  const [chosenDate, setChosenDate] = useState<Date>();

  function getMonthList(): string[] {
    // note the NO space and 1 space for the unique key extractor!
    // spaces important for scroll!
    let arr = [
      "",
      t("date_picker:month_1"),
      t("date_picker:month_2"),
      t("date_picker:month_3"),
      t("date_picker:month_4"),
      t("date_picker:month_5"),
      t("date_picker:month_6"),
      t("date_picker:month_7"),
      t("date_picker:month_8"),
      t("date_picker:month_9"),
      t("date_picker:month_10"),
      t("date_picker:month_11"),
      t("date_picker:month_12"),
      " ",
    ];
    return arr;
  }

  function handleChosenDate() {
    // the hours is important for the date picker to work!
    setChosenDate(new Date(currentYear + 1, currentMonth, currentDay + 2));
  }

  return {
    currentDay,
    setCurrentDay,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    chosenDate,
    monthsArr,
    handleChosenDate,
  };
}

export default useDatePicker;
