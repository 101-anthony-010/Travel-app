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

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError("");
  };

  const validateEmail = () => {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      setEmailError("Ingresa un correo electrónico válido");
    }
  };

  const handleLogin = async () => {
    // Validar que ningún campo esté vacío
    if (!email || !password) {
      console.error("Por favor, completa todos los campos");
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://intensive-morgana-otherclasseducation.koyeb.app/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        console.log("Inicio de sesión exitoso", responseData);
        navigation.navigate("Login");
      } else {
        console.error("Error al iniciar sesión:", responseData);
      }
    } catch (error) {
      console.error("Error al comunicarse con la API:", error.message);
    }
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

        {emailError ? <Text style={styles.ErrorText}>{emailError}</Text> : null}

        <TextInput
          style={styles.TextInput}
          placeholder="Contraseña"
          underlineColorAndroid={
            passwordFocused ? colors.primaryColor : colors.inputColor
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
          <TouchableOpacity onPress={handleLogin} style={styles.Button}>
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
