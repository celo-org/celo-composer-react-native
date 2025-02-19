import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TouchableWithoutFeedbackProps,
} from "react-native";
import { Text } from "./Themed";
import { AppUtils } from "@/utils";

interface IProps extends TouchableWithoutFeedbackProps {
  title: string;
  style?: ViewStyle;
  inverse?: boolean;
}

export function AppButton(props: IProps) {
  const { title, style, inverse, ...others } = props;

  const styles = StyleSheet.create({
    button: {
      backgroundColor: inverse ? AppUtils.color.bg : AppUtils.color.primary,
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 20,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    buttonText: {
      backgroundColor: inverse ? AppUtils.color.card : AppUtils.color.primary,
      borderRadius: 10,
      color: inverse ? AppUtils.color.primary : AppUtils.color.card,
      fontWeight: "800",
    },
  });

  return (
    <TouchableOpacity {...others} style={{ ...styles.button, ...props.style }}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}
