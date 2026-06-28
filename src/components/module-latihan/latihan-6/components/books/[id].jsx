import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListBook } from "@/constants/list_books";

export default function Detail() {
  const { id } = useLocalSearchParams();

  // Mencari buku dalam array ListBook yang memiliki id yang sesuai
  // Number(id) karena parameter dari URL selalu berupa string
  const book = ListBook.find((book) => book.id === Number(id));

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text>ID: {id}</Text>
      <Text>Title: {book?.title}</Text>
    </SafeAreaView>
  );
}
