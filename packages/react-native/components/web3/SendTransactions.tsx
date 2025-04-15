import { StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import InputField from "@/components/Input";
import { Button } from "@/components/Button";

export default function SendTransactions() {
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [errMsg, setErrMsg] = useState<string>();
  const { data, isSuccess, sendTransaction } = useSendTransaction();

  const handleSend = async () => {
    if (!toAddress || !amount) {
      setErrMsg("Please enter a valid address and amount.");
      // alert("Please enter a valid address and amount.");
      return;
    } else {
      setErrMsg("");
    }
    await sendTransaction({
      to: toAddress as `0x${string}`,
      value: parseEther(amount),
    });
  };
  return (
    <ThemedView style={{ paddingBottom: 50, width: "100%" }}>
      <ThemedText type="subtitle">Send Celo Token</ThemedText>
      <InputField
        label={"Amount"}
        value={amount}
        onChangeText={(e) => setAmount(e)}
        placeholder={"Enter Amount"}
        secureTextEntry={false}
      />
      <InputField
        label={"Receiver"}
        value={toAddress}
        onChangeText={(e) => setToAddress(e)}
        placeholder={"Enter wallet address"}
        secureTextEntry={false}
      />
      <ThemedView
        style={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        <Button title={"Send"} onPress={handleSend} />
      </ThemedView>
      {isSuccess && (
        <ThemedText type="default">
          Transaction sent! Tx Hash: {data}
        </ThemedText>
      )}
      {errMsg && (
        <ThemedText type="default" style={{ color: "red", marginTop: 10 }}>
          {errMsg}
        </ThemedText>
      )}
    </ThemedView>
  );
}
