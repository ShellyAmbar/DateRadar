import {StyleSheet} from "react-native";
import {HebrewStyle, EnglishStyle} from "@traveloffline/styles/styles";
import {GlobalColors} from "@traveloffline/styles/global-colors";
import i18n from "@traveloffline/services/i18n";

let LanguageStyle = i18n.isRTL ? HebrewStyle : EnglishStyle;

export default StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
    backgroundColor: GlobalColors.BgColors.Bg1,
    borderColor: GlobalColors.Border,
    ...LanguageStyle.BodyText1,
  },
  inputSize: {
    ...LanguageStyle.BodyText1,
    paddingVertical: 4,
  },
  title: {
    ...LanguageStyle.BodyTextSmall,
    textAlign: "left",
  },
  focusColor: {
    borderColor: GlobalColors.Brand.primary,
    stroke: GlobalColors.Brand.primary,
  },
  errorColor: {
    borderColor: GlobalColors.SystemColors.Error,
    backgroundColor: GlobalColors.SystemColors.Error2,
    stroke: GlobalColors.SystemColors.Error,
  },
  errorText: {
    paddingTop: 8,
    ...LanguageStyle.BodyTextSmall,
    color: "red",
    textAlign: "left",
  },
  titleDisabled: {
    color: GlobalColors.TextColors.secondary,
  },
  inputDisabled: {
    backgroundColor: GlobalColors.BgColors.Bg4,
  },
  multiLine: {
    textAlignVertical: "top",
    textAlign: "center",
    height: 96,
  },
  centered: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
