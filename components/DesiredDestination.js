import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
const colors = {
	primaryColor: "#35A401",
	errorColor: "#A62424",
	inputColor: "#D4D4D4",
};

const CardDesiredDestination = ({ id, name, imgURL, info }) => {
	const navigation = useNavigation();

	const handleCardPress = () => {
		navigation.navigate("Ciudad", { id, name, imgURL, info });
	};

	return (
		<View style={styles.cardContainer}>
			<Image source={{ uri: imgURL }} style={styles.cardImage} />
			<View style={styles.textContainer}>
				<Text style={styles.destinationText}>{name}</Text>
			</View>
			<TouchableOpacity
				onPress={handleCardPress}
				style={styles.buttonContainer}
			>
				<Text style={styles.buttonText}>Ver</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		marginHorizontal: 20,
	},
	cardImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},
	textContainer: {
		flex: 1,
	},
	destinationText: {
		fontSize: 16,
		color: "#333",
		fontWeight: "700",
	},
	buttonContainer: {
		backgroundColor: colors.primaryColor,
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
});

export default CardDesiredDestination;
