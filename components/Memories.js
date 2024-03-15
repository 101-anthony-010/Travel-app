import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Memories = () => {
  const data = [
    {
      id: 1,
      imageSource: require("../images/paracas.png"),
      destination: "Canta",
    },
    {
      id: 2,
      imageSource: require("../images/puno.png"),
      destination: "Puno",
    },
    {
      id: 3,
      imageSource: require("../images/paracas.png"),
      destination: "Canta",
    },
    {
      id: 4,
      imageSource: require("../images/puno.png"),
      destination: "Puno",
    },
  ];

  const navigation = useNavigation();

  const handleCardPress = (destination) => {
    navigation.navigate("Recuerdos", { destination });
  };

  return (
    <View style={styles.ContainerCards}>
      {data.map((item) => (
        <TouchableOpacity onPress={() => handleCardPress(item.destination)}>
          <View style={styles.cardContainer}>
            <Image source={item.imageSource} style={styles.cardImage} />
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>{item.destination}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerCards: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  cardContainer: {
    margin: 10,
  },
  cardImage: {
    width: 320,
    height: 150,
    borderRadius: 8,
    resizeMode: "cover",
  },
  labelContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderTopLeftRadius: 8,
  },
  labelText: {
    fontSize: 14,
    color: "#333",
  },
});

export default Memories;
