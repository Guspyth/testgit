import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListBook } from "@/constants/list_books";
import BookCollectioins from "@/components/module-latihan/latihan-4/components/BookCollectioins";
import { styles, color_list } from "@/components/module-latihan/latihan-4/styles/styles";

export default function PremiumScreen() {
  // Filter hanya buku premium (is_free === false)
  const premiumBooks = ListBook.filter((book) => !book.is_free);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingVertical: 15 }}>
          <Text style={{ fontSize: 14, color: color_list.green }}>
            Akses semua buku premium dengan berlangganan
          </Text>
        </View>
        <BookCollectioins books={premiumBooks} />
      </ScrollView>
    </SafeAreaView>
  );
}
