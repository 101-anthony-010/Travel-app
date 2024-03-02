import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Card = ({ imageSource, destination }) => {
	return (
		<View style={styles.cardContainer}>
			<Image source={{ imageSource }} style={styles.cardImage} />
			<View style={styles.labelContainer}>
				<Text style={styles.labelText}>{destination}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		margin: 10,
		//overflow: "repeat",
	},
	cardImage: {
		width: 150,
		height: 150,
		borderRadius: 8,
		backgroundColor: "yellow",
		resizeMode: "repeat",
		justifyContent: "center",
	},
	labelContainer: {
		position: "absolute",
		bottom: 0,
		right: 0,
		backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo gris claro con opacidad
		paddingVertical: 3,
		paddingHorizontal: 10,
		borderTopLeftRadius: 8,
	},
	labelText: {
		fontSize: 14,
		color: "#333",
	},
});

export default Card;
