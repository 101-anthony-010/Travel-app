import { StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CardDesiredDestination from "../components/DesiredDestination";
import DropdownPickerCity from "../components/DropDownPickerCity";

export default function SearchPage() {
  const [cities, setCities] = useState([]);

  const handleCityChange = async (selectedDepartments) => {
    const selectedCities = [];
    try {
      for (departmentId of selectedDepartments) {
      
        const response = await fetch(
          `https://intensive-morgana-otherclasseducation.koyeb.app/api/v1/departaments/${departmentId}`
        );
        const data = await response.json();
        selectedCities.push(...data.city);
      }
      setCities(selectedCities);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Próximo destino</Text>
      <View style={styles.ContainerDropDown}>
        <DropdownPickerCity
          onCityChange={handleCityChange}
        ></DropdownPickerCity>
      </View>

      <ScrollView>
        <View style={styles.ContainerList}>
          {cities.map((item) => (
            <CardDesiredDestination
              key={item.id}
              id={item.id}
              name={item.name}
              info={item.description}
              imgURL={item.imgURL}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F6F7",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginVertical: 20,
    textAlign: "center",
  },
  ContainerDropDown: {
    paddingHorizontal: 20,
    zIndex: 5,
  },
  ContainerList: {
    paddingHorizontal: 20,
    marginTop: 50,
  },
});
