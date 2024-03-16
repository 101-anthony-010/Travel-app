import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useRoute } from "@react-navigation/native";
import CardDesiredDestination from "../components/DesiredDestination";

const colors = {
  bgMain: "#F5F6F7",
  primaryColor: "#35A401",
  errorColor: "#A62424",
  inputColor: "#D4D4D4",
};

export default function City() {
  const route = useRoute();
  const { id, name, imgURL, info } = route.params;
  const [cardData, setCardData] = useState(null);
  const [visited, setVisited] = useState(false);
  const [visitado, setVisitado] = useState("No lo he visitado");

  useEffect(() => {
    fetchCardsData();
  }, []);

  const fetchCardsData = async () => {
    try {
      if (info !== undefined) {
        setCardData({ name: name, imgURL: imgURL, info: info });
      } else {
        const response = await fetch(
          `https://intensive-morgana-otherclasseducation.koyeb.app/api/v1/departaments/${id}`
        );
        const data = await response.json();
        setCardData(data);
      }
    } catch (error) {
      console.error("Error fetching cards data:", error);
    }
  };

  return (
    <View style={styles.AllContainer}>
      <ScrollView style={styles.Container}>
        {cardData && (
          <>
            <Image source={{ uri: cardData.imgURL }} style={styles.image} />

            <View style={styles.destinationcontainer}>
              <Text style={styles.destinationName}>{cardData.name}</Text>

              <Text style={styles.destiantiondescription}>{cardData.info}</Text>
            </View>

            {!name && (
              <View>
                <View style={styles.BoxGreenHeader}>
                  <Text style={styles.HeaderSection}>Ciudades</Text>
                </View>
                {cardData.city &&
                  cardData.city.map((item) => (
                    <CardDesiredDestination
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      info={item.description}
                      imgURL={item.imgURL}
                    />
                  ))}
              </View>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  AllContainer: {
    backgroundColor: colors.bgMain,
  },

  ContainerSearchBar: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image: { height: 360, width: 420 },
  destinationcontainer: { marginVertical: 30, marginHorizontal: 30, gap: 20 },
  destinationName: { fontSize: 20, fontWeight: "700" },

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
  checkBoxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
