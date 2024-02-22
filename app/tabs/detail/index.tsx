import { Link } from "expo-router";
import { Text } from "react-native";
export default function Page() {
  return (
    <Link
      href={{
        pathname: "/detail/text/test",
      }}
      push
    >
      <Text>Page</Text>
    </Link>
  );
}
