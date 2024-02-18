import {
	View,
	StyleSheet,
	Text,
	Button,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< VARIABLES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const colors = {
	primaryColor: "#35A401",
};

export default function LoginPage({ navigation }) {
	const handleHome = () => {
		navigation.navigate("Home");
	};

	return (
		<View style={styles.AllContainer}>
			<View style={styles.HeaderContainer}>
				<Text style={styles.Heading1}>Iniciar sesión</Text>
			</View>
			<View style={styles.FormContainer}>
				<TextInput
					style={styles.TextInput}
					placeholder="Correo electrónico"
					underlineColorAndroid={colors.primaryColor}
				/>

				<TextInput
					style={styles.TextInput}
					placeholder="Contraseña"
					//onChangeText={(nuevoNombre) => setNombre(nuevoNombre)}*/
					//value={nombre}
					underlineColorAndroid={colors.primaryColor}
				/>

				<TouchableOpacity onPress={handleHome} style={styles.Button}>
					<Text style={styles.ButtonText}>Iniciar Sesión</Text>
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
