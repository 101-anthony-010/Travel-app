import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import BottomNavigationBar from "../components/BottomNavigationBar";
import { ImageBackground } from "react-native-web";
import { BackgroundHome } from "../images/paracas.png";
import SearchBar from "../components/SearchBar";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "../components/Card";

const colors = {
	bgMain: "#F5F6F7",
	primaryColor: "#35A401",
	errorColor: "#A62424",
	inputColor: "#D4D4D4",
};
export default function HomePage() {
	const handleSearch = (term) => {
		// Realiza acciones de búsqueda aquí con el término proporcionado
		console.log("Realizando búsqueda:", term);
	};

	const data = [
		{
			id: 1,
			imageSource: require("../images/paracas.png"),
			destination: "Canta",
		},
		{
			id: 2,
			imageSource: require("../images/puno.png"),
			destination: "Puno",
		},
	];

	return (
		<View style={styles.AllContainer}>
			<View style={styles.ContainerImage}>
				<Image
					source={require("../images/paracas.png")}
					style={styles.Image}
				/>
				<View style={styles.Overlay} />
			</View>
			<View style={styles.ContainerSearchBar}>
				<SearchBar
					placeholder="Buscar destino..."
					onSearch={handleSearch}
				/>
			</View>
			<View style={styles.ContainerDescription}>
				<Text style={styles.HeaderH1}>Paracas</Text>
				<Text style={styles.TextDescription}>
					A cuatro horas de Lima, la capital del Perú, el sol se posa
					sobre lo más alto del cielo iqueño para recibir a los
					visitantes.
				</Text>
			</View>
			<View style={styles.ContainerButton}>
				<TouchableOpacity style={styles.Button}>
					<Text style={styles.ButtonText}>Ver más</Text>
					<Icon
						name="chevron-forward-outline"
						size={20}
						color="#fff"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.ContainerBottomBar}>
				<BottomNavigationBar style={styles.BottomBar} />
			</View>
			<View
				style={styles.ContainerCards} // SECCION GALERÍA DE LUGARES DE DESTINO
			>
				{data.map((item) => (
					<Card
						key={item.id}
						imageSource={item.imageSource}
						destination={item.destination}
					/>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	AllContainer: {
		backgroundColor: colors.bgMain, //"#F5F6F7",
		height: "100%",
	},
	ContainerBottomBar: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
	},
	ContainerImage: {
		//backgroundColor: "blue",
		height: "50%",
	},
	Image: {
		flex: 1,
		resizeMode: "repeat",
		justifyContent: "center",
	},
	Overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
	},
	ContainerSearchBar: {
		position: "absolute",
		top: 0,
		right: 0,
		left: 0,
		//backgroundColor: "indigo",
		paddingHorizontal: 30,
		paddingVertical: 30,
	},
	HeaderH1: {
		color: "white",
		fontSize: 30,
		fontWeight: "700",
	},
	TextDescription: {
		color: "white",
	},
	ContainerDescription: {
		position: "absolute",
		top: 120,
		paddingLeft: 32,
		paddingRight: 130,
	},
	Button: {
		width: 120,
		height: 40,
		backgroundColor: colors.primaryColor,
		borderRadius: 8,
		marginHorizontal: "auto",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},

	ButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "500",
	},
	ContainerButton: {
		//backgroundColor: "indigo",
		paddingHorizontal: 30,
		position: "absolute",
		top: 270,
		right: 0,
		left: 0,
	},
	ContainerCards: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "indigo",
	},
});
