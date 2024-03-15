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

const colors = {
	bgMain: "#F5F6F7",
	primaryColor: "#35A401",
	errorColor: "#A62424",
	inputColor: "#D4D4D4",
};

const HomePage = () => {
	const navigation = useNavigation();
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (term) => {
		const data = ["canta", "puno", "máncora", "huacachina", "lima"];

		const contentExists = data.includes(term.toLowerCase());
		if (contentExists) {
			setSearchTerm(""); // Limpiar el término de búsqueda
			navigation.navigate("Destination", { searchTerm: term });
		} else {
			console.log("Contenido no encontrado:", term);
		}
	};

	return (
		<View style={styles.AllContainer}>
			<ScrollView style={styles.Container}>
				<View>
					<Image
						source={require("../images/paracas.png")}
						style={styles.ImageContainer}
					/>
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
						A cuatro horas de Lima, la capital del Perú, el sol se
						posa sobre lo más alto del cielo iqueño para recibir a
						los visitantes.
					</Text>
				</View>

				<View style={styles.ContainerButton}>
					<TouchableOpacity
						style={styles.Button}
						onPress={() => navigation.navigate("Destination")}
					>
						<Text style={styles.ButtonText}>Ver más</Text>
						<Icon
							name="chevron-forward-outline"
							size={20}
							color="#fff"
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.BoxGreenHeader}>
					<Text style={styles.HeaderSection}>Recomendados</Text>
				</View>

				<Cards />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	AllContainer: {
		backgroundColor: colors.bgMain,
		height: "100%",
	},
	Container: {},
	ImageContainer: {
		height: 360,
	},
	ContainerSearchBar: {
		position: "absolute",
		top: 0,
		right: 0,
		left: 0,
		paddingHorizontal: 30,
		paddingTop: 30,
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
		top: 120,
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
		top: 270,
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
