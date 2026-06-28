import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ListBook } from "@/constants/list_books";
import { color_list } from "@/components/module-latihan/latihan-4/styles/styles";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Mencari buku berdasarkan id dari parameter URL
  const book = ListBook.find((book) => book.id === Number(id));

  if (!book) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Buku tidak ditemukan.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER dengan tombol back */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color="white" />
          </TouchableOpacity>
        </View>

        {/* COVER BUKU */}
        <View style={styles.coverContainer}>
          <Image source={book.img} style={styles.coverImg} resizeMode="cover" />
        </View>

        {/* INFO BUKU */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>

          {/* RATING */}
          <View style={styles.ratingRow}>
            <AntDesign name="star" size={16} color={color_list.orange} />
            <Text style={styles.rating}>{book.rating} / 5.0</Text>
          </View>

          {/* SINOPSIS */}
          <Text style={styles.sectionTitle}>SINOPSIS</Text>
          <Text style={styles.sinopsis}>{book.sinopsis}</Text>

          {/* TOMBOL */}
          {book.is_free ? (
            <TouchableOpacity style={styles.btnRead}>
              <Ionicons name="book-outline" size={18} color="white" />
              <Text style={styles.btnText}>Read Book</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btnSubscribe}>
              <Ionicons name="ribbon-outline" size={18} color="white" />
              <Text style={styles.btnText}>Subscribe</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f6f1",
  },
  header: {
    backgroundColor: "#49745e",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  coverContainer: {
    backgroundColor: "#49745e",
    alignItems: "center",
    paddingBottom: 30,
    paddingTop: 10,
  },
  coverImg: {
    width: 150,
    height: 220,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 6,
  },
  author: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 10,
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginBottom: 8,
    letterSpacing: 1,
  },
  sinopsis: {
    fontSize: 13,
    color: "#555",
    lineHeight: 20,
    marginBottom: 30,
  },
  btnRead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#49745e",
    paddingVertical: 14,
    borderRadius: 30,
    gap: 8,
  },
  btnSubscribe: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e8ab30",
    paddingVertical: 14,
    borderRadius: 30,
    gap: 8,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
