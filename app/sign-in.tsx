import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useSession } from "@/components/ctx";
import { router } from "expo-router";

const SignInPage = () => {
  const { signIn } = useSession();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        mode="contained"
        onPress={() => {
          signIn();
          router.replace("/(app)");
        }}
      >
        SignIn
      </Button>
    </View>
  );
};

export default SignInPage;
