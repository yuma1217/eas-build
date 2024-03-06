import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useSession } from "@/components/ctx";

const Home = () => {
  const router = useRouter();
  const { signOut } = useSession();
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => router.replace("/tabs/")} title="タブページへ" />
      <Button onPress={() => router.push("/link/")} title="リンクページへ" />
      <Button onPress={() => signOut()} title="サインアウト" />
    </View>
  );
};

export default Home;
