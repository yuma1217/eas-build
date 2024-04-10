import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Card, TextInput } from "react-native-paper";
import { useSession } from "@/components/ctx";
import { router } from "expo-router";

const SignInPage = () => {
  const { signIn } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // ログインロジック
    console.log(username, password);
  };
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="ログインページ" />
        <Card.Content>
          <TextInput
            label="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            mode="outlined"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            mode="outlined"
            style={styles.textInput}
          />
          <Button mode="contained" onPress={handleLogin}>
            ログイン
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    padding: 16,
  },
  textInput: {
    marginBottom: 16,
  },
});
export default SignInPage;
