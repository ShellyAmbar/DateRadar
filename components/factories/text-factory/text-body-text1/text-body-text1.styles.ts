import {HebrewStyle, EnglishStyle} from "@traveloffline/styles/styles";
import i18n from "@traveloffline/services/i18n";
import {StyleSheet} from "react-native";
let LanguageStyle = i18n.isRTL ? HebrewStyle : EnglishStyle;

export default StyleSheet.create({
  BodyText1: {...LanguageStyle.BodyText1, textAlign: "left"},
});
