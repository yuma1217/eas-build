import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import { Surface, Text } from "react-native-paper";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>TabOne</Text>
      <Link href="/link/">Link</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
