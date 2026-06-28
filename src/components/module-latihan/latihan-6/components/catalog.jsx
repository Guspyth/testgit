import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListBook } from "@/constants/list_books";
import BookCollectioins from "@/components/module-latihan/latihan-4/components/BookCollectioins";
import { styles } from "@/components/module-latihan/latihan-4/styles/styles";

export default function CatalogScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BookCollectioins books={ListBook} />
      </ScrollView>
    </SafeAreaView>
  );
}
