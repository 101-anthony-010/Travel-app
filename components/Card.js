import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Card = ({ id, name, info, imgURL }) => {
	const navigation = useNavigation();

	const handleCardPress = () => {
		navigation.navigate("Departamento", { id });
	};

	return (
		<TouchableOpacity onPress={handleCardPress}>
			<View style={styles.cardContainer}>
				<Image source={{ uri: imgURL }} style={styles.cardImage} />
				<View style={styles.labelContainer}>
					<Text style={styles.labelText}>{name}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		margin: 10,
	},

	cardImage: {
		width: 150,
		height: 150,
		borderRadius: 8,
	},

	labelContainer: {
		position: "absolute",
		bottom: 0,
		right: 0,
		backgroundColor: "rgba(255, 255, 255, 0.8)",
		paddingVertical: 3,
		paddingHorizontal: 10,
		borderTopLeftRadius: 8,
	},
	labelText: {
		fontSize: 14,
		color: "#333",
		fontWeight: "500",
	},
});

export default Card;
