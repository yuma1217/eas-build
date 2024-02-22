import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index2() {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, title: "Index2" }}
      ></Stack.Screen>
      <View>
        <Text>Index2</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
