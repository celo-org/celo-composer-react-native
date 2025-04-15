import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ExternalLink } from "@/components/ExternalLink";
import Wrapper from "@/components/Wrapper";

export default function HomeScreen() {
  return (
    <Wrapper>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Documentation</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Link to Docs</ThemedText>
        <ExternalLink href="https://faucet.celo.org/">
          <ThemedText type="link">Faucet</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://docs.celo.org/developer/deploy/hardhat">
          <ThemedText type="link">Hardhat</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://x.com/CeloDevs">
          <ThemedText type="link"> Celo Devs</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://www.shadcn-svelte.com/docs/components/accordion">
          <ThemedText type="link">NativeWind</ThemedText>
        </ExternalLink>
      </ThemedView>
      <ThemedView>
        <ThemedText type="subtitle">Styling</ThemedText>
        <ThemedText>
          Feel free to use any styling framework of choice. NativeWind has been
          installed, but you can always remove it.
        </ThemedText>
      </ThemedView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
  },
  stepContainer: {
    gap: 8,
    marginVertical: 10,
    width: "100%",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
