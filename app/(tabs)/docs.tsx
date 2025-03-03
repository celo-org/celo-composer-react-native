import { Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ExternalLink } from "@/components/ExternalLink";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Documentation</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Link to Docs</ThemedText>
        <ExternalLink href="https://faucet.celo.org/">
          <ThemedText type="link">Faucet</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.26+commit.8a97fa7a.js">
          <ThemedText type="link">Remix</ThemedText>
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
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
