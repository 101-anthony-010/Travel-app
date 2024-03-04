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

const Stack = createStackNavigator();

export default function App() {
  const showBottomBar = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || "Home";
    return routeName !== "Login" && routeName !== "Register";
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Initial"
          component={InitialPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={({ route }) => ({
            headerShown: showBottomBar(route),
          })}
        />
        <Stack.Screen
          name="Destination"
          component={Destination}
          options={({ route }) => ({
            headerShown: showBottomBar(route),
          })}
        />
        <Stack.Screen
          name="Travels"
          component={Travels}
          options={({ route }) => ({
            headerShown: showBottomBar(route),
          })}
        />
        <Stack.Screen
          name="MemoriesPage"
          component={MemoriesPage}
          options={({ route }) => ({
            headerShown: showBottomBar(route),
          })}
        />
        <Stack.Screen
          name="Search"
          component={SeacrhPage}
          options={({ route }) => ({
            headerShown: showBottomBar(route),
          })}
        />
        <Stack.Screen
          name="Profile"
          component={UserView}
          options={({ route }) => ({
            headerShown: showBottomBar(route),
          })}
        />
      </Stack.Navigator>

      {!showBottomBar ? null : <BottomNavigationBar />}
    </NavigationContainer>
  );
}
