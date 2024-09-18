import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Vandrei é ?(mto macho)</Text>
      <Link href={{ pathname: "/api/consumindo", params: {} }}>Ver API sendo consumida</Link>
    </View>
  );
}
