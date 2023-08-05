import {Dimensions, TextStyle} from "react-native";
import {GlobalColors} from "./global-colors";

export const {width, height} = Dimensions.get("screen");

interface StyleInterface {
  H1: TextStyle;
  H2: TextStyle;
  H3: TextStyle;
  H4: TextStyle;
  H5: TextStyle;
  H6: TextStyle;
  BodyText1: TextStyle;
  BodyText2: TextStyle;
  BodyText3: TextStyle;
  BodyText4: TextStyle;
  Link: TextStyle;
  BodyTextSmallHighlight: TextStyle;
  BodyTextSmall: TextStyle;
  BodyTextXS: TextStyle;
  BodyTextLarge: TextStyle;
  BodyTextXLarge: TextStyle;
}

export const HebrewStyle: StyleInterface = {
  H1: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 39,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  H2: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 33,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  H3: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 28,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  H4: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  H5: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  H6: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 21,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  BodyText1: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  BodyText2: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  BodyText3: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  BodyText4: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  Link: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21,
    textDecorationLine: "underline",
    textAlign: "right",
    color: GlobalColors.Brand.primary,
  },
  BodyTextSmallHighlight: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 17,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  BodyTextSmall: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 17,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  BodyTextXS: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 13,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  BodyTextLarge: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: "bold",

    fontSize: 40,
    lineHeight: 53.2,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  BodyTextXLarge: {
    fontFamily: "Inter-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 48,
    lineHeight: 48,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
};

export const EnglishStyle: StyleInterface = {
  H1: {
    fontFamily: "Inter-SemiBold",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 28,
    lineHeight: 39,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  H2: {
    fontFamily: "Inter-SemiBold",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 33,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  H3: {
    fontFamily: "Inter-SemiBold",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 28,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  H4: {
    fontFamily: "Inter-SemiBold",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 25,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  H5: {
    fontFamily: "Inter-SemiBold",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  H6: {
    fontFamily: "Inter-SemiBold",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 21,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  BodyText1: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
    textDecorationColor: "red",
  },
  BodyText2: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  BodyText3: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  BodyText4: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  Link: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    textAlign: "left",
    color: GlobalColors.Brand.primary,
  },
  BodyTextSmallHighlight: {
    fontFamily: "Inter-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 16,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  BodyTextSmall: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 16,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  BodyTextXS: {
    fontFamily: "Inter-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "left",
    color: GlobalColors.TextColors.primary,
  },
  BodyTextLarge: {
    fontFamily: "Inter-SemiBold",
    fontStyle: "normal",
    fontWeight: "bold",

    fontSize: 40,
    lineHeight: 53.2,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
  BodyTextXLarge: {
    fontFamily: "Inter-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 48,
    lineHeight: 48,
    textAlign: "right",
    color: GlobalColors.TextColors.primary,
  },
};

export const Containeres: {flexFullScreenCentered: TextStyle} = {
  flexFullScreenCentered: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: GlobalColors.BgColors.Bg1,
  },
};
