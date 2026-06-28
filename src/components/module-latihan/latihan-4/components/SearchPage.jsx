// 1. Mengimpor hook bawaan dari library React
import React, { useMemo, useState } from "react";

// 2. Mengimpor komponen UI dasar dari library React Native
import { ScrollView, StatusBar, Text } from "react-native";

// 3. Mengimpor komponen untuk menangani area layar pada perangkat modern (notch/tampilan layar penuh)
import { SafeAreaView } from "react-native-safe-area-context";

// 4. Mengimpor data mentah (list buku) dari file konstanta lokal
import { ListBook } from "@/constants/list_books";

// 5. Mengimpor komponen kustom yang dibuat sendiri
import BookCollectioins from "@/components/module-latihan/latihan-4/components/BookCollectioins";
import SearchBar from "./SearchBar";

// 6. Mengimpor objek gaya (styles) agar tampilan rapi dan konsisten
import { styles } from "@/components/module-latihan/latihan-4/styles/styles";

export default function SearchPage() {
  // State untuk menyimpan teks input pencarian dari pengguna
  const [search, setSearch] = useState("");

  // useMemo digunakan untuk memfilter daftar buku secara efisien.
  // Kode ini hanya akan dijalankan ulang jika nilai 'search' berubah.
  const filteredBooks = useMemo(() => {
    // Bersihkan input (hapus spasi, ubah ke huruf kecil) agar pencarian akurat
    const keyword = search.trim().toLowerCase();

    // Jika input kosong, kembalikan seluruh daftar buku asli
    if (!keyword) return ListBook;

    // Filter daftar buku berdasarkan judul atau penulis yang mengandung keyword
    return ListBook.filter(
      (book) =>
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword)
    );
  }, [search]); // Dependensi: jalankan ulang fungsi ini saat 'search' berubah

  return (
    <SafeAreaView style={styles.container}>
      {/* Mengatur warna teks di status bar perangkat */}
      <StatusBar barStyle={"dark-content"} />
      
      {/* Komponen SearchBar untuk menerima input user */}
      <SearchBar value={search} setValue={setSearch} />
      
      <ScrollView style={{ flex: 1 }}>
        {/* Jika ada buku yang cocok, tampilkan komponen koleksi buku */}
        {filteredBooks.length > 0 ? (
          <BookCollectioins books={filteredBooks} />
        ) : (
          // Jika tidak ada hasil, tampilkan pesan informatif kepada user
          <Text style={{ textAlign: "center", color: "gray", marginTop: 40 }}>
            Buku "{search}" tidak ditemukan.
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}