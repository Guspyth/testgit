import React, { useMemo, useState } from "react";
import { ScrollView, StatusBar, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ListBook } from "@/constants/list_books";
import BookCollectioins from "@/components/module-latihan/latihan-4/components/BookCollectioins";
import SearchBar from "./SearchBar";
import { styles, color_list } from "@/components/module-latihan/latihan-4/styles/styles";

// ============================================================
// LATIHAN 3: Konstanta paging
// ============================================================
const ITEMS_PER_PAGE = 2;
const MAX_PAGE_BUTTONS = 5;

export default function SearchPage() {
  const [search, setSearch] = useState("");

  // ============================================================
  // LATIHAN 3: State halaman aktif
  // ============================================================
  const [currentPage, setCurrentPage] = useState(1);

  // ============================================================
  // LATIHAN 1: Filter buku & hitung total
  // ============================================================
  const filteredBooks = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    setCurrentPage(1); // reset ke halaman 1 saat search berubah
    if (!keyword) return ListBook;
    return ListBook.filter(
      (book) =>
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword)
    );
  }, [search]);

  const totalItems = filteredBooks.length;

  // ============================================================
  // LATIHAN 3: Hitung total halaman & slice data per halaman
  // ============================================================
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const pagedBooks = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBooks.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredBooks, currentPage]);

  // Hitung nomor halaman yang ditampilkan (maks 5)
  // Jika total buku > 100, tampilkan 5 halaman terakhir
  const pageNumbers = useMemo(() => {
    if (totalPages <= MAX_PAGE_BUTTONS) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (totalItems > 100) {
      const last = totalPages;
      return [last - 4, last - 3, last - 2, last - 1, last];
    }
    let start = Math.max(1, currentPage - 2);
    let end = start + MAX_PAGE_BUTTONS - 1;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - MAX_PAGE_BUTTONS + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [totalPages, currentPage, totalItems]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {/* SearchBar dari latihan-5 */}
      <SearchBar value={search} setValue={setSearch} />

      {/* LATIHAN 1: Header dengan Total x item */}
      <View style={styles.h_container}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
          Book Collection
        </Text>
        <Text style={{ color: color_list.green, fontWeight: "600" }}>
          Total {totalItems} item
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* LATIHAN 2: Tampilkan "No record found" jika tidak ada hasil */}
        {totalItems === 0 ? (
          <Text style={{ textAlign: "center", color: "gray", marginTop: 40 }}>
            No record found
          </Text>
        ) : (
          // Gunakan BookCollectioins dari latihan-4 dengan data yang sudah di-page
          <BookCollectioins books={pagedBooks} />
        )}
      </ScrollView>

      {/* LATIHAN 3: Pagination (hanya tampil jika ada data) */}
      {totalItems > 0 && (
        <View style={pageStyles.paginationContainer}>
          {/* Tombol Prev */}
          <TouchableOpacity
            onPress={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            style={[pageStyles.pageBtn, currentPage === 1 && pageStyles.pageBtnDisabled]}
          >
            <AntDesign name="left" size={14} color={currentPage === 1 ? "#ccc" : color_list.green} />
          </TouchableOpacity>

          {/* Nomor Halaman */}
          {pageNumbers.map((num) => (
            <TouchableOpacity
              key={num}
              onPress={() => setCurrentPage(num)}
              style={[pageStyles.pageBtn, currentPage === num && pageStyles.pageBtnActive]}
            >
              <Text style={{ color: currentPage === num ? "#fff" : color_list.green, fontWeight: "600" }}>
                {num}
              </Text>
            </TouchableOpacity>
          ))}

          {/* Tombol Next */}
          <TouchableOpacity
            onPress={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            style={[pageStyles.pageBtn, currentPage === totalPages && pageStyles.pageBtnDisabled]}
          >
            <AntDesign name="right" size={14} color={currentPage === totalPages ? "#ccc" : color_list.green} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const pageStyles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    gap: 6,
  },
  pageBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#49745e",
    justifyContent: "center",
    alignItems: "center",
  },
  pageBtnActive: {
    backgroundColor: "#49745e",
  },
  pageBtnDisabled: {
    borderColor: "#ccc",
  },
});
