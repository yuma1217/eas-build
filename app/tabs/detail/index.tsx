import { Link, Stack } from "expo-router";
import { Text } from "react-native";
export default function Page() {
  return (
    <>
      <Stack.Screen></Stack.Screen>
      <Text>DetailPage</Text>
      <Link href={"/tabs/detail/index2"}>Index2</Link>
    </>
  );
}
