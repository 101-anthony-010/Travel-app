import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import logo from "../images/logo.png";
import background from "../images/background.jpg";

const InitialPage = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate("Registro");
  };

  const handleLogIn = () => {
    navigation.navigate("Ingreso");
  };

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}></Image>

        <View style={styles.parte2}>
          <TouchableOpacity onPress={handleLogIn} style={styles.boton}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUp} style={styles.touchable}>
            <Text style={styles.text}>Aun no tienes una cuenta? </Text>
            <Text style={styles.signupText}>Regístrate aquí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    display: "flex",
    color: "#fff",
    backgroundColor: "rgba(20, 20, 20, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    gap: 220,
  },
  logo: {
    marginTop: 220,
  },
  parte2: {
    alignItems: "center",
    justifyContent: "center",
  },
  boton: {
    width: 130,
    height: 40,
    backgroundColor: "#35A401",
    borderRadius: 50,
    marginBottom: 20,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  touchable: {
    flexDirection: "row",
    marginTop: 20,
  },
  text: { color: "white" },
  signupText: {
    color: "white",
    textDecorationLine: "underline",
  },
});

export default InitialPage;
