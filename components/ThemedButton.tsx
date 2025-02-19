// import { useThemeColors } from "@/hooks/useThemeColors";
import {
  type PressableProps,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import { useThemeColors } from "@/hooks/useThemeColor";

export type ThemedButtonProps = {
  lightColor?: string;
  darkColor?: string;
  onPress?: PressableProps["onPress"];
  title: string;
  loading?: boolean;
  loadingTitle?: string;
  variant?: "primary" | "secondary";
};

export function ThemedButton(props: ThemedButtonProps) {
  const variant = props.variant ?? "primary";
  const bg = useThemeColors(
    { light: props.lightColor, dark: props.darkColor },
    "tint"
  );
  const textInverted = useThemeColors(
    { light: props.lightColor, dark: props.darkColor },
    "background"
  );
  const text = useThemeColors(
    { light: props.lightColor, dark: props.darkColor },
    "text"
  );
  const textColor = variant == "secondary" ? text : textInverted;
  return (
    <TouchableOpacity
      disabled={props.loading}
      activeOpacity={0.5}
      style={[
        styles.button,
        {
          borderColor: variant == "secondary" ? bg : "transparent",
          borderWidth: variant == "secondary" ? 1 : 0,
          backgroundColor: variant == "secondary" ? "transparent" : bg,
        },
      ]}
      onPress={(e) => {
        props.onPress?.(e);
      }}
    >
      {props.loading && (
        <ActivityIndicator animating={props.loading} color={textColor} />
      )}
      <Text style={{ color: textColor }}>
        {props.loading ? props.loadingTitle : props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    padding: 12,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
