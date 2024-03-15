import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropDownPickerCity() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState([
		"Lima",
		"Ica",
		"Arequipa",
		"Iquitos",
		"Cuzco",
		"Tacna",
	]);
	const [items, setItems] = useState([
		{ label: "Lima", value: "lima" },
		{ label: "Ica", value: "ica" },
		{ label: "Iquitos", value: "iquitos" },
		{ label: "Piura", value: "piura" },
		{ label: "Anchash", value: "anchash" },
	]);

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				marginBottom: 20,
			}}
		>
			<DropDownPicker
				placeholder="Selecciona una ciudad..."
				open={open}
				value={value}
				items={items}
				setOpen={setOpen}
				setValue={setValue}
				setItems={setItems}
				theme="LIGHT"
				multiple={true}
				mode="BADGE"
				badgeDotColors={[
					"#e76f51",
					"#00b4d8",
					"#e9c46a",
					"#e76f51",
					"#8ac926",
					"#00b4d8",
					"#e9c46a",
				]}
				badgeColors={["#E5E5E5"]}
				style={{ borderColor: "#CECECE" }}
				dropDownContainerStyle={{ borderColor: "#CECECE" }}
			/>
		</View>
	);
}
