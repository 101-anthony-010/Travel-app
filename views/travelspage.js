import { View, Text, StyleSheet, ScrollView } from "react-native";
import Cards from "../components/Cards";
import Memories from "../components/Memories";

export default function Travels() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Mis viajes</Text>
        <Memories></Memories>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: "flex", justifyContent: "center" },
  title: {
    fontSize: 25,
    fontWeight: "700",

    marginVertical: 20,
    textAlign: "center",
  },
});
