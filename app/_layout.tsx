import { View, Text } from "react-native";
import React from "react";
import { SessionProvider } from "@/components/ctx";
import { Slot } from "expo-router";

const Root = () => {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
};

export default Root;
