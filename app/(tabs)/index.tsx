import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { W3mButton } from "@web3modal/wagmi-react-native";
import SendTransactions from "@/components/web3/SendTransactions";
import SignMessage from "@/components/web3/SignMessage";
import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";

export default function TabTwoScreen() {
  return (
    <Wrapper>
      <Header title={"Celo Composer"} />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">React Native Starterkit</ThemedText>
      </ThemedView>
      <ThemedView style={{ marginBottom: 20 }}>
        <ThemedText>Welcome to Celo React Native Starterkit</ThemedText>
      </ThemedView>
      <W3mButton
        connectStyle={{ backgroundColor: "#cdd108" }}
        label="Connect Wallet"
        balance="show"
      />
      <SignMessage />
      <View
        style={{ marginVertical: 10, borderColor: "#bebebe", width: "100%" }}
      />
      <SendTransactions />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // padding: 20,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
    width: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    width: "100%",
    marginTop: 20,
  },
});
