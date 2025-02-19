import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import { Link } from "expo-router";
import { AppUtils } from "@/utils";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Link href="/home">About</Link>
        {/* ...other links */}
        <Link href="/read">View user</Link>
      </View>
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
  
});