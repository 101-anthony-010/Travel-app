import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import InitialPage from "./views/initialpage";
import HomePage from "./views/homepage";
import LoginPage from "./views/loginpage";
import RegisterPage from "./views/registerpage";
import SearchBar from "./components/SearchBar";
import Destination from "./views/detaildestination";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Initial">
				<Stack.Screen
					name="Initial"
					component={InitialPage}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Login" component={LoginPage} />
				<Stack.Screen name="Register" component={RegisterPage} />
				<Stack.Screen name="Home" component={HomePage} />
				<Stack.Screen name="Destination" component={Destination} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
