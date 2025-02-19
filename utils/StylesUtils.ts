import { Dimensions } from "react-native";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const AppUtils = {
  sizes: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    spacing: 20,
  },
  color: {
    primary: "#000066",
    secondary: "",
    card: "#FEFEFE",
    bg: "#fff",
    accent: "",
    grey: "#6C757D",
    textHeadings: "#111111",
    textBody: "#191818",
    infoBg: "#E0E9F8",
    infoSide: "#FFC107",
    light: {
      text: "#000",
      background: "#fff",
      tint: tintColorLight,
      tabIconDefault: "#ccc",
      tabIconSelected: tintColorLight,
    },
    dark: {
      text: "#fff",
      background: "#000",
      tint: tintColorDark,
      tabIconDefault: "#ccc",
      tabIconSelected: tintColorDark,
    },
  },
};
