import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";

const Cards = () => {
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

  return (
    <View style={styles.ContainerCards}>
      {data.map((item) => (
        <Card
          key={item.id}
          imageSource={item.imageSource}
          destination={item.destination}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default Cards;
