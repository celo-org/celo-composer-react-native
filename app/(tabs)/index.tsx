import { StyleSheet, Platform, KeyboardAvoidingView, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { W3mButton } from "@web3modal/wagmi-react-native";
import { HelloWave } from "@/components/HelloWave";
import SendTransactions from "@/components/web3/SendTransactions";
import SignMessage from "@/components/web3/SignMessage";

export default function TabTwoScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <IconSymbol
            size={310}
            color="#808080"
            name="chevron.left.forwardslash.chevron.right"
            style={styles.headerImage}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">React Native Starterkit</ThemedText>
        </ThemedView>
        <ThemedText>
          Welcome to Celo React Native Starterkit
          <HelloWave />
        </ThemedText>
        <W3mButton
          connectStyle={{ backgroundColor: "#cdd108" }}
          label="Connect Wallet"
          balance="show"
        />
        <SignMessage />
        <View style={{borderWidth: 3, borderColor: "#bebebe"}} />
        <SendTransactions />
      </ParallaxScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    // padding: 20,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
