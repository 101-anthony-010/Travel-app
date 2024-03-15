import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";

const Cards = ({ cards }) => {
  return (
    <View style={styles.ContainerCards}>
      {cards.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          info={item.info}
          imgURL={item.imgURL}
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
