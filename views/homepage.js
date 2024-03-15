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

  const navigation = useNavigation();
  const [cardsData, setCardsData] = useState([]);
  const [random, setRandom] = useState({
    id: 2,
    imgURL:
      "https://firebasestorage.googleapis.com/v0/b/travel-app-cloud.appspot.com/o/departaments%2F1710498525697-ancash%20(1).jpg?alt=media&token=f15d8113-3953-434b-981e-8b52992f08a9",
    info: "Apurímac, un departamento ubicado en el sur de Perú, te invita a descubrir un territorio lleno de historia, cultura y naturaleza.",
    name: "Apurímac",
  });

  useEffect(() => {
    fetchCardsData();
  }, []);

  const handleCardPress = () => {
    const id = random.id;
    navigation.navigate("Departamento", { id });
    console.log(random.id);
  };

  const fetchCardsData = async () => {
    try {
      const response = await fetch(
        "https://intensive-morgana-otherclasseducation.koyeb.app/api/v1/departaments/"
      );
      const data = await response.json();
      setCardsData(data.data);
      setRandom(data.data[Math.round(Math.random() * 10)]);
    } catch (error) {
      console.error("Error fetching cards data:", error);
    }
  };

  return (
    <View style={styles.AllContainer}>
      <ScrollView style={styles.Container}>
        <View>
          <Image
            source={{ uri: random.imgURL }}
            style={styles.ImageContainer}
          ></Image>
          <View style={styles.ImageOverlay} />
          <View style={styles.ContainerSearchBar}>
            <SearchBar
              placeholder="Buscar destino..."
              onSearch={handleSearch}
            />
          </View>
        </View>

        <View style={styles.ContainerDescription}>
          <Text style={styles.HeaderH1}>{random.name}</Text>
          <Text style={styles.TextDescription}>
            {random.info.split(".")[0].trim()}
          </Text>
        </View>

        <View style={styles.ContainerButton}>
          <TouchableOpacity style={styles.Button} onPress={handleCardPress}>
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

  ImageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
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
    paddingRight: 50,
    display: "flex",
    gap: 10,
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
    top: 310,
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
