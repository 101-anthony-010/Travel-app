import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({ placeholder, onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = () => {
		// Puedes realizar acciones específicas de búsqueda aquí
		onSearch(searchTerm);
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				value={searchTerm}
				onChangeText={(text) => setSearchTerm(text)}
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
	);
};

const styles = StyleSheet.create({
	container: {
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
});

export default SearchBar;
