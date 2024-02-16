import { View, StyleSheet, Text, Button } from "react-native";

export default function LoginPage({ navigation }) {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      ></Button>
    </View>
  );
}
