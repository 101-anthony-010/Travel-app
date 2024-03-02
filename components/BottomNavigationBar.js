import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const BottomNavigationBar = () => {
	const navigation = useNavigation();

	const navigateToHome = () => {
		navigation.navigate("Home");
	};

	const navigateToSearch = () => {
		navigation.navigate("Search");
	};

	const navigateToHistory = () => {
		navigation.navigate("History");
	};

	const navigateToProfile = () => {
		navigation.navigate("Profile");
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={navigateToHome}
				style={styles.iconContainer}
			>
				<Icon name="home-outline" size={30} color="#000" />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={navigateToSearch}
				style={styles.iconContainer}
			>
				<Icon name="search-outline" size={30} color="#000" />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={navigateToHistory}
				style={styles.iconContainer}
			>
				<Icon name="time-outline" size={30} color="#000" />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={navigateToProfile}
				style={styles.iconContainer}
			>
				<Icon name="person-outline" size={30} color="#000" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		height: 60,
		//borderBottomLeftRadius: 20,
		backgroundColor: "#fff", // Color de fondo de la barra de navegación
	},
	iconContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default BottomNavigationBar;
