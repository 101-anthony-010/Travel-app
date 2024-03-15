import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import Icon from "react-native-vector-icons/Ionicons";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";

const colors = {
  bgMain: "#F5F6F7",
  primaryColor: "#35A401",
  errorColor: "#A62424",
  inputColor: "#D4D4D4",
};

export default function HomePage() {
  const handleSearch = (term) => {
    console.log("Realizando búsqueda:", term);
  };

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetchCardsData();
  }, []);

  const fetchCardsData = async () => {
    try {
      const response = await fetch(
        "https://intensive-morgana-otherclasseducation.koyeb.app/api/v1/departaments/"
      );
      const data = await response.json();
      setCardsData(data.data);
    } catch (error) {
      console.error("Error fetching cards data:", error);
    }
  };

  return (
    <View style={styles.AllContainer}>
      <ScrollView style={styles.Container}>
        <View>
          <Image
            source={require("../images/paracas.png")}
            style={styles.ImageContainer}
          ></Image>
          <View style={styles.ContainerSearchBar}>
            <SearchBar
              placeholder="Buscar destino..."
              onSearch={handleSearch}
            />
          </View>
        </View>

        <View style={styles.ContainerDescription}>
          <Text style={styles.HeaderH1}>Paracas</Text>
          <Text style={styles.TextDescription}>
            A cuatro horas de Lima, la capital del Perú, el sol se posa sobre lo
            más alto del cielo iqueño para recibir a los visitantes.
          </Text>
        </View>

        <View style={styles.ContainerButton}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Ver más</Text>
            <Icon name="chevron-forward-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.BoxGreenHeader}>
          <Text style={styles.HeaderSection}>Recomendados</Text>
        </View>

        <Cards cards={cardsData}></Cards>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  AllContainer: {
    backgroundColor: colors.bgMain,

    height: "100%",
  },

  ContainerBottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  ImageContainer: {
    height: 390,
  },

  Image: {
    flex: 1,
    resizeMode: "repeat",
    justifyContent: "center",
  },

  ContainerSearchBar: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 30,
    paddingVertical: 30,
    paddingTop: 60,
  },

  HeaderH1: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
  },

  TextDescription: {
    color: "white",
  },

  ContainerDescription: {
    position: "absolute",
    top: 160,
    paddingLeft: 32,
    paddingRight: 130,
  },

  Button: {
    width: 120,
    height: 40,
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  ButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },

  ContainerButton: {
    paddingHorizontal: 30,
    position: "absolute",
    top: 300,
    right: 0,
    left: 0,
  },

  BoxGreenHeader: {
    width: 220,
    backgroundColor: colors.primaryColor,
    padding: 15,
    marginVertical: 20,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },

  HeaderSection: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 30,
  },
});

export default HomePage;
