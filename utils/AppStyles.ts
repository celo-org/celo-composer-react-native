import { StyleSheet } from "react-native";
import { AppUtils } from "./StylesUtils";

export const AppStyles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   alignItems: "center",
    //   justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 40,
  },
  title: {
    marginTop: 15,
    paddingVertical: 15,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  h1: {
    fontSize: 20,
    fontWeight: "800",
    color: AppUtils.color.textHeadings,
  },
  h2: {
    fontSize: 17,
    fontWeight: "700",
    color: AppUtils.color.textHeadings,
  },
  h3: {
    fontSize: 15,
    fontWeight: "600",
    color: AppUtils.color.textHeadings,
  },
  p1: {
    fontSize: 17,
    fontWeight: "400",
    color: AppUtils.color.textBody,
  },
  p2: {
    fontSize: 15,
    fontWeight: "400",
    color: AppUtils.color.textBody,
  },
  p3: {
    fontSize: 13,
    fontWeight: "300",
    color: AppUtils.color.textBody,
  },
  inputText: {
    color: AppUtils.color.grey,
    fontSize: 16,
    fontWeight: 400,
  },
  border: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderStyle: "solid",
  },
  inputBorder: {
    borderWidth: 0.5,
    width: "100%",
    height: 50,
    borderRadius: 5,
    borderStyle: "solid",
  },
  fileCard: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderStyle: "solid",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 30,
  },
  cardShadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  bottomText: {
    color: AppUtils.color.grey,
    fontWeight: 300,
    fontSize: 14,
    textAlign: "center",
  },
  bottomTextLink: {
    color: AppUtils.color.primary,
    fontWeight: 500,
    marginHorizontal: 5,
    fontSize: 14,
  },
});
