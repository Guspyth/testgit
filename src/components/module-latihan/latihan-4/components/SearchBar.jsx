import React from "react";
import { View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "@/components/module-latihan/latihan-4/styles/styles";

export default function SearchBar({ value, setValue }) {
  return (
    <View style={styles.h_container}>
      <View style={{ 
        flexDirection: "row", 
        alignItems: "center", 
        flex: 1, 
        backgroundColor: "#f2f2f2", 
        borderRadius: 10, 
        paddingHorizontal: 12, 
        paddingVertical: 8 
      }}>
        <Ionicons name="search-outline" size={16} color="gray" />
        <TextInput
          autoFocus
          placeholder="Search here"
          value={value}
          onChangeText={(text) => setValue(text)}
          style={{ flex: 1, marginLeft: 8, padding: 0, color: "black" }}
        />
      </View>
    </View>
  );
}