import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropDownPickerCity({ onCityChange }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCardsData();
  }, []);

  useEffect(() => {
    onCityChange(value);
  }, [value]);

  const fetchCardsData = async () => {
    try {
      const response = await fetch(
        "https://intensive-morgana-otherclasseducation.koyeb.app/api/v1/departaments/"
      );
      const data = await response.json();
      const departmentItems = data.data.map((department) => ({
        label: department.name,
        value: department.id,
      }));
      setItems(departmentItems);
    } catch (error) {
      console.error("Error fetching cards data:", error);
    }
  };

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
