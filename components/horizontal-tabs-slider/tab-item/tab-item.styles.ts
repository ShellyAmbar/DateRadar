import i18n from "@traveloffline/services/i18n";
import {GlobalColors} from "@traveloffline/styles/global-colors";
import {EnglishStyle, HebrewStyle} from "@traveloffline/styles/styles";
import {StyleSheet} from "react-native";
import {TabItemStylesProps} from "./interfaces";

const createStyle = ({isSelected, ...props}: TabItemStylesProps) => {
  return StyleSheet.create({
    container: {
      marginStart: 20,
      borderColor: isSelected
        ? GlobalColors.TextColors.white
        : GlobalColors.TextColors.secondary,
      borderWidth: 2,
      borderRadius: 15,
      shadowColor: "#FFFF",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 5,

      elevation: 15,
      backgroundColor: "transparent",
    },
    text: {
      ...(i18n.isRTL
        ? isSelected
          ? HebrewStyle.H6
          : HebrewStyle.BodyText1
        : isSelected
        ? EnglishStyle.H6
        : EnglishStyle.BodyText1),
      color: isSelected
        ? GlobalColors.TextColors.white
        : GlobalColors.TextColors.secondary,

      padding: 10,
    },
  });
};
export {createStyle};
