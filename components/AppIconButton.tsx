import { TouchableOpacity, StyleSheet, ViewStyle, Image } from "react-native";
import { Text, View } from "./Themed";
import { AppUtils } from "@/utils";

export function AppIconButton(props: {
  title: string;
  icon: string;
  style?: ViewStyle;
}) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }}>
      <View style={styles.container}>
        <Image source={{ uri: props.icon, height: 25, width: 25 }} />
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: AppUtils.color.primary,
  },
  button: {
    backgroundColor: AppUtils.color.primary,
    borderRadius: 10,
    paddingVertical: 10,
    width: "100%",
  },
  buttonText: {
    backgroundColor: AppUtils.color.primary,
    borderRadius: 10,
    color: AppUtils.color.card,
    fontWeight: "800",
  },
});
