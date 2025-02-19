import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type ButtonProps = {
  title: string;
  handlePress: VoidFunction;
};

const ButtonComponent = (props: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.handlePress}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#000066",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
