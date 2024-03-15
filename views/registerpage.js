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
  // >>>>>>>>>>>>>>>>>>>>>>>> VARIABLES INPUTS >>>>>>>>>>>>>>>>>>>>>>>>
  const [fullname, setFullname] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [fullnameFocused, setFullnameFocused] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [lastname, setLastname] = useState("");
  const [lastnameFocused, setLastnameFocused] = useState(false);
  const [lastnameError, setLastnameError] = useState("");

  const [phonenumber, setPhonenumber] = useState("");
  const [phonenumberFocused, setPhonenumberFocused] = useState(false);
  const [phonenumberError, setPhonenumberError] = useState("");

  const [document, setDocument] = useState("");
  const [documentFocused, setDocumentFocused] = useState(false);
  const [documentError, setDocumentError] = useState("");
  // >>>>>>>>>>>>>>>>>>>>>>>> FUNCIONES DE VALIDACIONES >>>>>>>>>>>>>>>>>>>>>>>>

  const validateEmail = () => {
    // expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      setEmailError("Ingresa un correo electrónico válido");
    } else {
      setEmailError("");
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

  const setRegister = async () => {
    if (
      fullnameError ||
      lastnameError ||
      documentError ||
      phonenumberError ||
      emailError
    ) {
      console.log("Por favor, corrija los errores antes de continuar");
      return;
    }

    if (!fullname || !email || !password) {
      console.error("Por favor, completa todos los campos");
      return;
    }

    const userData = {
      name: fullname,
      firstLastName: lastname.split(" ")[0],
      secondLastName: lastname.split(" ")[1] ? lastname.split(" ")[1] : "",
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://intensive-morgana-otherclasseducation.koyeb.app/api/v1/users/signup",
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
        console.log("Usuario registrado exitosamente", responseData);
        navigation.navigate("Registro");
        alert("Registro Exitoso");
      } else {
        console.log(`Error al registrar usuario: ${responseData}`);
      }
    } catch (error) {
      console.error("Error al comunicarse con la API:", error.message);
    }
  };

  // >>>>>>>>>>>>>>>>>>>>>>>> DISEÑO VIEW >>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <View style={styles.AllContainer}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.Heading1}>Regístrate</Text>
      </View>
      <View style={styles.FormContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nombre completo"
          underlineColorAndroid={
            fullnameFocused ? colors.primaryColor : colors.inputColor
          }
          value={fullname}
          onFocus={() => setFullnameFocused(true)}
          onBlur={() => {
            setFullnameFocused(false);

            handleInputChange(
              fullname,
              setFullnameFocused,
              setFullnameError,
              50,
              "El nombre no debe contener caracteres numéricos"
            );
          }}
          onChangeText={(text) => setFullname(text)}
        />

        {fullnameError ? (
          <Text style={styles.ErrorText}>{fullnameError}</Text>
        ) : null}

        <TextInput
          style={styles.TextInput}
          placeholder="Apellidos completos"
          underlineColorAndroid={
            lastnameFocused ? colors.primaryColor : colors.inputColor
          }
          value={lastname}
          onFocus={() => setLastnameFocused(true)}
          onBlur={() => {
            setLastnameFocused(false);
            // Validar los apellidos
            handleInputChange(
              lastname,
              setLastnameFocused,
              setLastnameError,
              50,
              "Los apellidos no deben contener caracteres numéricos"
            );
          }}
          onChangeText={(text) => setLastname(text)}
        />

        {lastnameError ? (
          <Text style={styles.ErrorText}>{lastnameError}</Text>
        ) : null}

        <TextInput
          style={styles.TextInput}
          placeholder="Número de Documento"
          underlineColorAndroid={
            documentFocused ? colors.primaryColor : colors.inputColor
          }
          value={document}
          onFocus={() => setDocumentFocused(true)}
          onBlur={() => {
            setDocumentFocused(false);
            // Validar el número de documento
            handleNumberInputChange(
              document,
              setDocumentFocused,
              setDocumentError,
              8,
              "Ingresa un número de documento válido"
            );
          }}
          keyboardType="numeric"
          maxLength={8}
          onChangeText={(text) => setDocument(text)}
        />

        {documentError ? (
          <Text style={styles.ErrorText}>{documentError}</Text>
        ) : null}

        <TextInput
          style={styles.TextInput}
          placeholder="Número de Celular"
          underlineColorAndroid={
            phonenumberFocused ? colors.primaryColor : colors.inputColor
          }
          value={phonenumber}
          onFocus={() => setPhonenumberFocused(true)}
          onBlur={() => {
            setPhonenumberFocused(false);
            // Validar el número de celular
            handleNumberInputChange(
              phonenumber,
              setPhonenumberFocused,
              setPhonenumberError,
              9,
              "Ingresa un número de celular válido"
            );
          }}
          keyboardType="numeric"
          maxLength={9}
          onChangeText={(text) => setPhonenumber(text)}
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
          value={email}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => {
            setEmailFocused(false);
            // Validar el correo electrónico
            validateEmail();
          }}
          onChangeText={(text) => setEmail(text)}
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
          <TouchableOpacity onPress={setRegister} style={styles.Button}>
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
