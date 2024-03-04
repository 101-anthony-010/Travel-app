import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const recuerdos = [];

export default function MemoriesPage() {
  const route = useRoute();
  const { destination } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Mis recuerdos de {destination}</Text>

        {recuerdos.length === 0 ? (
          <Text style={styles.emptyText}>
            No tienes recuerdos de {destination}.
          </Text>
        ) : (
          recuerdos.map((imagen, index) => (
            <Image key={index} source={imagen} style={styles.image} />
          ))
        )}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonIcon}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginVertical: 20,
    textAlign: "center",
  },

  emptyText: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 20,
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },

  addButton: {
    display: "flex",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  addButtonIcon: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
