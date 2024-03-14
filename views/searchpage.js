import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import CardDesiredDestination from "../components/DesiredDestination";
import DropdownPickerCity from "../components/DropDownPickerCity";

export default function SearchPage() {
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
		// Agrega más datos según sea necesario
	];

	const handleCityChange = (selectedCity) => {
		// Haz algo con el valor seleccionado, como almacenarlo en el estado de la página
		console.log("Ciudad seleccionada:", selectedCity);
	};

	const handleCardPress = (destination) => {
		// Manejar la acción al presionar la tarjeta, por ejemplo, navegar a la página de detalles
		const navigateToHome = () => {
			navigation.navigate("Destination");
		};
	};
	return (
		<ScrollView>
			<Text style={styles.title}>Próximo destino</Text>
			<View style={styles.ContainerDropDown}>
				<DropdownPickerCity></DropdownPickerCity>
			</View>

			<View style={styles.ContainerList}>
				{data.map((item) => (
					<CardDesiredDestination
						key={item.id}
						imageSource={item.imageSource}
						destination={item.destination}
						onPress={() => handleCardPress(item.destination)}
					/>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F5F6F7",
	},
	title: {
		fontSize: 25,
		fontWeight: "700",
		marginVertical: 20,
		textAlign: "center",
	},
	ContainerDropDown: {
		//backgroundColor: "indigo",
		paddingHorizontal: 20,
		zIndex: 1,
	},
	ContainerList: {
		paddingHorizontal: 20,
	},
});
