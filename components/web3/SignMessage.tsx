import { useState } from "react";
import { useSignMessage } from "wagmi";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import InputField from "@/components/Input";
import { Button } from "@/components/Button";

export default function SignMessage() {
  const [errMsg, setErrMsg] = useState<string>();
  const [message, setMessage] = useState("Hello, Wagmi!");
  const { data: signature, isSuccess, isError, signMessage } = useSignMessage();

  const handleSign = async () => {
    if (!message) {
      setErrMsg("Please enter a message to sign.");
      return;
    } else {
      setErrMsg("");
    }

    await signMessage({ message });
  };

  return (
    <ThemedView style={{marginVertical: 20}}>
      <ThemedText type="subtitle">Send Celo Token</ThemedText>

      <InputField
        label={"Message"}
        value={message}
        onChangeText={(e) => setMessage(e)}
        placeholder={"Enter the message you wish to sign"}
        secureTextEntry={false}
      />

      <Button title={"Sign message"} onPress={handleSign} />

      {isSuccess && (
        <ThemedText type="default">
          Transaction sent! Tx Hash: {signature}
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
