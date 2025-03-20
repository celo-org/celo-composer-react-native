import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { ReactNode } from "react";
import { ThemedView } from "./ThemedView";

export default function Wrapper({
  hideScrollView = false,
  ...props
}: {
  children: ReactNode;
  style?: ViewStyle;
  hideScrollView?: boolean;
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, paddingBottom: 100 }}
    >
      <SafeAreaView
        style={[
          {
            minHeight: "100%",
            width: "100%",
          },
          props.style,
        ]}
      >
        {hideScrollView ? (
          <ThemedView style={styles.container}>{props.children}</ThemedView>
        ) : (
          <ScrollView
            bounces={false}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <ThemedView style={styles.container}>{props.children}</ThemedView>
          </ScrollView>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
    minHeight: "100%",
  },
});
