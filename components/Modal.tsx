import { AppStyles, AppUtils } from "@/utils";
import { ReactNode } from "react";
import { Modal, SafeAreaView, StyleSheet } from "react-native";
import { View, Text } from "./Themed";
import { AppButton } from "./AppButton";

type IProps = {
  title?: string;
  subtitle?: string;
  btnTitle: string;
  secondBtnTitle?: string;
  secondOnPress?: VoidFunction;
  onPress: VoidFunction;
  icon?: JSX.Element;
  isVisible: boolean;
  children?: ReactNode;
};

export function AppModal(props: IProps) {
  return (
    <Modal
      style={styles.container}
      visible={props.isVisible}
      animationType="slide"
      transparent
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {props.icon && props.icon}
          <View style={{ ...styles.textContainer }}>
            <Text style={{ ...AppStyles.h2, textAlign: "center" }}>
              {props.title}
            </Text>
            <Text
              style={{ ...AppStyles.p2, marginTop: 10, textAlign: "center" }}
            >
              {props.subtitle}
            </Text>
          </View>
          <AppButton title={props.btnTitle} onPress={props.onPress} />
          {props.secondBtnTitle && (
            <AppButton
              title={props.secondBtnTitle}
              onPress={props.secondOnPress}
            />
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#312e2e2b",
    opacity: 0.5,
  },
  safeArea: {
    backgroundColor: "#00000052",
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  content: {
    marginTop: AppUtils.sizes.height / 4,
    width: "80%",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
});
