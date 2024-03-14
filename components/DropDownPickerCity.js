import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropDownPickerCity() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState([
		"italy",
		"spain",
		"barcelona",
		"finland",
		"madrid",
		"rome",
	]);
	const [items, setItems] = useState([
		{ label: "Spain", value: "spain" },
		{ label: "Madrid", value: "madrid" },
		{ label: "Barcelona", value: "barcelona" },
		{ label: "Italy", value: "italy" },
		{ label: "Rome", value: "rome" },
		{ label: "Finland", value: "finland" },
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
