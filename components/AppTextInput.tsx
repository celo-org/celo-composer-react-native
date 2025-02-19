import { TextInput, ViewStyle, StyleSheet } from "react-native";
import { View, Text } from "./Themed";
import { AppStyles, AppUtils } from "@/utils";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

type IProps = {
  label?: string;
  style?: ViewStyle;
  placeholder?: string;
  numeric?: boolean;
  multiFields?: boolean;
  icon?: boolean;
  password?: boolean;
};

export function AppTextInput(props: IProps) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={{ ...props.style }}>
      {props.label && (
        <Text style={{ ...AppStyles.p2, marginBottom: 10 }}>{props.label}</Text>
      )}
      <View
        style={[
          styles.inputContainer,
          isFocus && { borderColor: AppUtils.color.primary },
          { marginBottom: 20 },
        ]}
      >
        {props.password && <AntDesign name="lock" size={25} />}
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={AppUtils.color.grey}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          keyboardType={props.numeric ? "numeric" : "default"}
          cursorColor={AppUtils.color.primary}
          secureTextEntry={props.password}
          style={styles.textInput}
        />
        {props.password && <AntDesign name="eyeo" size={25} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    ...AppStyles.inputBorder,
    width: "100%",
    alignItems: "center",
    gap: 8,
    height: 60,
    padding: 15,
    display: "flex",
    flexDirection: "row",
  },
  textInput: {
    ...AppStyles.inputText,
    padding: 5,
    flexGrow: 1,
    paddingHorizontal: 10,
    // width: "100%",
    // color: AppStyles.p2.color,
    // borderColor: AppUtils.color.grey,
    // width: "100%",
    // height: 50,
  },
});
