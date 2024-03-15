import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InitialPage from "./views/initialpage";
import HomePage from "./views/homepage";
import LoginPage from "./views/loginpage";
import RegisterPage from "./views/registerpage";
import Destination from "./views/detaildestination";
import Travels from "./views/travelspage";
import BottomNavigationBar from "./components/BottomNavigationBar";
import MemoriesPage from "./views/memoriespage";
import SeacrhPage from "./views/searchpage";
import UserView from "./views/userviewpage";
import City from "./views/detailcity";
import { useState } from "react";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Cannot update"]);

const Stack = createStackNavigator();

export default function App() {
  const [show, setShown] = useState(true);

  const isBottomBarVisible = (routeName) => {
    if (
      routeName === "Initial" ||
      routeName === "Ingreso" ||
      routeName === "Registro"
    ) {
      setShown(false);
    } else {
      setShown(true);
    }
    if (routeName === "Initial" || routeName === "Inicio") {
      return false;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Initial"
          component={InitialPage}
          options={({ route }) => ({
            headerShown: isBottomBarVisible(route.name),
          })}
        />
        <Stack.Screen
          name="Ingreso"
          component={LoginPage}
          options={({ route }) => ({
            headerShown: isBottomBarVisible(route.name),
          })}
        />
        <Stack.Screen
          name="Registro"
          component={RegisterPage}
          options={({ route }) => ({
            headerShown: isBottomBarVisible(route.name),
          })}
        />
        <Stack.Screen
          name="Inicio"
          component={HomePage}
          options={({ route }) => ({
            headerShown: isBottomBarVisible(route.name),
          })}
        />
        <Stack.Screen
          name="Departamento"
          component={Destination}
          options={({ route }) => ({
            headerShown: isBottomBarVisible(route.name),
          })}
        />
        <Stack.Screen
          name="Ciudad"
          component={City}
          options={({ route }) => ({
            headerShown: isBottomBarVisible(route.name),
          })}
        />
        <Stack.Screen
          name="Viajes"
          component={Travels}
          options={({ route }) => ({
            headerShown: isBottomBarVisible(route.name),
          })}
        />
        <Stack.Screen
          name="Recuerdos"
          component={MemoriesPage}
          options={({ route }) => ({
            headerShown: isBottomBarVisible(route.name),
          })}
        />
        <Stack.Screen
          name="Buscar"
          component={SeacrhPage}
          options={({ route }) => ({
            headerShown: isBottomBarVisible(route.name),
          })}
        />
        <Stack.Screen
          name="Perfil"
          component={UserView}
          options={({ route }) => ({
            headerShown: isBottomBarVisible(route.name),
          })}
        />
      </Stack.Navigator>

      {show ? <BottomNavigationBar /> : null}
    </NavigationContainer>
  );
}
