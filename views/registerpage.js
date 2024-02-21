import React, { useState } from "react";
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
	errorColor: "#A62424",
	inputColor: "#D4D4D4",
};

export default function RegisterPage({ navigation }) {
	const handleLogin = () => {
		navigation.navigate("Login");
	};
	// >>>>>>>>>>>>>>>>>>>>>>>> VARIABLES INPUTS >>>>>>>>>>>>>>>>>>>>>>>>
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [password, setPassword] = useState("");
	const [fullnameError, setFullnameError] = useState("");
	const [emailFocused, setEmailFocused] = useState(false);
	const [passwordFocused, setPasswordFocused] = useState(false);
	const [fullnameFocused, setFullnameFocused] = useState(false);
	const [lastnameFocused, setLastnameFocused] = useState(false);
	const [lastnameError, setLastnameError] = useState("");
	// >>>>>>>>>>>>>>>>>>>>>>>> FUNCIONES >>>>>>>>>>>>>>>>>>>>>>>>
	const handleEmailChange = (text) => {
		// manejo de errores con validación del email
		setEmail(text);
		setEmailError("");
	};

	const validateEmail = () => {
		// expresión regular para validar el formato del correo electrónico
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		if (!emailRegex.test(email)) {
			setEmailError("Ingresa un correo electrónico válido");
		}
	};

	const isValidInput = (text) => {
		// verifica si el texto contiene caracteres numéricos
		return !/\d/.test(text);
	};

	const handleInputChange = (text, setFocused, setError) => {
		setFocused(true);
		if (isValidInput(text) && text.length <= 50) {
			setError("");
		} else {
			setError("El nombre no debe contener caracteres numéricos");
		}
	};

	// >>>>>>>>>>>>>>>>>>>>>>>> DISEÑO VIEW >>>>>>>>>>>>>>>>>>>>>>>>
	return (
		<View style={styles.AllContainer}>
			<View style={styles.HeaderContainer}>
				<Text style={styles.Heading1}>Regístrate</Text>
			</View>
			<View style={styles.FormContainer}>
				<TextInput //Nombre completo
					style={styles.TextInput}
					placeholder="Nombre completo"
					underlineColorAndroid={
						fullnameFocused
							? colors.primaryColor
							: colors.inputColor
					}
					value={fullnameFocused}
					onFocus={() => setFullnameFocused(true)}
					onBlur={() => {
						setFullnameFocused(false);
					}}
					onChangeText={(text) =>
						handleInputChange(
							text,
							setFullnameFocused,
							setFullnameError
						)
					}
					maxLength={50} // cantidad de caracteres
				/>

				{fullnameError ? (
					<Text style={styles.ErrorText}>{fullnameError}</Text>
				) : null}

				<TextInput //Nombre completo
					style={styles.TextInput}
					placeholder="Apellidos completo"
					underlineColorAndroid={
						lastnameFocused
							? colors.primaryColor
							: colors.inputColor
					}
					value={fullnameFocused}
					onFocus={() => setLastnameFocused(true)}
					onBlur={() => {
						setLastnameFocused(false);
					}}
					onChangeText={(text) =>
						handleInputChange(
							text,
							setLastnameFocused,
							setLastnameError
						)
					}
					maxLength={50} // cantidad de caracteres
				/>

				{lastnameError ? (
					<Text style={styles.ErrorText}>
						{paternalLastnameError}
					</Text>
				) : null}

				<TextInput
					style={styles.TextInput}
					placeholder="Correo electrónico"
					underlineColorAndroid={
						emailFocused ? colors.primaryColor : colors.inputColor
					}
					onChangeText={handleEmailChange}
					value={email}
					onFocus={() => setEmailFocused(true)}
					onBlur={() => {
						setEmailFocused(false);
						validateEmail();
					}}
				/>

				{emailError ? (
					<Text style={styles.ErrorText}>{emailError}</Text>
				) : null}

				<TextInput
					style={styles.TextInput}
					placeholder="Contraseña"
					underlineColorAndroid={
						passwordFocused
							? colors.primaryColor
							: colors.inputColor
					}
					secureTextEntry={true} // Oculta los caracteres de la contraseña
					value={password}
					onFocus={() => setPasswordFocused(true)}
					onBlur={() => setPasswordFocused(false)}
					onChangeText={(text) => {
						setPassword(text);
						setPasswordFocused(text.length > 0);
					}}
				/>

				<View style={styles.ContainerButton}>
					<TouchableOpacity
						onPress={handleLogin}
						style={styles.Button}
					>
						<Text style={styles.ButtonText}>Iniciar Sesión</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ESTILOS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const styles = StyleSheet.create({
	Heading1: {
		color: "black",
		fontSize: 28,
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
		alignItems: "left",
	},

	ErrorText: {
		color: colors.errorColor,
		textAlign: "left",
		marginLeft: 8,
		marginTop: -15,
		fontSize: 12,
	},

	ContainerButton: {
		marginTop: 20,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
