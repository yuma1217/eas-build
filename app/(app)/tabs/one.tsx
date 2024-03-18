import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import { Surface, Text } from "react-native-paper";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={{ pathname: "/(app)/link/[id]", params: { id: "1" } }}>
        1ページ目へ
      </Link>
      <Link href={{ pathname: "/(app)/link/[id]", params: { id: "2" } }}>
        2ページ目へ
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({});
