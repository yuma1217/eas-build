import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function LinkPage() {
  const router = useRouter();
  return (
    <View>
      <Text>LinkPage</Text>
      <Button onPress={() => router.back()} title="戻る" />
    </View>
  );
}

const styles = StyleSheet.create({});
