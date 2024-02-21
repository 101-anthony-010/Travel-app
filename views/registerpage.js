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
	const [phonenumberFocused, setPhonenumberFocused] = useState(false);
	const [documentFocused, setDocumentFocused] = useState(false);

	const [phonenumberError, setPhonenumberError] = useState("");
	const [documentError, setDocumentError] = useState("");
	// >>>>>>>>>>>>>>>>>>>>>>>> FUNCIONES DE VALIDACIONES >>>>>>>>>>>>>>>>>>>>>>>>
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

	const isValidNumberInput = (text) => {
		// verifica si el texto contiene caracteres numéricos
		return !/\d/.test(text);
	};

	const isValidNumberInputWithLenght = (text, expectedLength) => {
		// Verifica si el texto contiene solo dígitos y tiene la longitud esperada
		return /^\d+$/.test(text) && text.length === expectedLength;
	};
	/*
	const handleInputChange = (text, setFocused, setError) => {
		setFocused(true);
		if (isValidInput(text) && text.length <= 50) {
			setError("");
		} else {
			setError("No debe contener caracteres numéricos");
		}
	};
  */
	const handleInputChange = (
		text,
		setFocused,
		setError,
		maxLength,
		errorMessage
	) => {
		setFocused(true);
		if (isValidNumberInput(text) && text.length <= maxLength) {
			setError("");
		} else {
			setError(errorMessage);
		}
	};

	const handleNumberInputChange = (
		text,
		setFocused,
		setError,
		expectedLength,
		errorMessage
	) => {
		setFocused(true);
		if (isValidNumberInputWithLenght(text, expectedLength)) {
			setError("");
		} else {
			setError(errorMessage);
		}
	};
	// >>>>>>>>>>>>>>>>>>>>>>>> DISEÑO VIEW >>>>>>>>>>>>>>>>>>>>>>>>
	return (
		<View style={styles.AllContainer}>
			<View style={styles.HeaderContainer}>
				<Text style={styles.Heading1}>Regístrate</Text>
			</View>
			<View style={styles.FormContainer}>
				<TextInput //nombre completo
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
							setFullnameError,
							50,
							"El nombre no debe contener caracteres numéricos"
						)
					}
					maxLength={50} // cantidad de caracteres
				/>

				{fullnameError ? (
					<Text style={styles.ErrorText}>{fullnameError}</Text>
				) : null}

				<TextInput //apellido completo
					style={styles.TextInput}
					placeholder="Apellidos completo"
					underlineColorAndroid={
						lastnameFocused
							? colors.primaryColor
							: colors.inputColor
					}
					value={lastnameFocused}
					onFocus={() => setLastnameFocused(true)}
					onBlur={() => {
						setLastnameFocused(false);
					}}
					onChangeText={(text) =>
						handleInputChange(
							text,
							setLastnameFocused,
							setLastnameError,
							50,
							"El apellido no debe contener caracteres numéricos"
						)
					}
					maxLength={50} // cantidad de caracteres
				/>

				{lastnameError ? (
					<Text style={styles.ErrorText}>{lastnameError}</Text>
				) : null}

				<TextInput //nro documento
					style={styles.TextInput}
					placeholder="Nro. Documento"
					underlineColorAndroid={
						documentFocused
							? colors.primaryColor
							: colors.inputColor
					}
					value={documentFocused}
					onFocus={() => setDocumentFocused(true)}
					onBlur={() => {
						setDocumentFocused(false);
					}}
					onChangeText={(text) =>
						handleNumberInputChange(
							text,
							setDocumentFocused,
							setDocumentError,
							8,
							"Ingresa un número de documento válido"
						)
					}
					keyboardType="numeric"
					maxLength={8} // cantidad de caracteres
				/>

				{documentError ? (
					<Text style={styles.ErrorText}>{documentError}</Text>
				) : null}

				<TextInput //nro celular
					style={styles.TextInput}
					placeholder="Nro. Celular"
					underlineColorAndroid={
						phonenumberFocused
							? colors.primaryColor
							: colors.inputColor
					}
					value={phonenumberFocused}
					onFocus={() => setPhonenumberFocused(true)}
					onBlur={() => {
						setPhonenumberFocused(false);
					}}
					onChangeText={(text) =>
						handleNumberInputChange(
							text,
							setPhonenumberFocused,
							setPhonenumberError,
							9,
							"Ingresa un número de celular válido"
						)
					}
					keyboardType="numeric"
					maxLength={9} // cantidad de caracteres
				/>

				{phonenumberError ? (
					<Text style={styles.ErrorText}>{phonenumberError}</Text>
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
						<Text style={styles.ButtonText}>Registrase</Text>
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
