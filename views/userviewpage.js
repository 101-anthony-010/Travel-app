import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Image, TextInput, StyleSheet, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const UserView = () => {
  const navigation = useNavigation();
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
      <Text style={styles.title}>Mi perfil </Text>

      <View style={styles.cardContainer}>
        <Image source={{ uri: userData.imgUrl }} style={styles.cardImage} />
        <Text style={styles.label}>
          Nombre Completo: {userData.name} {userData.firstLastName}{" "}
          {userData.secondLastName}
        </Text>

        <Text style={styles.label}>Correo Electronico: {userData.email}</Text>

        <Text style={styles.label}>ID Usuario: {userData.id}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
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
    backgroundColor: "#ffffff",
    paddingHorizontal: 25,
  },

  cardContainer: {
    margin: 10,
  },

  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333333",
  },

  logoutButton: {
    backgroundColor: "#ff0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserView;
