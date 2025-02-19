import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  Text,
  View,
  Button,
  Pressable,
} from "react-native";
import { Link, router } from "expo-router";
import { AppAssets, AppPages, AppUtils } from "@/utils";

export default function Index() {
  // Function to handle the
  const handleButtonPress = async () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>WalletConnect Modal RN Tutorial</Text>

      <View style={styles.logoContainer}>
        <Image src={AppAssets.imgs.logo} alt="Logo Image" />
        <Text style={styles.logoText}>Celo Native </Text>
      </View>

      <Link href={"/well"}>
        <Text>Well</Text>
      </Link>
      <Button
        title="Read"
        onPress={() => {
          router.push("/read");
        }}
      />
      <Button
        title="Home"
        onPress={() => {
          router.push("/home");
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          router.push("/login");
        }}
      />
      <Button
        title="Welcome"
        onPress={() => {
          router.push("/welcome");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppUtils.color.card,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  logoContainer: {
    marginTop: 200,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    gap: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  pressableMargin: {
    marginTop: 16,
  },
});
