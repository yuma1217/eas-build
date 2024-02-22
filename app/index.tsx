import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => router.replace("/tabs/")} title="タブページへ" />
      <Button onPress={() => router.push("/link/")} title="リンクページへ" />
    </View>
  );
};

export default Home;
