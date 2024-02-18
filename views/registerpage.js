import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< VARIABLES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const colors = {
	primaryColor: "#35A401",
};

export default function RegisterPage({ navigation }) {
	const handleLogin = () => {
		navigation.navigate("Login");
	};

	return (
		<View style={styles.AllContainer}>
			<View style={styles.HeaderContainer}>
				<Text style={styles.Heading1}>Regístrate</Text>
			</View>

			<View style={styles.FormContainer}>
				<TextInput
					style={styles.TextInput}
					placeholder="Nombre completo"
					//onChangeText={(nuevoNombre) => setNombre(nuevoNombre)}*/
					//value={nombre}
					underlineColorAndroid={colors.primaryColor}
				/>

				<TextInput
					style={styles.TextInput}
					placeholder="Apellido Paterno"
					underlineColorAndroid={colors.primaryColor}
				/>

				<TextInput
					style={styles.TextInput}
					placeholder="Apellido Materno"
					underlineColorAndroid={colors.primaryColor}
				/>

				<TextInput
					style={styles.TextInput}
					placeholder="Nro. Documento"
					underlineColorAndroid={colors.primaryColor}
				/>

				<TextInput
					style={styles.TextInput}
					placeholder="Celular"
					underlineColorAndroid={colors.primaryColor}
				/>

				<TextInput
					style={styles.TextInput}
					placeholder="Correo electrónico"
					underlineColorAndroid={colors.primaryColor}
				/>

				<TextInput
					style={styles.TextInput}
					placeholder="Contraseña"
					underlineColorAndroid={colors.primaryColor}
				/>

				<TouchableOpacity onPress={handleLogin} style={styles.Button}>
					<Text style={styles.ButtonText}>Regístrate</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ESTILOS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const styles = StyleSheet.create({
	Heading1: {
		color: "black",
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "left",
	},

	AllContainer: {
		backgroundColor: "white",
		height: "100%",
		padding: 25,
	},

	HeaderContainer: {
		backgroundColor: "white",
		padding: 10,
		marginBottom: 15,
	},

	TextInput: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		marginBottom: 10,
		fontSize: 16,
		width: "100%",
		color: "black",
	},

	Button: {
		width: 150,
		height: 40,
		backgroundColor: colors.primaryColor,
		borderRadius: 50,
		marginTop: 20,
		marginHorizontal: "auto",
		alignItems: "center",
		justifyContent: "center",
	},

	ButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "700",
	},

	FormContainer: {
		alignItems: "center",
	},
});
