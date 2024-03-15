import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({ placeholder, onSearch, navigation }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [contentFound, setContentFound] = useState(true);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	useEffect(() => {
		setContentFound(true); // Restablecer contentFound a true cuando se monta el componente
	}, []);

	const handleSearch = () => {
		const trimmedTerm = searchTerm.trim().toLowerCase();
		const contentExists = onSearch(trimmedTerm);
		if (contentExists) {
			navigation.navigate("Destination");
			setSearchTerm(""); // Limpiar el TextInput después de la navegación
			setShowErrorMessage(false); // Ocultar el mensaje de error
		} else {
			setShowErrorMessage(true); // Mostrar el mensaje de error
		}
	};

	const handleInputChange = (text) => {
		setSearchTerm(text);
		setShowErrorMessage(false); // Ocultar el mensaje de error cuando el usuario está escribiendo
		if (text === "") {
			setContentFound(true);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder={placeholder}
					value={searchTerm}
					onChangeText={handleInputChange}
					onSubmitEditing={handleSearch}
				/>
				<Icon
					name="search"
					size={20}
					color="#555"
					style={styles.searchIcon}
					onPress={handleSearch}
				/>
			</View>
			{showErrorMessage && (
				<View style={styles.errorMessageContainer}>
					<Text style={styles.errorMessage}>
						No se encontró contenido relacionado con su búsqueda
					</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 8,
		padding: 8,
	},
	input: {
		flex: 1,
		height: 40,
		paddingHorizontal: 8,
	},
	searchIcon: {
		marginLeft: 8,
	},
	errorMessageContainer: {
		backgroundColor: "rgba(243, 203, 203,0.85)",
		padding: 8,
		borderRadius: 8,
		marginTop: 5,
	},
	errorMessage: {
		color: "red",
		fontSize: 12.5,
	},
});

export default SearchBar;
