import { AppUtils } from "@/utils";
import { ReactNode } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ViewStyle,
  ScrollView,
} from "react-native";
import { View } from "./Themed";

type IProps = {
  children: ReactNode;
  hideStatusBar?: boolean;
  style?: ViewStyle;
};

export function AppWrapper(props: IProps) {
  const containerStyles = props.hideStatusBar
    ? styles.noStatusBar
    : styles.withStatusBar;
  return (
    <SafeAreaView style={{ ...styles.container, ...props.style }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar
          backgroundColor={AppUtils.color.primary}
          barStyle={"default"}
        />
        <View style={containerStyles}>{props.children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppUtils.color.bg,
  },
  withStatusBar: {
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 50,
    paddingHorizontal: 30,
  },
  noStatusBar: {
    paddingHorizontal: 30,
  },
});
