import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useRoute } from "@react-navigation/native";
import CardDesiredDestination from "../components/DesiredDestination";
import AsyncStorage from "@react-native-async-storage/async-storage";

const colors = {
	bgMain: "#F5F6F7",
	primaryColor: "#35A401",
	errorColor: "#A62424",
	inputColor: "#D4D4D4",
};

export default function Destination() {
  const route = useRoute();
  const { id, name, imgURL, info } = route.params;
  const [cardData, setCardData] = useState(null);
  const [mealData, setMealData] = useState(null);
  const [visited, setVisited] = useState(false);
  const [visitado, setVisitado] = useState("No lo he visitado");
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetchCardsData();
    fetchFood();
    getToken();
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

  const fetchFood = async () => {
    try {
      const response = await fetch(
        `https://intensive-morgana-otherclasseducation.koyeb.app/api/v1/typicalMeal/${id}`
      );
      const data = await response.json();
      setMealData(data.data);
    } catch (error) {
      console.error("Error fetching cards data:", error);
    }
  };

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token"); // Suponiendo que el token está guardado con la clave 'token'
      if (token !== null) {
        setToken(token); // Almacena el token en el estado
      }
    } catch (error) {
      console.error("Error al obtener el token:", error);
    }
  };

	const handleVisitedChange = async () => {
		setVisited(!visited);

		const bodyData = {
			name: name,
			imgURL: imgURL,
		};

    try {
      if (visited) {
        const res = await fetch(
          `https://intensive-morgana-otherclasseducation.koyeb.app/api/v1/post/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(bodyData),
          }
        );
        console.log(res.json());
        setVisitado("No lo he visitado");
      } else {
        // await fetch(
        //   `https://intensive-morgana-otherclasseducation.koyeb.app/api/v1/userDepartament/${id}`,
        //   {
        //     method: "DELETE",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({}),
        //   }
        // );
        setVisitado("Ya lo he visitado");
      }
    } catch (error) {
      console.error("Error al cambiar el estado de visitado:", error);
    }
  };

	return (
		<View style={styles.AllContainer}>
			<ScrollView style={styles.Container}>
				{cardData && (
					<>
						<Image
							source={{ uri: cardData.imgURL }}
							style={styles.image}
						/>

						<View style={styles.destinationcontainer}>
							<Text style={styles.destinationName}>
								{cardData.name}
							</Text>

							<View style={styles.checkBoxContainer}>
								<BouncyCheckbox
									isChecked={visited}
									onPress={handleVisitedChange}
								/>
								<Text style={styles.checkBoxLabel}>
									{visitado}
								</Text>
							</View>

							<Text style={styles.destiantiondescription}>
								{cardData.info}
							</Text>
						</View>

						{!name && (
							<View>
								<View style={styles.BoxGreenHeaderCity}>
									<Text style={styles.HeaderSection}>
										Ciudades
									</Text>
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

						{!name && (
							<View>
								<View style={styles.BoxGreenHeader}>
									<Text style={styles.HeaderSection}>
										Comidas Tipicas
									</Text>
								</View>
								{mealData &&
									mealData.map((item) => (
										<View
											key={item.id}
											style={styles.cardContainer}
										>
											<Image
												source={{ uri: item.imgURL }}
												style={styles.cardImage}
											/>
											<View style={styles.labelContainer}>
												<Text style={styles.titleText}>
													{item.name}
												</Text>
												<Text style={styles.labelText}>
													{item.description
														.split(".")[0]
														.trim()}
												</Text>
											</View>
										</View>
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
	destinationcontainer: {
		marginVertical: 30,
		marginHorizontal: 30,
		gap: 20,
	},
	destinationName: { fontSize: 20, fontWeight: "700" },

  BoxGreenHeader: {
    width: 220,
    backgroundColor: colors.primaryColor,
    padding: 10,
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
  cardContainer: {
    margin: 10,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
  },

	cardImage: {
		width: 60,
		height: 60,
		borderRadius: 8,
	},

  labelContainer: {
    paddingVertical: 3,
    paddingRight: 40,
    paddingLeft: 15,
    borderTopLeftRadius: 8,
  },

	titleText: {
		fontSize: 16,
		color: "#333",
		fontWeight: "700",
	},

	labelText: {
		marginRight: 50,
		fontSize: 12,
		color: "#333",
	},
});
