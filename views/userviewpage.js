import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	View,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const UserView = () => {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const storedUserData = await AsyncStorage.getItem("userData");
				if (storedUserData !== null) {
					setUserData(JSON.parse(storedUserData));
				}
			} catch (error) {
				console.error("Error al obtener los datos del usuario:", error);
			}
		};
		fetchUserData();
	}, []);

	const handleLogout = async () => {
		try {
			await AsyncStorage.removeItem("userData");
			navigation.navigate("Initial");
		} catch (error) {
			console.error("Error al cerrar sesión:", error);
		}
	};

	const confirmLogout = () => {
		Alert.alert(
			"Cerrar Sesión",
			"¿Estás seguro de que deseas cerrar sesión?",
			[
				{ text: "Cancelar", style: "cancel" },
				{ text: "Cerrar Sesión", onPress: handleLogout },
			],
			{ cancelable: false }
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Mi perfil</Text>
			<Image
				source={require("../images/perfil.jpg")}
				style={styles.cardImage}
			/>
			<View style={styles.cardContainer}>
				<View style={styles.row}>
					<Text style={styles.label}>Nombre Completo:</Text>
					<Text
						style={styles.value}
					>{`${userData.name} ${userData.firstLastName} ${userData.secondLastName}`}</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.label}>Correo Electrónico:</Text>
					<Text style={styles.value}>{userData.email}</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.label}>ID Usuario:</Text>
					<Text style={styles.value}>{userData.id}</Text>
				</View>
			</View>
			<View style={styles.containerbuttom}>
				<TouchableOpacity
					onPress={confirmLogout}
					style={styles.logoutButton}
				>
					<Icon
						name="exit-outline"
						size={30}
						color="#fff"
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	containerbuttom: {
		backgroundColor: "#red",
		flexDirection: "row",
		alignItems: "center",
		position: "absolute",
		right: 20,
		bottom: 20,
	},
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		paddingHorizontal: 25,
	},
	title: {
		fontSize: 25,
		fontWeight: "700",
		marginTop: 20,
		marginBottom: 10,
		textAlign: "center",
	},
	cardContainer: {
		backgroundColor: "#fff",
		padding: 20,
		borderRadius: 10,
		marginTop: 15,
		marginBottom: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	cardImage: {
		width: 150,
		height: 150,
		borderRadius: 75,
		alignSelf: "center",
		marginVertical: 20,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10,
	},
	label: {
		fontSize: 16,
		color: "#666",
	},
	value: {
		fontSize: 16,
		color: "#333",
	},
	logoutButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#35A401",
		paddingVertical: 5,
		paddingHorizontal: 5,
		borderRadius: 100,
		justifyContent: "center",
		width: 65,
		height: 65,
	},
	logoutButtonText: {
		color: "#35A401",
		fontSize: 16,
		marginRight: 10,
	},
	icon: {
		marginLeft: 5,
	},
});

export default UserView;
