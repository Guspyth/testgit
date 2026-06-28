import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles, color_list } from "@/components/module-latihan/latihan-4/styles/styles";
import AntDesign from "@expo/vector-icons/AntDesign";

const Header = () => {
  return (
    <View style={styles.h_container}>
      <View>
        <Text style={styles.title}>Good Morning 👋</Text>
        <Text style={styles.sub_title}>Find your book today</Text>
      </View>
      <TouchableOpacity style={[styles.btn_icon, styles.shadow]}>
        <AntDesign name="bells" size={22} color={color_list.green} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
