import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const BottomNavigationBar = () => {
	const navigation = useNavigation();

	const [currentScreen, setCurrentScreen] = useState("Home"); // Estado para rastrear la pantalla actual
	// Escuchar los cambios de pantalla y actualizar el estado
	useEffect(() => {
		const unsubscribe = navigation.addListener("state", () => {
			const currentRoute = navigation.getCurrentRoute();
			if (currentRoute) {
				setCurrentScreen(currentRoute.name);
			}
		});

		// Limpiar el efecto cuando se desmonta el componente
		return unsubscribe;
	}, [navigation]);

	const navigateToHome = () => {
		navigation.navigate("Home");
	};

	const navigateToSearch = () => {
		navigation.navigate("Search");
	};

	const navigateToHistory = () => {
		navigation.navigate("Travels");
	};

	const navigateToProfile = () => {
		navigation.navigate("Profile");
	};

	return (
		<View style={styles.containerBlack}>
			<View style={styles.container}>
				<TouchableOpacity
					onPress={navigateToHome}
					style={styles.iconContainer}
				>
					<Icon
						name="home-outline"
						size={30}
						color={currentScreen === "Home" ? "green" : "#000"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={navigateToSearch}
					style={styles.iconContainer}
				>
					<Icon
						name="search-outline"
						size={30}
						color={currentScreen === "Search" ? "green" : "#000"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={navigateToHistory}
					style={styles.iconContainer}
				>
					<Icon
						name="time-outline"
						size={30}
						color={currentScreen === "Travels" ? "green" : "#000"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={navigateToProfile}
					style={styles.iconContainer}
				>
					<Icon
						name="person-outline"
						size={30}
						color={currentScreen === "Profile" ? "green" : "#000"}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	containerBlack: {
		backgroundColor: "black",
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		height: 60,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		backgroundColor: "#fff",
	},
	iconContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	activeIcon: {
		color: "green",
	},
});

export default BottomNavigationBar;
