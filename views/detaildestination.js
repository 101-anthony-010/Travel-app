import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useRoute } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";

const colors = {
	bgMain: "#F5F6F7",
	primaryColor: "#35A401",
	errorColor: "#A62424",
	inputColor: "#D4D4D4",
};

export default function Destination() {
	const route = useRoute();
	const { imageSource, destination } = route.params || {};
	const [visited, setVisited] = useState(false);
	const [visitado, setVisitado] = useState("No lo he visitado");

	const handleVisitedChange = () => {
		setVisited(!visited);
		if (visited) {
			setVisitado("No lo he visitado");
		} else {
			setVisitado("Ya lo he visitado");
		}
	};

	useEffect(() => {
		const searchTerm = route.params?.searchTerm || "";
		console.log("Search term:", searchTerm);
	}, [route.params?.searchTerm]);

	return (
		<View style={styles.AllContainer}>
			<ScrollView style={styles.Container}>
				<Image source={imageSource} style={styles.image} />

				<View style={styles.destinationcontainer}>
					<Text style={styles.destinationName}>{destination}</Text>

					<View style={styles.checkBoxContainer}>
						<BouncyCheckbox
							isChecked={visited}
							onPress={handleVisitedChange}
						/>
						<Text style={styles.checkBoxLabel}>{visitado}</Text>
					</View>

					<Text style={styles.destiantiondescription}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</Text>
				</View>

				<View style={styles.BoxGreenHeader}>
					<Text style={styles.HeaderSection}>Recomendados</Text>
				</View>

				<Cards />
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
