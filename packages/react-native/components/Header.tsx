import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { Platform, useColorScheme } from "react-native";
import {
  NativeStackHeaderLeftProps,
  NativeStackHeaderRightProps,
} from "@react-navigation/native-stack";
import { Colors } from "@/constants/Colors";

export default function Header({
  hideBack = false,
  showBackBtn = false,
  headerRight,
  headerLeft,
  ...props
}: {
  title: string;
  hideBack?: boolean;
  showBackBtn?: boolean;
  headerLeft?:
    | ((props: NativeStackHeaderLeftProps) => React.ReactNode)
    | undefined;
  headerRight?:
    | ((props: NativeStackHeaderRightProps) => React.ReactNode)
    | undefined;
}) {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"];
  const backIcon = Platform.OS === "ios" ? "chevron-back" : "arrow-back-sharp";
  return (
    <Stack.Screen
      options={{
        title: props.title,
        headerTintColor: color.tint,
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: 15,
          color: color.text,
        },
        contentStyle: {
          backgroundColor: color.background,
          borderColor: color.background,
        },
        headerStyle: {
          backgroundColor: color.background,
        },
        headerBackButtonMenuEnabled: true,
        headerShadowVisible: false,
        headerLeft: headerLeft
          ? headerLeft
          : showBackBtn
          ? () => (
              <Ionicons
                name={backIcon}
                size={25}
                color={color.text}
                onPress={() => router.back()}
              />
            )
          : undefined,

        headerRight: headerRight,
      }}
    />
  );
}
