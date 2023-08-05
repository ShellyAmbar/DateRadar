import {HebrewStyle, EnglishStyle} from "@traveloffline/styles/styles";
import i18n from "@traveloffline/services/i18n";
import {StyleSheet} from "react-native";

let LanguageStyle = i18n.isRTL ? HebrewStyle : EnglishStyle;

export default StyleSheet.create({
  h3: {...LanguageStyle.H3, textAlign: "left"},
});
