import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Latihan1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Selamat Datang di Praktikum Pemograman Perangkat Bergerak
      </Text>

      <Text style={styles.text}>
        Nama: Agus Nurfajri
      </Text>

      <Text style={styles.text}>
        NIM: 242310032
      </Text>

      <Text style={styles.text}>
        Prodi: Teknologi Informasi
      </Text>

      <Text style={styles.text}>
        Angkatan: 2024
      </Text>

      <Text style={styles.text}>
        Kelas: TI-24-PA
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    margin: 20,
    borderWidth: 2,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});