import { SafeAreaView, ScrollView, StyleSheet, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { ThemedView } from "./ThemedView";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Wrapper({
  hideScrollView = false,
  ...props
}: {
  children: ReactNode;
  style?: ViewStyle;
  hideScrollView?: boolean;
}) {
  return (
    <SafeAreaView
      style={[
        {
          minHeight: "100%",
          width: "100%",
        },
        props.style,
      ]}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
