import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const UserView = () => {
	// Supongamos que tienes un array de datos del usuario
	const userData = [
		{ label: "Nombre completo", value: "John Doe" },
		{ label: "Correo electrónico", value: "john@example.com" },
		{ label: "Teléfono", value: "1234567890" },
	];

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Mi perfil </Text>
			{userData.map((data, index) => (
				<View key={index} style={styles.inputContainer}>
					<Text style={styles.label}>{data.label}</Text>
					<TextInput
						style={styles.input}
						value={data.value}
						editable={false}
						selectTextOnFocus={false}
					/>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		fontWeight: "700",
		marginVertical: 20,
		textAlign: "center",
	},

	container: {
		flex: 1,
		//padding: 20,
		backgroundColor: "#ffffff",
		paddingHorizontal: 25,
	},
	inputContainer: {
		marginBottom: 20,
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
		color: "#333333",
	},
	input: {
		borderWidth: 1,
		borderColor: "#CCCCCC",
		borderRadius: 5,
		padding: 10,
		fontSize: 16,
	},
});

export default UserView;
