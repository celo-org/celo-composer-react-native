import {
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

import { ParallaxScrollView } from "@/components";
import { useContractEvents, useReadContract } from "thirdweb/react";
import { client, contract, cusdContract } from "@/constants/thirdweb";
import { totalSupply } from "thirdweb/extensions/erc721";
import { transferEvent } from "thirdweb/extensions/erc20";
import { toTokens } from "thirdweb";
import { shortenAddress } from "thirdweb/utils";
import { AppUtils, AppStyles } from "@/utils";
// import { SocialProfilesList } from "../../components/SocialProfileCard";

export default function ReadScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/title.png")}
            style={styles.reactLogo}
          />
        }
      >
        <View style={styles.titleContainer}>
          <Text style={AppStyles.title}>Read onchain data</Text>
        </View>
        <SocialSection />
        <ReadSection />
        <EventsSection />
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

function SocialSection() {
  return (
    <View style={styles.stepContainer}>
      <View style={{ gap: 2 }}>
        <Text>{`useSocialProfiles()`}</Text>
        <Text>Fetch all known social profiles for any wallet address.</Text>
      </View>
      {/* <SocialProfilesList
        address={"0x2247d5d238d0f9d37184d8332aE0289d1aD9991b"}
        client={client}
      /> */}
    </View>
  );
}

function ReadSection() {
  const nameQuery = useReadContract({
    contract,
    method: "function name() returns (string)",
  });
  const supplyQuery = useReadContract(totalSupply, {
    contract,
  });

  return (
    <View style={styles.stepContainer}>
      <View style={{ gap: 2 }}>
        <Text>useReadContract()</Text>
        <Text>Hook to read contract data, with auto refetching.</Text>
      </View>
      <View style={{ gap: 2 }}>
        <Text>
          Contract name: <Text>{nameQuery.data}</Text>{" "}
        </Text>
        <Text>
          Supply: <Text>{supplyQuery.data?.toString()}</Text>{" "}
        </Text>
      </View>
    </View>
  );
}

function EventsSection() {
  const eventsQuery = useContractEvents({
    contract: cusdContract,
    events: [transferEvent()],
    blockRange: 10,
  });

  return (
    <View style={styles.stepContainer}>
      <View style={{ gap: 2 }}>
        <Text>useContractEvents()</Text>
        <Text>Hook to subscribe to live contract events.</Text>
      </View>
      <View style={{ height: 4 }} />
      <Text>
        Live <Text>cUSD</Text> transfers
      </Text>
      {eventsQuery.isLoading && <ActivityIndicator />}
      {eventsQuery.data
        ?.slice(-10)
        ?.reverse()
        ?.map((event, i) => {
          return (
            <View key={`${event.transactionHash}${i}`} style={{ gap: 4 }}>
              <Text>
                {shortenAddress(event.args.from)} sent{" "}
                <Text>{toTokens(event.args.value, 6)} cUSD</Text>{" "}
              </Text>
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppUtils.color.bg,
    paddingTop: StatusBar.currentHeight,
  },
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
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
